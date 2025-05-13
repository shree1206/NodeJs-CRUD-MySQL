const { connection } = require('../config/dbConnection');

const contactSelect = (async (req, response) => {
    await connection.query("select * from users", (err, res) => {
        response.render('home', { res });
    })
});

const contactShowByID = (async (req, response) => {
    const id = req.params.id;
    await connection.query(`select * from users where id = ${id}`, (err, res) => {
        response.render('show-contact', { res });
    })
});

const contactDeleteByID = (async (req, response) => {
    const id = req.params.id;
    await connection.query(`delete from users where id = ${id}`, (err, res) => {
        response.redirect('/');
    })
});

const contactAdd = (async (req, response) => {
    const data = req.body;
    var sql = "INSERT INTO users (name, email, contact, address) VALUES (?, ?, ?, ?)";
    let fields = [data.name, data.email, data.contact, data.address];
    await connection.query(sql, fields, function (err, result) {
        if (err) throw err;
        console.log('Id:' + result.insertId);
        response.redirect('/');
    });
});

const contactShowUpdate = (async (req, response) => {
    const id = req.params.id;
    await connection.query(`select * from users where id = ${id}`, (err, res) => {
        response.render('update-contact', { res, id });
    })
});

const contactUpdateByID = (async (req, response) => {
    const id = req.params.id;
    const data = req.body;
    const sql = 'UPDATE users SET name = ?, email = ?, address = ?, contact =? WHERE id = ?';
    const values = [data.name, data.email, data.address, data.contact, id];
    await connection.query(sql, values, (err, res) => {
        response.redirect('/');
    })
});

module.exports = {
    contactSelect: contactSelect,
    contactShowByID: contactShowByID,
    contactDeleteByID: contactDeleteByID,
    contactAdd: contactAdd,
    contactShowUpdate: contactShowUpdate,
    contactUpdateByID: contactUpdateByID
}