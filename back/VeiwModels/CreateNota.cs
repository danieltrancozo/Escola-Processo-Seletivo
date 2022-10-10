using System.ComponentModel.DataAnnotations;

namespace back.VeiwModels{
    public class CreateNotas{
        [Required]
        public int idaluno { get; set; }
        [Required]
        public int idmateria {get; set;}
    }
}