const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'goose',
    execute(client, message, args){
        if (!message.guild) return;
            async function goose() {
            const GIF = await neko.sfw.goose();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random goose image`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            goose();
    }
}