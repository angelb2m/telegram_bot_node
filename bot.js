const TelegramBot = require('node-telegram-bot-api');

// API Token Telegram
const token = '781753975:AAE-ZfNuvKDDbZf0uTlAeDAGNto0EU9QZrM';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Cuando mandes el mensaje "Hola" reconoce tú nombre y genera un input: Hola Daniel
bot.onText(/^\/hola/, (msg) => {
     bot.sendMessage(msg.chat.id, "Hola  " + msg.from.first_name);
 });
