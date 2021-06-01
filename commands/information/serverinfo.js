module.exports = {
	name: "serverinfo",
	aliases: ["si"],
	code: `$title[$serverName Information]

	$description[👑**Server Owner 
	**\`$username[$ownerID]#$discriminator[$ownerID]\`

	**Server Verification**
	\`$serverVerificationLevel\`

	**Members Count**
	\`$membersCount\`

	**Bots Count**
	\`$botCount\`

	**Text Channels**
	\`$channelCount[text]\`

	**Voice Channels**
	\`$channelCount[voice]\`

	**Total Channels**
	\`$channelCount\`

	**Roles**
	\`$guildRoles\`
	
	**Boost Level**
	\`$serverBoostLevel\`
	
	**Server Boosts**
	\`$serverBoostCount\`
	
	**Region**
	\`$serverRegion\`
	]
	$color[$randomText[#17fc03;#03ffff;#ff0026;#fffb00]]`
}