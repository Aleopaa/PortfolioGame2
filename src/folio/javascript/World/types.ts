import * as THREE from "three";
import { Object3DNode } from "@react-three/fiber";
import { FloorMaterial } from "../Materials/FloorMaterial";

export type FloorMaterialProps = {
  topLeftColor?: string;
  topRightColor?: string;
  bottomLeftColor?: string;
  bottomRightColor?: string;
};

// Extend the Object3DNode type to include your custom material
declare module "@react-three/fiber" {
  interface ThreeElements {
    floorMaterial: Object3DNode<FloorMaterial, typeof FloorMaterial>;
  }
}
