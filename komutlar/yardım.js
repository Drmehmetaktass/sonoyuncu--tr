const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const embedyardim = new Discord.RichEmbed()
    .setColor('#fffa00')
    .setAuthor(`${client.user.username} `, client.user.avatarURL) 
      .setDescription('**s!yardım** ile yardım alabilirsiniz.\nbotu davet etmek için **s!davet**')
      .addField('** s!eğlence**', `herkesin eğlenebileceği komutlar. \n` +  '`kafasalla`, `kedi`, `doğumgünü`, `yazıtura`, `öp`, `mcskin`, `tekme-at`, `duello`,`espiri` , `yazan kazanır`')
      .addField('** s!kullanıcı**', `herkesin kullanabileceği komutlar. \n` +  '`davet`, `avatar`, `steam`, `sunucubilgi`, `ping`, `istatislik`, `bilgi`, `havadurumu`,`top10` , `radyo` , `youtube` , `spotify`')
      .addField('** s!moderasyon**',   `yetkililer için moderasyon komutları bölümü. \n` + '`sustur` , `uyar` , `ban`, `sa-as`, `sayaç`, `otorol`, `otorolkapat`, `oylama-kanal`, `duyuru-kanal`,`giriş-mesaj`,`çıkış-mesaj`,`özel-görüşürüz`,`özel-hoşgeldin`,`mod-log`,`gç`,`ban`,`duyuru`,`link-engelle`,`sunucu-kur`,`log-ayarla`,`reklam-taraması`,`küfür-engel`,`güvenik`')
    .setFooter(`© ${client.user.username} ` , client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embedyardim).catch()
    
//////`${client.user.username}`
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["h", "halp", "help", 'y', 'yadrım'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};