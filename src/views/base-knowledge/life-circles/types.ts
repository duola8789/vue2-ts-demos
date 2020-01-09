export interface Step {
  create: string[];
  update: string[];
  destroy: string[];
}

export interface LifeCircleType {
  name: string;
  value: string;
}

export interface LifeCircleTypes {
  [index: number]: LifeCircleType;
}
