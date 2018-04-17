const express = require('express'); // import express package
const router = express.Router(); // import router

// bussiness logic put in service
// router helps us to find which service we need
const problemService = require('../services/problemService');

const bodyParser = require('body-parser');
// since the request body is json format, we use json parser to parse the body
const jsonParser = bodyParser.json();

// GET all problems
router.get('/problems', function(req, res) {
	problemService.getProblems()
		.then(problems => res.json(problems));
});

// Get one problem given an id
router.get('/problems/:id', (req, res) => {
	const id = req.params.id; // get problem id
	// +id: convert string to int
	problemService.getProblem(+id)
		.then(problem => res.json(problem))
});

// POST problem
router.post('/problems', jsonParser, (req, res) => {
	problemService.addProblem(req.body)
		.then(
				// resolve
				(problems) => {
					res.json(problems)
				},
				// reject
				(error) => {
					res.status(400).send("Problem name already exists");
				}
			)
});

// module is ES5 syntax.
module.exports = router;