import { MaxValidator, MinLengthValidator, MinValidator } from "@angular/forms";
import { MinLength,MaxLength } from "class-validator";

export class TeachersModel{
  'id': Number;
  @MinLength(10, { message: 'Name must be at least 10 characters long.' })
  @MaxLength(60, { message: 'Name cannot be more than 60 characters long.' })
  "name": String;
  'active': Boolean;
}
