require('dotenv').config();

import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true , useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', (error=> console.log('Error connecting to database: ', error)))
db.once('open',()=> console.log('connected to databse'))

app.use(express.json())

const driversRouter = require('./routes/drivers')
const vehiclesRouter = require('./routes/vehicles')

app.use('/drivers', driversRouter)
app.use('/vehicles', vehiclesRouter)


app.listen(3000, ()=> console.log('server is running on port 3000'))