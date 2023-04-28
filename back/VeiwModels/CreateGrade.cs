using System.ComponentModel.DataAnnotations;

namespace back.VeiwModels{
    public class CreateGrades{
        [Required]
        public int idstudent { get; set; }
        [Required]
        public int idsubject {get; set;}
    }
}