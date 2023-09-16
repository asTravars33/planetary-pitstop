var express = require('express');
var router = express.Router();

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const prompts = ["In the grand scheme of urination", "In the realm of digestion", "In light of your recent visit to the porcelain realm", "In the tapestry of health"];

router.get('/main', function(req, res, next){
	if(req.query===undefined || req.query.length<=0){
		res.locals.moisture = "No Input";
		res.locals.result = "No Input";
	}
	else{
		res.locals.moisture = req.query.moisture;
		res.locals.result = req.query.result;
	}
	// Get date
	const d = new Date();
	var date = d.getDate();
	var monthIdx = d.getMonth();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	var hours = d.getHours();
	var dateStr = months[monthIdx]+". "+date;
	console.log(d.getTime());
	
	var sql = "INSERT INTO info VALUE(?, ?, ?, ?, ?);";
	res.app.locals.pool.query(sql, [req.session.profile.userId, monthIdx*12 + date*31 + hours*60 + minutes*60 + seconds, dateStr, res.locals.moisture, res.locals.result], function(error, results, fields){
		console.log("Done");
		console.log(sql);
		next();
	});
}, 
function(req, res, next) {
	var idx = parseInt(Math.random()*4);
	res.render('2_main', {moisture: res.locals.moisture, prompt: prompts[idx], result: "you have "+res.locals.result+"."});
});

module.exports = router;
