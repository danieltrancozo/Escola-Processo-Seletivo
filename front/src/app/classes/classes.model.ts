import { Min, Max } from "class-validator";

export class classesModel{
  @Min(1,{message: 'The volume of students must have a minimal value of 1.'})
  @Max(80,{message: 'The volume of students must have a maximum value of 80.'})
  'volume': Number;
}
