const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "library"
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM books_t"
    db.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO books_t (DeweyDec, ISBN, Title, Author, Publisher, Genre) VALUES (?)";
    const values = [
        req.body.DeweyDec,
        req.body.isbn,
        req.body.Title,
        req.body.Author,
        req.body.Publisher,
        req.body.Genre
    ];

    db.query(sql, [values], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(result);
    });
});

app.put('/update/DeweyDec', (req, res) => {
    const sql = "UPDATE books_t SET ISBN = ?, Title = ?, Author = ?, Publisher = ?, Genre = ? WHERE DeweyDec = ?";
    const values = [
        req.body.isbn,
        req.body.Title,
        req.body.Author,
        req.body.Publisher,
        req.body.Genre
    ];
    const DeweyDec = req.params.DeweyDec;
    
    db.query(sql, [...values, DeweyDec], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(result);
    });
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
})
