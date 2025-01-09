var express = require('express');
var router = express.Router();

/* Ruta para mostrar los videos con diferentes calidades */
router.get('/calidades', (req, res) => {
    const videos = [
        { quality: '480p', url: 'http://localhost:8080/videos/480p/480p.m3u8', width: 320, height: 180 },
        { quality: '720p', url: 'http://localhost:8080/videos/720p/720p.m3u8', width: 640, height: 360 },
        { quality: '1080p', url: 'http://localhost:8080/videos/1080p/1080p.m3u8', width: 960, height: 540 }
    ];
    res.render('calidades', { title: 'Reproductor de Videos', videos });
});

module.exports = router;

