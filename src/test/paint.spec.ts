import { PaintController } from '../controller/paint-controller'

const payload = [
  {
    heigth: 2,
    width: 5
  },
  {
    heigth: 2,
    width: 5
  },
  {
    heigth: 2,
    width: 5,
    door: 1
  },
  {
    heigth: 2,
    width: 5,
    door: 1
  }
]

describe("Paint can calculation", () => {
  test("must calculate quantity of paint cans", () => {

    const request = PaintController.paint(payload);
    expect(request.status).toEqual(200);

  });
});