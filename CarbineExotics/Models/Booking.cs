using System.ComponentModel.DataAnnotations;

namespace CarbineExotics.Models
{
    public class Booking
    {
        [Key]
        public int Car_ID { get; set; }

        public string Email { get; set; } = string.Empty;

        public string FullName { get; set; } = string.Empty;

        public string Address { get; set; } = string.Empty;
    }
}
