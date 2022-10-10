using Microsoft.EntityFrameworkCore.Migrations;

namespace back.Migrations
{
    public partial class FinalVersion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "alunos");

            migrationBuilder.AddColumn<bool>(
                name: "ativo",
                table: "turmas",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "ativo",
                table: "professores",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "aprovado",
                table: "notas",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "final",
                table: "notas",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Ativo",
                table: "alunos",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "aprovado",
                table: "alunos",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ativo",
                table: "turmas");

            migrationBuilder.DropColumn(
                name: "ativo",
                table: "professores");

            migrationBuilder.DropColumn(
                name: "aprovado",
                table: "notas");

            migrationBuilder.DropColumn(
                name: "final",
                table: "notas");

            migrationBuilder.DropColumn(
                name: "Ativo",
                table: "alunos");

            migrationBuilder.DropColumn(
                name: "aprovado",
                table: "alunos");

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "alunos",
                type: "TEXT",
                nullable: true);
        }
    }
}
