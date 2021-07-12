'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/questions')
        .get(jsonku.getQuestions);

    app.route('/questions/:id')
        .get(jsonku.getQuestionsId);
    
    app.route('/questions')
        .post(jsonku.addQuestion);
    
    app.route('/questions/:id')
        .put(jsonku.updateQuestion);

    app.route('/questions/:id')
        .delete(jsonku.deleteQuestion);
};