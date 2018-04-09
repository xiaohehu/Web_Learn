// let problems = [
// {
// 	"id":1,
// 	"name":"Two Sum",
// 	"desc":"Given an array of integers, find two numbers such that they	add up to a specific target number.\
// 	\n\nThe function twoSum should return\
// 	indices of the two numbers such that they add up to the target,\
// 	 where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are NOT zero-based.",
// 	"difficulty":"easy"
// },
// {
// 	"id":2,
// 	"name":"3Sum",
// 	"desc":"Given an array S of n integers, are there elements a, b, c in\
// 	S such that a + b + c = 0? Find all unique triplets in the array which\
// 	gives the sum of zero.",
// 	"difficulty":"medium"
// },
// {
// 	"id":3,
// 	"name":"4Sum",
// 	"desc":"Given an array S of n integers, are there elements a, b, c,\
// 	and d in S such that a + b + c + d = target?\n\nFind all unique\
// 	quadruplets in the array which gives the sum of target.",
// 	"difficulty":"medium"
// },
// {
// 	"id":4,
// 	"name":"Triangle Count",
// 	"desc":"Given an array of integers, how many three numbers can be\
// 	found in the array, so that we can build an triangle whose three edges\
// 	length is the three numbers that we find?",
// 	"difficulty":"hard"
// },
// {
// 	"id":5,
// 	"name":"Sliding Window Maximum",
// 	"desc":"Given an array of n integer with duplicate number, and a\
// 	moving window(size k), move the window at each iteration from the start of\
// 	the array, find the maximum number inside the window at each moving.",
// 	"difficulty":"super"
// }
// ];

const ProblemModel = require('../models/ProblemModel');

const getProblems = function() {

	// since we will store problems in database later
	// we need promise to handle asynchronous call
	return new Promise ((resolve, reject) => {
		// resolve(problems);
		ProblemModel.find({}, function(err, problems) {
			if(err){
				reject(err);
			} else {
				resolve(problems);
			}
		});
	});
}

// get problem by ID
const getProblem = function(id) {
	return new Promise((resolve, reject) => {
		// find problem whose id mathces input id
		// resolve(problems.find(problem => problem.id = id))
		ProblemModel.findOne({id: id}, function(err, problem) {
			if (err) {
				reject(err);
			} else {
				resolve(problem);
			}
		});
	});
}

// add problem
const addProblem = function(newProblem) {
	return new Promise((resolve, reject) => {
		// if (problems.find(problem => problem.name === newProblem.name)) {
		// 	reject('Problem already exists');
		// } else {
		// 	// assign id to new problems
		// 	newProblem.id = problems.length + 1;
		// 	// add new problem to problem list
		// 	problems.push(newProblem);
		// 	// return new problem
		// 	resolve(newProblem);
		ProblemModel.findOne({name : newProblem.name}, function(err, data){
			if (data) {
				reject("Problem name already exists");
			} else {
				ProblemModel.count({}, function(err, num){
					newProblem.id = num + 1
					// create mongodb object
					let mongoProblem = new ProblemModel(newProblem);
					mongoProblem.save();
					resolve(mongoProblem);
				});
			}
		});
	});
}

module.exports = {
	getProblems,
	getProblem,
	addProblem
}