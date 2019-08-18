require('dotenv').config();
const accountSid = process.env.AccountSID
const authToken = process.env.AuthToken
const client = require('twilio')(accountSid, authToken);
const user = 'Dee';

client.messages.create({
    from: 'whatsapp:+14155238886',
    body: `
    Hello ${user}  this Phone number ${process.env.Phone}
    Has an upcomming trip ${new Date()}
    `,
    to: `whatsapp:${process.env.Phone}`
})
.then(message => console.log(message))
.catch(e => console.log(e));

