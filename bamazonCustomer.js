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
		console.log("------------------------------------------------------------------------");
		console.log("           Please Choose From One Of The Following Categories           ");
		console.log("------------------------------------------------------------------------");
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
        console.log("------------------------------------------------------------------------");
        purchaseQuestions();
        
	});
}; 

function purchaseQuestions() {
	inquirer.prompt([
	{
		name: "ID",
		type: "input",
		message:"Please enter Item ID you would like to purhcase.",
		filter:Number
	},
	{
		name:"QTY",
		type:"input",
		message:"How many items do you wish to purchase?",
		filter:Number
    }
    ]).then(function (response) { 
        connection.query("SELECT * FROM products WHERE item_id=?", response.ID, function(err, res) { 
            if (res[0] == undefined) {
                console.log("------------------------------------------------------------------------");
                console.log("*        Sorry there are no items with  '" +  response.ID + "'         *");
                console.log("*                   Please type in a valid item ID                     *");
                console.log("------------------------------------------------------------------------");
                purchaseQuestions();
            }

            for (var i = 0; i < res.length; i++) {
                if (answers.QTY > res[i].stock_quantity) {
                    console.log("------------------------------------------------------------------------");
                    console.log("* Sorry, it looks like there isn't enough in stock. Please come back later *");
                    console.log("------------------------------------------------------------------------");
                    start();
                } else { 
                    console.log("------------------------------------------------------------------------");
                    console.log("*                   Thank you for placing your order                   *");
                    console.log("------------------------------------------------------------------------");
                    console.log("You've selected:");
                    console.log("----------------");
                    console.log("Item: " + res[i].product_name);
                    console.log("Quantity: " + answers.QTY);
                    console.log("----------------");
                    console.log("Total: " + res[i].price * answers.QTY + "  $ ");
                    console.log("========================================================================");

                    var newStock = (res[i].stock_quantity - answers.QTY);
                    var purchaseId = (answers.ID);
                    confirmPrompt(newStock, purchaseId);
                }
            } 
        });
    });
}