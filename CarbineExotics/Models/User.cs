using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace CarbineExotics.Models
{
    public class User
    {
        /*User table that holds all the information of the users who have registered for using the ecommerce site.*/
        [Key]
        public int User_ID { get; set; }

        public string Email { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;
        
        public string FullName { get; set; } = string.Empty;

        public string CreditCard { get; set; } = string.Empty;

        public string Address { get; set; } = string.Empty;


    }

}
