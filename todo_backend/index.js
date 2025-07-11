const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config();

const { default: mongoose } = require('mongoose');

const {notfound} = require('./controller/errorcontroller.js');

const path = require('path')
const root = require('./utils/root')
const todoitemsRouter =  require('./Routes/todoitemsRouter.js')

const url = process.env.MONGODB_URL;

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(path.join(root,'public')))
app.use('/api/item',todoitemsRouter)
app.use(notfound)


const PORT = process.env.PORT || 3000;

mongoose.connect(url).then(() => {
  console.log("Connected to MongoDB");
   app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});