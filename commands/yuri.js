const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'yuri',
    execute(client, message, args){
        if (!message.guild) return;
            async function yuri() {
            const GIF = await neko.nsfw.yuri();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random yuri image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            yuri();
    }
}