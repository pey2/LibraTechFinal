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

app.get("/getBook/:DeweyDec", (req, res) => {
    const sql = "SELECT * FROM books_t WHERE DeweyDec = ?";
    const values = [
        req.params.DeweyDec
    ]
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO books_t (DeweyDec, ISBN, Title, Author, Publisher, Genre, Status) VALUES (?)";
    const values = [
        req.body.DeweyDec,
        req.body.isbn,
        req.body.Title,
        req.body.Author,
        req.body.Publisher,
        req.body.Genre,
        "Available"
    ];

    db.query(sql, [values], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(result);
    });
});

app.put('/update/:DeweyDec', (req, res) => {
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

app.delete('/delete/:DeweyDec', (req, res) => {
    const sql = "DELETE FROM books_t WHERE DeweyDec = ?;";
    const DeweyDec = req.params.DeweyDec;
    
    db.query(sql, [DeweyDec], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(result);
    });
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO student_t (StudentID, LastName, FirstName, MidInitial, Email, ContactNum, Password) VALUES (?)";
    const values = [
        req.body.StudentID,
        req.body.LastN,
        req.body.FirstN,
        req.body.MidInitial,
        req.body.Email,
        req.body.ContactNum,
        req.body.Password
    ];

    db.query(sql, [values], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(result);
    });
});

app.post('/adminLogin', (req, res) => {
    const sql = "SELECT * FROM admin_t WHERE Username = ?";
    const values = [
        req.body.username,
        req.body.password
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (result.length === 0) {
            return res.json("Username does not exist.");
        }

        const user = result[0];

        if (user.Password === req.body.password) {
            return res.json("Login Successfully.");
        } else {
            return res.json("Incorrect password.");
        }
    });
});

app.post('/studentLogin', (req, res) => {
    const sql = "SELECT * FROM student_t WHERE StudentID = ?";
    const values = [
        req.body.username,
        req.body.password
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (result.length === 0) {
            return res.json("StudentID does not exist.");
        }

        const user = result[0];

        if (user.Password === req.body.password) {
            return res.json("Login Successfully.");
        } else {
            return res.json("Incorrect password.");
        }
    });
});

app.get("/borrow", (req, res) => {
    const sql = "SELECT DeweyDec, Title, Author, Genre, Status FROM books_t WHERE Status = 'Available'"
    db.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    })
})

app.get("/adminborrow", (req, res) => {
    const sql = "SELECT `StudentID`, `DeweyDec`, `Title`, `Author`, `Genre`, `DateBorrow`, `DueDate` FROM `borrow_t`"
    db.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    })
})

app.get("/getUsers", (req, res) => {
    const sql = "SELECT * FROM student_t"
    db.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    })
})

app.get("/getUser/:StudentID", (req, res) => {
    const sql = "SELECT * FROM student_t WHERE StudentID = ?";
    const values = [
        req.params.StudentID
    ]
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    })
})

app.delete('/deleteUser/:StudentID', (req, res) => {
    const sql = "DELETE FROM student_t WHERE StudentID = ?;";
    const StudentID = req.params.StudentID;
    
    db.query(sql, [StudentID], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(result);
    });
});

app.put('/updateUser/:StudentID', (req, res) => {
    const sql = "UPDATE student_t SET LastName = ?, FirstName = ?, MidInitial = ?, Email = ?, ContactNum = ? WHERE StudentID = ?";
    const values = [
        req.body.lastName,
        req.body.firstName,
        req.body.midInitial,
        req.body.email,
        req.body.contactNum
    ];
    const StudentID = req.params.StudentID;

    db.query(sql, [...values, StudentID], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(result);
    });
});

app.put('/borrowBook/:DeweyDec', (req, res) => {
    const DeweyDec = req.params.DeweyDec;

    const updateSql = `
        UPDATE books_t
        SET Status = 'Borrowed'
        WHERE DeweyDec = ?;
    `;

    const insertSql = `
        INSERT INTO borrow_t (StudentID, DeweyDec, Title, Author, Genre, DateBorrow, DueDate)
        VALUES (?, ?, ?, ?, ?, ?, ?);
    `;

    const updateValues = [DeweyDec];
    const insertValues = [
        req.body.studentId,
        DeweyDec,  // Use DeweyDec in the INSERT statement
        req.body.title,
        req.body.author,
        req.body.genre,
        req.body.dateBorrowed,
        req.body.dueDate
    ];
    // Perform the UPDATE statement
    db.query(updateSql, updateValues, (updateErr, updateResult) => {
        if (updateErr) {
            console.error(updateErr);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        // Perform the INSERT statement
        db.query(insertSql, insertValues, (insertErr, insertResult) => {
            if (insertErr) {
                console.error(insertErr);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            // Return the combined results if needed
            return res.json({ updateResult, insertResult });
        });
    });
});

app.get("/borrowedBooks/:StudentID", (req, res) => {
    const sql = "SELECT `DeweyDec`, `Title`, `Author`, `Genre`, `DateBorrow`, `DueDate` FROM borrow_t WHERE StudentID = ?";
    const values = [
        req.params.StudentID
    ]
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    })
})

app.put('/returnBook/:DeweyDec', (req, res) => {
    const DeweyDec = req.params.DeweyDec;

    const updateSql = `
        UPDATE books_t
        SET Status = 'Available'
        WHERE DeweyDec = ?;
    `;

    const deleteSql = `
        DELETE FROM borrow_t WHERE DeweyDec = ?
    `;

    // Perform the UPDATE statement
    db.query(updateSql, DeweyDec, (updateErr, updateResult) => {
        if (updateErr) {
            console.error(updateErr);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        // Perform the INSERT statement
        db.query(deleteSql, DeweyDec, (insertErr, insertResult) => {
            if (insertErr) {
                console.error(insertErr);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            // Return the combined results if needed
            return res.json({ updateResult, insertResult });
        });
    });
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
})
