const mysql = require("mysql"); 
const inquirer = require("inquirer");
const table = require("cli-table");

const connection = mysql.createConnection({ 
    host: "localhost", 
    port: 3306, 
    user: "root", 
    password: "Fvp4077961", 
    database: "bamazon_db" 
}); 

connection.connect(function(err) { 
    if (err) throw err; 
    console.log("connected as id " + connection.threadId); 
    start(); 
}); 

function start () { 
    console.log("Welcome to Bamazon"); 
    console.log("-----------------------------------")
    console.log("# |  product  |  department  |  price  |  quantity  ");

    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " |  " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
        console.log("-----------------------------------");
    });
}; 
