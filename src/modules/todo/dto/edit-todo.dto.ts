
import { IsBoolean, IsString, Length } from "class-validator";

export class EditTodoTitleDto {
  @IsString()
  @Length(2, 20)
  title: string
}
