const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'lizard',
    execute(client, message, args){
        if (!message.guild) return;
            async function lizard() {
            const GIF = await neko.sfw.lizard();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random lizard image`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            lizard();
    }
}