export type MeasuresResponse = {
  heigth: number;
  width: number;
}

export interface IMeassures {
  width: number,
  heigth: number
}

export class Meassures {
  _heigth: number;
  _width: number;

  constructor({
    width,
    heigth
  }: IMeassures){
    this._heigth = heigth,
    this._width = width
  }

  set heigth(heigth){
    this._heigth = heigth
  }

  set width(heigth){
    this._width = heigth
  } 

  get heigth(){
    return this._heigth
  }

  get width(){
    return this._width
  }
}