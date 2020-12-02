const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../Guard.json')
 
exports.run = async(client, message, args) => {

let prefix = ayarlar.TimsahTimPrefix

  
  
  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
    .setDescription(`**Bunu mu Arıyorsun? ${prefix}kanal-koruma aç/kapat**`)
    .setTimestamp()
    .setColor('RED')
    return message.channel.send(sa)
  }
  if (args[0] === 'aç') {
    
    db.set(`kanalk_${message.guild.id}`, "Aktif")
       const sa = new Discord.MessageEmbed()
    .setDescription(`**Kanal Koruma Başarıyla Açıldı** :white_check_mark:`)
    .setTimestamp()
    .setColor('GREEN')
    return message.channel.send(sa)
  }
   if (args[0] === 'kapat') {
    
    db.delete(`kanalk_${message.guild.id}`)
       const sa = new Discord.MessageEmbed()
    .setDescription(`**Kanal Koruma Başarıyla Kapatıldı** :white_check_mark:`)
    .setTimestamp()
    .setColor('GREEN')
    return message.channel.send(sa)
  }
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'kanal-koruma'
}; 
