using System.ComponentModel.DataAnnotations;

namespace back.VeiwModels{
    public class CreateStudent{
        [Required]
        public string Name{get;set;}
        [Required]
        public int idclass {get;set;}
    }
}