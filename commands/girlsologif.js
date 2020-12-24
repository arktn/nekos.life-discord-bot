const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'girlsologif',
    execute(client, message, args){
        if (!message.guild) return;
            async function girlsologif() {
            const GIF = await neko.nsfw.girlSoloGif();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random solo girl gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            girlsologif();
    }
}