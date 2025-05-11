import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface BackgroundAnimationProps {
  className?: string;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const objectsRef = useRef<THREE.Mesh[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // transparent background
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create animated objects
    const objects: THREE.Mesh[] = [];
    const shapes = [
      new THREE.IcosahedronGeometry(1, 0), // triangular like phone
      new THREE.BoxGeometry(0.8, 1.6, 0.1), // phone shape
      new THREE.TorusGeometry(0.7, 0.2, 16, 100), // ring
      new THREE.ConeGeometry(0.5, 1, 32), // cone
      new THREE.OctahedronGeometry(0.7, 0), // octahedron
    ];
    
    // Create gradient colors inspired by the app's background
    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0xff6347, 
        transparent: true, 
        opacity: 0.3,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xff4500, 
        transparent: true, 
        opacity: 0.3,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xff1493, 
        transparent: true, 
        opacity: 0.3,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x9932cc, 
        transparent: true, 
        opacity: 0.3,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xff69b4, 
        transparent: true, 
        opacity: 0.3,
        wireframe: true 
      }),
    ];

    // Create 15 random objects
    for (let i = 0; i < 15; i++) {
      const shapeIndex = Math.floor(Math.random() * shapes.length);
      const materialIndex = Math.floor(Math.random() * materials.length);
      
      const mesh = new THREE.Mesh(shapes[shapeIndex], materials[materialIndex]);
      
      // Random positions spread throughout the scene
      mesh.position.x = (Math.random() - 0.5) * 15;
      mesh.position.y = (Math.random() - 0.5) * 15;
      mesh.position.z = (Math.random() - 0.5) * 10 - 5; // push back
      
      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      
      // Store random rotation speeds for animation
      mesh.userData = {
        rotateX: (Math.random() - 0.5) * 0.01,
        rotateY: (Math.random() - 0.5) * 0.01,
        rotateZ: (Math.random() - 0.5) * 0.01,
        moveX: (Math.random() - 0.5) * 0.01,
        moveY: (Math.random() - 0.5) * 0.01,
      };
      
      scene.add(mesh);
      objects.push(mesh);
    }
    objectsRef.current = objects;

    // Animation function
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      // Update each object's position and rotation
      objects.forEach(obj => {
        obj.rotation.x += obj.userData.rotateX;
        obj.rotation.y += obj.userData.rotateY;
        obj.rotation.z += obj.userData.rotateZ;
        
        // Slight position oscillation
        obj.position.x += obj.userData.moveX;
        obj.position.y += obj.userData.moveY;
        
        // Boundary checks to keep objects in view
        if (Math.abs(obj.position.x) > 10) obj.userData.moveX *= -1;
        if (Math.abs(obj.position.y) > 10) obj.userData.moveY *= -1;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Resize handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      objects.forEach(obj => {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach((material: THREE.Material) => material.dispose());
        } else {
          obj.material.dispose();
        }
      });
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className={`fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 ${className || ''}`}
    ></div>
  );
};

export default BackgroundAnimation;