const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'anal',
    execute(client, message, args){
        if (!message.guild) return;
            async function anal() {
            const GIF = await neko.nsfw.anal();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random anal image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            anal();
    }
}