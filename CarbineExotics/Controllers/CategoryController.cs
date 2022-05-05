using CarbineExotics.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarbineExotics.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly DataContext _context;

        public CategoryController(DataContext context)
        {
            _context = context;
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpGet]
        public async Task<ActionResult<List<Category>>> Get()
        {
            /*GET ALL Categories in the DB*/

            return Ok(await _context.Categories.ToListAsync());
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpGet("{category_id}")]
        public async Task<ActionResult<Category>> Get(int category_id)
        {
            /*GET Category by ID*/

            var category = await _context.Categories.FindAsync(category_id);
            if (category == null)
            {
                return BadRequest("Category not found!");
            }
            return Ok(category);
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpPost]
        public async Task<ActionResult<List<Category>>> AddCategory(Category category)
        {
            /*Show All Categories*/

            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return Ok(await _context.Categories.ToListAsync());
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpPut]
        public async Task<ActionResult<List<Category>>> UpdateCategory(Category request)
        {
            /*UPDATE by ID*/

            var dbCategory = await _context.Categories.FindAsync(request.Category_ID);
            if (dbCategory == null)
            {
                return BadRequest("Order not found!");
            }

            dbCategory.Category_ID = request.Category_ID;
            dbCategory.Category_Name = request.Category_Name;
            dbCategory.Category_Description = request.Category_Description;


            await _context.SaveChangesAsync();

            return Ok(await _context.Categories.ToListAsync());
        }

        /*-------------------------------------------------------------------------------------------------*/

        [HttpDelete("{category_id}")]
        public async Task<ActionResult<List<Category>>> DeleteCategory(int category_id)
        {
            /*DELETE by ID*/

            var dbCategory = await _context.Categories.FindAsync(category_id);
            if (dbCategory == null)
            {
                return BadRequest("Order not found!");
            }

            _context.Categories.Remove(dbCategory);
            await _context.SaveChangesAsync();
            return Ok(await _context.Categories.ToListAsync());
        }
    }
}
