# DO NOT FORGET TO CHANGE THE TOKEN IN THE CONFIG.json FILE OR THE BOT WILL NOT WORK

# Discord_Bot_Billy
`App.js` is a Command handler file. (and also the main file. You will find all the commands you linked to it so the bot can execute it). You can copy it, but in your commands folder, put `commandname.js`  files only. (you can name commandfile however you want, but it NEEDS the `.js` a the end) Put your code in the file you just created, and add theses two blocks of code to the `commandname` file : 
```
module.exports = {
    name: 'commandname',
    description: 'commandname',
    execute(message) {
    
    // 	Here, you put your custom code.
    
    },
};
```

And this block goes a the end of the code

So the final command file should look like this :

```
module.exports = {  //this is the first block
	name: 'ping',
	description: 'Ping!', //You replace the 'ping' by your commandname.
	execute(message) {         

		message.channel.send('Pong.'); //your code

	}, //end of the code
};
```

You also need to add the following to the app.js or whatever you called your main bot file.
```
if (command === 'commandname') {
		client.commands.get('commandname').execute(message, args);
}
```
for the FIRST command of the MAIN FILE, and for the other commands, put the following :
```
else if (command === 'commandname') {
		client.commands.get('commandname').execute(message, args);
}
```

***This file will recieve modifications***
for more information on how to create a discord bot, visit https://discordjs.guide and https://discord.js.org.
