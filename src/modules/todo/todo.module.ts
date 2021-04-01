import { Module } from '@nestjs/common'
import { TodoService } from './service/todo.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Todo } from '../database/entities/todo.entity'
import { TodoController } from './todo.controller'
import { UniqueTitleConstraint } from './validators/unique-title.validator'

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService, UniqueTitleConstraint],
})
export class TodoModule {}
