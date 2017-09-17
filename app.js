var express = require("express");
var app = express();
var port = 3000;
app.use(express.static(__dirname));

app.get("/", (req, res) => {
 res.sendFile(__dirname+"/Main.html");
});
 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});

