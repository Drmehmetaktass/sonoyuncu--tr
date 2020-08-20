const discord = require("discord.js")

exports.run = function (client, message, args) {

    let istekkod = args.slice(0).join(' ');
    if (!istekkod) return message.channel.send('Lütfen İstediğiniz Kodu Yazın!');

    const istekkodembed = new discord.RichEmbed()
        .setTitle("Yeni istek kod!")
        .addField("İsteyen Kişi:", `${message.author.tag}\n ${message.author.id}`)
        .addField("İstek Kod:", `${istekkod}`)
        .setFooter(`Sonoyuncu - TR İstek Kod Sistemi`)

    client.channels.get('728325463235362867').send(istekkodembed)

    message.channel.send("İstek kodunuz için teşekkürler, yakın bir zamanda isteğiniz gerçekleştirilecektir.")
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "istek-kod"
}