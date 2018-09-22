# Discord_Bot_Billy
App.js is a Command handler (and also the main file. You will find all the commands you linked to it so the bot can execute it). You can copy it, but in your commands folder, put `commandname.js`  files only. (you can name commandfile however you want, but it NEEDS the `.js` a the end) Put your code in the file you just created, and add theses two blocks of code to the `commandname` file : 
```
module.exports = {
    name: 'play',
    description: 'play',
    execute(message) {
```

at the top, and
```
    },
};
```
at the bottom, to end the code.

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
__test__
