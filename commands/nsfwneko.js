const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'nsfwneko',
    execute(client, message, args){
        if (!message.guild) return;
            async function nsfwneko() {
            const GIF = await neko.nsfw.neko();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random nsfw neko image`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            nsfwneko();
    }
}