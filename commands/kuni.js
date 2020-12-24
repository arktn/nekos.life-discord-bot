const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'kuni',
    execute(client, message, args){
        if (!message.guild) return;
            async function kuni() {
            const GIF = await neko.nsfw.kuni();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random kuni image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            kuni();
    }
}