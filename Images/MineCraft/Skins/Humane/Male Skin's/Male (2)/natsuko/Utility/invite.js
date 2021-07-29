module.exports = ({
 name: "invite",
 code: `
    $author[Want to invite me?;$userAvatar[$clientID]]
    $description[
**invite me:**
	[[Admin\\\]\\](https://discord.com/api/oauth2/authorize?client_id=$clientID&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2Ffe3pwwW6Q5&response_type=code&scope=guilds.join%20bot) 	\`| recommended\`
	[[None Admin\\\]\\](https://discord.com/api/oauth2/authorize?client_id=$clientID&permissions=335932496&redirect_uri=https%3A%2F%2Fdiscord.gg%2Ffe3pwwW6Q5&response_type=code&scope=guilds.join%20bot) \`| not Recommended\`
]
    $color[EF4C15]
`
});