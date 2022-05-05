using System.ComponentModel.DataAnnotations;

namespace CarbineExotics.Models
{
    public class Category
    {
        /*Class for the categories of vehicles */
        [Key]
        public int Category_ID { get; set; }

        public string Category_Name { get; set; } = string.Empty;

        public string Category_Description { get; set; } = string.Empty;
    }
}
