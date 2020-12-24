const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'hentai',
    execute(client, message, args){
        if (!message.guild) return;
            async function hentai() {
            const GIF = await neko.nsfw.hentai();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random hentai image`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            hentai();
    }
}