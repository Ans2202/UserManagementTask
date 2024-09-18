using DotNetTask.DAO;
using DotNetTask.Models;
using Npgsql;
using DotNetTask.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DotNetTask.DAO
{
    public class PersonalInformationDaoImpl : IPersonalInformationDao
    {
        private readonly NpgsqlConnection _conn;

        public PersonalInformationDaoImpl(NpgsqlConnection conn)
        {
            _conn = conn;
        }

        public async Task<int> InsertPersonalInformation(PersonalInformation info)
        {
            const string insertQuery = @"
                INSERT INTO pinfo.personal_info(name, dateofbirth, residentialaddress, permanentaddress, phonenumber, emailaddress, maritalstatus, gender, occupation, aadharcardnumber, pannumber) 
                VALUES (@Name, @DateOfBirth, @ResidentialAddress, @PermanentAddress, @PhoneNumber, @EmailAddress, @MaritalStatus, @Gender, @Occupation, @AadharCardNumber, @PANNumber)";

            try
            {
                await _conn.OpenAsync();
                using var cmd = new NpgsqlCommand(insertQuery, _conn);
                cmd.Parameters.AddWithValue("@Name", info.Name);
                cmd.Parameters.AddWithValue("@DateOfBirth", info.DateOfBirth);
                cmd.Parameters.AddWithValue("@ResidentialAddress", info.ResidentialAddress);
                cmd.Parameters.AddWithValue("@PermanentAddress", info.PermanentAddress);
                cmd.Parameters.AddWithValue("@PhoneNumber", info.PhoneNumber);
                cmd.Parameters.AddWithValue("@EmailAddress", info.EmailAddress);
                cmd.Parameters.AddWithValue("@MaritalStatus", info.MaritalStatus);
                cmd.Parameters.AddWithValue("@Gender", info.Gender);
                cmd.Parameters.AddWithValue("@Occupation", info.Occupation);
                cmd.Parameters.AddWithValue("@AadharCardNumber", info.AadharCardNumber);
                cmd.Parameters.AddWithValue("@PANNumber", info.PANNumber);

                return await cmd.ExecuteNonQueryAsync();
            }
            catch (NpgsqlException ex)
            {
                Console.WriteLine("Exception: " + ex.Message);
                return 0;
            }
            finally
            {
                await _conn.CloseAsync();
            }
        }

        public async Task<PersonalInformation?> GetPersonalInformationById(int id)
        {
            const string query = "SELECT * FROM pinfo.personal_info WHERE id = @Id";

            try
            {
                await _conn.OpenAsync();
                using var cmd = new NpgsqlCommand(query, _conn);
                cmd.Parameters.AddWithValue("@Id", id);

                using var reader = await cmd.ExecuteReaderAsync();
                if (await reader.ReadAsync())
                {
                    return new PersonalInformation
                    {
                        Id = reader.GetInt32(0),
                        Name = reader.GetString(1),
                        DateOfBirth = reader.GetDateTime(2),
                        ResidentialAddress = reader.GetString(3),
                        PermanentAddress = reader.GetString(4),
                        PhoneNumber = reader.GetString(5),
                        EmailAddress = reader.GetString(6),
                        MaritalStatus = reader.GetString(7),
                        Gender = reader.GetString(8),
                        Occupation = reader.GetString(9),
                        AadharCardNumber = reader.GetString(10),
                        PANNumber = reader.GetString(11)
                    };
                }

                return null;
            }
            catch (NpgsqlException ex)
            {
                Console.WriteLine("Exception: " + ex.Message);
                return null;
            }
            finally
            {
                await _conn.CloseAsync();
            }
        }

        public async Task<List<PersonalInformation>> GetAllPersonalInformation()
        {
            var personalInfoList = new List<PersonalInformation>();
            const string query = "SELECT * FROM pinfo.personal_info";

            try
            {
                await _conn.OpenAsync();
                using var cmd = new NpgsqlCommand(query, _conn);

                using var reader = await cmd.ExecuteReaderAsync();
                while (await reader.ReadAsync())
                {
                    personalInfoList.Add(new PersonalInformation
                    {
                        Id = reader.GetInt32(0),
                        Name = reader.GetString(1),
                        DateOfBirth = reader.GetDateTime(2),
                        ResidentialAddress = reader.GetString(3),
                        PermanentAddress = reader.GetString(4),
                        PhoneNumber = reader.GetString(5),
                        EmailAddress = reader.GetString(6),
                        MaritalStatus = reader.GetString(7),
                        Gender = reader.GetString(8),
                        Occupation = reader.GetString(9),
                        AadharCardNumber = reader.GetString(10),
                        PANNumber = reader.GetString(11)
                    });
                }
            }
            catch (NpgsqlException ex)
            {
                Console.WriteLine("Exception: " + ex.Message);
            }
            finally
            {
                await _conn.CloseAsync();
            }

            return personalInfoList;
        }

        public async Task<int> UpdatePersonalInformation(int id, string newPhoneNumber)
        {
            const string updateQuery = @"
        UPDATE pinfo.personal_info
        SET phonenumber = @PhoneNumber
        WHERE id = @Id";

            int row = 0;

            try
            {
                await _conn.OpenAsync();
                using var cmd = new NpgsqlCommand(updateQuery, _conn);
                cmd.Parameters.AddWithValue("@Id", id);
                cmd.Parameters.AddWithValue("@PhoneNumber", newPhoneNumber);

                row = await cmd.ExecuteNonQueryAsync();
            }
            catch (NpgsqlException ex)
            {
                Console.WriteLine("Exception: " + ex.Message);
            }
            finally
            {
                await _conn.CloseAsync();
            }

            return row;
        }


        public async Task DeletePersonalInformation(int id)
        {
            const string deleteQuery = "DELETE FROM pinfo.personal_info WHERE id = @Id";

            try
            {
                await _conn.OpenAsync();
                using var cmd = new NpgsqlCommand(deleteQuery, _conn);
                cmd.Parameters.AddWithValue("@Id", id);

                await cmd.ExecuteNonQueryAsync();
            }
            catch (NpgsqlException ex)
            {
                Console.WriteLine("Exception: " + ex.Message);
            }
            finally
            {
                await _conn.CloseAsync();
            }
        }
    }
}

