var TelegramBot = require('node-telegram-bot-api');

var token = '1044995525:AAFZGYnyJ3Xg-XCjxMqHO4uFGtxLV1nbXzk';
var bot = new TelegramBot(token, {polling: true});


bot.onText(/(.+)/, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];

    bot.sendMessage(fromId, resp);
});
