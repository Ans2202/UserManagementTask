using System;
using System.ComponentModel.DataAnnotations;

namespace DotNetTask.Models
{
    public class PersonalInformation
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public string ResidentialAddress { get; set; }

        [Required]
        public string PermanentAddress { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public string EmailAddress { get; set; }

        [Required]
        public string MaritalStatus { get; set; }

        [Required]
        public string Gender { get; set; }

        [Required]
        public string Occupation { get; set; }

        [Required]
        public string AadharCardNumber { get; set; }

        [Required]
        public string PANNumber { get; set; }
    }
}
