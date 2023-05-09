using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using polls.Models;

namespace polls.Models
{
    public class PollContext : DbContext
    {
        public PollContext(DbContextOptions<PollContext> polls) : base(polls)
        {

        }

        public DbSet<Poll> Questions { get; set; }
        public DbSet<Option> Option { get; set; }
    }
}
