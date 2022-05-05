using CarbineExotics.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarbineExotics.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Car_ImageController : ControllerBase
    {
        [Route("api/[controller]")]
        [ApiController]
        public class CarImageController : ControllerBase
        {
            private readonly DataContext _context;

            public CarImageController(DataContext context)
            {
                _context = context;
            }

            /*-------------------------------------------------------------------------------------------------*/

            [HttpGet]
            public async Task<ActionResult<List<Car_Image>>> Get()
            {
                /*GET ALL Car Images in the DB*/
                return Ok(await _context.Car_Images.ToListAsync());
            }

            /*-------------------------------------------------------------------------------------------------*/

            [HttpGet("{car_id}")]
            public async Task<ActionResult<Car_Image>> Get(string carUnique_id)
            {
                /*GET Car Images by ID*/
                var car_image = await _context.Car_Images.FindAsync(carUnique_id);
                if (car_image == null)
                {
                    return BadRequest("Car Image not found!");
                }
                return Ok(car_image);
            }

            /*-------------------------------------------------------------------------------------------------*/

            [HttpPost]
            public async Task<ActionResult<List<Car_Image>>> AddCarImage(Car_Image carImage)
            {
                /*Show All car Images*/
                _context.Car_Images.Add(carImage);
                await _context.SaveChangesAsync();

                return Ok(await _context.Car_Images.ToListAsync());
            }

            /*-------------------------------------------------------------------------------------------------*/

            [HttpPut]
            public async Task<ActionResult<List<Car_Image>>> UpdateCarImage(Car_Image request)
            {
                /*UPDATE by ID*/
                var dbCarImage = await _context.Car_Images.FindAsync(request.CarUnique_ID);
                if (dbCarImage == null)
                {
                    return BadRequest("Car not found!");
                }

                dbCarImage.Car_ID = request.Car_ID;
                dbCarImage.CarUnique_ID = request.CarUnique_ID;
                dbCarImage.Car_Exterior_Front = request.Car_Exterior_Front;
                dbCarImage.Car_Exterior_Rear = request.Car_Exterior_Rear;
                dbCarImage.Car_Interior = request.Car_Interior;


                await _context.SaveChangesAsync();

                return Ok(await _context.Car_Images.ToListAsync());
            }

            /*-------------------------------------------------------------------------------------------------*/

            [HttpDelete("{car_id}")]
            public async Task<ActionResult<List<Car_Image>>> DeleteCarImage(string carUnique_id)
            {
                /*DELETE by ID*/
                var dbCarImage = await _context.Car_Images.FindAsync(carUnique_id);
                if (dbCarImage == null)
                {
                    return BadRequest("Car not found!");
                }

                _context.Car_Images.Remove(dbCarImage);
                await _context.SaveChangesAsync();
                return Ok(await _context.Car_Images.ToListAsync());
            }
        }
    }
}
