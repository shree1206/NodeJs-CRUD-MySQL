const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { contactRouter } = require('./routes/contact.routes');
const app = express();

dotenv.config({ path: `${__dirname}/config/.env` });
const dirname = __dirname;
const publicPath = path.join(dirname, 'public');

//middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.static(publicPath));

//routes
app.use('/', contactRouter);

//server run at 8800port
app.listen(process.env.PORT, () => { console.log(`${process.env.ENVIRONMENT} Server Started...`) })