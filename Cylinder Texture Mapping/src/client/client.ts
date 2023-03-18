import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
const scene = new THREE.Scene()

const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 150;
const cameraHeight = cameraWidth / aspectRatio;

const camera = new THREE.OrthographicCamera(
  cameraWidth / -2, // left
  cameraWidth / 2, // right
  cameraHeight / 2, // top
  cameraHeight / -2, // bottom
  0, // near plane
  1000 // far plane
);
camera.position.set(200, 200, 200);
camera.lookAt(0, 10, 0);

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

renderer.setClearColor(0x000000);

const materials = [
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./img/sideMaterial.jpg')}),
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./img/TopMaterial.jpg')}),
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('./img/BottomMaterial.jpg')})
]
const geometry = new THREE.CylinderGeometry(5, 5, 10, 100)
const can= new THREE.Mesh(geometry, materials)

scene.add(can);
  
renderer.render(scene, camera);

renderer.setClearColor( 0xffffff, 1 );
function render() {
    renderer.render(scene, camera)
}
function animate() {
    requestAnimationFrame(animate)
    controls.update();
    render()

}
animate()