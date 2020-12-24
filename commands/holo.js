const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'holo',
    execute(client, message, args){
        if (!message.guild) return;
            async function holo() {
            const GIF = await neko.sfw.holo();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random holo image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            holo();
    }
}