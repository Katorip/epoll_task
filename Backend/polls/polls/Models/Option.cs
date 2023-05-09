using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace polls.Models
{
    [Index(nameof(Id), IsUnique = true)]
    public class Option
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Option title is required")]
        [StringLength(maximumLength: 200)]
        public string? Title { get; set; }

        [Required(ErrorMessage = "Votes count is required")]
        public int Votes { get; set; }
    }
}
