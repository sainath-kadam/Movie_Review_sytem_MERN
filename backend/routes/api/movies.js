const express = require('express');
const router = express.Router();

// Load Movie model
const Movie = require('../../config/models/Movie');
router.get('/test', (req, res) => res.send('Movie route testing!'));
router.get('/', (req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(404).json({ nomoviefound: 'No movies found' }));
});


router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(Movie => res.json(Movie))
    .catch(err => res.status(404).json({ nomoviefound: 'No Movie found' }));
});


router.post('', (req, res) => {
  Movie.create(req.body)
    .then(Movie => res.json({ msg: 'Movie added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Movie' }));
});


router.put('/:id', (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body)
    .then(Movie => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});


router.delete('/:id', (req, res) => {
  Movie.findByIdAndRemove(req.params.id, req.body)
    .then(Movie => res.json({ mgs: 'Movie entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Movie' }));
});

module.exports = router;
