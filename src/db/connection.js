// Código de Angel C.
import mysql from 'mysql2/promise';
import 'dotenv/config';

console.log("Datos de conexión:", process.env.DB_USER, process.env.DB_DATABASE);

export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});