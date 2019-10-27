// Import the discord.js module
const Discord = require('discord.js');

// Extract the required classes from the discord.js module
const { Client, Attachment } = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {

//VoiceConnection and rection to voice channel
  client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === '/join') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }
  })

// This function permit to use a specific emoji
function emoji(id)
{
  return client.emojis.get(id).toString();
}

//Function for randommize
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Create the attachment using Attachment
//const attachment = new Attachment('https://i.ytimg.com/vi/FGKNQS-TdC8/hqdefault.jpg');
// Send the attachment in the message channel
//   message.channel.send(attachment);

  // If the bot is tagged
  if(message.isMentioned(client.user)){
  var random = getRandomInt(1,3);
      if (random == 1)
        {
         //Send "Salut mon pote !" and a emoji to the same channel
          message.channel.send('Salut mon pote !');
          message.channel.send(emoji("636532037167349760"));
          
              // ReadableStreams, in this example YouTube audio
//              const ytdl = require('ytdl-core');
//              connection.play(ytdl(
//            'https://www.youtube.com/watch?v=xLHN9pz5Dms',
//              { filter: 'audioonly' }));
        }
        else
        {
        // Send "J'ai vu partir beaucoups de copains..." to the same channel
        message.channel.send("J'ai vu partir beaucoup de copains...");
        message.channel.send("😥");

          // ReadableStreams, in this example YouTube audio
//          const ytdl = require('ytdl-core');
//          connection.play(ytdl(
//         'https://www.youtube.com/watch?v=xLHN9pz5Dms',
//         { filter: 'audioonly' }));
//       }
}

//  if (message.content === 'copain') {
// Send "J'ai vu partir beaucoups de copains..." to the same channel
//   message.channel.send("J'ai vu partir beaucoups de copains...");
// Send the attachment in the message channel
//   message.channel.send(attachment);
  }



});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NjM3NDMxODYxOTI4Mzk0NzUz.XbOMww.KQm26LUnDMNqwVH1YOs4vHwFsTo');