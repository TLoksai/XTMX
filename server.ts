import express, { Request, Response } from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(bodyParser.json());

// Connect to SQLite database
const db = new sqlite3.Database("./user.db", (err) => {
  if (err) {
    console.error(" Database connection failed:", err.message);
  } else {
    console.log(" Connected to SQLite database (user.db)");
  }
});

// Create contacts table if not exists
db.run(
  `CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT, 
    email TEXT, 
    message TEXT
  )`,
  (err) => {
    if (err) console.error(" Table creation error:", err.message);
    else console.log(" Contacts table ready");
  }
);

// API to store contact form data
app.post("/submit", (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  db.run(
    `INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)`,
    [name, email, message],
    function (err) {
      if (err) {
        console.error(" Insert error:", err.message);
        res.status(500).json({ error: "Failed to save data" });
      } else {
        console.log(` New contact added with ID: ${this.lastID}`);
        res.json({ message: "Form submitted successfully" });
      }
    }
  );
});

// API to get all contacts
app.get("/contacts", (_: Request, res: Response) => {
  db.all("SELECT * FROM contacts", [], (err, rows) => {
    if (err) {
      console.error(" Fetch error:", err.message);
      res.status(500).json({ error: "Failed to fetch data" });
    } else {
      res.json(rows);
    }
  });
});

// Start server
app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`))