require('dotenv').config();
const accountSid = process.env.AccountSID
const authToken = process.env.AuthToken
const client = require('twilio')(accountSid, authToken);

client.messages.create({
    from: 'whatsapp:+14155238886',
    body: 'Hello there!',
    to: 'whatsapp:+256705495719'
})
.then(message => console.log(message))
.catch(e => console.log(e));
