const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

client.on('ready', () => {
  console.log(`Bot tag: ${client.user.tag}`);
  console.log(`Guilds: ${client.guilds.cache.size}`);
  client.user.setActivity(`${prefix}help`, { type: 'PLAYING' });
});

// Hug
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'hug')) {
  if (message.mentions.members.size === 0) {
  const GIF = await neko.sfw.hug();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} hugged themselves`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
  const member = message.mentions.members.first();
  const GIF = await neko.sfw.hug();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} hugged ${member.user.tag}`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Kiss
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'kiss')) {
  if (message.mentions.members.size === 0) {
  const GIF = await neko.sfw.kiss();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} kissed themsselves`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
  const member = message.mentions.members.first();
  const GIF = await neko.sfw.kiss();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} kissed ${member.user.tag}`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Pat
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'pat')) {
  if (message.mentions.members.size === 0) {
  const GIF = await neko.sfw.pat();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} patted themsselves`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
  const member = message.mentions.members.first();
  const GIF = await neko.sfw.pat();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} patted ${member.user.tag}`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Slap
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'slap')) {
  if (message.mentions.members.size === 0) {
  const GIF = await neko.sfw.slap();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} slapped themsselves`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
  const member = message.mentions.members.first();
  const GIF = await neko.sfw.slap();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} slapped ${member.user.tag}`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Tickle
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'tickle')) {
  if (message.mentions.members.size === 0) {
  const GIF = await neko.sfw.tickle();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} tickled themsselves`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
  const member = message.mentions.members.first();
  const GIF = await neko.sfw.tickle();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} tickled ${member.user.tag}`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Poke
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'poke')) {
  if (message.mentions.members.size === 0) {
  const GIF = await neko.sfw.poke();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} poked themsselves`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
  const member = message.mentions.members.first();
  const GIF = await neko.sfw.poke();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} poked ${member.user.tag}`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Cuddle
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'cuddle')) {
  if (message.mentions.members.size === 0) {
  const GIF = await neko.sfw.cuddle();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} cuddled themsselves`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
  const member = message.mentions.members.first();
  const GIF = await neko.sfw.cuddle();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} cuddled ${member.user.tag}`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Feed
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'feed')) {
  if (message.mentions.members.size === 0) {
  const GIF = await neko.sfw.feed();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} feeded themsselves`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
  const member = message.mentions.members.first();
  const GIF = await neko.sfw.feed();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} feeded ${member.user.tag}`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Cat
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'cat')) {
  if (message.content.includes("cattext")) return undefined;
  const GIF = await neko.sfw.meow();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random cat image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Dog
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'dog')) {
  const GIF = await neko.sfw.woof();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random dog image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Goose
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'goose')) {
  const GIF = await neko.sfw.goose();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random goose image`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Smug
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'smug')) {
  const GIF = await neko.sfw.smug();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random smug image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Baka
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'baka')) {
  const GIF = await neko.sfw.baka();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random baka image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Neko
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'neko')) {
  if (message.content.includes("nekogif")) return undefined;
  const GIF = await neko.sfw.neko();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random neko image`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// NekoGIF
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'nekogif')) {
  const GIF = await neko.sfw.nekoGif();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random neko gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Lizard
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'lizard')) {
  const GIF = await neko.sfw.lizard();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random lizard image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// FoxGirl
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'foxgirl')) {
  const GIF = await neko.sfw.foxGirl();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random foxgirl image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Holo
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'holo')) {
  const GIF = await neko.sfw.holo();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random holo image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Wallpaper
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'wallpaper')) {
  const GIF = await neko.sfw.wallpaper();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random wallpaper`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Gecg
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'gecg')) {
  const GIF = await neko.sfw.gecg();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random genetically engineered catgirl image`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Avatar
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'avatar')) {
  const GIF = await neko.sfw.avatar();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random anime avatar`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Waifu
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'waifu')) {
  const GIF = await neko.sfw.waifu();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random waifu image`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// OwOfy
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'owofy')) {
  const owoTEXT = await neko.sfw.OwOify({text: message.content.split(' ').slice(1).join(' ')});
  message.channel.send(owoTEXT.owo);
  }
});

// CatText
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'cattext')) {
  const catTEXT = await neko.sfw.catText();
  message.channel.send(catTEXT.cat);
  }
});

// Fact
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'fact')) {
  const factTEXT = await neko.sfw.fact();
  message.channel.send(factTEXT.fact);
  }
});

// Spoiler
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'spoiler')) {
  const spoilerTEXT = await neko.sfw.spoiler({text: message.content.split(' ').slice(1).join(' ')});
  message.channel.send(spoilerTEXT.owo);
  }
});

// Why
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'why')) {
  const whyTEXT = await neko.sfw.why();
  message.channel.send(whyTEXT.why);
  }
});

// NSFW:

// Pussy
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'pussy')) {
    if (message.content.includes("pussywankgif")) return undefined;
    if (message.content.includes("pussyart")) return undefined;
  const GIF = await neko.nsfw.pussy();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random pussy image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Lesbian
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'lesbian')) {
  const GIF = await neko.nsfw.lesbian();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random lesbian image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Cumsluts
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'cumsluts')) {
  const GIF = await neko.nsfw.cumsluts();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random cumsluts image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Boobs
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'boobs')) {
  const GIF = await neko.nsfw.boobs();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random boobs image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Blowjob
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'blowjob')) {
  const GIF = await neko.nsfw.bJ();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random blowjob image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Anal
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'anal')) {
  const GIF = await neko.nsfw.anal();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random anal image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Trap
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'trap')) {
  const GIF = await neko.nsfw.trap();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random trap image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Tits
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'tits')) {
  const GIF = await neko.nsfw.tits();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random tits image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Spank
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'spanking')) {
  const GIF = await neko.nsfw.spank();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random spanking image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Cumart
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'cumart')) {
  const GIF = await neko.nsfw.cumArts();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random cumart image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Femdom
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'femdom')) {
  const GIF = await neko.nsfw.femdom();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random femdom image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Yuri
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'yuri')) {
  const GIF = await neko.nsfw.yuri();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random yuri image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Avatar
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'nsfwavatar')) {
  const GIF = await neko.nsfw.avatar();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random nsfw avatar`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// HentaiGIF
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'hentaigif')) {
  const GIF = await neko.nsfw.randomHentaiGif();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random hentai gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// NekoGIF
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'nsfwnekogif')) {
  const GIF = await neko.nsfw.nekoGif();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random nsfw neko gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Neko
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'nsfwneko')) {
  if (message.content.includes("nsfwnekogif")) return undefined;
  const GIF = await neko.nsfw.neko();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random nsfw neko image`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Kuni
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'kuni')) {
  const GIF = await neko.nsfw.kuni();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random kuni image`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// GirlSolo
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'girlsolo')) {
    if (message.content.includes("girlsologif")) return undefined;
  const GIF = await neko.nsfw.girlSolo();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random solo girl image`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// GirlSoloGIF
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'girlsologif')) {
  const GIF = await neko.nsfw.girlSoloGif();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random solo girl gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// PussyWankGIF
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'pussywank')) {
  const GIF = await neko.nsfw.pussyWankGif();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random pussy wank gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Pussyart
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'pussyart')) {
  const GIF = await neko.nsfw.pussyArt();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random pussyart image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Kitsune
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'kitsune')) {
  const GIF = await neko.nsfw.kitsune();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random kitsune image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Hentai
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'hentai')) {
  if (message.content.includes("hentaigif")) return undefined;
  const GIF = await neko.nsfw.hentai();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random hentai image`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Futanari
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'futanari')) {
  const GIF = await neko.nsfw.futanari();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random futanari image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Keta
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'keta')) {
  const GIF = await neko.nsfw.keta();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random keta image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Gasm
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'gasm')) {
  const GIF = await neko.nsfw.gasm();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random orgasm image`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// FeetGIF
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'feetgif')) {
  const GIF = await neko.nsfw.feetGif();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random feet gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Feet
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'feet')) {
  if (message.content.includes("feetgif")) return undefined;
  const GIF = await neko.nsfw.feet();
  const embed = new Discord.MessageEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random feet image`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Commands
client.on('message', async message => {
  if (message.content.startsWith(prefix + 'commands')) {
    const embed = new Discord.MessageEmbed()
    .setColor('#7289DA')
    .setTitle('Safe For Work - Commands')
    .addField(prefix + 'help', 'Returns a help module')
    .addField(prefix + 'hug', 'Hug a user')
    .addField(prefix + 'kiss', 'Kiss a user')
    .addField(prefix + 'pat', 'Pat a user')
    .addField(prefix + 'slap', 'Slap a user')
    .addField(prefix + 'tickle', 'Tickle a user')
    .addField(prefix + 'poke', 'Poke a user')
    .addField(prefix + 'cuddle', 'Cuddle a user')
    .addField(prefix + 'feed', 'Feed a user')
    .addField(prefix + 'cat', 'Returns a cat image/gif')
    .addField(prefix + 'dog', 'Returns a dog image/gif')
    .addField(prefix + 'goose', 'Returns a goose image')
    .addField(prefix + 'smug', 'Returns a smug image/gif')
    .addField(prefix + 'baka', 'Returns a baka image/gif')
    .addField(prefix + 'neko', 'Returns a neko image')
    .addField(prefix + 'nekogif', 'Returns a neko gif')
    .addField(prefix + 'lizard', 'Returns a lizard image/gif')
    .addField(prefix + 'foxgirl', 'Returns a foxgirl image/gif')
    .addField(prefix + 'holo', 'Returns a holo image/gif')
    .addField(prefix + 'wallpaper', 'Returns a wallpaper')
    .addField(prefix + 'gecg', 'Returns a genetically genetically engineered catgirl image')
    .addField(prefix + 'avatar', 'Returns an anime avatar')
    .addField(prefix + 'waifu', 'Returns a waifu image/gif')
    .addField(prefix + 'owofy', 'Returns a owofied version of your text')
    .addField(prefix + 'cattext', 'Returns a cattext emoji')
    .addField(prefix + 'fact', 'Returns a random fact')
    .addField(prefix + 'spoiler', 'Returns a message with a unique spoiler for ever text letter')
    .addField(prefix + 'why', 'Returns a random question')
    const embed2 = new Discord.MessageEmbed()
    .setColor('#7289DA')
    .addField(prefix + 'fact', 'Returns a random fact')
    .addField(prefix + 'spoiler', 'Returns a message with a unique spoiler for ever text letter')
    .addField(prefix + 'why', 'Returns a random question')
    const embed3 = new Discord.MessageEmbed()
    .setColor('#7289DA')
    .setTitle('Not Safe For Work - Commands')
    .addField(prefix + 'pussy', 'Returns a pussy image/gif')
    .addField(prefix + 'lesbian', 'Returns a lesbian image/gif')
    .addField(prefix + 'cumsluts', 'Returns a cumsluts image/gif')
    .addField(prefix + 'boobs', 'Returns a boobs image/gif')
    .addField(prefix + 'blowjob', 'Returns a blowjob image/gif')
    .addField(prefix + 'anal', 'Returns a anal image/gif')
    .addField(prefix + 'trap', 'Returns a trap image/gif')
    .addField(prefix + 'tits', 'Returns a tits image/gif')
    .addField(prefix + 'spank', 'Returns a spank image/gif')
    .addField(prefix + 'cumart', 'Returns a cumart image/gif')
    .addField(prefix + 'femdom', 'Returns a femdom image/gif')
    .addField(prefix + 'yuri', 'Returns a yuri image/gif')
    .addField(prefix + 'nsfwavatar', 'Returns an nsfw avatar')
    .addField(prefix + 'hentaigif', 'Returns a hentai gif')
    .addField(prefix + 'hentai', 'Returns a hentai image')
    .addField(prefix + 'nsfwnekogif', 'Returns a nsfw neko gif')
    .addField(prefix + 'nsfwneko', 'Returns a nsfw neko image')
    .addField(prefix + 'kuni', 'Returns a kuni image')
    .addField(prefix + 'girlsolo', 'Returns a girlsolo image')
    .addField(prefix + 'girlsologif', 'Returns a girlsolo gif')
    .addField(prefix + 'pussywank', 'Returns a pussywank gif')
    .addField(prefix + 'pussyart', 'Returns a pussyart image/gif')
    .addField(prefix + 'kitsune', 'Returns a kitsune image/gif')
    .addField(prefix + 'futanari', 'Returns a futanari image/gif')
    .addField(prefix + 'keta', 'Returns a keta image/gif')
    const embed4 = new Discord.MessageEmbed()
    .setColor('#7289DA')
    .addField(prefix + 'gasm', 'Returns a gasm image')
    .addField(prefix + 'feetgif', 'Returns a feet gif')
    .addField(prefix + 'feet', 'Returns a feet image')
    message.channel.send(embed);
    message.channel.send(embed2);
    message.channel.send(embed3);
    message.channel.send(embed4);
  }
});

// Help
client.on('message', async message => {
  if (message.content.startsWith(prefix + 'help')) {
  if (message.guild) {
  message.channel.send('Check your DMs!');
  message.delete();
  const embed = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/notmaxi/nsfw-bot')
  .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
  .setTitle('Help')
  .setColor('7289da')
  .setDescription(`You want to create a discord bot like this yourself?\n[Check out our Github page!](https://github.com/notmaxi/nsfw-bot)`)
  .addField('List of commands', prefix + 'commands')
  .setFooter('Made with 💖 and discord.js by notmaxi', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
  message.author.send(embed);
  }
  if (!message.guild) {
  const embed = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/notmaxi/nsfw-bot')
  .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
  .setTitle('Help')
  .setColor('7289da')
  .setDescription(`You want to create a discord bot like this yourself?\n[Check out our Github page!](https://github.com/notmaxi/nsfw-bot)`)
  .addField('List of commands', prefix + 'commands')
  .setFooter('Made with 💖 and discord.js by notmaxi', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
  message.author.send(embed);
  }
  }
});

client.login(token);
