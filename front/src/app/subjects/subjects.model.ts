import { MinLength, MaxLength } from "class-validator";
import { Min, Max } from "class-validator";

export class SubjectsModel{
  'id': Number;
  @MinLength(8, { message: 'Name must be at least 8 characters long.' })
  @MaxLength(60, { message: 'Name cannot be more than 60 characters long.' })
  'name': String;
  'idprof': Number;
  @Min(1,{message: 'W1 must have a minimal value of 1.'})
  @Max(3,{message: 'W1 must have a maximum value of 3.'})
  'w1': Number;
  @Min(1,{message: 'W1 must have a minimal value of 1.'})
  @Max(3,{message: 'W1 must have a maximum value of 3.'})
  'w2': Number;
  @Min(1,{message: 'W1 must have a minimal value of 1.'})
  @Max(3,{message: 'W1 must have a maximum value of 3.'})
  'w3': Number;
}
