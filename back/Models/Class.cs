using System.ComponentModel.DataAnnotations;

namespace back.Models{

    public class Class{
        [Key] 
            public int Id { get; set; }
            public int volume { get; set; }
            public bool active {get; set;}
    }
}
