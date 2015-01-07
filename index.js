var SerialPort = require("serialport").SerialPort;
var express = require('express');
var app = express();

var serialPort = new SerialPort("/dev/ttyUSB0", {
  baudrate: 9600
});


app.get('/print/:text', function (req, res) {
  console.log("Received :" + req.params.text);
  serialPort.write(req.params.text, function(err, results) {
    console.log('err ' + err);
    console.log('results ' + results);
  });  
  res.send('OK')
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
