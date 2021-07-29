module.exports = ({
    name: "settings",
    aliases: ['set' , 'st'],
    code: `
    $author[Server Settings;https://cdn.discordapp.com/emojis/806446278208651295.png]
    $thumbnail[$serverIcon[$guildID]]
    $color[fc5068]

$addField[__**Mistakes:**__;
Mistakes Status: \`$getServerVar[MistakesStatus]\`
Max Count Mistakes: \`$getServerVar[MaxMistakes]\`
No Counting Role: \`$replaceText[<@&$getServerVar[NoCountRole]>;<@&None>;None\`]
Start from zero on mistake: \`$getServerVar[StartFromZero]\`
Cant Count Message: :arrow_down_small:
\`\`\`$getServerVar[CantCountMessage]\`\`\`]

$addField[**Counting:**;
Counting Status: \`$getServerVar[CountingStatus]\`
Count Channel: $replaceText[<#$getServerVar[CountChannel]>;<#None>;\`None\`]
Roles that can count: @everyone
Delete other messages: \`$getServerVar[DeleteOtherMessages]\`]
    `})