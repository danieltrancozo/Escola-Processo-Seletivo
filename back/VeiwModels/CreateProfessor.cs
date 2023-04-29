using System.ComponentModel.DataAnnotations;

namespace back.VeiwModels{
    public class CreateProfessor
    {
        [Required]
        [MaxLength(60)]
        [MinLength(10)]
        public string name {get;set;}
    }
}