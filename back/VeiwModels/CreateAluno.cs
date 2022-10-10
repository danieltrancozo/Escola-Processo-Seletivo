using System.ComponentModel.DataAnnotations;

namespace back.VeiwModels{
    public class CreateAluno{
        [Required]
        public string Nome{get;set;}
        [Required]
        public int idturma {get;set;}
    }
}