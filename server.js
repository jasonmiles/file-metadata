var express = require('express')
var multer = require('multer')
var upload = multer({ dest: 'uploads/'})
var app = express()

app.get('/', function(req, res) {
  res.sendfile('index.html')
})

app.post('/upload', upload.single('file'), function (req, res, next) {
  res.send({size: req.file.size.toString()});
})

app.listen('8080', function() {
  console.log("App listening on port 8080")
})
