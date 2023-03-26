const Discord = require('discord.js');
const { SerialPort } = require('serialport');
const client = new Discord.Client();

const port = new SerialPort({path: "COM3",  baudRate: 9600 }); //arduino kartının takılı olduğu port "COM3"

client.on('ready', () => {
  console.log(`${client.user.tag} > Discord api ile bağlantı kuruldu`);
});

client.on('message', message => {
  if (message.content === '!led aç') {
    port.write('led_1');
    message.reply("Led açık!")
  } else if (message.content === '!led kapat') {
    port.write('led_0');
    message.reply("Led kapalı!")
  } /* else if (message.content === '!buzzer aç') {
    port.write('buzzer_1');
    message.reply("Buzzer açık!")
  } else if (message.content === '!buzzer kapat') {
    port.write('buzzer_0');
    message.reply("Buzzer kapalı!")
  } */
});



client.login('token');
