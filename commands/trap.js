const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'trap',
    execute(client, message, args){
        if (!message.guild) return;
            async function trap() {
            const GIF = await neko.nsfw.trap();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random trap image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            trap();
    }
}