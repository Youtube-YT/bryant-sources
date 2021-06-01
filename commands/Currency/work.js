module.exports = {
	name: "work",
	code: `
	$globalCooldown[10m;Please wait %time% before you working again!]
	$title[Someone Is Working]
	$description[$username you work as $randomText[a police officer;chief;hacker;a developer;website builder;Youtuber;Mc Donald Worker] and earned $$random[1000;5000]]
	$color[RANDOM]
	$setGlobalUserVar[wallet;$sum[$getGlobalUserVar[wallet;$authorID];$random[1000;5000]];$authorID]`
}