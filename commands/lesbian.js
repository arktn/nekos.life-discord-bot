const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'lesbian',
    execute(client, message, args){
        if (!message.guild) return;
            async function lesbian() {
            const GIF = await neko.nsfw.lesbian();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random lesbian image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            lesbian();
    }
}