import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { useContainer } from 'class-validator'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Todo-App')
    .setDescription('todo-app for learning typeorm, swagger and angular basics')
    .setVersion('1.0')
    .addTag('todo')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)

  useContainer(app.select(AppModule), { fallbackOnErrors: true })
  app.enableCors()

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  await app.listen(8080)
}
bootstrap()
