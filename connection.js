import mysql from "mysql"

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "db_sewamobil"
})

export default db; 