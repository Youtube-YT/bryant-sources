module.exports = {
	name: "lsetup",
	code: `$argsCheck[1;Please Mention A Channel To Setup Leave Channel!]
	$title[$username've Changed The Left Channel!]
	$description[$username change the left channel into <#$findChannel[$message[1]]>]
	$setServerVar[left;$findChannel[$message[1]]]
	$onlyPerms[admin;You do not have permission to do that]
	$color[RANDOM]`
}