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

pool.query(`SELECT occupation, name, pet_name, class FROM pets RIGHT JOIN owners ON pets.owner_id = owners.owner_id WHERE pet_name IS NULL`, (error, results) => {
	if(error){
		throw error
	}

	console.log(results.rows)
})