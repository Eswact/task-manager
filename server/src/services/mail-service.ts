import { IUser } from '../models/user-model';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
    auth: {
      user: 'renterensmurf@gmail.com',
      pass: 'utgwplwftqgzoejt'
    }
});

const sendVerificationMail: Function = async (user: IUser, context: string) => {
  const mailOptions = {
    from: '"TaskMG" <renterensmurf@gmail.com>',
    to: user.mail,
    subject: 'Please confirm your email address',
    html: context,
  };

  await transporter.sendMail(mailOptions);
};

export { sendVerificationMail };
