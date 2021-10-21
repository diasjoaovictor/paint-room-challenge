import { Meassures } from './measures';

export type WallResponse = {
  width: number,
  heigth: number,
  door: number,
  window: number
}

export interface IWall{
  width: number,
  heigth: number,
  door: number,
  window: number
}

export class Wall extends Meassures{
  _door?: number;
  _window?: number;

  constructor({
    width,
    heigth,
    door,
    window
  }: IWall){
    super({width,heigth})
    this._width = width;
    this._heigth = heigth;
    this._door = door;
    this._window = window;
  }

  get door(){
    return this._door;
  }

  set door(door){
    this._door = door;
  }
}