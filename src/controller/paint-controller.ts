
import { PaintRequestService } from '../service/paint-request'

export class PaintController {
  static paint(wall: any) {
    const request = PaintRequestService.getPaint(wall);

    return {
      status: 200,
      request
    }
  }
  
}