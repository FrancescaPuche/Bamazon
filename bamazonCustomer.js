const mysql = require("mysql"); 
const inquirer = require("inquirer");

const connection = mysql.createConnection({ 
    host: "localhost", 
    port: 3306, 
    user: "root", 
    password: "", 
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
