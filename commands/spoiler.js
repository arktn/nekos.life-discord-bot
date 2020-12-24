const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'spoiler',
    execute(client, message, args){
        if (!message.guild) return;
            async function spoiler() {
            const spoilerTEXT = await neko.sfw.spoiler({text: message.content.split(' ').slice(1).join(' ')});
            message.channel.send(spoilerTEXT.owo);
            }
            spoiler();
    }
}