using CarbineExotics.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarbineExotics.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;

        public UserController(DataContext context)
        {
            _context = context;
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            /*GET ALL users in the DB*/

            return Ok(await _context.Users.ToListAsync());
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpGet("{user_id}")]
        public async Task<ActionResult<User>> Get(int user_id)
        {
            /*GET User by ID*/

            var user = await _context.Users.FindAsync(user_id);
            if (user == null)
            {
                return BadRequest("User not found!");
            }
            return Ok(user);
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            /*Show All Users*/

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

        /*-------------------------------------------------------------------------------------------------*/
        [HttpPut]
        public async Task<ActionResult<List<User>>> UpdateUser(User request)
        {
            /*UPDATE by ID*/

            var dbUser = await _context.Users.FindAsync(request.User_ID);
            if (dbUser == null)
            {
                return BadRequest("User not found!");
            }

            dbUser.Email = request.Email;
            dbUser.User_Password = request.User_Password;
            dbUser.User_FullName = request.User_FullName;
            dbUser.User_CreditCard_No = request.User_CreditCard_No;
            dbUser.User_Address = request.User_Address;

            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpDelete("{user_id}")]
        public async Task<ActionResult<List<User>>> DeleteUser(int user_id)
        {
            /*DELETE by ID*/

            var dbUser = await _context.Users.FindAsync(user_id);
            if (dbUser == null)
            {
                return BadRequest("User not found!");
            }

            _context.Users.Remove(dbUser);
            await _context.SaveChangesAsync();
            return Ok(await _context.Users.ToListAsync());
        }
    }
}
