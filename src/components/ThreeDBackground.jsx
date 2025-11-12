import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDBackground = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const techGroupRef = useRef(null);

  useEffect(() => {
    // Prevent duplicate initialization
    if (rendererRef.current && rendererRef.current.domElement && rendererRef.current.domElement.parentElement) {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      console.error('Canvas container not found!');
      return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      105,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 40;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      precision: 'highp',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ===== CREATE BACKGROUND PARTICLES =====
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 200; // x
      positions[i + 1] = (Math.random() - 0.5) * 200; // y
      positions[i + 2] = (Math.random() - 0.5) * 100; // z
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00c9ff,
      size: 0.3,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.7,
    });

    const points = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(points);

    // ===== CREATE TECH MODEL =====
    const techGroup = new THREE.Group();
    scene.add(techGroup);
    techGroupRef.current = techGroup;

    // Create wireframe sphere (core)
    const sphereGeometry = new THREE.IcosahedronGeometry(8, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00c9ff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const coreMesh = new THREE.Mesh(sphereGeometry, wireframeMaterial);
    techGroup.add(coreMesh);

    // Create 2 elegant rotating rings
    const tubeMeshes = [];
    for (let i = 0; i < 2; i++) {
      const ringGeometry = new THREE.TorusGeometry(10 + i * 3, 0.15, 16, 100);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: i === 0 ? 0x00c9ff : 0x8a2be2,
        transparent: true,
        opacity: 0.5,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 4 + (i * Math.PI) / 8;
      ring.rotation.y = (i * Math.PI) / 6;
      tubeMeshes.push(ring);
      techGroup.add(ring);
    }

    // Create floating particles around core (helix pulses)
    const helixPulses = [];
    for (let i = 0; i < 12; i++) {
      const particleGeom = new THREE.SphereGeometry(0.4, 8, 8);
      const particleMat = new THREE.MeshBasicMaterial({
        color: 0x00c9ff,
        transparent: true,
        opacity: 0.6,
      });

      const particle = new THREE.Mesh(particleGeom, particleMat);
      const radius = 16;
      const angle = (i / 12) * Math.PI * 2;

      particle.position.x = Math.cos(angle) * radius;
      particle.position.y = (Math.random() - 0.5) * 10;
      particle.position.z = Math.sin(angle) * radius;

      particle.userData = {
        angle: angle,
        radius: radius,
        speed: 0.2 + Math.random() * 0.2,
        yOffset: particle.position.y,
      };

      helixPulses.push(particle);
      techGroup.add(particle);
    }

    // ===== LIGHTING =====
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00c9ff, 1, 200);
    pointLight.position.set(0, 20, 20);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x8a2be2, 0.8, 200);
    pointLight2.position.set(-20, -10, 15);
    scene.add(pointLight2);

    // ===== ANIMATION LOOP =====
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;

      // Rotate tech model group
      if (techGroup) {
        techGroup.rotation.y += 0.001;
        techGroup.rotation.x = Math.sin(time * 0.2) * 0.1;
      }

      // Animate core mesh
      if (coreMesh) {
        coreMesh.rotation.x += 0.002;
        coreMesh.rotation.y += 0.003;
      }

      // Animate rings with pulsing opacity
      tubeMeshes.forEach((ring, index) => {
        ring.rotation.z += 0.003 * (index % 2 === 0 ? 1 : -1);
        ring.material.opacity = 0.4 + Math.sin(time * 1.5 + index) * 0.15;
      });

      // Animate floating particles in circular orbit
      helixPulses.forEach((particle) => {
        const userData = particle.userData;
        userData.angle += userData.speed * 0.01;

        particle.position.x = Math.cos(userData.angle) * userData.radius;
        particle.position.z = Math.sin(userData.angle) * userData.radius;
        particle.position.y = userData.yOffset + Math.sin(time * 2 + userData.angle) * 2;

        particle.material.opacity = 0.4 + Math.sin(time * 2 + userData.angle) * 0.3;
      });

      // Animate background particles
      scene.children.forEach((child) => {
        if (child instanceof THREE.Points) {
          child.rotation.x += 0.0003;
          child.rotation.y += 0.0005;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // ===== WINDOW RESIZE =====
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    // ===== CLEANUP =====
    return () => {
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      sphereGeometry.dispose();
      wireframeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      tubeMeshes.forEach((ring) => {
        ring.geometry.dispose();
        ring.material.dispose();
      });
      helixPulses.forEach((particle) => {
        particle.geometry.dispose();
        particle.material.dispose();
      });
      container?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ThreeDBackground;
