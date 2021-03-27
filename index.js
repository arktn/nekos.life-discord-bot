const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token, nsfw_channel_only } = require('./config.json');
let fs = require('fs');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

client.on('ready', () => {
  console.log(`Bot tag: ${client.user.tag}`);
  console.log(`Guilds: ${client.guilds.cache.size}`);
  client.user.setActivity(`with ${prefix}help`, { type: 'PLAYING' });
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}
client.on('message', async message => {
  if (!message.content.startsWith(`${prefix}help`)) {
    if (message.content.startsWith(`${prefix}`)) {
    if (nsfw_channel_only === 'true') {
      if (message.channel.nsfw) {
        let file_name = `${message.content.split(' ')[0].replace(prefix, '')}.js`;
        if(!fs.existsSync('./commands/' + file_name)) return undefined;
        if(fs.existsSync('./commands/' + file_name)) {
          client.commands.get(file_name.replace('.js', '')).execute(client, message);
        }
      }
      if (!message.channel.nsfw) {
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://discordapp.com/oauth2/authorize?client_id=648959516016377896&scope=bot&permissions=66321471')
        .setTimestamp()
        .setColor('#D15252')
        .setTitle('📛 Error: Denied')
        .setDescription('This command is only allowed in **NSFW** channels.')
        .setFooter(message.author.tag)
        message.channel.send(embed);
      }
    }
    if (nsfw_channel_only === 'false') {
      let file_name = `${message.content.split(' ')[0].replace(prefix, '')}.js`;
      if(!fs.existsSync('./commands/' + file_name)) return undefined;
      if(fs.existsSync('./commands/' + file_name)) {
        client.commands.get(file_name.replace('.js', '')).execute(client, message);
      }
    }
  }
}
  if (message.content.startsWith(`${prefix}help`)) {
    let file_name = `${message.content.split(' ')[0].replace(prefix, '')}.js`;
    if(!fs.existsSync('./commands/' + file_name)) return undefined;
    if(fs.existsSync('./commands/' + file_name)) {
      client.commands.get(file_name.replace('.js', '')).execute(client, message);
    }
  }
});

client.login(token);
