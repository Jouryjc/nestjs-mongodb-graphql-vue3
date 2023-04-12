import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

@ApiTags('micro')
@Controller('micro')
export class MicroController {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}

  @Get('sum')
  sum(): Observable<number> {
    console.log('call sum fn')
    const pattern = { cmd: 'sum' };
    const payload = [1, 2, 3];
    return this.client.send<number>(pattern, payload);
  }
}
