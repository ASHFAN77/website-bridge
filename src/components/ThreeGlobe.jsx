import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeGlobe() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth * 0.618;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    
    // Clear previous elements if any (strict mode defense)
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // Create a wireframe/point globe
    const geometry = new THREE.SphereGeometry(2.5, 32, 32);
    const material = new THREE.PointsMaterial({
      color: 0x888888,
      size: 0.05,
      transparent: true,
      opacity: 0.8
    });

    const globe = new THREE.Points(geometry, material);
    scene.add(globe);

    // Add a wireframe overlay
    const wireframeGeometry = new THREE.SphereGeometry(2.51, 24, 24);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x444444,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframe);

    camera.position.z = 6;

    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      globe.rotation.y += 0.003;
      globe.rotation.x += 0.001;
      wireframe.rotation.y += 0.003;
      wireframe.rotation.x += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div className="w-full h-full opacity-60 relative">
      <div ref={containerRef} className="w-full h-full absolute inset-0"></div>
    </div>
  );
}
