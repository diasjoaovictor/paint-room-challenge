import {IMeassures } from "./measures";

export class Door {
  _width: number;
  _heigth: number;
  constructor({
    width = 0.80,
    heigth = 1.90
  }: IMeassures) {
    this._width = width;
    this._heigth = heigth;
  }
}