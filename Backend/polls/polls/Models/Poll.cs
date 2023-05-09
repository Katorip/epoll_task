using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.InteropServices;

namespace polls.Models
{
    [Index(nameof(Id), IsUnique = true)]
    public class Poll
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Poll title is required")]
        [StringLength(maximumLength: 200)]
        public string? Title { get; set; }

        public List<Option>? Option { get; set; }
    }
}
