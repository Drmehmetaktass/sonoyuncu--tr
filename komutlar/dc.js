  
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const kisi = message.guild.members.random();
  const kisi2 = message.guild.members.random();
  if (kisi.user.bot === true)
    return message
      .reply("Bot denk geldi lütfen komutu tekrar kullanınız")
      .then(sw => sw.delete(5000));
  if (kisi2.user.bot === true)
    return message
      .reply("Bot denk geldi lütfen komutu tekrar kullanınız")
      .then(sw => sw.delete(5000));
  if (kisi.id === kisi2.id)
    return message.channel.send(
      "```2 kişi denk geldi,komutu tekrardan kullanınız.```"
    );
  const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTimestamp()
    .setTitle("EĞLENCE ZAMANI")
    .setFooter(`Dogruluk mu Cesaret mi?`, message.author.displayAvatarURL)
    .addField("```Soran kişi:```", kisi)
    .addField("```Cevap vericek kişi:```", kisi2);
  message.channel.send(embed);
}; ////// Komut wioenena.q'ya aittir
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dc"],
  permLevel: 0
};

exports.help = {
  name: "dogrulukcesaret",
  description: "",
  usage: "dogrulukcesaret"
};