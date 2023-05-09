using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using polls.Models;

namespace polls.Controllers
{
    [Route("polls")]
    [ApiController]
    public class PollsController : ControllerBase
    {
        private readonly PollContext _context;

        public PollsController(PollContext context)
        {
            _context = context;
        }

        // GET: /polls
        // Get all polls listed
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Poll>>> GetPolls()
        {
          if (_context.Questions == null)
          {
              return NotFound();
          }

            return await _context.Questions.ToListAsync();
        }

        // GET: /polls/{id}
        // Get poll with id
        [HttpGet("{id}")]
        public async Task<ActionResult<Poll>> GetPoll(int id)
        {
              if (_context.Questions == null)
              {
                  return NotFound();
              }

            var poll = await _context.Questions.Include(x => x.Option).FirstOrDefaultAsync(x => x.Id == id);

            if (poll == null)
            {
                return NotFound();
            }

            return poll;
        }

        // POST: /polls/add
        // Add new poll
        [HttpPost("add")]
        public async Task<ActionResult<Poll>> PostPoll(Poll poll)
        {
          if (_context.Questions == null)
          {
              return Problem("Entity set 'PollContext.Questions' is null.");
          }
            _context.Questions.Add(poll);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPoll", new { id = poll.Id }, poll);
        }

        // POST: /polls/{id}/vote/{option}
        // Method: POST Parameters: id (id of the poll to vote in) option (id of the option to vote for)
        [HttpPost("{id}/vote/{option}")]
        public async Task<ActionResult<Poll>> PostPollVote(int id, int option)
        {
            if (_context.Questions == null)
            {
                return Problem("Entity set 'PollContext.Questions'  is null.");
            }


            var data = await _context.Questions.Include(x => x.Option).FirstOrDefaultAsync(x => x.Id == id);

            if (data == null)
            {
                return NoContent();
            }

            if (data.Option == null)
            {
                return NoContent();
            }

            if (data.Option[option].Votes == null)
            {
                return NoContent();
            }

            data.Option[option].Votes++;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuestionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private bool QuestionExists(int id)
        {
            return (_context.Questions?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
