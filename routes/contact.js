var express = require('express');
var router = express.Router();

let nodemailer = require('nodemailer')

router.get('/', function(req, res) {
    res.render('contact');
});
router.get('/review', function(req, res) {
    res.render('contactReview');
});
router.post('/post', function(req, res) {
    // var data = req.body;
    // console.log(data)
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth:{
            user: 'terry.yao.udn@gmail.com',
            pass: 'Aa123456-'
        }
    })
    let mailOptions = {
        from: '"姚勝華"<terry.yao.udn@gmail.com>',
        to: 'soulmusic790423@gmail.com',
        subject: req.body.username + '寄了一封信',
        // html
        text: req.body.description
    }
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error)
        }
        res.redirect('review')
    })

    // res.redirect('/contact/review');
});
module.exports = router;
