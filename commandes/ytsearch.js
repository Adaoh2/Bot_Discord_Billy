// installer 1 module : yt-search (npm i yt-search)
module.exports = {
    name: 'search',
    description: 'search',
    execute(message) {

const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();
const search = require('yt-search');

	
	search(args.join(''), function(err, res) {

	if (err) return message.channel.send('OUPS, moi avoir probleme Hihi !');

	let videos = res.videos.slice(0, 5);

	let resp = '';
	for (var i in videos) {
		resp += `**[${parseInt(i)+1}]:** \`${videos[i].title}\`\n`;
		}

	resp += `\n**Choisissez un chiffre entre \`1-${videos.length}\``;

	message.channel.send(resp);

	const filtre = m => !isNaN(m.content) && m.content < videos.length+1 && m.content >0;
	const collecteur = message.channel.createMessageCollector(filtre);

	collecteur.videos = videos;

	collecteur.once('collect', function(m) {

		let commandFiles = require(`./play.js`);
		commandFiles.run(client, message, [this.videos[parseInt(m.content)-1].url]);

	});


	});




    },
};