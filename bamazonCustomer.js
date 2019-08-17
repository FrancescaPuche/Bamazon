const mysql = require("mysql"); 
const inquirer = require("inquirer");
const Table = require("cli-table");

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
    console.log('------------------------------------------------------------------------');
	console.log('                           Welcome To Bamazon                           ');
	console.log('------------------------------------------------------------------------');

    var query = "Select * FROM products";
	connection.query(query, function(err, res){
		console.log('------------------------------------------------------------------------');
		console.log('           Please Choose From One Of The Following Categories           ');
		console.log('------------------------------------------------------------------------');
		if(err) throw err;
		var displayTable = new Table ({
			head: ["Item ID", "Product Name", "Department", "Price", "Inventory"],
			colWidths: [10,50,25,10,12]
		});
		for(var i = 0; i < res.length; i++){
			displayTable.push(
				[res[i].item_id,res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
				);
		}
		console.log(displayTable.toString());
	});
}; 
