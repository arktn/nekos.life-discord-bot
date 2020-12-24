const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'gasm',
    execute(client, message, args){
        if (!message.guild) return;
            async function gasm() {
            const GIF = await neko.nsfw.gasm();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random orgasm image`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            gasm();
    }
}