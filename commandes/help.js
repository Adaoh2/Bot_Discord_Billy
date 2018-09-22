module.exports = {
    name: 'help',
    description: 'help',
    execute(message) {


const Discord = require('discord.js');

// inside a command, event listener, etc.
const helpEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Liste des commandes.')
    .addField('!help', 'Affiche la liste des commandes : `!help`')
    .addField('!ping', 'Pong !')
    .addField('!say', 'Billy va répéter ce que vous avez écris : `!say Salut!`', true)
    .addField('!play', 'Mettre de la musique dans un salon vocal : `!play URL-DE-LA-MUSIQUE`', true)
    .addField('!leave', 'Arrête la musique : `!leave`', true)
    .setTimestamp()
    .setFooter('Préfixe : `!`');

message.channel.send(helpEmbed);

message.delete().catch(O_o => {});

    },
};