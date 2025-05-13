const express = require('express');
const { contactSelect, contactShowByID, contactDeleteByID, contactAdd, contactShowUpdate, contactUpdateByID } = require('../controller/contacts.controller')
const router = express.Router();

router.get('/', contactSelect);

router.get('/show-contact/:id', contactShowByID);

router.get('/add-contact', (req, res) => {
    res.render('add-contact');
});

router.post('/add-contact', contactAdd);

router.get('/update-contact/:id', contactShowUpdate);

router.post('/update-contact/:id', contactUpdateByID);

router.get('/delete-contact/:id', contactDeleteByID);

router.get(/(.*)/, (req, res, next) => {
    res.redirect('/')
    next();
});

module.exports = {
    contactRouter: router
}