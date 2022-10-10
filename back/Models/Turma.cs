using System.ComponentModel.DataAnnotations;

namespace back.Models{

    public class Turma{
        [Key] 
            public int Id { get; set; }
        [Required(ErrorMessage ="Esse campo é Obrigatório!")]
            public int volume { get; set; }
            public bool ativo {get; set;}
    }
}
