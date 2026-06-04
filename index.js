require("dotenv").config();

console.log("TOKEN EXISTS:", !!process.env.TOKEN);
console.log("TOKEN LENGTH:", process.env.TOKEN?.length);

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log(`2Face is online as ${client.user.tag}`);
});

client.login(process.env.TOKEN);
