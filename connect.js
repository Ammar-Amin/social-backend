import mysql, { createConnection } from 'mysql2';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '05@07#2002@!',
    database: 'social'
})