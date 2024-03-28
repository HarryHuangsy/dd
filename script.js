const yourName = 'Harry';  
const yourID = 'xxxxxxxx';  
const yourmac = ' xx-xx-xx-xx-xx-xx';
const yourip = 'xx.xx.x.xx';
console.log(`I'm ${yourName}.my IP is:${yourip}.my Mac address is:${yourmac}.NCC student ID is: (${yourID})`);   //to obtain user's information
  
const sqlite3 = require('sqlite3').verbose();  
const readline = require('readline');  
const rl = readline.createInterface({    //import some environment
    input: process.stdin,  
    output: process.stdout  
});  
  
//create database if not exist
const db = new sqlite3.Database('./bookdetails.db', (err) => {  
    if (err) {  
        return console.error(err.message);  
    }  
    console.log('Connected to the bookdetails database.');  
  
    //create table if not exist
    db.run(`  
        CREATE TABLE IF NOT EXISTS bookdetailstable (  
            id610 INTEGER PRIMARY KEY AUTOINCREMENT,  
            title610 TEXT NOT NULL,               
            author610 TEXT NOT NULL,  
            isbn610 TEXT NOT NULL,  
            context610 TEXT NOT NULL  
        )  
    `, (err) => {    
        if (err) { 

            return console.error(err.message);  
            
        }  

        console.log('Books table created or already exists.');  
        insertBooks();  

    });  
});  
  
function insertBooks() {  
    rl.question('Enter book title: ', (title610) => {  
        rl.question('Enter book author: ', (author610) => {  
            rl.question('Enter book ISBN: ', (isbn610) => {  
                rl.question('Enter book context: ', (context610) => {  
                    db.run(`INSERT INTO bookdetailstable (title610, author610, isbn610, context610) VALUES (?, ?, ?, ?)`,  
                        [title610, author610, isbn610, context610],  
                        (err) => {  
                            if (err) {  
                                return console.error(err.message);  
                            }  
                            console.log('Book inserted successfully.');  
  
                            rl.question('Do you want to enter another book? (yes/no): ', (answer) => {  
                                if (answer.toLowerCase() === 'yes') { 

                                    insertBooks();  

                                } else {  

                                    listAllBooks();  
                                    rl.close();  //close the readline

                                }  
                            });  
                        }  
                    );  
                });  
            });  
        });  
    });  
}   //read the information to insert 
  

function listAllBooks() {                  //list bookdetails after the user entered
    console.log('Listing all bookdetails:');  
    db.all('SELECT * FROM bookdetailstable', [], (err, rows) => {  
        if (err) {  
            return console.error(err.message);  
        }  
        rows.forEach((row) => {  
            console.log(`ID: ${row.id610}, Title: ${row.title610}, Author: ${row.author610}, ISBN: ${row.isbn610},Context:${row.context610}`);  
        });  
    });  
}

// use the function  
insertBooks();