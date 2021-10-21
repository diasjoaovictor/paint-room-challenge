import { Measures } from './measures.interface';

export interface Wall extends Measures{
  door: number,
  window: number
}