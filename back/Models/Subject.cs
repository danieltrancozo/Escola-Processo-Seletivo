using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace back.Models{
    public class Subject{
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(60)]
        [MinLength(8)]
        public string Name { get; set; }
        [Required]
        public int idprof { get; set; }
        [Required]
        [Range(1.0, 3.0, ErrorMessage = "Pesos devem estar entre 1 e 3.")]
        public double w1{ get; set; }
        [Required]
        [Range(1.0, 3.0, ErrorMessage = "Pesos devem estar entre 1 e 3.")]
        public double w2{ get; set; }
        [Required]
        [Range(1.0, 3.0, ErrorMessage = "Pesos devem estar entre 1 e 3.")]
        public double w3{ get; set; }
    }
}