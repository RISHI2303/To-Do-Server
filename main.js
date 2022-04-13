var express = require("express");
var fs = require("fs");
var app = express();

app.use(express.static("todo"));

app.get("/todo", function (req, res) {
	console.log(req.body)
	fs.readFile("./db.txt", "utf-8", function (err, data) {
		res.end(data);
	});
});



app.listen(3000, function () {
	console.log("listening on 3000");
});
