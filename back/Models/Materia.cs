using System.ComponentModel.DataAnnotations;

namespace back.Models{
    public class Materia{
        [Key]
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }
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