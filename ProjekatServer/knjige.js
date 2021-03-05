var express = require('express')
var router = express.Router();

const knjige = [
  {ime: 'Tvrdjava', code: '1', opis: 'Selimoviceva', cena: 180, omiljen: false},
  {ime: 'Krajnost', code: '2', opis: 'Dipakova', cena: 280, omiljen: false},
  {ime: 'Ritam pita', code: '3', opis: 'Nezanog junaka', cena: 380, omiljen: false},
];

router.get('/', (req, res) => {
  var query = (req.query['q'] || '').toLowerCase();
  if (query) {
    const foundKnjige = knjige.filter(
      (knjiga) => knjiga.ime.toLowerCase().indexOf(query) != -1);
    return res.status(200).json(foundKnjige);
  }
  return res.status(200).json(knjige);
});

router.get('/:code', (req, res) => {
  let knjigaCode = req.params.code;
  let foundKnjigu = knjige.find(each => each.code === knjigaCode);
  if (foundKnjigu) {
    return res.status(200).json(foundKnjigu);
  }
  return res.status(400).json({msg: 'Knjiga sa code ' + knjigaCode + ' nije pronadjen!'});
});

router.post('/', (req, res) => {
  let knjiga = req.body;
  let foundKnjigu = knjige.find(each => each.code === knjige.code);
  if (foundKnjigu) {
    return res.status(400)
        .json({msg: 'Knjiga sa code ' + knjiga.code + ' vec postoji'});
  }
  knjige.push(knjiga);
  return res.status(200).json({msg: 'Knjiga sa code ' + knjiga.code + ' uspesno napravljen'});
});

router.patch('/:code', (req, res) => {
  let knjigaCode = req.params.code;
  let foundKnjigu = knjige.find(each => each.code === knjigaCode);
  if (foundKnjigu) {
    foundKnjigu.omiljen = req.body.omiljen;
    let msg = 'Knjiga sa code ' + knjigaCode + ' sada je ';
    msg += foundKnjigu.omiljen ? ' omiljen.' : ' nije omiljen';
    return res.status(200).json({msg: msg});
  }
  return res.status(400).json({msg: 'Knjiga sa code ' + knjigaCode + ' nije pronadjen!'});
});

module.exports = router;
