﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using back.Data;

namespace back.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20221007015844_FinalVersion")]
    partial class FinalVersion
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("back.Models.Aluno", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("Ativo")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<bool>("aprovado")
                        .HasColumnType("INTEGER");

                    b.Property<int>("idturma")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("alunos");
                });

            modelBuilder.Entity("back.Models.Materia", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("idprof")
                        .HasColumnType("INTEGER");

                    b.Property<double>("p1")
                        .HasColumnType("REAL");

                    b.Property<double>("p2")
                        .HasColumnType("REAL");

                    b.Property<double>("p3")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.ToTable("materias");
                });

            modelBuilder.Entity("back.Models.Notas", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("aprovado")
                        .HasColumnType("INTEGER");

                    b.Property<double>("av1")
                        .HasColumnType("REAL");

                    b.Property<double>("av2")
                        .HasColumnType("REAL");

                    b.Property<double>("av3")
                        .HasColumnType("REAL");

                    b.Property<double>("avf")
                        .HasColumnType("REAL");

                    b.Property<bool>("final")
                        .HasColumnType("INTEGER");

                    b.Property<int>("idaluno")
                        .HasColumnType("INTEGER");

                    b.Property<int>("idmateria")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("notas");
                });

            modelBuilder.Entity("back.Models.Prof", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("ativo")
                        .HasColumnType("INTEGER");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("professores");
                });

            modelBuilder.Entity("back.Models.Turma", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("ativo")
                        .HasColumnType("INTEGER");

                    b.Property<int>("volume")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("turmas");
                });
#pragma warning restore 612, 618
        }
    }
}
