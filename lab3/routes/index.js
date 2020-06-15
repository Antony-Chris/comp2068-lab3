'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/bob', function (req, res) {
    res.render('bob', { name: 'BOB', description: 'Bob is a retired computer programmer who started his career at IBM in the 1960s At IBM he had to keep his  wedding ring at home in order to maintain his job. He loves growing roses and is a fantastic baker ' });
});

router.get('/Marley', function (req, res) {
    res.render('Marley', {
        name: 'Marley', description: ' Marley is a retired Singer who started his career in Jamica in the 1960s.  At the wailers he had to keep his songs at home in orde to maintain his career.He loves growing weed and loves playing soccer.Bob is a retired computer programmer who started his career at IBM in the 1960s At IBM he had to keep his  wedding ring at home in order to maintain his job. He loves growing roses and is a fantastic baker ' });
});

router.get('/heather', function (req, res) {
    res.render('heather', {
        name: 'heather', description: ' heather is a retired computer programmer who started her career at Google in the 1960s. At IBM she had to keep her wedding ring at home in orderto maintain her job. She loves growing roses and is a fantastic baker ' });
});

router.get('/ether', function (req, res) {
    res.render('ether', {
        name: 'ether', description: 'ether is a retired computer programmer who started her career at BMO in the 1960s At IBM she had to keep her wedding ring at home in orde maintain her job.She loves growing roses and is a fantastic baker.' });
    });
module.exports = router;
