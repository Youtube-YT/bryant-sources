module.exports = {
	name: "deposit", 
aliases: 'dep',
code: `$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank;$authorID];$message];$authorID]
$setGlobalUserVar[wallet;$sub[$getGlobalUserVar[wallet;$authorID];$message];$authorID]
$title[Deposited]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[
$username, you deposited $$numberSeparator[$message] into your bank!]
$footer[💵 $$numberSeparator[$sub[$getGlobalUserVar[wallet;$authorID];$message]] | 🏦 $$numberSeparator[$sum[$getGlobalUserVar[bank;$authorID];$message]]]
$onlyIf[$isNumber[$message[1]]==true;That's not a number!]
$onlyIf[$message<=$getGlobalUserVar[wallet;$authorID];Cannot deposit more than what's in your wallet!]
$argsCheck[>1;How much are you depositing? Try this: \`$getServerVar[prefix]dep <amount>\`]
$onlyIf[$getGlobalUserVar[wallet;$authorID]>0;There's nothing to deposit!]`
}