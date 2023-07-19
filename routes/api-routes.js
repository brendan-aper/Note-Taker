const router = require('express').Router();
const uuid = require('uuid');
const fs = require('fs');

router.get('/api/notes', async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync("db/db.json", 'utf8'));
  res.json(dbJson);
});

router.post('/api/notes', (req, res) => {
  const dbJson = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));
  const newPost = {
    title: req.body.title,
    text: req.body.text,
    id: uuid(),
  };
  dbJson.push(newPost);
  fs.writeFileSync('db/db.json', JSON.stringify(dbJson));
  res.json(dbJson);
});

router.delete('/api/notes/:id', (req, res) => {
  let data = fs.readFileSync("db/db.json", "utf-8");
  const dataJSON = JSON.parse(data);
  const newPost = dataJSON.filter((note) => {
    return note.id !== req.params.id;
  });
  fs.writeFileSync('db/db.json', JSON.stringify(newPost));
  res.json('Note deleted')
})

module.exports = router;