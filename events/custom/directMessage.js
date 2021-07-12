module.exports = async (client, message) => {
	const { channel, author } = message;

	if (author.bot) return;

	channel.send("Hi! I hope your doing great. 😊");
};
