import { Injectable } from '@nestjs/common/decorators'
import {
  registerDecorator,
  ValidatorConstraint,
  ValidationOptions,
  ValidationArguments,
  ValidatorConstraintInterface,
} from 'class-validator'
import { TodoService } from '../service/todo.service'

@ValidatorConstraint({ async: true })
@Injectable()
export class UniqueTitleConstraint implements ValidatorConstraintInterface {
  constructor(private readonly todoService: TodoService) {}

  async validate(title: string, args: ValidationArguments) {
    return this.todoService.isUniqueTitle(title)
  }
  defaultMessage(args: ValidationArguments) {
    return 'todos must have unique title'
  }
}

export function UniqueTitle(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: UniqueTitleConstraint,
    })
  }
}
