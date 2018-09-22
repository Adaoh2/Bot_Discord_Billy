# Discord_Bot_Billy
App.js is a Command handler. You can copy it, but in your commands folder, put "commandname.js" files only. Put your code in this file, and add theses two things to the command file : 

`module.exports = {
    name: 'play',
    description: 'play',
    execute(message) {`

at the top, and
`
    },
};
`
at the bottom, to end the code.

You also need to add the following to the app.js or whatever you called your main bot file.

`if (command === 'commandname') {
		client.commands.get('commandname').execute(message, args);
}`

for the FIRST command of the MAIN FILE, and for the other commands, put the following :

`else if (command === 'commandname') {
		client.commands.get('commandname').execute(message, args);
}`


***This file will recieve modifications***
