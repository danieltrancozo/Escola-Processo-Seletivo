using System.ComponentModel.DataAnnotations;

namespace back.VeiwModels{
    public class CreateMateria{
        [Required]
        public string Nome {get;set;}
        [Required]
        public int idprof { get; set; }
        [Required]
        public double p1{ get; set; }
        [Required]
        public double p2{ get; set; }
        [Required]
        public double p3{ get; set; }
    }
}