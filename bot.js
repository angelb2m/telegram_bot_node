const TelegramBot = require('node-telegram-bot-api');
const OpenGraph = require('open-graph-scraper');
const fs = require('fs');
const API = "news.json";


// API Token Telegram
const token = '862893233:AAEcnBmybxFy39fPxlTC3c2OFRGp5eHcVFc';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Cuando mandes el mensaje "Hola" reconoce tú nombre y genera un input: Hola Daniel
bot.on('message', (msg) => {
var Hi = "hi";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id, "Hello dear user");
}
var bye = "bye";
if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
}
var robot = "I'm robot";
if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
}

var reset = "reset";
if (msg.text.toString().toLowerCase().includes(reset)) {
  var options = {'url': 'https://bit2main.com/aceptacion-de-blockchain/'};

    OpenGraph(options)
      .then(function (result) {
        var json = JSON.stringify(result);
        var datax = "["+json+"]";
        fs.writeFile(API, datax, 'utf8', (err) => {
          if (err != null) {
            bot.sendMessage(msg.chat.id,"error")
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
if (msg.text.toString().toLowerCase().includes(xxx)) {

  var options = {'url': msg.text.toString().toLowerCase()};

    OpenGraph(options)
      .then(function (result) {
        bot.sendMessage(msg.chat.id, "First step")

        fs.readFile(API, 'utf8', function readFileCallback(err, data){
          obj = JSON.parse(data); //now it an object
          obj.push(result); //add some data
          json = JSON.stringify(obj); //convert it back to json
          bot.sendMessage(msg.chat.id, "Second step")


          fs.writeFile("news8.json", json, 'utf8', (err) => {
            bot.sendMessage(msg.chat.id, "Third step")

            if (err != null) {
              bot.sendMessage(msg.chat.id,"error")
            }else{
              bot.sendMessage(msg.chat.id,"API Reseted")
            }
          })
        })
      })
      .catch(function (error) {
        bot.sendMessage(msg.chat.id,error.toString())
      });
}


});
