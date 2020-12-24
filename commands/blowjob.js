const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'blowjob',
    execute(client, message, args){
        if (!message.guild) return;
            async function blowjob() {
            const GIF = await neko.nsfw.bJ();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random blowjob image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            blowjob();
    }
}