const FROM_EMAIL = 'info@boardgamearc.com'
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sendMail = async (toEmail) => {
  return new Promise(async (resolve, reject) => {
    const msg = {
      to: toEmail,
      from: FROM_EMAIL,
      subject: `You've been invited to a game night!`,
      text: 'lorem ipsum',
      html: '<strong>lorem ipsum</strong>',
    }
    try {
      await sgMail.send(msg)
      console.log(`Email sent to ${toEmail}`);
      resolve();

    } catch (error) {
      reject(error);
    }
  })
}

module.exports = { sendMail }
