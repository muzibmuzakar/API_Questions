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
// post questions
exports.addQuestion = function (req, res) {
    var quest = req.body.quest;
    var choice1 = req.body.choice1;
    var choice2 = req.body.choice2;
    var choice3 = req.body.choice3;
    var choice4 = req.body.choice4;
    var answer = req.body.answer;

    connection.query('INSERT INTO questions (quest, choice1, choice2, choice3, choice4, answer) VALUES(?,?,?,?,?,?)',
        [quest, choice1, choice2, choice3, choice4, answer],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};
// edit question
exports.updateQuestion = function (req, res) {
    let id = req.params.id;
    var quest = req.body.quest;
    var choice1 = req.body.choice1;
    var choice2 = req.body.choice2;
    var choice3 = req.body.choice3;
    var choice4 = req.body.choice4;
    var answer = req.body.answer;

    connection.query('UPDATE questions SET quest=?, choice1=?, choice2=?, choice3=?, choice4=?, answer=? WHERE id=?',
        [quest, choice1, choice2, choice3, choice4, answer, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data!", res)
            }
        });
};

// delete Question
exports.deleteQuestion = function(req, res){
    let id = req.params.id;
    connection.query('DELETE FROM questions WHERE id = ?', [id],
    function(error, rows, fields){
        if (error) {
            connection.log(error);
        }else{
            response.ok("berhasil di hapus", res)
        }
    });
};