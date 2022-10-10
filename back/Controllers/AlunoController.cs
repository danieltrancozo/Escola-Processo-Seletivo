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
    public class AlunoController : ControllerBase{
        [HttpGet]
        [Route(template:"alunos")]
        public async Task<IActionResult> GetAsync([FromServices] DataContext context){
            var Alunos = await context.alunos.AsNoTracking().ToListAsync();
            return Ok(Alunos);
        }
        [HttpGet]
        [Route(template:"alunos/{id}")]
        public async Task<IActionResult> GetByIdAsync([FromServices] DataContext context, [FromRoute]int id){
            var Alunos = await context.alunos.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            return Alunos == null ? NotFound() : Ok(Alunos);
        }
        [HttpPost(template:"alunos")]
        public async Task<IActionResult> PostAsync([FromServices] DataContext context, [FromBody]CreateAluno model){
            if(!ModelState.IsValid){
                return BadRequest(ModelState);
            }
            else{
                var turma = await context.turmas.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==model.idturma);
                if (turma!=null){
                var aluno = new Aluno{
                    Nome = model.Nome,
                    idturma = model.idturma,
                    Ativo = true
                };
                await context.alunos.AddAsync(aluno);
                await context.SaveChangesAsync();
                return Created(uri:$"v1/alunos/{aluno.Id}",aluno);
                }
                else{
                    return BadRequest("Id de Turma inválido");
                }
            }
        }
        [HttpPut(template:"alunos/update/{id}/{no}/{tu}")]
        public async Task<IActionResult> PutAsync([FromServices] DataContext context,
        [FromRoute] int id, [FromRoute] string no, [FromRoute] int tu){
            var aluno = await context.alunos.FirstOrDefaultAsync(x=>x.Id==id);
            if (aluno == null) NotFound();
            var turma = await context.turmas.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==tu);
            if (turma!=null){
                aluno.Nome=no;
                aluno.idturma = tu;
                context.alunos.Update(aluno);
                await context.SaveChangesAsync();
                return Ok(aluno);
            }
            else{
                return BadRequest("Id de Turma inválido");
            }
        }
        [HttpPut(template:"alunos/{id},{at},{t}")]
        public async Task<IActionResult> AtPutAsync([FromServices] DataContext context, 
        [FromRoute] int id, [FromRoute] bool at, [FromRoute] int t){
            var aluno = await context.alunos.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            if (aluno==null) NotFound("Id inválido!");
            bool ativo = aluno.Ativo;
            if (ativo != at)aluno.Ativo = at;
            if (aluno.Ativo==false) aluno.idturma = 0;
            if (aluno.Ativo==true) aluno.idturma = t;
            context.alunos.Update(aluno);
            await context.SaveChangesAsync();
            return Ok(aluno);
        }
        [HttpPut(template:"alunos/{id}")]
        public async Task<IActionResult> ApPutAsync([FromServices] DataContext context, [FromRoute] int id){
            var aluno = await context.alunos.AsNoTracking().FirstOrDefaultAsync(x=>x.Id==id);
            var notas = await context.notas.FromSqlRaw($"SELECT * FROM notas WHERE idaluno ={id}").ToListAsync();
            if(notas==null) NotFound();
            double ap=0;
            for (int i = 0; i < notas.Count;i++){
                if(notas[i].aprovado) ap++;
            }
            double res = ap/notas.Count;
            
            if(res>=0.6)
            aluno.aprovado = true;
            context.alunos.Update(aluno);
            await context.SaveChangesAsync();
            return aluno.aprovado==true ? Ok("Aluno Aprovado"): Ok("Aluno reprovado");
        }
        [HttpDelete(template:"alunos/{id}")]
        public async Task<ActionResult> DeleteAsync([FromServices] DataContext context, [FromRoute] int id){
            var aluno = await context.alunos.FirstOrDefaultAsync(x=>x.Id==id);
            context.alunos.Remove(aluno);
            await context.SaveChangesAsync();
            return Ok(aluno);
        }
    }
}