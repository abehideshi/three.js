import { 
  Mesh,
  OrthographicCamera,
  SceneUtils,
  WebGLRenderTarget,
  WebGLRenderTargetOptions
} from '../../../../build/three.module';

import { NodeBuilder } from '../core/NodeBuilder';
import { NodeFrame } from '../core/NodeFrame';
import { TextureNode } from './TextureNode.js';

export interface RTTNodeOptions extends WebGLRenderTargetOptions {
  clear?: boolean;
}

export class RTTNode extends TextureNode {
  constructor(width: number, height: number, input: TextureNode, options?: RTTNodeOptions);

  input: TextureNode;
  clear: boolean;
  renderTarget: WebGLRenderTarget;
  material: object; // NodeMaterial
  camera: OrthographicCamera;
  scene: Scene;
  quad: Mesh;
  render: boolean;

  build(builder: NodeBuilder, output: string, uuid?: string): string;
  updateFramesaveTo(frame: NodeFrame): void;
  updateFrame(frame: NodeFrame): void;
  copy(source: RTTNode): this;
}
