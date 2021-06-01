module.exports = {
	name: "wsetup",
	code: `$argsCheck[1;Please Mention A Channel To Setup Welcome Channel!]
	$title[$username've Changed The Welcome Channel!]
	$description[$username change the welcome channel into <#$findChannel[$message[1]]>]
	$setServerVar[welcome;$findChannel[$message[1]]]
	$onlyPerms[admin;You do not have permission to do that]
	$color[RANDOM]`
}