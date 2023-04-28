using System.ComponentModel.DataAnnotations;

namespace back.VeiwModels{
    public class CreateSubject{
        [Required]
        public string Name {get;set;}
        [Required]
        public int idprof { get; set; }
        [Required]
        public double w1{ get; set; }
        [Required]
        public double w2{ get; set; }
        [Required]
        public double w3{ get; set; }
    }
}