const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'pussy',
    execute(client, message, args){
        if (!message.guild) return;
            async function pussy() {
            const GIF = await neko.nsfw.pussy();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random pussy image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            pussy();
    }
}