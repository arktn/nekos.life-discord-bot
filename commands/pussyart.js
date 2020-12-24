const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'pussyart',
    execute(client, message, args){
        if (!message.guild) return;
            async function pussyart() {
            const GIF = await neko.sfw.pussyart();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random pussyart image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            pussyart();
    }
}