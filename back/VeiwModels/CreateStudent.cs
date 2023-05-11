using System.ComponentModel.DataAnnotations;

namespace back.VeiwModels{
    public class CreateStudent{
        [Required]
        [MaxLength(60)]
        [MinLength(10)]
        public string Name { get; set; }
        [Required]
        public int idclass {get;set;}
    }
}