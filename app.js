const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

//database connection:
db = mysql.createConnection({
    host: "sql3.freesqldatabase.com",
    user: "sql3774224",
    password: "eBc8RIstYE",
    database: "sql3774224",
  });
  
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }
    console.log("Connected to the database!");
  });
  
  
  // middleware to parse form data:
  app.use(bodyParser.urlencoded({ extended: true }));
  
  // letting express know that we are using static files from src folder:
  app.use(express.static(path.join(__dirname, "src")));

  // updated get request:
  app.get("/", (req, res) => {
    res.sendFile("index.html", { root: path.join(__dirname, "src") })
  });
  

  app.post("/submit", (req, res) => {
    const { name, email, phone_number, address, printer_model, quantity } = req.body;
    console.log("Request body:", req.body); // Add this line (AI suggestion)
    const sql = "INSERT INTO printer (name, email, phone_number, address, printer_model, quantity) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [name, email, phone_number, address, printer_model, quantity], (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        res.status(500).send("Error inserting data");
        return;
      }
      res.send("Data inserted successfully!");
      //added result, sql query, and values to see the inserted data: (AI suggestion)
      console.log("Result:", result);
      console.log("SQL Query:", sql);
      console.log("Values:", [name, email, phone_number, address, printer_model, quantity]);
    });
  });
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
  });
  