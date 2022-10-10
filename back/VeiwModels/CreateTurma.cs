using System.ComponentModel.DataAnnotations;

namespace back.VeiwModels{
    public class CreateTurma{
        [Required]
        public int volume {get;set;}
    }
}