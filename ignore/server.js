var restify = require('restify');
const fs = require('fs');
const API = "news.json";

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

function respond2(req, res, next) {
  fs.readFile(API, 'utf8', function readFileCallback(err, data){
    obj = JSON.parse(data); //now it an object
    obj.push({ "piwa": "piwa", "piwa": "piwa", "piwa": "piwa", "main": "piwa" }); //add some data
    json = JSON.stringify(obj); //convert it back to json


    fs.writeFile(API, json, 'utf8', (err) => {
      if (err != null) {
        res.send("Error XXX")
        next();
      }else{
        res.send("Ok xoxoxo")
        next();
      }
    })
  })
}

function respond3(req, res, next) {
  fs.readFile(API, 'utf8', (err, data) => {res.send(data)});
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.get('/do', respond2);
server.head('/do', respond2);

server.get('/api/', respond3);
server.head('/api/', respond3);



server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
