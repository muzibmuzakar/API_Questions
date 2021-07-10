'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/questions')
        .get(jsonku.getQuestions);

    app.route('/questions/:id')
        .get(jsonku.getQuestionsId);
};