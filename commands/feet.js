const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'feet',
    execute(client, message, args){
        if (!message.guild) return;
            async function feet() {
            const GIF = await neko.nsfw.feet();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random feet image`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            feet();
    }
}