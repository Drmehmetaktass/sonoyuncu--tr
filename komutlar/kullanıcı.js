const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
    const embed = new Discord.RichEmbed()
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Kullanıcı Komutları:",`
s!davet: Botun Davet Linkini Gösterir.  
s!avatar: Belirtilen Kişinin veya Komutu Yazan Kişinin Avatarını Atar.
s!steam: steamstore Olan her Sey gösterir = örnek: m!steamstore Csgo.
s!sunucubilgi: Sunucunun bilgilerini gönderir.
s!ping: bot pingini gösterir.
s!istatistik: Botun istatistik gösterir.
s!bilgi: Bot Bilgi Gösterir.
s!havadurumu: hava durumunu gösterir.
s!top10: Botun En İyi Sunucularını Gösterir.
s!radyo:Radyo Açar.(Bakımda)
s!sunucu-bilgi:Sunucunun Bilgilerini Gösterir.
s!mcskin:Oyuncunun Mc Skinini Gösterir.
s!youtube:youtube kanalını arar.
s!spotify:spotify hesabını bulur.
s!fortnite:fortnite profilini bulur.
`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'kullanıcı'
};
