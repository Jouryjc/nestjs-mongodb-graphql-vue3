import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get('/')
  async getTodoList() {
    return 'hello';
  }
}
