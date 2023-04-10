const venom = require('venom-bot');
require('dotenv').config();
const phoneNumbers = [
  process.env.WHATSAPP_CONTACT_NUMBER_1,
  process.env.WHATSAPP_CONTACT_NUMBER_2,
  process.env.WHATSAPP_CONTACT_NUMBER_3,
];
const message = 'Hello from my code backend!';
venom
  .create()
  .then((client) => {
    for (let i = 0; i < phoneNumbers.length; i++) {
      client.sendText(
        `${process.env.COUNTRY_CODE}${phoneNumbers[i]}@c.us`,
        message
      );
    }
  })
  .catch((err) => {
    console.log('🚀 ~ file: sendWhatsappText.js:7 ~ err:', err);
  });
