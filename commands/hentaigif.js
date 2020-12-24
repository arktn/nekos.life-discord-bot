const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'hentaigif',
    execute(client, message, args){
        if (!message.guild) return;
            async function hentaigif() {
            const GIF = await neko.nsfw.randomHentaiGif();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random hentai gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            hentaigif();
    }
}