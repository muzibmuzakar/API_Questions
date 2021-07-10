'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res)
};
// get questions
exports.getQuestions = function(req, res){
    connection.query('SELECT * FROM questions', function(error, rows, fields){
        if (error) {
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};
// get questions by id
exports.getQuestionsId = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM questions WHERE id = ?', [id],
    function(error, rows, fields){
        if (error) {
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};