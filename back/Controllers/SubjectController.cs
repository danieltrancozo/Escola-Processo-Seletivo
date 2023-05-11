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
    public class SubjectController : ControllerBase{
        [HttpGet]
        [Route(template:"subjects")]
        public async Task<IActionResult> GetAsync([FromServices] DataContext context){
            var subject = await context.subjects.AsNoTracking().ToListAsync();
            return Ok(subject);
        }
        [HttpGet]
        [Route(template:"subjects/{id}")]
        public async Task<IActionResult> GetByIdAsync([FromServices] DataContext context, [FromRoute]int id){
            var subject = await context.subjects.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            return subject == null ? NotFound() : Ok(subject);
        }
        [HttpPost(template:"subjects")]
        public async Task<IActionResult> PostAsync([FromServices] DataContext context, [FromBody]CreateSubject model){
            if(!ModelState.IsValid){
                return BadRequest(ModelState);
            }
            else{
                var subject = new Subject{
                    Name = model.Name,
                    idprof = model.idprof,
                    w1 = model.w1,
                    w2 = model.w2,
                    w3 = model.w3
                };
                await context.subjects.AddAsync(subject);
                await context.SaveChangesAsync();
                return Created(uri:$"v1/subjects/{subject.Id}",subject);
                }
            }
            [HttpPut(template:"subjects/{id}/{p}/{pe}")]
        public async Task<IActionResult> PutPeAsync([FromServices] DataContext context,
        [FromRoute] int id,[FromRoute] int p, [FromRoute] int pe){
                var subject = await context.subjects.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
                if(subject==null) NotFound();
                switch(p){
                    case 1:
                        subject.w1=pe;
                        break;
                    case 2:
                        subject.w2=pe;
                        break;
                    case 3:
                        subject.w3=pe;
                        break;
                    default:
                        return BadRequest("O identificador de Peso deve estar entre 1 e 3.");
                }
                context.subjects.Update(subject);
                await context.SaveChangesAsync();
                return Ok();
            }
        [HttpDelete(template:"subjects/{id}")]
        public async Task<IActionResult> DeleteAsync([FromServices] DataContext context, [FromRoute] int id){
            var subject = await context.subjects.FirstOrDefaultAsync(x=>x.Id==id);
            context.subjects.Remove(subject);
            await context.SaveChangesAsync();
            return Ok(subject);
        }
    }
}