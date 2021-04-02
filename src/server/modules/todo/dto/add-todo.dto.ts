import { IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { UniqueTitle } from "../validators/unique-title.validator";

export class AddTodoDto {
  @ApiProperty({ minLength: 2, maxLength: 20 })
  @UniqueTitle()
  @IsString()
  @Length(2, 20)
  title: string
}
