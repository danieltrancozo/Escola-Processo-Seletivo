using System.ComponentModel.DataAnnotations;

namespace back.VeiwModels{
    public class CreateGrades{
        [Required]
        public int idstudent { get; set; }
        [Required]
        public int idsubject {get; set;}
        public double av1 { get; set;}
        public double av2 { get; set;}
        public double av3 { get; set;}
        public double avf { get; set;}
    }
}