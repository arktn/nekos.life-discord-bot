const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'kitsune',
    execute(client, message, args){
        if (!message.guild) return;
            async function kitsune() {
            const GIF = await neko.nsfw.kitsune();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random kitsune image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            kitsune();
    }
}