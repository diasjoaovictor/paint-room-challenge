import createError from 'http-errors';
import { Door } from '../model/door';
import { WindowWall } from '../model/window';
import { Wall, IWall } from '../model/wall';

export class PaintRequestService {

  static getPaint(wall: Array<any>) {
    let meassuresDoor = new Door({width: 0.80,
      heigth: 1.90,});
    let meassuresWindow = new WindowWall({width: 2,
      heigth: 1.20,});
    let squareMeters = 0;
    let contSquareMeters = 0;
    let squareMetersDoor = 0;
    let squareMetersWindow = 0;

    if (wall.length != 4) {
      throw createError(400, 'Necessário informar as medidas das 4 paredes')
    }

    wall.map(item => {
      let {
        width,
        heigth,
        door,
        window
      }: IWall  = item;
      let wall = new Wall({
        width,
        heigth,
        door,
        window
      });

      if (wall instanceof Wall) {
        if (wall.heigth < 1 || wall.width < 1) {
          throw createError(400, 'Nenhuma parede pode ter menos que 1 metro')
        }

        if (wall.heigth > 15 || wall.width > 15) {
          throw createError(400, 'Nenhuma parede pode ter mais que 15 metros')
        }

        if (wall.door) {
          if (wall.heigth < meassuresDoor._heigth) {
            throw createError(400, 'Altura da parede deve ser no minimo 30 centimetros maior que a altura da porta')
          }

          squareMetersDoor = meassuresDoor._heigth * meassuresDoor._width;
        }

        if (wall._window) {
          squareMetersWindow = meassuresWindow._width * meassuresWindow._heigth;
        }

        squareMeters = wall.heigth * wall.width - squareMetersDoor - squareMetersWindow;
        contSquareMeters += squareMeters;
      }
    });

    let liters = contSquareMeters / 5;

    let lata18 = 0;
    let lata3 = 0;
    let lata2 = 0;
    let lata0 = 0;
    while(liters > 0){
      if(liters >= 18){
        liters = liters - 18;
        lata18++;
      }
      else if(liters >= 3.6){
        liters = liters - 3.6;
        lata3++;
      }
      else if(liters >= 2.5){
        liters = liters - 2.5;
        lata2++;
      }
      else if(liters >= 0.5){
        liters = liters - 0.5;
        lata0++;
      }
      else if(liters >= 0){
        liters = 0;
        lata0++;
      }
    }

    let message18 = lata18 > 0 ? ` ${lata18} latas de 18L ` : '';
    let message3 = lata3 > 0 ? ` ${lata3} latas de 3.6L ` : '';
    let message2 = lata2 > 0 ? ` ${lata2} latas de 2.5L ` : '';
    let message0 = lata0 > 0 ? ` ${lata0} latas de 0.5L ` : '';

    let message = message18 + message3 + message2 + message0;

    return message;
  }

}