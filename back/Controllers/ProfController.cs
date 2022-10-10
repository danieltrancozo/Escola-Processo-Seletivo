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
    public class ProfController : ControllerBase{
        [HttpGet]
        [Route(template:"profs")]
        public async Task<IActionResult> GetAsync([FromServices] DataContext context){
            var profs = await context.professores.AsNoTracking().ToListAsync();
            if(profs==null) NotFound();
            return Ok(profs);
        }
        [HttpGet]
        [Route(template:"profs/{id}")]
        public async Task<IActionResult> GetByIdAsync([FromServices] DataContext context, [FromRoute]int id){
            var prof = await context.professores.AsNoTracking().FirstOrDefaultAsync(x=>x.id==id);
            return prof == null ? NotFound() : Ok(prof);
        }
        [HttpPost(template:"profs")]
        public async Task<IActionResult> PostAsync([FromServices] DataContext context, [FromBody]CreateProfessor model){
            if(!ModelState.IsValid){
                return BadRequest(ModelState);
            }
            else{
                var prof = new Prof{
                    name = model.name,
                    ativo = true
                };
                await context.professores.AddAsync(prof);
                await context.SaveChangesAsync();
                return Created(uri:$"v1/profs/{prof.id}",prof);
                }
            }
        [HttpPut(template:"profs/{id}/{name}")]
        public async Task<IActionResult> NamePutAsync([FromServices] DataContext context, [FromRoute] int id, 
        [FromRoute] string name){
            var prof =await context.professores.AsNoTracking().FirstOrDefaultAsync(x=>x.id==id);
            if(prof == null)
                return NotFound();
            prof.name = name;
            context.professores.Update(prof);
            await context.SaveChangesAsync();
            return Ok();
        }
        [HttpPut(template:"profs/{id},{at}")]
        public async Task<IActionResult> PuttAsync([FromServices] DataContext context,
        [FromRoute] int id,[FromRoute] bool at){
                var prof = await context.professores.AsNoTracking().FirstOrDefaultAsync(x=>x.id==id);
                if(prof == null)
                    return NotFound();
                prof.ativo=at;
                context.professores.Update(prof);
                await context.SaveChangesAsync();
                return Ok();
            }
        [HttpDelete(template:"profs/{id}")]
        public async Task<ActionResult> DeleteAsync([FromServices] DataContext context, [FromRoute] int id){
            var prof = await context.professores.FirstOrDefaultAsync(x=>x.id==id);
            context.professores.Remove(prof);
            await context.SaveChangesAsync();
            return Ok(prof);
        }
    }
}