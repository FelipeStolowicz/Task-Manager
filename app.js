const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const mongoose = require('mongoose')
require ('dotenv').config()

//middleware
app.use(express.json())
app.use(express.static('./public'))

//routes 
app.use('/api/v1/tasks',tasks)

const port = 5000;

const start = async () => {
    try {
         mongoose.set('strictQuery', false);
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

start();