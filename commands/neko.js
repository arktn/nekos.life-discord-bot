const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'neko',
    execute(client, message, args){
        if (!message.guild) return;
            async function nekof() {
            const GIF = await neko.sfw.neko();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random neko image`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            nekof();
    }
}