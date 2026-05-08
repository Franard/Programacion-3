import mysql from 'mysql2/promise';
import 'dotenv/config';

console.log("Datos de conexión:", process.env.DB_USER, process.env.DB_NAME, process.env.DB_NAME);

export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});