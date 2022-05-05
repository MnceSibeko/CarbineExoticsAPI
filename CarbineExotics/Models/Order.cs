using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CarbineExotics.Models
{
    public class Order
    {
        /*Class for Order Receipt*/

        [Key]
        public int Order_ID { get; set; }
        public DateTime Order_Date { get; set; }
        
        public int User_ID { get; set; }
        
        public string Car_ID { get; set; } = string.Empty;

        public int Category_ID { get; set; }

        public string Car_Make { get; set; } = string.Empty;

        public string Car_Model { get; set; } = string.Empty;

        [Column(TypeName = "decimal(10,2)")]
        public decimal Order_Total_Price { get; set; }
    }
}
