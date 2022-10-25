const express = require('express');
const router = require("express").Router();
const { CharacterModel } = require("../characterDb");

router.get('/test', (req, res) => res.send('character test!'));

router.get('/:id', (req, res) => {
    Character.findById(req.params.id)
        .then(Character => res.json(Character))
        .catch(err => res.status(404).json({ nocharacterfound: 'No Character Found' }));
});

router.post('/', (req, res) => {
    CharacterModel.create(req.body)
        .then(Character => res.json({ msg: 'Character added successfully' }))
        .catch(err => res.status(404).json({ nocharacterfound: 'No Character Found' }));
});
router.put('/', (req, res) => {
    CharacterModel.findByIdAndUpdate(req.params.id, req.body)
        .then(Character => res.json({ msg: 'Updated Character' }))
        .catch(err => res.status(404).json({ nocharacterfound: 'Unable to update Character' })
        );
});
router.delete('/:id', (req, res) => {
    CharacterModel.findByIdAndRemove(req.params.id, req.body)
        .then(Character => res.json({ msg: 'Character deleted successfully' }))
        .catch(err => res.status(404).json({ nocharacterfound: 'No Character Found' }));
});

module.exports = router;