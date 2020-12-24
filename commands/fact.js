const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'fact',
    execute(client, message, args){
        if (!message.guild) return;
            async function fact() {
                const factTEXT = await neko.sfw.fact();
                message.channel.send(factTEXT.fact);
            }
            fact();
    }
}