require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
	user: `${process.env.DB_USER}`,
	host: `${process.env.DB_HOST}`,
	database: `${process.env.DB_DATABASE}`,
	password: `${process.env.DB_PASSWORD}`,
	port: process.env.DB_PORT,
	ssl: true
})

pool.query(`SELECT * FROM pets INNER JOIN owners ON owners.owner_id = pets.owner_id WHERE occupation = 'Programmer'`, (error, results) => {
	if(error){
		throw error
	}

	console.log(results.rows)
})