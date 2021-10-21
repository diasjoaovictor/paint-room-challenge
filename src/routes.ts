import { Router, Request, Response } from "express";
import createError from 'http-errors'

const router = Router();

router.get('/paint', (req: Request, res: Response) =>{
  let { wall } = req.body;
  let squareMeters = 0;
  let contSquareMeters = 0;
  let squareMetersDoor = 0;
  let squareMetersWindow = 0;

  if(wall.length != 4){
    throw createError(400, 'Necessário informar as medidas das 4 paredes')
  }

  wall.forEach(item => {
    if(item.heigt < 1 || item.width < 1){
      throw createError(400, 'Nenhuma parede pode ter menos que 1 metro')
    }
    
    if(item.heigt > 15 || item.width > 15){
      throw createError(400, 'Nenhuma parede pode ter mais que 15 metros')
    }

    if(item.door){
      if (item.heigt < '1.9'){
        throw createError(400, 'Altura da parede deve ser no minimo 30 centimetros maior que a altura da porta')
      }

      squareMetersDoor = 0.80 * 1.90;
    }

    if(item.window){

      squareMetersWindow = 2 * 1.20;
    }

    squareMeters = item.heigt * item.width - squareMetersDoor - squareMetersWindow;
    contSquareMeters += squareMeters;
  });
  
  let liters = contSquareMeters / 5;
  
  return res.status(200).send({contSquareMeters: contSquareMeters, liters: liters});
})

export { router }