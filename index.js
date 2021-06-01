const keepAlive = require("./server.js");
const Aoijs = require("aoi.js")
const bot = new Aoijs.Bot({
 sharding: false, //true or false 
 shardAmount: 2, //Shard amount 
 mobile: false, //true or false - Discord Mobile Status
 //dbhToken: "API KEY", Remove // if using, get an API Key from their Server
 token: process.env.token, //Discord Bot Token
 prefix: ["*"],
 autoUpdate: true, //Change PREFIX to your Prefix
})
keepAlive();


bot.onMessage() // Allows Commands to Executed
bot.loadCommands(`./commands/`) 

bot.status({
	text: "Bot Are Remaking!",
	type: "WATCHING"
})

bot.onGuildJoin({
	channel: "$randomChannelID",
	code: `Hello Thanks For Inviting To $serverName! My Prefix Was \`-\``
})

bot.joinCommand({
	channel: "$getServerVar[welcome]",
    code: `$thumbnail[$userAvatar[$authorID]]
	$title[$username've Joined The Server!]
	$description[Welcome $username to $serverName!]
	$color[RANDOM]`
})
bot.onJoined()

bot.leaveCommand({
	channel: "$getServerVar[left]",
	code: `$thumbnail[$userAvatar[$authorID]]
	$description[Aww $username have left the server :<]
	$color[RANDOM]`
})
bot.onLeave()

bot.variables({
	prefix: "-",
	wallet: "0",
	bank: "1000",
	welcome: "",
	left: "",
})




