const express = require('express');
const path = require('path');
const app = express();

// dist klasöründeki statik dosyaları serve et
app.use(express.static(path.join(__dirname, 'dist')));

// Özellikle images klasörü için
app.use('/images', express.static(path.join(__dirname, 'dist/public/images')));

// Debug için
app.use('*', (req, res, next) => {
  console.log('İstenen yol:', req.originalUrl);
  next();
});

// Tüm rotaları React uygulamasına yönlendir
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
  console.log('Images klasör yolu:', path.join(__dirname, 'dist/public/images'));
});
