const discord = require("discord.js");
const db = require("quick.db");
exports.run = async(client, message, args) => {
const kanal = await db.fetch(`kayitkanal_${message.guild.id}`)
const rol = await db.fetch(`kayitrol_${message.guild.id}`)

  const knl = message.guild.channels.get(kanal)
const rl = message.guild.roles.get(rol)

if(!kanal) return message.channel.send('Kanal ayarlanmamış! Lütfen sunucu sahiplerine bu mesajı gösteriniz..')
if(!rol) return message.channel.send('Rol ayarlanmamış! Lütfen sunucu sahiplerine bu mesajı gösteriniz..')
  
else {
  const isim = args[0]
  if(!isim) return message.channel.send('isim gir')
  
    const yas = args[1]
  if(!yas) return message.channel.send('yaş gir')
  
  else {
    
    
    knl.send(`${message.author.username} adlı kullanıcı başarıyla kayıt olmuştur.. ${rl.name} adlı rol verilmiştir..`)
    message.member.addRole(rl)
    message.member.setNickname(`${isim} | ${yas}`)
  
  }
}
};

exports.conf = {
  enabled: true, //True => Komut açık, False => Komut kapalı
  guildOnly: true, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [], //Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)

};

exports.help = {
  name: "kayıtol", //Komutun adı (Komutu girerken lazım olucak)
  description: "", //Komutun Açıklaması
  usage: "" //komutun kullanım şekli; ÖR: !ban @Kullanıcı
};