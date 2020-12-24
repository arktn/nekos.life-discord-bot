const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'cat',
    execute(client, message, args){
        if (!message.guild) return;
            async function cat() {
            const GIF = await neko.sfw.meow();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random cat image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            cat();
    }
}