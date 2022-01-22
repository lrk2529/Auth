const express = require("express")
const app = express()
const mongoose = require("mongoose")
const userRoutes = require("./routes/user")


require('dotenv').config();

//Connect to database
try {
  mongoose.connect("mongodb+srv://lrk2529:zxcvb12345!@cluster0.qdpft.mongodb.net/usersdb", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log("connected to db");
}catch (error) {
  handleError(error);
}
process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message);
});

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));

//using user route
app.use(userRoutes);
// console.log(process.env.PORT)
//setup server to listen on port 8080
app.listen(process.env.PORT || 8080, () => {
  console.log("Server is live on port 8080");
})
