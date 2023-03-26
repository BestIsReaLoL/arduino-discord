const Discord = require('discord.js');
const { SerialPort } = require('serialport');
const client = new Discord.Client();

const port = new SerialPort({path: "COM3",  baudRate: 9600 });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === '!led aç') {
    port.write('1');
    message.reply("Led açık!")
  } else if (message.content === '!led kapat') {
    port.write('0');
    message.reply("Led kapalı!")
  } else if (message.content === '!buzzer aç') {
    port.write('buzzer_1');
    message.reply("Buzzer açık!")
  } else if (message.content === '!buzzer kapat') {
    port.write('buzzer_0');
    message.reply("Buzzer kapalı!")
  }
});



client.login('MTA3MDEwMDk4MTAwNzc5NDI4OQ.GRLpLq.VZ_n6rXOW15n3DB7TuUOBdFRS3OilujoAryiAE');