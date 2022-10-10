using System.ComponentModel.DataAnnotations;

namespace back.VeiwModels{
    public class CreateProfessor{
        [Required]
        public string name {get;set;}
    }
}