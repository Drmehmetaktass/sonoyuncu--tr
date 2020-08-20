const Discord = require('discord.js')

exports.run = (client, message) => {

    const xir = new Discord.RichEmbed()
        .setColor('GREEN')
        .setTitle(":bell: Sahibimin Media Hesapları!")
        .addField("<:discord:685730338013708289> Discord:", `<@508076616048705536> - !  么 Yakup Sonoyuncu0,3K#8753`)
        .addField("<:insta:685730338164572193> İnstagram:", `https://www.instagram.com/yakup_sonoyuncu/`, true)
    message.channel.send()
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};
module.exports.help = {
  name: 'yapımcım',
  description: 'Yapımcımın Hesaplarını Gösterir!',
  usage: 'yapımcım'
};