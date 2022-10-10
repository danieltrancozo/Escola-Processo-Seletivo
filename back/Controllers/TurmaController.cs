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
    public class TurmaController : ControllerBase{
        [HttpGet]
        [Route(template:"turmas")]
        public async Task<IActionResult> GetAsync([FromServices] DataContext context){
            var Turmas = await context.turmas.AsNoTracking().ToListAsync();
            return Ok(Turmas);
        }
        [HttpGet]
        [Route(template:"turmas/{id}")]
        public async Task<IActionResult> GetByIdAsync([FromServices] DataContext context, [FromRoute]int id){
            var Turmas = await context.turmas.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            return Turmas == null ? NotFound() : Ok(Turmas);
        }
        [HttpPost(template:"turmas")]
        public async Task<IActionResult> PostAsync([FromServices] DataContext context, [FromBody]CreateTurma model){
            if(!ModelState.IsValid){
                return BadRequest(ModelState);
            }
            else{
                var turma = new Turma{
                    volume = model.volume,
                    ativo = true
                };
                await context.turmas.AddAsync(turma);
                await context.SaveChangesAsync();
                return Created(uri:$"v1/turmas/{turma.Id}",turma);
                }
            }
        [HttpPut(template:"turmas/{id}/{at}")]
        public async Task<IActionResult> PutAsync([FromServices] DataContext context, [FromRoute] int id, [FromRoute] bool at){
            var turma = await context.turmas.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            turma.ativo=at;
            context.turmas.Update(turma);
            await context.SaveChangesAsync();
            return Ok();
        }
        [HttpPut(template:"turmas/update/{id}/{ct}")]
        public async Task<IActionResult> PutUpdateAsync([FromServices] DataContext context, [FromRoute] int id, [FromRoute] int ct){
            var turma = await context.turmas.AsNoTracking().FirstOrDefaultAsync(x=>x.Id == id);
            if(turma==null) NotFound();
            turma.volume = ct;
            context.turmas.Update(turma);
            await context.SaveChangesAsync();
            return Ok();
        }
        [HttpDelete(template:"turmas/{id}")]
        public async Task<IActionResult> DeleteAsync([FromServices] DataContext context, [FromRoute] int id){
            var turma = await context.turmas.FirstOrDefaultAsync(x=>x.Id==id);
            context.turmas.Remove(turma);
            await context.SaveChangesAsync();
            return Ok(turma);
        }
    }
}