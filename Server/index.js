const express = require('express');
const cors = require('cors');
const db = require('./database/connetdb')
const productRouter = require('./routers/index')

require('dotenv').config();


const app = express();
const port = 3000;
db.connect();


app.use(cors());
app.use(express.json());
app.use('/product', productRouter);


app.listen(port,() => {
    console.log(`server is runing on http://localhost:${port}`)
})