import express from 'express';
import mongoose from 'mongoose';

mongoose.connect(process.env.DATABASE_CONNECTION).then(() => {
    console.log("Connected to DB")
}).catch((err) => {
    console.log(err)
})

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})