import { BadRequestError } from '@zbprojector/project1';

const pg = require('pg');
//! first run all the commands in database.sql file


const pool = new pg.Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
});

async function connect() {
  try {
    await pool.connect()
    console.log("Postgres is connnected!");
  } catch (error) {
    throw new BadRequestError('Something went wrong while connecting database')
  }

  try {
    // creating table -- named values 
    await pool.query(
      `CREATE TABLE IF NOT EXISTS courses (
        course_id NUMERIC(255) UNIQUE NOT NULL , 
        id SERIAL PRIMARY KEY , 
        course_name VARCHAR(255) 
        UNIQUE NOT NULL , 
        createdDate DATE NOT NULL
        )`
    )
  } catch (error) {
    throw new BadRequestError("Something wrong with table")
  }
}

pool.on('error', () => console.log('Lost PG connection'));

connect()
export default pool;