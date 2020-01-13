import request from "request-promise";
import dotenv from "dotenv";
const format = require('pg-format');
const pool = require('./../../middleware/databasePool');

dotenv.config();

export const getUserInfo = async (query: string) => {
  //const key = process.env.OPEN_CAGE_DATA_KEY;
  //const url = `https://api.opencagedata.com/geocode/v1/geojson?q=${query}&key=${key}&limit=20&no_annotations=1`;
  let response: any ;
  pool.connect(function (err: string | undefined, client: { query: (arg0: any, arg1: (err: any, result: any) => void) => void; }, done: any) {
    if (err) 
      throw new Error(err);
    var userquery = format(`SELECT * from users WHERE userid = ${query}`)
    client.query(userquery, function (err: string | undefined, result: { rows: any[]; }) {
      if (err) 
      throw new Error(err);
      response.json(result.rows[0]); 
    })
  }); 
  
  return JSON.parse(response);
};