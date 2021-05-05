var express = require('express');
var api = require('../controllers/api.js');
var router = express.Router()

router.get('/all', api.getAll);
router.post('/add', api.addServer)
router.delete('/del/:id', api.delServer)

module.exports = router;
