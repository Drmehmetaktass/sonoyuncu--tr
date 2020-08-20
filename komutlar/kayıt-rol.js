const discord = require("discord.js");
const db = require("quick.db");
exports.run = async(client, message, args) => {

const rol = message.mentions.roles.first()
if(!rol) return message.channel.send('Rol etiketle')

else {
  message.channel.send('Kaydettim..')
  await db.set(`kayitrol_${message.guild.id}`, rol.id)
  
}

};

exports.conf = {
  enabled: true, //True => Komut açık, False => Komut kapalı
  guildOnly: true, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [], //Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 1
};

exports.help = {
  name: "kayıtrol", //Komutun adı (Komutu girerken lazım olucak)
  description: "", //Komutun Açıklaması
  usage: "" //komutun kullanım şekli; ÖR: !ban @Kullanıcı
};