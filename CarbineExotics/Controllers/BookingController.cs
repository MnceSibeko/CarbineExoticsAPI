using CarbineExotics.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CarbineExotics.Controllers
{
    [ApiController, Authorize]
    [Route("api/[controller]")]
    public class BookingController : ControllerBase
    {
        private readonly DataContext _context;

        public BookingController(DataContext context)
        {
            _context = context;
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpGet]
        public async Task<ActionResult<List<Booking>>> Get()
        {
            /*GET ALL Bookings in the DB*/

            return Ok(await _context.Bookings.ToListAsync());
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpGet("{booking_id}")]
        public async Task<ActionResult<Booking>> Get(int booking_id)
        {
            /*Get booking by id*/

            var booking = await _context.Bookings.FindAsync(booking_id);
            if (booking == null)
            {
                return BadRequest("User not found!");
            }
            return Ok(booking);
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpPost]
        public async Task<ActionResult<string>> AddBooking(Booking booking)
        {
            /*Registering booking*/

            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync();

            return Ok("Booking made!");
        }
    }
}