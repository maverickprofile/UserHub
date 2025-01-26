const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Mashp@123',
  });

  let createRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
  };


  // Home Page route
  app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
      connection.query(q,  (err, result) => {
      if (err) {
          console.error("Error inserting data: ", err);
          res.send("Some error in database");
          return;
      }
      console.log("Data inserted successfully: ", result);
      let count = result[0]["count(*)"];
  res.render("home.ejs", { count });
  });
  });

// show route
app.get("/user", (req, res) =>{
  let q =`SELECT * FROM user`;
  connection.query(q,  (err, result) => {
    if (err) {
        console.error("Error inserting data: ", err);
        res.send("Some error in database");
        return;
    }
    res.render("show.ejs", {result});
});
});

// edit route
app.get("/user/:id/edit", (req, res) =>{
  let { id } = req.params; 
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  connection.query(q,  (err, result) => {
    if (err) {
        console.error("Error inserting data: ", err);
        res.send("Some error in database");
        return;
    }
    let user = result[0]
    res.render("edit.ejs", {user});
});
});

// UPDATE route
app.patch("/user/:id", (req, res) =>{
  let { id } = req.params;
  let{ password: formPass, username: newUsername } = req.body;
  let q =`SELECT * FROM user WHERE id = '${id}'`;

  connection.query(q,  (err, result) => {
    if (err) {
        console.error("Error inserting data: ", err);
        res.send("Some error in database");
        return;
    }
    let user = result[0]
    if(formPass != user.password){
      res.send("WRONG PASSWORD");
    }else{
      let q2 = `UPDATE user SET username = '${newUsername}' WHERE id= '${id}'`;
      connection.query(q2, (err, result) =>{
        if(err) throw err;
        res.redirect("/user");
      })
    }
});

  
})

  app.listen("8080", () =>{
    console.log("Server is running on port 8080");
  });






