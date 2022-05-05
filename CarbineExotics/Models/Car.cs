using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CarbineExotics.Models
{
    public class Car
    {
        /*Cars table that will hold all the information of the vehicles stored in the database.*/
        [Key]
        public int Car_ID { get; set; }

        public string CarUnique_ID { get; set; } = string.Empty;
        public int Category_ID { get; set; }
        public int Car_Year { get; set; }
        public string Car_Make { get; set; } = string.Empty;

        public string Car_Model { get; set; } = string.Empty;
        public string Car_Color { get; set; } = string.Empty;
        
        public string Car_About { get; set; } = string.Empty;

        [Column(TypeName = "decimal(10,2)")]
        public decimal Car_Price { get; set; } // Decimal(10,2)

        public int Car_Mileage { get; set; }

        public string Car_Image { get; set; } = string.Empty;

        public string Car_Transmission { get; set; } = string.Empty;

        

        
    }
}
