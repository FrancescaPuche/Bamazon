const express = require("express"); 
const mysql = require("mysql"); 

const connection = mysql.createConnection({ 
    host: "localhost", 
    port: 3306, 
    user: "root", 
    password: "", 
    database: "bamazon_db" 
}); 
