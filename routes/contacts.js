var express = require('express');
var router = express.Router();

var { get, getId, create, put, remove } = require('../controller/contacts');

/* GET contacs listing. */
router.get('/', get);

/* GET by ID contacs. */
router.get('/:id', getId);

/* POST contacs. */
router.post('/', create);

/* PUT contacs. */
router.put('/:id', put);

/* DELETE contacs. */
router.delete('/:id', remove);

module.exports = router;
