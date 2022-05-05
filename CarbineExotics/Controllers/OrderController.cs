using CarbineExotics.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarbineExotics.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly DataContext _context;

        public OrderController(DataContext context)
        {
            _context = context;
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpGet]
        public async Task<ActionResult<List<Order>>> Get()
        {
            /*GET ALL Orders in the DB*/

            return Ok(await _context.Orders.ToListAsync());
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpGet("{order_id}")]
        public async Task<ActionResult<Order>> Get(int order_id)
        {
            /*GET Order by ID*/

            var order = await _context.Orders.FindAsync(order_id);
            if (order == null)
            {
                return BadRequest("Order not found!");
            }
            return Ok(order);
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpPost]
        public async Task<ActionResult<List<Order>>> AddOrder(Order order)
        {
            /*Show All Orders*/

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return Ok(await _context.Orders.ToListAsync());
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpPut]
        public async Task<ActionResult<List<Order>>> UpdateOrder(Order request)
        {
            /*UPDATE by ID*/

            var dbOrder = await _context.Orders.FindAsync(request.Order_ID);
            if (dbOrder == null)
            {
                return BadRequest("Order not found!");
            }

            dbOrder.Order_ID = request.Order_ID;
            dbOrder.Car_ID = request.Car_ID;
            dbOrder.User_ID = request.User_ID;
            dbOrder.Category_ID = request.Category_ID;
            dbOrder.Car_Make = request.Car_Make;
            dbOrder.Order_Date = request.Order_Date;
            dbOrder.Order_Total_Price = request.Order_Total_Price;

            await _context.SaveChangesAsync();

            return Ok(await _context.Orders.ToListAsync());
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpDelete("{order_id}")]
        public async Task<ActionResult<List<Order>>> DeleteOrder(int order_id)
        {
            /*DELETE by ID*/

            var dbOrder = await _context.Orders.FindAsync(order_id);
            if (dbOrder == null)
            {
                return BadRequest("Order not found!");
            }

            _context.Orders.Remove(dbOrder);
            await _context.SaveChangesAsync();
            return Ok(await _context.Orders.ToListAsync());
        }
    }
}
