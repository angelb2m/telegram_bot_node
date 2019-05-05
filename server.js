const TelegramBot = require('node-telegram-bot-api');
const OpenGraph = require('open-graph-scraper');
var restify = require('restify');
const fs = require('fs');
const API = "news.json";

var server = restify.createServer();

// API Token Telegram
const token = '862893233:AAEcnBmybxFy39fPxlTC3c2OFRGp5eHcVFc';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  var Hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
      bot.sendMessage(msg.chat.id, "Hello dear user");
  }

var reset = "/rst";
if (msg.text.toString().toLowerCase().includes(reset)) {
  var options = {'url': 'https://bit2main.com/aceptacion-de-blockchain/'};

    OpenGraph(options)
      .then(function (result) {
        var json = JSON.stringify(result);
        var datax = "["+json+"]";
        fs.writeFile(API, datax, 'utf8', (err) => {
          if (err != null) {
            bot.sendMessage(msg.chat.id,"error 0x0003")
          }else{
            bot.sendMessage(msg.chat.id,"API Reseted")
          }
        })
      })
      .catch(function (error) {
        bot.sendMessage(msg.chat.id,error.toString())
      });
    bot.sendMessage(msg.chat.id, "Ready")
}

var http = "http";
if (msg.text.toString().toLowerCase().includes(http)) {

  var options = {'url': msg.text.toString().toLowerCase()};

    OpenGraph(options)
      .then(function (result) {
        fs.readFile(API, 'utf8', function readFileCallback(err, data){
          obj = JSON.parse(data); //now it an object
          obj.push(result); //add some data
          json = JSON.stringify(obj); //convert it back to json
          fs.writeFile(API, json, 'utf8', (err) => {
            if (err != null) {
              bot.sendMessage(msg.chat.id,"error 0x0002")
            }else{
              bot.sendMessage(msg.chat.id,"API updated")
            }
          })
        })
      })
      .catch(function (error) {
        bot.sendMessage(msg.chat.id,"error 0x0001")
        bot.sendMessage(msg.chat.id,error)
      });
}


});



server.get('/api/news', newsList);
server.head('/api/news', newsList);


function newsList(req, res, next) {


  fs.readFile(API, 'utf8', (err, data) => {
    var obj;
    obj = JSON.parse(data);
    res.send(obj)
  });
  next();
}

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
