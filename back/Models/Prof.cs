using System.ComponentModel.DataAnnotations;

namespace back.Models
{
    public class Prof
    {
        [Key]
        public int id{get; set;}

        [Required]
        public string name {get; set;}
        public bool active {get;set;}
    }
}