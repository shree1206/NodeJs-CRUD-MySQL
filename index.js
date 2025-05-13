const express = require('express');
const path = require('path');
const { contactRouter } = require('./routes/contact.routes');
const app = express();

const dirname = __dirname;
const publicPath = path.join(dirname, 'public');

//middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.static(publicPath));

//routes
app.use('/', contactRouter);

//server run at 8800port
app.listen(8800, () => { console.log('Server Started...') })