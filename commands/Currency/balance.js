module.exports = {
	name: "balance",
	aliases: ["bal", "wallet"],
	code: `$title[$username[$mentioned[1;yes]]'s Balance]
	$description[
		💵Money: $numberSeparator[$getGlobalUserVar[wallet;$mentioned[1;yes]]]

		💰Bank: $numberSeparator[$getGlobalUserVar[bank;$mentioned[1;yes]]]
	]
	$color[RANDOM]`
}