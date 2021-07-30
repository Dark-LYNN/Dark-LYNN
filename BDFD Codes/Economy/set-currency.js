// This is only needed if you want to be able change the curency.

// Premium Version 

trigger = $getServerVar[Prefix]setcurrency

code:`
$ignoreTriggerCase
$nomention

$author[Currency Symbole changed]
$description[**$username[$authorID]** has changed the Currency Symbole from $getServerVar[Currency] to $replaceText[$replaceText[$message;default;$getVar[Currency];1];default;;-1]]
$thumbnail[$serverIcon[$guildID]]
$setServerVar[Currency;$replaceText[$replaceText[$message;default;$getVar[Currency];1];default;;-1];$guildID]
$color[$getVar[Color]]

$onlyIf[$message[1]!=;:x: Wrong usage of $getServerVar[Prefix]setcurrency
**Correct Usage:** $getServerVar[Prefix]setcurrency $getServerVar[Currency]
**Note:** if you use $getServerVar[Prefix]setcurrency "default" it resets to the origional emote.]
$onlyPerms[manageserver;:x: You need manageserver permissions]
`

// None Premium Version 

trigger = !setcurrency

code:`
$nomention

$author[Currency Symbole changed]
$description[**$username[$authorID]** has changed the Currency Symbole from $getServerVar[Currency] to $replaceText[$replaceText[$message;default;$getVar[Currency];1];default;;-1]]
$thumbnail[$serverIcon[$guildID]]
$setServerVar[Currency;$replaceText[$replaceText[$message;default;$getVar[Currency];1];default;;-1];$guildID]
$color[$getVar[Color]]

$onlyIf[$message[1]!=;:x: Wrong usage of $getServerVar[Prefix]setcurrency
**Correct Usage:** $getServerVar[Prefix]setcurrency $getServerVar[Currency]
**Note:** if you use $getServerVar[Prefix]setcurrency "default" it resets to the origional emote.]
$onlyPerms[manageserver;:x: You need manageserver permissions]
`
