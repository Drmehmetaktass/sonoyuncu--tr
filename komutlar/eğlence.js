const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Eğlence  Komutları:",`
s!kafasalla: Kafa sallarsınız.
s!gif: Rastgele kedi gif atar.
s!doğumgünü: Arkadasini Bilir.
s!yazıtura: Yazı-Tura atar.
s!mcskin: Belirtilen oyuncunun kostümünü gösterir.
s!tekme-at: İstediğiniz Kişiye tekme Atarsınız.
s!düello: İstediğiniz bir kişi ile düello atarsınız.
s!espiri:Espiri Komutları:D.
s!rip:Ölürsünüz :D.
s!tkm:taş kağı makas oynarsınız.
s!doğrulukcesaret:dc oynarsınız.
s!yazan-kazanır:botun verdiği kelimeyi yazan kazanır.

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'eğlence'
};
