const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ================= DATABASE =================
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Skondegay29",
    database: "hacktiv8"
});

// CEK CONNECTION
db.connect((err) => {
    if (err) {
        console.log("❌ Database connection failed:", err);
    } else {
        console.log("✅ MySQL Connected!");
    }
});

// ================= TEST ROUTE =================
app.get("/", (req, res) => {
    res.json({
        message: "Server is running 🚀"
    });
});

// ================= CONTACT INSERT =================
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    const sql =
        "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Gagal insert data"
            });
        }

        res.json({
            success: true,
            message: "Data berhasil masuk ✔",
            data: result
        });
    });
});

// ================= GET CONTACT (OPSIONAL NILAI BONUS) =================
app.get("/contact", (req, res) => {
    db.query("SELECT * FROM contacts", (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        res.json(result);
    });
});

// ================= SERVER RUN =================
app.listen(3000, () => {
    console.log("🚀 Server jalan di http://localhost:3000");
});