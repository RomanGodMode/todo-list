import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common'
import { AddTodoDto } from './dto/add-todo.dto'
import { TodoService } from './service/todo.service'
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger'

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiOperation({ summary: 'Get all todos' })
  @Get()
  async getAllTodos() {
    return this.todoService.getAll()
  }

  @ApiOperation({ summary: 'Get single todo by id' })
  @ApiNotFoundResponse({ description: 'there is no todo with that id' })
  @Get(':id')
  async getTodo(@Param('id') id: number) {
    return this.todoService.getById(id)
  }

  @ApiOperation({ summary: 'Create todo on server' })
  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'Wrong length or not unique todo title',
  })
  async addTodo(@Body() addTodoDto: AddTodoDto) {
    return this.todoService.addTodo(addTodoDto.title)
  }

  @ApiOperation({ summary: 'Update todo title' })
  @ApiOkResponse({ description: 'todo successful renamed' })
  @ApiNotFoundResponse({ description: 'there is no todo with that id' })
  @ApiBadRequestResponse({
    description: 'Wrong length or not unique todo title',
  })
  @Put(':id')
  editTodoTitle(@Param('id') id: number, @Body() editTodoDto: AddTodoDto) {
    return this.todoService.editTodoTitle(id, editTodoDto.title)
  }

  @ApiOperation({ summary: 'Delete todo by id' })
  @ApiOkResponse({ description: 'todo successful deleted' })
  @ApiNotFoundResponse({ description: 'there is no todo with that id' })
  @Delete(':id')
  async deleteTodo(@Param('id') id: number) {
    return this.todoService.deleteTodo(id)
  }

  @ApiOperation({ summary: 'toggle todo checked flag with such id' })
  @ApiOkResponse({ description: 'todo successful toggled' })
  @ApiNotFoundResponse({ description: 'there is no todo with that id' })
  @Patch(':id')
  async toggleTodoChecked(@Param('id') id: number) {
    return this.todoService.toggleTodoChecked(id)
  }
}
