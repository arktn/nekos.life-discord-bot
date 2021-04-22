const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    execute(client, message, args){
        if (message.guild) {
            message.channel.send('Check your DMs!');
            message.delete();
            const embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/ghaku/nekos.life-discord-bot')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Help')
            .setColor('7289da')
            .setDescription(`You want to create a discord bot like this yourself?\n[Check out our Github page!](https://github.com/ghaku/nekos.life-discord-bot)`)
            .addField('List of commands', prefix + 'commands')
            .setFooter('Made with 💖 and discord.js by ghaku', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
            }
            if (!message.guild) {
              const embed = new Discord.MessageEmbed()
              .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/ghaku/nekos.life-discord-bot')
              .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
              .setTitle('Help')
              .setColor('7289da')
              .setDescription(`You want to create a discord bot like this yourself?\n[Check out our Github page!](https://github.com/ghaku/nekos.life-discord-bot)`)
              .addField('List of commands', prefix + 'commands')
              .setFooter('Made with 💖 and discord.js by ghaku', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
              message.author.send(embed);
            }
    }
}
