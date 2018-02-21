var express = require("express");
var bodyParser = require("body-parser");
 
var app = express();

app.use("/public",express.static('public'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));



app.set("view engine", "jade");

app.get("/", function (req, res) {
	res.render("index");
});

app.get("/login", function (req, res) {
	res.render("login");
});

app.post("/users", function (req, res) {
	console.info("Contraseña: "+req.body.pass);
	console.info("Email: "+req.body.email);
	res.send("recibimos tus datos");
});


app.listen(8080);