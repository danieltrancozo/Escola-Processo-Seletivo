import { MinLength, MaxLength } from "class-validator";

export class studentModel{
  @MinLength(10, { message: 'Name must be at least 10 characters long.' })
  @MaxLength(60, { message: 'Name cannot be more than 60 characters long.' })
  'name': String;
  'idclass': Number;
}
