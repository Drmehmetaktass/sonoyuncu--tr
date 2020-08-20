const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.RichEmbed()
   .setThumbnail('https://cdn.discordapp.com/attachments/716326387945963550/736614985240936448/Sonoyuncu_-_TR.jpg')
  .setColor('RANDOM')
  .setFooter('Sonoyuncu - TR İstatistik Sistemi', bot.user.avatarURL)
  .addField(":infinity: **Botun Yapımcısı :**", "<@508076616048705536>")
  .addField(":infinity: **Botun Geliştiricisi :**", "<@508076616048705536>")
  .addField(":beginner: **Ram kullanımı :**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField(":pushpin: **Çalışma süresi :**", seksizaman)
  .addField(":crown: **Kullanıcı Sayısı :**" , bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField(":cyclone: **Sunucu Sayısı :**", bot.guilds.size.toLocaleString(), true)
  .addField(":cyclone: **Kanal Sayısı :**", bot.channels.size.toLocaleString(), true)
  .addField(":zap: **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField(":diamond_shape_with_a_dot_inside:  **Ping**", bot.ping+" ms", true)
  .addField(":diamond_shape_with_a_dot_inside:  **Bit**", `\`${os.arch()}\``, true)
  .addField(":diamond_shape_with_a_dot_inside:  **İşletim Sistemi**", `\`\`${os.platform()}\`\``) 
  .addField("**:blue_heart: Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=661859713851588629&scope=bot&permissions=8)", )
  .addField("**:blue_heart: Destek Sunucusu**", " [Destek](https://discord.gg/knNPPBX)", )
   return message.channel.send(istatistikler);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i', 'bot'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"

};