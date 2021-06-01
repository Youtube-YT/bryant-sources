module.exports = {
	name: "beg", 
code: `$setGlobalUserVar[wallet;$sum[$getGlobalUserVar[wallet;$authorID];$random[100;1000]];$authorID]

$title[Beg]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[$username, $randomText[Begging is for the weak so here;Here, take this and go;Here, don't let this be a habit;I take you for a well put together human being, why are you begging?;Why can't you just get a job?]
]
$footer[💵 $$random[100;1000]
$globalCooldown[30s;Quit being a begger and try again in %time%]`
}