const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/routes');
const cors = require('cors');
const app = express();

const mongoUrl = "mongodb+srv://diegopanchomales:dieTest123@cluster1.xcn5ei2.mongodb.net/?replicaSet=atlas-1zw9vu-shard-0&w=majority";

mongoose.connect(mongoUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to database");
})
.catch(() => {
    console.log("Error!");
})

app.listen(4000, () => {
    console.log('Server started');
});


app.use(cors())
app.use(express.json());
app.use(routes);