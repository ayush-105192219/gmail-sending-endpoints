var nodemailer = require('nodemailer')

let sndmail = function(tto , ssubject) {
let transporter = nodemailer.createTransport({
    service: 'gmail' ,
    secure :false ,
    port : 25,
    auth : {
        user : 'admin@gmail.com',//sender's gmail-id
        pass: 'adminpass****'//sender's gmail-password
        //visit sender's mail id and enable lesssecureapp to access gmail account
        //visit : https://myaccount.google.com/lesssecureapps
    } ,
    tls: {
        rejectUnauthorised : false
    }
})
 
let HelperOption ={
    from : ' "Admin" <admin@gmail.com>' , //sender's name and mail id
    to: tto , 
    subject : ssubject , 
    text : "mail is send from node.js"
}

transporter.sendMail(HelperOption, (error, info) => { 
    return info.response ;
})
}

const iin =sndmail('anonymous@gmail.com', 'hello') //reciever's mail id and text body

console.log(iin)//undefined