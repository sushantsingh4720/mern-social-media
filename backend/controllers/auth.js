import User from "../models/user.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import sendEmail from "../services/sendEmail.js";
import {
  registerSchemavalidation,
  loginSchemaValidation,
} from "../utils/schemaValidation.js";
const register = async (req, res) => {
  try {
    const { error } = registerSchemavalidation(req.body);
    if (error)
      return res
        .status(200)
        .json({ error: true, message: error.details[0].message });
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser)
      return res
        .status(409)
        .json({ error: true, message: "User already exists" });
    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const confirmationToken = crypto.randomBytes(20).toString("hex");
    const confirmationCode = crypto
      .createHash("sha256")
      .update(confirmationToken)
      .digest("hex");
    const user = await User.create({
      ...req.body,
      password: hashPassword,
      confirmationCode,
    });
    const mailOptions = {
      from: `"no-reply" ${process.env.SMTP_USER_NAME}`,
      to: user.email,
      subject: "Please confirm your account",
      html: `<!DOCTYPE html>
      <html lang="en"> 
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirm Account</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Roboto&display=swap"
              rel="stylesheet">
      </head>
      <body>
          <center>
              <div style="width: 350px">
                  <div style="text-align: center;">
                      <P style="text-align: left;">Hello ${user.firstName},</P>
                      <p style="text-align: left;">Thank you creating Account. Please confirm your email by clicking on the
                          following link.</p>
                      <a href=${req.protocol}://${req.get(
        "host"
      )}/api/auth/confirm/${confirmationToken} target="_blank">
                          <button
                              style="background: #5DA7DB; border: none; color: white; height: 40px; width: 280px; border-radius: 5px; font-weight: 800; font-size: medium;cursor: pointer;">
                              Verify Email-ID</button>
                      </a>
                  </div>
                  <br />
                
                  <footer>
                      <p style="font-size:x-small;">You have received this mail because your e-mail ID is registered with
                          our app. This is a system-generated e-mail, please don't reply to this message.</p>
                  </footer>
              </div>
          </center>
      </body>
      </html>`,
    };
    sendEmail(mailOptions);
    res.status(201).json({ success: true, message: "Successfully registered" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};
export { register };
