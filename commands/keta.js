const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'keta',
    execute(client, message, args){
        if (!message.guild) return;
            async function keta() {
            const GIF = await neko.nsfw.keta();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random keta image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            keta();
    }
}