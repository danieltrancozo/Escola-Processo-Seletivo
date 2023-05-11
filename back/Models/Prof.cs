using System.ComponentModel.DataAnnotations;

namespace back.Models
{
    public class Prof
    {
        [Key]
        public int id{get; set; }
        [Required]
        [MaxLength(60)]
        [MinLength(10)]
        public string name {get; set;}
        public bool active {get;set;}
    }
}