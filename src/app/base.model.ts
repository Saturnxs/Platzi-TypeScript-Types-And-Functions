export interface baseModel {
  readonly id: string; // readonly means that the value can only be set once
  readonly createdAt: Date; // readonly means that the value can only be set once
  updatedAt: Date;
}
