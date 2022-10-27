const router = require("express").Router();
const CharacterModel = require("../characterDb");

router.get('/test', (req, res) => res.send('character test!'));

router.get('/all', (req, res) => {
    CharacterModel.find()
        .then(characters => res.json(characters))
        .catch(err => res.status(404).json({ nocharacterfound: 'No Character Found' }));
});

router.post('/add', async (req, res, next) => {
    try {
        console.log("BODY:", req.body);
        const result = await CharacterModel.create(req.body);
        res.status(201).send(result)
    }
    catch (err) {
        return next(err)
    }
});
router.put('/change', (req, res) => {
    CharacterModel.findByIdAndUpdate(req.params.id, req.body)
        .then(Character => res.json({ msg: 'Updated Character' }))
        .catch(err => res.status(404).json({ nocharacterfound: 'Unable to update Character' })
        );
});
router.delete('/delete/:id', (req, res) => {
    CharacterModel.findByIdAndRemove(req.params.id)
        .then(Character => res.json({ msg: 'Character deleted successfully' }))
        .catch(err => res.status(404).json({ nocharacterfound: 'No Character Found' }));
});

module.exports = router;