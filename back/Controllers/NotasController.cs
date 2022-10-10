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
    public class NotasController : ControllerBase{
        [HttpGet]
        [Route(template:"notas")]
        public async Task<IActionResult> GetAsync([FromServices] DataContext context){
            var nota = await context.notas.AsNoTracking().ToListAsync();
            return Ok(nota);
        }
        [HttpGet]
        [Route(template:"notas/{id}")]
        public async Task<IActionResult> GetByIdAsync([FromServices] DataContext context, [FromRoute]int id){
            var nota = await context.notas.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            return nota == null ? NotFound() : Ok(nota);
        }
        [HttpPost(template:"notas")]
        public async Task<IActionResult> PostAsync([FromServices] DataContext context, [FromBody]CreateNotas model){
            if(!ModelState.IsValid){
                return BadRequest(ModelState);
            }
            else{
                var nota = new Notas{
                    idaluno = model.idaluno,
                    idmateria = model.idmateria,
                    av1 = 0,
                    av2 = 0,
                    av3 = 0,
                    avf = 0,
                    aprovado = false,
                    final = false
                };
                await context.notas.AddAsync(nota);
                await context.SaveChangesAsync();
                return Created(uri:$"v1/notas/{nota.Id}",nota);
            }
        }
        [HttpPut(template:"notas/{id}/{p}/{no}")]
        public async Task<IActionResult> PutNoAsync([FromServices] DataContext context,
        [FromRoute] int id,[FromRoute] int p, [FromRoute] double no){
            var nota = await context.notas.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            switch(p){
                 case 1:
                    nota.av1=no;
                    break;
                case 2:
                    nota.av2=no;
                    break;
                case 3:
                    nota.av3=no;
                    break;
                default:
                    return BadRequest("O identificador de Peso deve estar entre 1 e 3.");
            }
            context.notas.Update(nota);
            await context.SaveChangesAsync();
            return Ok();
        }
        [HttpPut(template:"notas/{id}/{vf}")]
        public async Task<IActionResult> PutVfAsync([FromServices] DataContext context, 
        [FromRoute] int id, [FromRoute] double vf){
            var nota = await context.notas.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            var materia = await context.materias.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==nota.idmateria);
            double totalNota = nota.av1*materia.p1+nota.av2*materia.p2+nota.av3*materia.p3;
            double totalPeso = materia.p1+materia.p2+materia.p3;
            double media = totalNota/totalPeso;
            if(media<=4){
                nota.aprovado=false;
                nota.final=false;
            }
            else if(media>=6){
                nota.aprovado=true;
                nota.final=false;
            }
            else{
                nota.final=true;
                nota.avf = vf;
                double novaMedia = (media+vf)/2;
                if(novaMedia>=5){
                    nota.aprovado = true;
                }
                else{
                    nota.aprovado = false;
                }
            }
            context.notas.Update(nota);
            await context.SaveChangesAsync();
            return Ok();
        }
        [HttpDelete(template:"notas/{id}")]
        public async Task<IActionResult> DeleteAsync([FromServices] DataContext context, [FromRoute] int id){
            var nota = await context.notas.FirstOrDefaultAsync(x=>x.Id==id);
            context.notas.Remove(nota);
            await context.SaveChangesAsync();
            return Ok(nota);
        }
    }
}