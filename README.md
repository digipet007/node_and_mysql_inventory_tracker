# node_and_mysql_inventory_tracker

This is an Amazon-like storefront that uses MySQL. The app will take in orders from customers and deplete stock from the store's inventory.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To utilize this app, you will need access to the command line. You may use the command line within VS Code or any other command line interface, such as Bash (Born-Again-SHell).

You will also need the Node Packet Manager installed.  For more information, visit: <https://www.npmjs.com/get-npm>

### Installing

To install, access the Github page (https://github.com/digipet007/node_and_mysql_inventory_tracker).  You may fork the repository and then clone it to your computer.  

Next, you will need to download the required NPM packages.  The required NPM packages include:
```
* "inquirer": "^7.0.0",
* "mysql": "^2.17.1"
```
Because these are listed as dependencies already in the package.json file, you may install these packages by typing `npm install` on the commandline.

Your Inventory Tracking app should now be up and running!

## Deployment and General Use

To use this app, run it in the terminal with the following command:

`node bamazonCustomer.js`

The inquirer will then display current products and prompt the user to specify the target product for purchase as well as the desired quantity.  Please note that this is currently case-sensitive and will not recognize product entries that do not exactly match the database's product names.

Here is a live demonstration of this app:

[![using command line prompts](http://img.youtube.com/vi/1reuKn2ajY0/0.jpg)](http://www.youtube.com/watch?v=1reuKn2ajY0 "Node and MySQL Inventory Tracker")


## Built With

* Javascript

The following packages were used to create this app:
* mysql <https://www.npmjs.com/package/mysql>
* inquirer <https://www.npmjs.com/package/inquirer>

## Author

* **Sarah Arnold** --view my portfolio and bio: <https://digipet007.github.io/Sarahs-Portfolio/>

## Acknowledgments

* Created for UW Full Stack Flex Certificate program, according to program specifications.