const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'dog',
    execute(client, message, args){
        if (!message.guild) return;
            async function dog() {
            const GIF = await neko.sfw.woof();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random dog image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            dog();
    }
}