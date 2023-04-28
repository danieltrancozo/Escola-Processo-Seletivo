using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace back
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var options = new DbContextOptionsBuilder<DataContext>()
                                    .UseSqlite("DataSource=app.db; Cache=Shared")
                                    .Options;

            using var context = new DataContext(options);
            context.MigrateDatabase();

            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
