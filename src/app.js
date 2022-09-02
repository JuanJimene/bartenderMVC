const express = require("express")
const app = express();
const router = require("./router")
const mongo = require('mongodb');
const Handlebars = require("handlebars");

//configuration
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static("public"))
app.set("views", "views")
app.set("view engine", "hbs")

app.use("/customer", router)

let PORT = process.env.PORT;
 if (PORT == null || port == "") {
   PORT = 5000;
}

app.listen(PORT, () =>{
  console.log("The server is running on port 5000");
})
