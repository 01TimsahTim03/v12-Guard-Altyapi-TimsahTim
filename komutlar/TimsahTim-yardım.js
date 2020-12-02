const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const help = new Discord.MessageEmbed()
  .setColor("BLUE")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("<a:space:783345247324864513> TiGuard | Yardım Menüsü <a:space:783345247324864513>")
.setThumbnail("https://cdn.discordapp.com/attachments/783022191071068161/783347461678170172/TimsahTim_Tantm_Intro.gif")
    .setDescription(`


**»** **\`\`\.kanal-koruma\`\`\** **: Kanal koruma sistemini açar.**
**»** **\`\`\.rol-koruma\`\`\** **: Rol koruma sistemini açar.**
**»** **\`\`\.küfür-engel\`\`\** **: Küfür etmeyi yasaklar.**                                       
**»** **\`\`\.reklam-engel\`\`\ : Reklam göndermeyi yasaklar.**
**»** **\`\`\.ban\`\`\ : Belirtiğiniz kullanıcıyı sunucudan yasaklar.**
**»** **\`\`\.kick\`\`\ : Belirtiğiniz kullanıcıyı sunucudan atar.**
**»** **\`\`\.unban\`\`\ : İd'sini belirtiğiniz kullanıcının sunucudaki yasağını kaldırır.**
**»** **\`\`\.sohbet aç/kapat\`\`\ : Komutu kullandığınız kanalda yazmayı açar/kapatır.**
**»** **\`\`\.komut\`\`\ : Açıklama.**
**»** **\`\`\.komut\`\`\ : Açıklama.**
**»** **\`\`\.komut\`\`\ : Açıklama.**

**»** \`\`\.davet\`\`\ **__Botun Davet Linkini Atar.__**
                                                                        
`) 
       .addField(`» TiGuard Bot Bağlantıları`, `<a:gokalp:783345247047778366>   [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=757928909994983444&permissions=8&redirect_uri=https%3A%2F%2Fmr-ayucuh.glitch.me%2Fcallback&scope=bot) **|** [Destek Sunucusu](https://discord.gg/nuQYqrBbcT) **|** [WebSitesi](https://timsahtim.com/) <a:gokalp:783345247047778366> `)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(help)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["help"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'yardım', 
    description: '',
    usage: 'yardım'
  };


