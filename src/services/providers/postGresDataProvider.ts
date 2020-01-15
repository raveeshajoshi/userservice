const format = require('pg-format');
const pool = require('./../../middleware/databasePool');


export const getUserInfo = async (query: string) => {
 
  let response: any ;
    
  var userquery = format(`SELECT * from users WHERE loginid = '${query}'`)
  console.log(userquery)
  response = await pool.query(userquery);
  let user = response.rows;
  return user;
};