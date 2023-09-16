var express = require('express');
const router = express.Router();

router.get('/history', function(req, res){
	var sql = "SELECT * FROM info WHERE userId=?;";
	res.app.locals.pool.query(sql, [req.session.profile.userId], function(error, results, fields){
		res.render('3_history', {data: results});
	});
});
router.get('/get_info', function(req, res){
	var sql = "SELECT * FROM info WHERE userId=?;";
	res.app.locals.pool.query(sql, [req.session.profile.userId], function(error, results, fields){
		res.json(results);
	});
});
module.exports = router;