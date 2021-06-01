module.exports = {
	name: "disable",
	code: `$title[$username've Disable]
	$description[$username have disable greeting system!]
    	$onlyPerms[admin;you do not have permission to do that!]
	$setServerVar[welcome;]
	$setServerVar[left;]
	$color[RED]`
}