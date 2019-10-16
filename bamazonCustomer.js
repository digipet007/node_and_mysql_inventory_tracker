var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "flowerfa1!",
    database: "bamazon"
})

connection.connect(function(err){
    if (err) throw err;
    console.log("connection successful!");
    makeTable();
})

//prints data from MySQL database to console
function makeTable(){
    console.log("showing products in table");
    connection.query("SELECT * FROM products", function(err, res){
        for(var i=0; i< res.length; i++){
            console.log(res[i].item_id+ " || " + res[i].product_name + " || "+ res[i].department_name + " || " + res[i].price + " || " + res[i].stock_quantity + "\n");
        }
        promptCustomer(res);
    })
}

//make it so a user can select an option and buy
var promptCustomer = function(res){
    //prompt function takes in object from connection query to make database table options available to customer
    inquirer.prompt([{
        type: 'input',
        name: 'choice',
        message: "What would you like to buy? [Press Q to quit]"
    }]).then(function(answer){
        //The program loops through the response variable and
        //if the customer chooses an item within the table, 
        //the correct variable is set to true
        //product variable is set to the user's choice
        //and the chosen item's id number is stored in the id variable
        var correct = false;
        for(var i=0; i<res.length; i++){
            //if the user enters q, the application will quit
            if(answer.choice.toUpperCase()=="Q"){
                process.exit();
            }
            if(res[i].product_name==answer.choice){
                correct = true;
                var product = answer.choice;
                var id=i;
                //find out how many items user would like to buy
                inquirer.prompt({
                    type: "input",
                    name: "quant",
                    message: "How many would you like to buy?",
                    validate: function(value){
                        if(isNaN(value)==false){
                            return true;
                        } else {
                            return false;
                        }
                    }
            }).then(function(answer){
                //if the customer's desired quantity is less than the current stock quantity,
                //the program will purchase that quantity and update that quantity on the database
                if((res[id].stock_quantity-answer.quant)>0){
                    console.log("we certainly have enough of that. No issues here!");
                    connection.query("UPDATE products SET stock_quantity='"+(res[id].stock_quantity-answer.quant)+"'WHERE product_name='" + product+ "'", function(err, res2){
                        console.log("Product Purchased");
                        makeTable();
                    })
                } else {
                    console.log("Not a valid selection. Please try again");
                    promptCustomer(res);
                }
            })
            }
        }
        //extra safeguard incase user does not enter a productfrom the database
        if(i == res.length && correct == false){
            console.log("Not a valid selection");
            promptCustomer(res);
        }  
    })
}

