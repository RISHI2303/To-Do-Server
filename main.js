var express = require("express");
var fs = require("fs");
var app = express();

app.use(express.static("todo"));
app.use(express.json());

app.get("/todo", function (req, res) {
	console.log(req.body);
	fs.readFile("./db.txt", "utf-8", function (err, data) {
		res.end(data);
	});
});

app.post("/save", function (req, res) {
	fs.readFile("./db.txt", "utf-8", function (err, data) {
		var todos = [];
		if (data.length > 0) {
			todos = JSON.parse(data);
		}
		todos.push(req.body);
		console.log(req.body);
		fs.writeFile("./db.txt", JSON.stringify(todos), function (err, data) {
			if (err) {
				res.end("error", err);
			} else {
				res.send("saved");
			}
		});
	});
});

app.listen(3000, function () {
	console.log("listening on 3000");
});
