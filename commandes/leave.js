module.exports = {
    name: 'leave',
    description: 'leave',
    execute(message) {

	    //verifie si lutilisateur est connecte au salon
	    if (!message.member.voiceChannel) {
	    	return message.channel.send("ERREUR ! : Toi ne pas etre dans vocal salon !")
	    }

	    // verifie si le bot est connecte (pour quitter duh)
	    if (!message.guild.me.voiceChannel) {
	    return message.channel.send("ERREUR ! : Billy pas pouvoir quitter rien ! :,(")	
	    }

	    //verifie si le client et le bot sont dans le meme salon
	    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) {
	    return message.channel.send("ERREUR ! : Toi devoir etre dans meme vocal salon que Billy ! <3")
	    }

	    //quitter salon
	    message.guild.me.voiceChannel.leave()

	    //confirmation
	    message.channel.send("Ok, personne vouloir de moi ici alors Billy quitter... :( :,(")
    },
};