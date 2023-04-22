using System.ComponentModel.DataAnnotations;

namespace back.Models{
    public class Student{
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int idclass { get; set; }
        public bool Active { get; set; }
        public bool aproved {get;set;}
    }
}