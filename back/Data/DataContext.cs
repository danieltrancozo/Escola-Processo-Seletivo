using Microsoft.EntityFrameworkCore;
using back.Models;

namespace back.Data{
    public class DataContext : DbContext{
        public DbSet <Prof> professores { get; set;}
        public DbSet <Materia> materias {get;set;}
        public DbSet <Turma> turmas {get;set;}
        public DbSet <Aluno> alunos {get; set;}
        public DbSet <Notas> notas {get;set;}
    
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) =>
            optionsBuilder.UseSqlite(connectionString:"DataSource=app.db; Cache=Shared");
    }
}