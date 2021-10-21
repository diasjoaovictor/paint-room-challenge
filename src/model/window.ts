import {IMeassures } from "./measures";

export class WindowWall {
  _width: number;
  _heigth: number;
  constructor({
    width = 2,
    heigth = 1.20
  }: IMeassures) {
    this._width = width;
    this._heigth = heigth;
  }
}