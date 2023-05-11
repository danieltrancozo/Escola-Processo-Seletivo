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
    public class classsController : ControllerBase{
        [HttpGet]
        [Route(template:"classes")]
        public async Task<IActionResult> GetAsync([FromServices] DataContext context){
            var classes = await context.classes.AsNoTracking().ToListAsync();
            return Ok(classes);
        }
        [HttpGet]
        [Route(template:"classes/{id}")]
        public async Task<IActionResult> GetByIdAsync([FromServices] DataContext context, [FromRoute]int id){
            var classes = await context.classes.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            return classes == null ? NotFound() : Ok(classes);
        }
        [HttpPost(template:"classes")]
        public async Task<IActionResult> PostAsync([FromServices] DataContext context, [FromBody]CreateClass model){
            if(!ModelState.IsValid){
                return BadRequest(ModelState);
            }
            else{
                var classs = new Class{
                    volume = model.volume,
                    active = true
                };
                await context.classes.AddAsync(classs);
                var student = new Student();
                student.idclass = classs.Id;
                student.Active = true;
                student.aproved = false;
                for (int i = 1; i<= classs.volume; i++)
                {
                    student.Name = "Aluno de Teste "+ i.ToString();
                    await context.students.AddAsync(student);
                    await context.SaveChangesAsync();
                }
                return Created(uri:$"v1/classes/{classs.Id}",classs);
                }
            }
        [HttpPut(template:"classes/{id}/{at}")]
        public async Task<IActionResult> PutAsync([FromServices] DataContext context, [FromRoute] int id, [FromRoute] bool at){
            var classs = await context.classes.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            classs.active=at;
            context.classes.Update(classs);
            await context.SaveChangesAsync();
            return Ok();
        }
        [HttpPut(template:"classes/update/{id}/{ct}")]
        public async Task<IActionResult> PutUpdateAsync([FromServices] DataContext context, [FromRoute] int id, [FromRoute] int ct){
            var classs = await context.classes.AsNoTracking().FirstOrDefaultAsync(x=>x.Id == id);
            if(classs==null) NotFound();
            classs.volume = ct;
            context.classes.Update(classs);
            await context.SaveChangesAsync();
            return Ok();
        }
        [HttpDelete(template:"classes/{id}")]
        public async Task<IActionResult> DeleteAsync([FromServices] DataContext context, [FromRoute] int id){
            var classs = await context.classes.FirstOrDefaultAsync(x=>x.Id==id);
            context.classes.Remove(classs);
            await context.SaveChangesAsync();
            return Ok(classs);
        }
    }
}