using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back.Migrations
{
    /// <inheritdoc />
    public partial class correctnaming : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "alunos");

            migrationBuilder.DropTable(
                name: "materias");

            migrationBuilder.DropTable(
                name: "notas");

            migrationBuilder.DropTable(
                name: "turmas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_professores",
                table: "professores");

            migrationBuilder.RenameTable(
                name: "professores",
                newName: "teachers");

            migrationBuilder.RenameColumn(
                name: "ativo",
                table: "teachers",
                newName: "active");

            migrationBuilder.AddPrimaryKey(
                name: "PK_teachers",
                table: "teachers",
                column: "id");

            migrationBuilder.CreateTable(
                name: "classes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    volume = table.Column<int>(type: "INTEGER", nullable: false),
                    active = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_classes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "grades",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    idstudent = table.Column<int>(type: "INTEGER", nullable: false),
                    idsubject = table.Column<int>(type: "INTEGER", nullable: false),
                    av1 = table.Column<double>(type: "REAL", nullable: false),
                    av2 = table.Column<double>(type: "REAL", nullable: false),
                    av3 = table.Column<double>(type: "REAL", nullable: false),
                    avf = table.Column<double>(type: "REAL", nullable: false),
                    aproved = table.Column<bool>(type: "INTEGER", nullable: false),
                    final = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_grades", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "students",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    idclass = table.Column<int>(type: "INTEGER", nullable: false),
                    Active = table.Column<bool>(type: "INTEGER", nullable: false),
                    aproved = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_students", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "subjects",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    idprof = table.Column<int>(type: "INTEGER", nullable: false),
                    w1 = table.Column<double>(type: "REAL", nullable: false),
                    w2 = table.Column<double>(type: "REAL", nullable: false),
                    w3 = table.Column<double>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_subjects", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "classes");

            migrationBuilder.DropTable(
                name: "grades");

            migrationBuilder.DropTable(
                name: "students");

            migrationBuilder.DropTable(
                name: "subjects");

            migrationBuilder.DropPrimaryKey(
                name: "PK_teachers",
                table: "teachers");

            migrationBuilder.RenameTable(
                name: "teachers",
                newName: "professores");

            migrationBuilder.RenameColumn(
                name: "active",
                table: "professores",
                newName: "ativo");

            migrationBuilder.AddPrimaryKey(
                name: "PK_professores",
                table: "professores",
                column: "id");

            migrationBuilder.CreateTable(
                name: "alunos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Ativo = table.Column<bool>(type: "INTEGER", nullable: false),
                    Nome = table.Column<string>(type: "TEXT", nullable: false),
                    aprovado = table.Column<bool>(type: "INTEGER", nullable: false),
                    idturma = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_alunos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "materias",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", nullable: false),
                    idprof = table.Column<int>(type: "INTEGER", nullable: false),
                    p1 = table.Column<double>(type: "REAL", nullable: false),
                    p2 = table.Column<double>(type: "REAL", nullable: false),
                    p3 = table.Column<double>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_materias", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "notas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    aprovado = table.Column<bool>(type: "INTEGER", nullable: false),
                    av1 = table.Column<double>(type: "REAL", nullable: false),
                    av2 = table.Column<double>(type: "REAL", nullable: false),
                    av3 = table.Column<double>(type: "REAL", nullable: false),
                    avf = table.Column<double>(type: "REAL", nullable: false),
                    final = table.Column<bool>(type: "INTEGER", nullable: false),
                    idaluno = table.Column<int>(type: "INTEGER", nullable: false),
                    idmateria = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_notas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "turmas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ativo = table.Column<bool>(type: "INTEGER", nullable: false),
                    volume = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_turmas", x => x.Id);
                });
        }
    }
}
