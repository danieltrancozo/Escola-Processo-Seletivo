using System.ComponentModel.DataAnnotations;

namespace back.Models{

    public class Class{
        [Key] 
        public int Id { get; set; }
        [Required]
        [Range(0.0, 80.0, ErrorMessage = "O volume de alunos deve estar entre 0 e 80.")]
        public int volume { get; set; }
        public bool active {get; set;}
    }
}
