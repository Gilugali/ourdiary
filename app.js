const express = require("express");
const mongoose = require("mongoose");

const app = express();

// conenction to mongodb
const uri = 'mongodb+srv://gigi:gigigashami@cluster0.uenwqpb.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true,})
 .then((result)=> console.log("connected to the Db"))
 .catch((err)=> console.log(err))


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/css', express.static('css'))
app.use('/img', express.static('img'))
app.set("view engine", "ejs");



// routes
app.use(require("./routes/index"))
app.use(require("./routes/todos"))


// server configurations....
app.listen(3000, () => console.log("Server started listening on port: 3000"));