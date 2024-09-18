using DotNetTask.DAO;
using DotNetTask.Models;
using Microsoft.AspNetCore.Mvc;
using DotNetTask.DAO;
using DotNetTask.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DotNetTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonalInformationController : ControllerBase
    {
        private readonly IPersonalInformationDao _personalInformationDao;

        public PersonalInformationController(IPersonalInformationDao personalInformationDao)
        {
            _personalInformationDao = personalInformationDao;
        }

        [HttpGet("{id:int}", Name = "GetPersonalInformationById")]
        public async Task<ActionResult<PersonalInformation?>> GetPersonalInformationById(int id)
        {
            var personalInfo = await _personalInformationDao.GetPersonalInformationById(id);
            if (personalInfo == null)
            {
                return NotFound();
            }
            return Ok(personalInfo);
        }

        [HttpPost]
        public async Task<ActionResult<int>> CreatePersonalInformation(PersonalInformation info)
        {
            if (ModelState.IsValid)
            {
                int result = await _personalInformationDao.InsertPersonalInformation(info);
                if (result > 0)
                {
                    return Ok("Data Added");
                }
                return BadRequest("Failed to create personal information");
            }
            return BadRequest(ModelState);
        }

        [HttpGet]
        public async Task<ActionResult<List<PersonalInformation>>> GetAllPersonalInformation()
        {
            var personalInfoList = await _personalInformationDao.GetAllPersonalInformation();
            if (personalInfoList == null || personalInfoList.Count == 0)
            {
                return NotFound("No personal information found");
            }
            return Ok(personalInfoList);
        }

        [HttpPut("{id:int}/phonenumber")]
        public async Task<ActionResult<int>> UpdatePhoneNumber(int id, [FromBody] string newPhoneNumber)
        {
            if (string.IsNullOrEmpty(newPhoneNumber))
            {
                return BadRequest("Phone number cannot be empty");
            }

            try
            {
                int row = await _personalInformationDao.UpdatePersonalInformation(id, newPhoneNumber);
                if (row > 0)
                {
                    return Ok("Phone number updated successfully");
                }
                else
                {
                    return NotFound("ID not found");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }



        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeletePersonalInformation(int id)
        {
            var existingInfo = await _personalInformationDao.GetPersonalInformationById(id);
            if (existingInfo == null)
            {
                return NotFound();
            }

            await _personalInformationDao.DeletePersonalInformation(id);
            return NoContent();
        }
    }
}
