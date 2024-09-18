using DotNetTask.Models;
using DotNetTask.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DotNetTask.DAO
{
    public interface IPersonalInformationDao
    {
        Task<int> InsertPersonalInformation(PersonalInformation info);
        Task<PersonalInformation?> GetPersonalInformationById(int id);
        Task<List<PersonalInformation>> GetAllPersonalInformation();
        Task<int> UpdatePersonalInformation(int id, string newPhoneNumber);
        Task DeletePersonalInformation(int id);
    }
}

