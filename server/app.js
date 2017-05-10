var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

app.set('port', (process.env.PORT || 5000));

app.use(express.static('./server/public/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//create default SMTP transport
var transporter = nodemailer.createTransport(smtpTransport({
    service: 'yahoo',
    auth: {
        user: 'x',
        pass: 'x'
    }
}));

app.post('/mail', function(req,res){
    var mailer = req.body;
      console.log(mailer);

    var mailOptions = {
        from: '"Auto-Emailer App", <development.testing84@yahoo.com>',
        to: mailer.toEmail,
        subject: mailer.subject,
        text: mailer.message,
        html: '<b>' + mailer.message + '</b>'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    res.send(200);
});//end of app.post()

app.get('/', function(req,res){
    res.sendFile(path.resolve('./server/public/views/index.html'));
});

app.listen(app.get('port'), function(){
    console.log('Listening on port: ', app.get('port'));
});


module.exports = app;
