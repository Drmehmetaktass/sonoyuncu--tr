const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Moderasyon Komutları:",`
s!ᴏᴛᴏᴛᴀɢ: sᴜɴᴜᴄᴜʏᴀ ɢɪʀᴇɴ ᴋɪsɪʟᴇʀ ɪᴄɪɴ ᴏᴛᴏ ᴛᴀɢ ᴠᴇʀɪʀ. 
s!ᴄɪᴋɪs-ᴍᴇsᴀᴊ-ᴀʏᴀʀʟᴀ: ᴄɪᴋɪs ᴍᴇsᴀᴊɪɴɪ ᴅᴇɢɪsᴛɪʀᴍᴇɴɪᴢɪ sᴀɢʟᴀʀ. 
s!sᴀ-ᴀs: sᴀ-ᴀs ᴀʏᴀʀʟᴀʀ. 
s!sᴀʏᴀᴄ: sᴀʏᴀᴄ <sᴀʏɪ> <#ᴋᴀɴᴀʟ> 
s!ᴏᴛᴏʀᴏʟ: sᴜɴᴜᴄᴜʏᴀ ɢɪʀᴇɴʟᴇʀᴇ ᴠᴇʀɪʟᴇᴄᴇᴋ ᴏʟᴀɴ ᴏᴛᴏʀᴏʟᴜ ᴀʏᴀʀʟᴀʀ. 
s!ᴋᴀᴘᴀᴛᴏᴛᴏʀᴏʟ: ᴏᴛᴏʀᴏʟ ᴋᴀᴘᴀᴛᴍᴀ ɪsᴇ ʏᴀʀᴀʀ. 
s!ᴏʏʟᴀᴍᴀ-ᴋᴀɴᴀʟ: ᴏʏʟᴀᴍᴀ ᴋᴀɴᴀʟɪɴɪ sᴇᴄᴍᴇɴɪᴢᴇ ʏᴀʀᴀʀ. 
s!ɢɪʀɪsᴍᴇsᴀᴊ: ɢɪʀɪs ᴍᴇsᴀᴊɪɴɪ ᴀʏᴀʀʟᴀʀ. (ᴋᴜʟʟᴀɴɪᴄɪ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-ᴋᴜʟʟᴀɴɪᴄɪ-", sᴜɴᴜᴄᴜ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-sᴜɴᴜᴄᴜ-" ʏᴀᴢɪɴɪᴢ. 
s!ᴄɪᴋɪsᴍᴇsᴀᴊ: ᴄɪᴋɪs ᴍᴇsᴀᴊɪɴɪ ᴀʏᴀʀʟᴀʀ. (ᴋᴜʟʟᴀɴɪᴄɪ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-ᴋᴜʟʟᴀɴɪᴄɪ-", sᴜɴᴜᴄᴜ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-sᴜɴᴜᴄᴜ-" ʏᴀᴢɪɴɪᴢ. 
s!ᴏᴢᴇʟ-ɢᴏʀᴜsᴜʀᴜᴢ-ᴀʏᴀʀʟᴀ: sᴜɴᴜᴄᴜᴅᴀɴ ᴀʏʀɪʟᴀɴ ᴋɪsɪʏᴇ ᴏᴢᴇʟᴅᴇɴ ɢᴏɴᴅᴇʀɪʟᴇᴄᴇᴋ ᴍᴇsᴀᴊɪ ᴀʏᴀʀʟᴀʀ. (ᴋᴜʟʟᴀɴɪᴄɪ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-ᴋᴜʟʟᴀɴɪᴄɪ-", sᴜɴᴜᴄᴜ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-sᴜɴᴜᴄᴜ-" ʏᴀᴢɪɴɪᴢ. 
s!ᴏᴢᴇʟ-ʜᴏsɢᴇʟᴅɪɴ-ᴀʏᴀʀʟᴀ: sᴜɴᴜᴄᴜʏᴀ ɢɪʀᴇɴ ᴋɪsɪʏᴇ ᴏᴢᴇʟᴅᴇɴ ɢᴏɴᴅᴇʀɪʟᴇᴄᴇᴋ ᴍᴇsᴀᴊɪ ᴀʏᴀʀʟᴀʀ. (ᴋᴜʟʟᴀɴɪᴄɪ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-ᴋᴜʟʟᴀɴɪᴄɪ-", sᴜɴᴜᴄᴜ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-sᴜɴᴜᴄᴜ-" ʏᴀᴢɪɴɪᴢ. 
s!ᴍᴏᴅ-ʟᴏɢ-ᴀʏᴀʀʟᴀ: ᴍᴏᴅᴇʀᴀsʏᴏɴ ᴋᴀʏɪᴛʟᴀʀɪ ᴋᴀɴᴀʟɪɴɪ ᴀʏᴀʀʟᴀʀ. 
s!gç: ʀᴇsɪᴍʟɪ ʜɢ ᴋᴀɴᴀʟɪɴɪ ʙᴇʟɪʀʟᴇʀ. 
s!ʙᴀɴ: ɪsᴛᴇᴅɪɢɪɴɪᴢ ᴋɪsɪʏɪ ʙᴀɴʟᴀʀ. 
s!ᴅᴜʏᴜʀᴜ: ᴅᴜʏᴜʀᴜ sɪsᴛᴇᴍɪ. 
s!ʟɪɴᴋ-ᴇɴɢᴇʟʟᴇ: ʟɪɴᴋ ᴇɴɢᴇʟʟᴇᴍᴇ sɪsᴛᴇᴍɪɴɪ ᴀᴄɪᴘ ᴋᴀᴘᴀᴛᴍᴀɴɪᴢɪ sᴀɢʟᴀʀ. 
s!sᴜɴᴜᴄᴜ-ᴋᴜʀ: ʙᴜʟᴜɴᴜʟᴀɴ sᴜɴᴜᴄᴜ ɪᴄɪɴ ɢᴇʀᴇᴋʟɪ ᴋᴀɴᴀʟʟᴀʀɪ ᴏʟᴜsᴛᴜʀᴜʀ. 
s!ʟᴏɢ-ᴀʏᴀʀʟᴀ: ʟᴏɢ ᴋᴀɴᴀʟɪ ᴀʏᴀʀʟᴀsɪɴɪᴢ. 
s!ʀᴇᴋʟᴀᴍ-ᴛᴀʀᴀᴍᴀsɪ: ᴋᴜʟʟᴀɴɪᴄɪʟᴀʀɪɴ ᴏʏɴᴜʏᴏʀ ᴍᴇsᴀᴊɪɴᴅᴀᴋɪ ᴠᴇ ᴋᴜʟʟᴀɴɪᴄɪ ᴀᴅʟᴀʀɪɴᴅᴀᴋɪ ʀᴇᴋʟᴀᴍʟᴀʀɪ ᴛᴀʀᴀʀ. 
s!uyar: Kullanıcıyı Uyarırsınız.
s!sustur: İnsanalrı Susturursunuz.
s!küfür-engel:Küfür Engeller.
s!reklam-engel:Reklamları Engeller.
s!link-engelle:link engeller.
s!güvenlik:Hesap Güvenliği.
s!sunucu-kur:sunucu kurar(Çok Gelişmiş Komut!)
`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili','yetkilis'],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'moderasyon'
};
