using System.ComponentModel.DataAnnotations;

namespace back.VeiwModels{
    public class CreateClass
    {
        [Required]
        [Range(0.0, 80.0, ErrorMessage = "O volume de alunos deve estar entre 0 e 80.")]
        public int volume {get;set;}
    }
}