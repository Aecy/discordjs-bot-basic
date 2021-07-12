const { Client, Collection } = require("discord.js");
const { loadCommands, loadEvents } = require("./utils/loader");

const client = new Client({
	disableMentions: "everyone",
	restTimeOffset: 0
});

client.config = require("./config");

["commands", "cooldowns"].forEach(x => client[x] = new Collection());

loadCommands(client);
loadEvents(client);

client.login(client.config.token);
