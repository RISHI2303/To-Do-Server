var express = require("express");
var fs = require("fs");
var app = express();

app.use(express.static("todo"));

app.get("/", function (req, res) {
	fs.readFile("./todo/index.html", "utf-8", function (err, data) {
		res.end(data);
	});
});

// app.get('/style.css', function (req, res) {
//     fs.readFile('style.css', "utf-8", function (err, data) {
//         res.end(data);
//     });
// });

app.listen(3000, function () {
	console.log("listening on 3000");
});
