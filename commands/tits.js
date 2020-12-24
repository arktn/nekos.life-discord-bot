const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'tits',
    execute(client, message, args){
        if (!message.guild) return;
            async function tits() {
            const GIF = await neko.nsfw.tits();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random tits image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            tits();
    }
}