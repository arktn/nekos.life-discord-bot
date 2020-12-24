const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'smug',
    execute(client, message, args){
        if (!message.guild) return;
            async function smug() {
            const GIF = await neko.sfw.smug();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random smug image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            smug();
    }
}