using Microsoft.EntityFrameworkCore;
using back.Models;

namespace back.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Prof> teachers { get; set; }
        public DbSet<Subject> subjects { get; set; }
        public DbSet<Class> classes { get; set; }
        public DbSet<Student> students { get; set; }
        public DbSet<Grades> grades { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure your database model here
        }

        public void MigrateDatabase()
        {
            this.Database.Migrate();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=app.db");
        }
    }
}
