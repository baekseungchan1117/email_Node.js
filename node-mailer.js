const nodemailer = require("nodemailer");

const email = {
    "host" : "smtp.mailtrap.io",
    "port" : "2525",
    "secure" : false,
    "auth" : {
        "user" : "5632ab108bf433",
        "pass" : "a66b98238251e5"
    }
}

const send = async (data) => {
    nodemailer.createTransport(email).sendMail(data, function(error, info){
        if(error){
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    })
}

const content = {
    from : "bsc7386@naver.com",
    to : "8310002097-d03b78@inbox.mailtrap.io",
    subject : "백승찬 메일",
    // text : "첫 메일 보내기 연습"
    html : "<h2>첫 메일 보내기 연습</h2>"
}

send(content);