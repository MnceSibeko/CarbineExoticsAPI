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
        
        //[JsonIgnore] //JWT
        public string User_Password { get; set; } = string.Empty;

        public string User_FullName { get; set; } = string.Empty;

        public int User_CreditCard_No { get; set; }

        public string User_Address { get; set; } = string.Empty; 
        
        
    }
}
