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
        public double av1 {get; set;}
        [Required]
        public double av2 {get; set;}
        [Required]
        public double av3 {get; set;}
        [Required]
        public double avf {get; set;}

        public bool aproved{get;set;}
        public bool final {get;set;}
    }
}