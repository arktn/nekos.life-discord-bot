const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'pussywank',
    execute(client, message, args){
        if (!message.guild) return;
            async function pussywank() {
            const GIF = await neko.nsfw.pussyWankGif();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random pussy wank gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            pussywank();
    }
}