import express from 'express';
const app = express();
import dotenv from 'dotenv'
dotenv.config()
import './db/connection.js'


// Importing Tour Route here
import { tourRoute } from './routes/tourRoute.js';

tourRoute.use('/api/v1/tours',tourRoute)


// Run Your Server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is Running on the port ${port}`);
})

