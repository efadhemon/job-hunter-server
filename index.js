const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();
const app = express()
const port = process.env.PORT || 4000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello I am from server')
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.d0ugz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const jobsCollection = client.db(process.env.DB_NAME).collection("jobs");

    if (err) {
        console.log('DataBase Not Connected');
    } else {
        
        

    }

});


app.listen(port)