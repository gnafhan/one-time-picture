const express = require('express');
const app = express();
const port = 1212;
const path = require('path');;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

function randomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  
  // Fungsi untuk menghasilkan string huruf acak dengan panjang tertentu
  function generateRandomString(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += randomLetter();
    }
    return result;
  }
  const randomString = generateRandomString(10);
console.log(randomString);

let watch = 0
  
app.get(`/`, (req, res) => {
  if (watch === 0) {
    watch++
    res.render('hello')


  }
  else {
    res.send("failed")
  }
});


app.get('/restart', (req, res) =>{
  watch = 0
  res.send('restarted')
})

app.listen(port, () => {
  console.log(`Aplikasi berjalan pada http://localhost:${port}`);
});
