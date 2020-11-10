import { Telegraf } from 'telegraf';
import * as express from 'express'
import * as dotenv from 'dotenv';

dotenv.config();

const chatIds = [];

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    chatIds.push(ctx.chat.id);
    ctx.reply('Inited');
});

bot.launch();

const app = express();

app.listen(7000, () => console.log("express ready"))

app.get("/hook", (req, res) => {
    chatIds.forEach(id => bot.telegram.sendMessage(id, "Pinok!"));
    res.send(true);
})
