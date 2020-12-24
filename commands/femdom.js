const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'femdom',
    execute(client, message, args){
        if (!message.guild) return;
            async function femdom() {
            const GIF = await neko.nsfw.femdom();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random femdom image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            femdom();
    }
}