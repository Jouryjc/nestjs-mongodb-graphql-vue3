import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SERVER_PORT } from './config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log('111')

  const options = new DocumentBuilder()
    .setTitle('TodoList API')
    .setDescription('This is todo list api document')
    .setVersion('2.0')
    .addTag('todolist-tag')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  await app.listen(SERVER_PORT);
}
bootstrap();
