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
    public class StudentController : ControllerBase{
        [HttpGet]
        [Route(template:"students")]
        public async Task<IActionResult> GetAsync([FromServices] DataContext context){
            var Students = await context.students.AsNoTracking().ToListAsync();
            return Ok(Students);
        }
        [HttpGet]
        [Route(template:"students/{id}")]
        public async Task<IActionResult> GetByIdAsync([FromServices] DataContext context, [FromRoute]int id){
            var Students = await context.students.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            return Students == null ? NotFound() : Ok(Students);
        }
        [HttpPost(template:"students")]
        public async Task<IActionResult> PostAsync([FromServices] DataContext context, [FromBody]CreateStudent model){
            if(!ModelState.IsValid){
                return BadRequest(ModelState);
            }
            else{
                var cl = await context.classes.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==model.idclass);
                if (cl!=null){
                var student = new Student{
                    Name = model.Name,
                    idclass = model.idclass,
                    Active = true
                };
                await context.students.AddAsync(student);
                await context.SaveChangesAsync();
                return Created(uri:$"v1/students/{student.Id}",student);
                }
                else{
                    return BadRequest("Id de class inválido");
                }
            }
        }
        [HttpPut(template:"students/update/{id}/{no}/{tu}")]
        public async Task<IActionResult> PutAsync([FromServices] DataContext context,
        [FromRoute] int id, [FromRoute] string no, [FromRoute] int tu){
            var student = await context.students.FirstOrDefaultAsync(x=>x.Id==id);
            if (student == null) NotFound();
            var cl = await context.classes.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==tu);
            if (cl!=null){
                student.Name=no;
                student.idclass = tu;
                context.students.Update(student);
                await context.SaveChangesAsync();
                return Ok(student);
            }
            else{
                return BadRequest("Id de class inválido");
            }
        }
        [HttpPut(template:"students/{id},{at},{t}")]
        public async Task<IActionResult> AtPutAsync([FromServices] DataContext context, 
        [FromRoute] int id, [FromRoute] bool at, [FromRoute] int t){
            var student = await context.students.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            if (student==null) NotFound("Id inválido!");
            bool Active = student.Active;
            if (Active != at)student.Active = at;
            if (student.Active==false) student.idclass = 0;
            if (student.Active==true) student.idclass = t;
            context.students.Update(student);
            await context.SaveChangesAsync();
            return Ok(student);
        }
        [HttpPut(template:"students/{id}")]
        public async Task<IActionResult> ApPutAsync([FromServices] DataContext context, [FromRoute] int id){
            var student = await context.students.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            var grades = await context.grades.FromSqlRaw($"SELECT * FROM grades WHERE idstudent ={id}").ToListAsync();
            if(grades==null) NotFound();
            double ap=0;
            for (int i = 0; i < grades.Count;i++){
                if(grades[i].aproved) ap++;
            }
            double res = ap/grades.Count;
            
            if(res>=0.6)
            student.aproved = true;
            context.students.Update(student);
            await context.SaveChangesAsync();
            return student.aproved==true ? Ok("student Aprovado"): Ok("student reprovado");
        }
        [HttpDelete(template:"students/{id}")]
        public async Task<ActionResult> DeleteAsync([FromServices] DataContext context, [FromRoute] int id){
            var student = await context.students.FirstOrDefaultAsync(x=>x.Id==id);
            context.students.Remove(student);
            await context.SaveChangesAsync();
            return Ok(student);
        }
    }
}