using System.ComponentModel.DataAnnotations;

namespace back.Models{
    public class Notas{
        [Key]
        public int Id { get; set; }
        [Required]
        public int idaluno { get; set; }
        [Required]
        public int idmateria {get; set;}
        [Required]
        public double av1 {get; set;}
        [Required]
        public double av2 {get; set;}
        [Required]
        public double av3 {get; set;}
        [Required]
        public double avf {get; set;}

        public bool aprovado{get;set;}
        public bool final {get;set;}
    }
}