import  nodemailer from "nodemailer";
import ApiResponse from "./ApiResponse.js";


// Ensure Correct Port and Secure Setting

// Port 465 is used with secure: true (SSL).
//     Port 587 is used with secure: false and tls: { rejectUnauthorized: false } for STARTTLS encryption.
//     Make sure the port and secure settings in your nodemailer configuration match.
//

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
})



const sendVerificationEmail = async (email,otp) => {

    const html =
        `
<!DOCTYPE html>
<html lang="en">    
<head>
<style>
h1 {
    background-color: aqua;
    width: 180px;
    font-size: 24px;
    margin: auto;
    text-align: center;
}
</style>
</head>
<body>
<h1>${otp}</h1>
<h1>otp</h1>
</body>
</html>
`;

    const options = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Email Verification",
        html: html
    }
    console.log(options)
    console.log(process.env.EMAIL_HOST, process.env.EMAIL_PORT, process.env.EMAIL_PASSWORD,);
    try {
        await transporter.sendMail(options,(e,i)=>{
            if(e){
                console.log(e);
            }
            else console.log(i);
        })
        return true;
    }catch (error) {
      console.log(error)
        return false;
    }
}

export {sendVerificationEmail}