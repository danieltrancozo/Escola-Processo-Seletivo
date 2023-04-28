using System.Collections.Generic;
using back.Models;
using Microsoft.AspNetCore.Mvc;
using back.Data;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using back.VeiwModels;

namespace back.Controllers{
    [ApiController]
    [Route(template:"v1")]
    public class gradesController : ControllerBase{
        [HttpGet]
        [Route(template:"grades")]
        public async Task<IActionResult> GetAsync([FromServices] DataContext context){
            var grade = await context.grades.AsNoTracking().ToListAsync();
            return Ok(grade);
        }
        [HttpGet]
        [Route(template:"grades/{id}")]
        public async Task<IActionResult> GetByIdAsync([FromServices] DataContext context, [FromRoute]int id){
            var grade = await context.grades.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            return grade == null ? NotFound() : Ok(grade);
        }
        [HttpPost(template:"grades")]
        public async Task<IActionResult> PostAsync([FromServices] DataContext context, [FromBody]CreateGrades model){
            if(!ModelState.IsValid){
                return BadRequest(ModelState);
            }
            else{
                var grade = new Grades{
                    idstudent = model.idstudent,
                    idsubject = model.idsubject,
                    av1 = 0,
                    av2 = 0,
                    av3 = 0,
                    avf = 0,
                    aproved = false,
                    final = false
                };
                await context.grades.AddAsync(grade);
                await context.SaveChangesAsync();
                return Created(uri:$"v1/grades/{grade.Id}",grade);
            }
        }
        [HttpPut(template:"grades/{id}/{a}/{gr}")]
        public async Task<IActionResult> PutNoAsync([FromServices] DataContext context,
        [FromRoute] int id,[FromRoute] int a, [FromRoute] double gr){
            var grade = await context.grades.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            switch(a){
                 case 1:
                    grade.av1=gr;
                    break;
                case 2:
                    grade.av2=gr;
                    break;
                case 3:
                    grade.av3=gr;
                    break;
                default:
                    return BadRequest("O identificador de Avaliação deve estar entre 1 e 3.");
            }
            context.grades.Update(grade);
            await context.SaveChangesAsync();
            return Ok();
        }
        [HttpPut(template:"grades/{id}/{vf}")]
        public async Task<IActionResult> PutVfAsync([FromServices] DataContext context, 
        [FromRoute] int id, [FromRoute] double vf){
            var grade = await context.grades.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            var subject = await context.subjects.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==grade.idsubject);
            double totalGrade = grade.av1*subject.w1+grade.av2*subject.w2+grade.av3*subject.w3;
            double totalWeight = subject.w1+subject.w2+subject.w3;
            double media = totalGrade/totalWeight;
            if(media<=4){
                grade.aproved=false;
                grade.final=false;
            }
            else if(media>=6){
                grade.aproved=true;
                grade.final=false;
            }
            else{
                grade.final=true;
                grade.avf = vf;
                double newAverage = (media+vf)/2;
                if(newAverage>=5){
                    grade.aproved = true;
                }
                else{
                    grade.aproved = false;
                }
            }
            context.grades.Update(grade);
            await context.SaveChangesAsync();
            return Ok();
        }
        [HttpDelete(template:"grades/{id}")]
        public async Task<IActionResult> DeleteAsync([FromServices] DataContext context, [FromRoute] int id){
            var grade = await context.grades.FirstOrDefaultAsync(x=>x.Id==id);
            context.grades.Remove(grade);
            await context.SaveChangesAsync();
            return Ok(grade);
        }
    }
}