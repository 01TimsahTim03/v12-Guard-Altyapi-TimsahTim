const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {const ayarlar =client.emojis.cache.get("780718161057677342")
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(" **Bu komutu kullanmak için Yönetici yetkisine sahip olman gerek!**")
  
  if (!args[0]){
    message.channel.send('Küfür-engel kapat/aç Yazmalısın')
  }
  if (args[0] === 'aç'){
    message.channel.send("Küfür Engelleme Sistemi Başarıyla Aktif Edildi")
    
    db.set(`kufur_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send('Küfür Engelleme Sistemi Başarıyla Deaktif Edildi')
    
    db.set(`kufur_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['küfür'],
  permLevel: 0
}
exports.help = {
  name: "küfür-engel",
  description: "Küfür engel açar yada kapatır.",
  usage: "küfür"
}