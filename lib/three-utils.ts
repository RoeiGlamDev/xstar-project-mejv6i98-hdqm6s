import * as THREE from 'three'; // Importing Three.js library

// Function to create a scene
export const createScene = (): THREE.Scene => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Set background color to black
    return scene;
};

// Function to create a camera
export const createCamera = (width: number, height: number): THREE.PerspectiveCamera => {
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 5, 10); // Set camera position
    return camera;
};

// Function to create a renderer
export const createRenderer = (width: number, height: number): THREE.WebGLRenderer => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000); // Set clear color to black
    return renderer;
};

// Function to add lights to the scene
export const addLights = (scene: THREE.Scene): void => {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Strong white light
    directionalLight.position.set(5, 10, 7.5); // Set light position
    scene.add(directionalLight);
};

// Function to create a basic cube
export const createCube = (): THREE.Mesh => {
    const geometry = new THREE.BoxGeometry(1, 1, 1); // Cube geometry
    const material = new THREE.MeshStandardMaterial({ color: 0xff69b4 }); // Pink color
    const cube = new THREE.Mesh(geometry, material);
    return cube;
};

// Function to animate the scene
export const animate = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera): void => {
    requestAnimationFrame(() => animate(renderer, scene, camera)); // Recursive animation
    renderer.render(scene, camera); // Render the scene
};