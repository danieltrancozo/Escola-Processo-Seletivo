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
    public class MateriaController : ControllerBase{
        [HttpGet]
        [Route(template:"materias")]
        public async Task<IActionResult> GetAsync([FromServices] DataContext context){
            var materia = await context.materias.AsNoTracking().ToListAsync();
            return Ok(materia);
        }
        [HttpGet]
        [Route(template:"materias/{id}")]
        public async Task<IActionResult> GetByIdAsync([FromServices] DataContext context, [FromRoute]int id){
            var materia = await context.materias.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            return materia == null ? NotFound() : Ok(materia);
        }
        [HttpPost(template:"materias")]
        public async Task<IActionResult> PostAsync([FromServices] DataContext context, [FromBody]CreateMateria model){
            if(!ModelState.IsValid){
                return BadRequest(ModelState);
            }
            else{
                var materia = new Materia{
                    Nome = model.Nome,
                    idprof = model.idprof,
                    p1 = model.p1,
                    p2 = model.p2,
                    p3 = model.p3
                };
                await context.materias.AddAsync(materia);
                await context.SaveChangesAsync();
                return Created(uri:$"v1/materias/{materia.Id}",materia);
                }
            }
            [HttpPut(template:"materias/{id}/{p}/{pe}")]
        public async Task<IActionResult> PutPeAsync([FromServices] DataContext context,
        [FromRoute] int id,[FromRoute] int p, [FromRoute] int pe){
                var materia = await context.materias.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
                if(materia==null) NotFound();
                switch(p){
                    case 1:
                        materia.p1=pe;
                        break;
                    case 2:
                        materia.p2=pe;
                        break;
                    case 3:
                        materia.p3=pe;
                        break;
                    default:
                        return BadRequest("O identificador de Peso deve estar entre 1 e 3.");
                }
                context.materias.Update(materia);
                await context.SaveChangesAsync();
                return Ok();
            }
        [HttpDelete(template:"materias/{id}")]
        public async Task<IActionResult> DeleteAsync([FromServices] DataContext context, [FromRoute] int id){
            var materia = await context.materias.FirstOrDefaultAsync(x=>x.Id==id);
            context.materias.Remove(materia);
            await context.SaveChangesAsync();
            return Ok(materia);
        }
    }
}