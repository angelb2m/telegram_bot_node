const TelegramBot = require('node-telegram-bot-api');
const OpenGraph = require('open-graph-scraper');
const fs = require('fs')

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

var xxx = "xxx";
if (msg.text.toString().toLowerCase().includes(xxx)) {
  var options = {'url': 'https://bit2main.com/aceptacion-de-blockchain/'};

    OpenGraph(options)
      .then(function (result) {
        var json = JSON.stringify(result);
        var array = JSON.parse(json);
        fs.writeFile('news.json', array, 'utf8', (err) => {
          if (err != null) {
            bot.sendMessage(msg.chat.id,"error")
          }else{
            bot.sendMessage(msg.chat.id,"Datos escritos en API")
          }
        });
      })
      .catch(function (error) {
        bot.sendMessage(msg.chat.id,error.toString())
      });
    bot.sendMessage(msg.chat.id, "xxxxxxxxxxxx");
}

var aaa = "aaa";
if (msg.text.toString().toLowerCase().includes(aaa)) {
  const API = "news.json";
  readTextFile(API)
  function readTextFile(file)
  {
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", file, false);
      rawFile.onreadystatechange = function ()
      {
          if(rawFile.readyState === 4)
          {
              if(rawFile.status === 200 || rawFile.status == 0)
              {
                  var allText = rawFile.responseText;
                  bot.sendMessage(msg.chat.id, allText);
              }
          }
      }
      rawFile.send(null);
  }
}


});
