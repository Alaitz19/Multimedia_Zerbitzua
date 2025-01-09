var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/player', (req, res) => {
  res.render('index', { 
    title: 'Reproductor de Video'
  });
});

// Sirve la carpeta "videos" como contenido estático
router.use('/videos', express.static(path.join(__dirname, '../public/videos')));

module.exports = router;
