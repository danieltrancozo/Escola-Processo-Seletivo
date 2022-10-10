using System.ComponentModel.DataAnnotations;

namespace back.Models{
    public class Aluno{
        [Key]
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public int idturma { get; set; }
        public bool Ativo { get; set; }
        public bool aprovado {get;set;}
    }
}