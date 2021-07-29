module.exports = ({
    name: "tags",
    aliases: ['tg' , 'tag'],
    code: `
    $author[Message tags;$userAvatar[$clientID]]
    $color[fc5068]
	$addField[Channel tags:;
\`{server.id}\` - Get the Id of the server | **800133788117106729**
\`{server.name}\` - Get the name of the channel | **OwO Server**
\`{server.created}\` - Get the date the Server was created | **2-18-2021**
\`{server.roles}\` - Get the amount of roles in the server | **18**
\`{server.members}\` - 	Get the amount of members in the server | **1127**
\`{server.emotes}\` - Get the amount of emotes in the server | **47**
\`{server.boosts}\` - Get the amount of server boosts | **18**
\`{server.boost.level}\` - Get the server's booster level | **2**
\`{server.invite}\` - Get the code from the server invite | **9Bd3JvuF**
\`{server.description}\` - Get the description of the server | **OwO is here**
\`{server.vanity}\` - Get the vanity link of the server | **OwO**]

   $addField[Channel tags:;
\`{channel.id}\` - Get the Id of the Channel | **813814860248907816**
\`{channel.name}\` - Get the name of the channel | **chat channel**
\`{channel.created}\` - Get the date the channel was created | **2-18-2021**
\`{channel.topic}\` - Get the channel topic | **the main chat**

**--------------------------------------------------------------------------------------------------**]

   $addField[Role tags:;
\`{role.id}\` - Get the Id of the user's highest role	| **812437635548577863**
\`{role.name}\` - Get the name of the user's highets role | **Member**
\`{role.mention}\` - Get the mention of the user's highest role | **@Member**
\`{role.perms}\` - Get the permissions from the user's highest role | **Kick, Ban, Admin**
\`{role.created}\` - Get the date the user's highest role was created | **2-18-2021**
\`{role.position}\` - Get the position of the user's highest role | **#7**

**--------------------------------------------------------------------------------------------------**]

   $addField[Member tags:;
\`{member.id}\` - Get the user's ID from the member 	| **$clientID**
\`{member.name}\` - Get the user's Name 		| **$username[$clientID]**
\`{member.tag}\` - Get the user's name and tag 		| **$userTag[$clientID]**
\`{member.mention}\` - Get the user's Mention  		| <@$clientID>
\`{member.roles}\` - Get the user's Roles		| **Bots, Natsuko**
\`{member.role}\` - Get the user's Highest Role		| <@&$highestRole[$clientID]>
\`{member.joined}\` - Get the date the user joined	| **$advancedTextSplit[$memberJoinedDate[$clientID];,;1]**
\`{member.created}\` - Get the user's Creation Date	| **$advancedTextSplit[$creationDate[$clientID];,;1]**
\`{member.badges}\` - Get the badges the user has  	| $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[131605037741768704];Early Verified Developer;];Verified Developer;<:Verified_Developer:814575436976619530>];Bughunter Level 1;<:BugHunter_LvL1:814574048624246806>];House Balance;<:HypeSquad_Balance:814572312762384434>];House Brilliance;<:HypeSquad_Brilliance:814571231831523369>];House Bravery;<:HypeSquad_Bravery:814570553960431667>];Nitro Classic;<:Nitro_User:814577961939370017>];Hypesquad Events;<:HypeSquad_Event:814578676737507359>];Early Supporter;<:Early_Support:814579000809750539>];,;] $replaceText[$replaceText[$isBot[$clientID];false;];true;<:Bot:814579781923766282>]

**--------------------------------------------------------------------------------------------------**]

    $addfield[$username[$clientID]'s Personal Tags:;
\`{MaxMistakes}\` - Get the number of Max Mistakes 	| **5**
\`{CountChannel}\` - Get the count channel		| **#Counting**
\`{RemoveMessage}\` - Get the custom remove message	| **This can be customized with n.setremmsg**
\`{RemoveRole}\` - Get the custom removed Role		| **This can be customized with n.setremrole**

**--------------------------------------------------------------------------------------------------**]
    `})