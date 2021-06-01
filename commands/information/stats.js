module.exports = ({
	name: "stats",
	aliases: ["botinfo"],
 description: "Shows the bot's stats",
 code: `
 $editMessage[$get[msgid];{author:$username[$clientID] Status:$userAvatar[$clientID]}
 {field:Ping:\`$ping\`:yes}
 {field:Database Ping:\`$dbPing\`:yes}
 {field:CPU:\`$cpu\`:yes}
 {field:RAM:\`$ram\`:yes}
 {field:Runtime:\`$uptime\`:yes}
 {field:Version:\`$packageVersion\`:yes}
 {field:Developer:\`$userTag[$botOwnerID]\`:yes}
 {color:ORANGE}]
 
 $wait[3s]
 
 $botTyping
 
 $editMessage[$get[msgid];{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
 {description:\`Fetching RAM...\`}
 {color:ORANGE}]
 $wait[$textSlice[a$findNumbers[$ram];1;5]ms]
 
 $editMessage[$get[msgid];{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
 {description:\`Fetching CPU...\`}
 {color:ORANGE}]
 $wait[$textSlice[a1$findNumbers[$cpu]00;1;5]ms]
 
 $editMessage[$get[msgid];{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
 {description:\`Fetching Ping...\`}
 {color:RED}]
 $wait[$textSlice[x$ping000;1;5]ms]
 
 $botTyping
 
 $let[msgid;$sendMessage[{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
 {color:RED};yes]]
 
 $serverCooldown[10s;Please wait %time%.]`
})