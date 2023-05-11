using System.ComponentModel.DataAnnotations;

namespace back.Models{
    public class Grades{
        [Key]
        public int Id { get; set; }
        [Required]
        public int idstudent { get; set; }
        [Required]
        public int idsubject {get; set;}
        [Required]
        [Range(0.0, 10.0, ErrorMessage = "Notas devem estar entre 0 e 10.")]
        public double av1 {get; set;}
        [Required]
        [Range(0.0, 10.0, ErrorMessage = "Notas devem estar entre 0 e 10.")]
        public double av2 {get; set;}
        [Required]
        [Range(0.0, 10.0, ErrorMessage = "Notas devem estar entre 0 e 10.")]
        public double av3 {get; set;}
        [Required]
        [Range(0.0, 10.0, ErrorMessage = "Notas devem estar entre 0 e 10.")]
        public double avf {get; set;}
        public double media { get; set;}
        public double finalMedia { get; set;}
        public bool aproved {get;set;}
        public bool final {get;set;}
    }
}