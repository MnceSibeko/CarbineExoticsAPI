using System.ComponentModel.DataAnnotations;

namespace CarbineExotics.Models
{
    public class Car_Image
    {
        /*Car Image class for Car Gallery Page.*/
        public int Car_ID { get; set; }

        [Key]
        public string CarUnique_ID { get; set; } = string.Empty;

        public string Car_Exterior_Front { get; set; } = string.Empty;

        public string Car_Exterior_Rear { get; set; } = string.Empty;

        public string Car_Interior { get; set; } = string.Empty;
    }
}
