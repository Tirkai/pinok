import * as dotenv from "dotenv";
import * as express from "express";
import { Telegraf } from "telegraf";

dotenv.config();

const chatIds = [];

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((context) => {
  chatIds.push(context.chat.id);
  context.reply("Inited");
});

bot.launch();

const app = express();
const host = "0.0.0.0";
const port = 8080;

app.listen(port, host, () => console.log(`Running in ${host}:${port}`));

app.get("/hook", (req, res) => {
  chatIds.forEach((id) => bot.telegram.sendMessage(id, "Pinok!"));
  res.send(true);
});
