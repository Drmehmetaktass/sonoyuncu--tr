const discord = require("discord.js");
const db = require("quick.db");
exports.run = async(client, message, args) => {

const kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send('Kanal etiketle')

else {
  message.channel.send('Kaydettim..')
  await db.set(`kayitkanal_${message.guild.id}`, kanal.id)
  
}

};

exports.conf = {
  enabled: true, //True => Komut açık, False => Komut kapalı
  guildOnly: true, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [], //Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 1 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: "kayıtkanal", //Komutun adı (Komutu girerken lazım olucak)
  description: "", //Komutun Açıklaması
  usage: "" //komutun kullanım şekli; ÖR: !ban @Kullanıcı
};