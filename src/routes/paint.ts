import { Router, Request, Response } from "express";
import createError from 'http-errors';
import { PaintController } from '../controller/paint-controller'

const router = Router();

/**
 * @typedef Wall
 * @property {Array.<OptionsWall>} wall
 */

/**
 * @typedef array
 * @property {Array.<OptionsWall>} wall
 * /

/**
 * @typedef OptionsWall
 * @property {number} heigth.required - Altura da parede - eg: 10
 * @property {number} width.required - Largura da parede - eg: 10
 * @property {number} door - Quantidade de portas - eg: 1
 * @property {number} window - Guantidade de janelas - eg: 1
 */

/**
 * This function comment is parsed by doctrine
 * @route POST /paint
 * @param {Wall.model} wall.body.required - the new point
 * @returns {Error}  default - Unexpected error
 */
router.post('/paint', (req: Request, res: Response) =>{
  let { wall } = req.body;

  if(!wall){
    throw createError(400, 'invalid payload!')
  }
  const paint = PaintController.paint(wall);

  return res.status(paint.status).send({liters: paint.request});
})

export { router }