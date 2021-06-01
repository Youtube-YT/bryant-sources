module.exports = {
	  name: 'withdraw',
  aliases: 'with',
  code: `$setGlobalUserVar[wallet;$sum[$getGlobalUserVar[wallet;$authorID];$message];$authorID]
$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank;$authorID];$message];$authorID]
$title[Withdrew]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[
$username, you withdrew $$numberSeparator[$message] from your bank!]
$footer[💵 $$numberSeparator[$sum[$getGlobalUserVar[wallet;$authorID];$message]] | 🏦 $$numberSeparator[$sub[$getGlobalUserVar[bank;$authorID];$message]]]
$onlyIf[$isNumber[$message[1]]==true;That's not a number!]
$onlyIf[$message<=$getGlobalUserVar[bank;$authorID];Cannot withdraw more than what's in your bank!]
$argsCheck[>1;How much are you withdrawing?]
$onlyIf[$getGlobalUserVar[bank;$authorID]>0;There's nothing to withdraw!]`
}