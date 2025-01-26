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
        * {
            font-family: sans-serif;
        }

        p {
            font-weight: bolder;
            padding-top: 2vh;
    text-align:center;
        }

        .main {
            padding-top: 2vh;
            margin: auto;
            width: 90vw;
            height: 95vh;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
.s{

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 76px;
    font-weight: bolder;
    color: white;
    background-color: #1a1a1a;
    height: 15vh;
    width: 15vh;
    margin: auto;
}
        .otp {
            margin: auto;
            width: 75vw;
            display: flex;
        }

        .otpdigit {
            font-size: 42px;

            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #679ef8;
            height: 10vh;
            width: 17vw;
            margin: auto;
            text-align: center;
        }
    </style>
</head>
<body>

<div class="main">
    <div class="s">S</div>
    <p>

        Suvidha is an innovative CRM (Customer Relationship Management) ticket system website designed to enhance
        customer
        support and streamline service management. This platform empowers businesses to efficiently manage customer
        queries,
        issues, and requests through a centralized system.
    </p>
    <div class="otp">
        <h1 class="otpdigit">${otp.charAt(0)}</h1>
        <h1 class="otpdigit">${otp.charAt(0)}</h1>
        <h1 class="otpdigit">${otp.charAt(0)}</h1>
        <h1 class="otpdigit">${otp.charAt(0)}</h1>
    </div>
</div>

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