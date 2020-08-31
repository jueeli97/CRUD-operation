let express = require("express"); // calling express 
let app = express();
let port =  process.env.PORT || 4500; // port 

let mongoose = require("mongoose"); // calling mongoose

mongoose.connect("mongodb://localhost/apk", { useNewUrlParser: true, useUnifiedTopology: true }) // connecting db
.then(() => console.log("connected to db"))
.catch(error => console.log(`something went wrong ${error.message}`));

app.use(express.json());

let user = require("../day1/routes/user");
app.use("/api/users",user);


app.listen(port, () => console.log(`port is working on ${port}`));
