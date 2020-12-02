const Discord = require('discord.js');
const db = require('quick.db')
const ayar = require('../Guard.json')

exports.run = async(client, message, args) => {
    if(!message.member.roles.cache.get(ayar.KickYetkilisi) && !message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanmak için yetkin yok.')

    let member = message.mentions.users.first()
    if(!member) return message.channel.send('Bir kullanıcı belirt.') 
    let swenlor = message.guild.member(member) 
    let sebep = args.slice(1).join(' ') 
    if(!sebep) sebep = 'Belirtilmedi' 
    await swenlor.kick(sebep) 
    message.channel.send(`${swenlor.user.tag} Sunucudan yasaklandı. Gerekli bilgiler loga sunuldu.`) 
    db.add(`kick.${message.author.id}`, 1) 
    db.add(`toplam.${message.author.id}`, 1)  

    client.channels.cache.get(ayar.KickKanal).send(
        new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL ({dynamic: true})) 
        .setTitle(`${client.user.username} - Ban Sistemi`)
        .setDescripiton(`**<@${member.id}> / ${member.id}** Sunucudan yasaklanmıştır.
        
  - Kick Atan Yetkili: <@${message.author.id}> / **${message.author.id}**

  - Kick Atılan Kişi: <@${member.id}> / **${member.id}**
  
  - Kick Sebep: ${sebep}`)
    );
    
} 



exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["at"],
permLevel: 0,
  }
  
exports.help = {
name: "kick"
};