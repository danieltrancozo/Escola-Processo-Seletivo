import { Min, Max } from "class-validator";

export class GradesModel{
  'id': Number;
  'idstudent': Number;
  'idsubject': Number;
  @Min(0,{message: 'Av1 must have a minimal value of 0.'})
  @Max(10,{message: 'Av1 must have a maximum value of 10.'})
  'av1': Number;
  @Min(0,{message: 'Av2 must have a minimal value of 0.'})
  @Max(10,{message: 'Av2 must have a maximum value of 10.'})
  'av2': Number;
  @Min(0,{message: 'Av3 must have a minimal value of 0.'})
  @Max(10,{message: 'Av3 must have a maximum value of 10.'})
  'av3': Number;
  @Min(0,{message: 'AvF must have a minimal value of 0.'})
  @Max(10,{message: 'AvF must have a maximum value of 10.'})
  'avf': Number;
  'aproved': Boolean;
  'final': Boolean;
}
