using CarbineExotics.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarbineExotics.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly DataContext _context;

        public CarController(DataContext context)
        {
            _context = context;
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpGet]
        public async Task<ActionResult<List<Car>>> Get()
        {
            /*Get() All the cars saved in the Database .*/

            return Ok(await _context.Cars.ToListAsync());
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpGet("{Car_ID}")]
        public async Task<ActionResult<Car>> Get(int Car_ID)
        {
            /*Get() All the cars saved in the Database by int car_id*/
            
            var car = await _context.Cars.FindAsync(Car_ID);
            if (car == null)
            {
                return BadRequest("Car not found!");
            }
            return Ok(car);
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpPost]
        public async Task<ActionResult<List<Car>>> AddCar(Car cars)
        {
            /*Show All Cars*/

            _context.Cars.Add(cars);
            await _context.SaveChangesAsync();

            return Ok(await _context.Cars.ToListAsync());
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpPut]
        public async Task<ActionResult<List<Car>>> UpdateCar(Car request)
        {
            /*UPDATE Cars in DB by ID*/

            var dbCars = await _context.Cars.FindAsync(request.Car_ID);
            if (dbCars == null)
            {
                return BadRequest("Car not found!");
            }

            dbCars.Car_ID = request.Car_ID;
            dbCars.CarUnique_ID = request.CarUnique_ID;
            dbCars.Car_Make = request.Car_Make;
            dbCars.Car_Model = request.Car_Model;
            dbCars.Car_Price = request.Car_Price;
            dbCars.Car_Mileage = request.Car_Mileage;
            dbCars.Car_Color = request.Car_Color;
            dbCars.Car_Image = request.Car_Image;
            dbCars.Car_Year = request.Car_Year;
            dbCars.Car_Transmission = request.Car_Transmission;
            dbCars.Car_About = request.Car_About;
            dbCars.Category_ID = request.Category_ID;

            await _context.SaveChangesAsync();

            return Ok(await _context.Cars.ToListAsync());
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpDelete("{Car_ID}")]
        public async Task<ActionResult<List<Car>>> DeleteCar(int Car_ID)
        {
            /*DELETE by ID*/

            var dbCar = await _context.Cars.FindAsync(Car_ID);
            if (dbCar == null)
            {
                return BadRequest("Car not found!");
            }

            _context.Cars.Remove(dbCar);
            await _context.SaveChangesAsync();
            return Ok(await _context.Cars.ToListAsync());
        }

    }
}
