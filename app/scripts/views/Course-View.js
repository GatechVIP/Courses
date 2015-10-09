/*global Courses, Backbone, JST*/

Courses.Views = Courses.Views || {};

(function () {
    'use strict';

    Courses.Views.CourseView = Backbone.View.extend({

        template: JST['app/scripts/templates/Course-View.ejs'],

        tagName: 'li',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            var html = '<h3>' + this.model.get('name') + '</h3>';
            html += '<p>' + this.model.get('description') + '</p>';
            //this.$el.html(this.template(this.model.toJSON()));
            $(this.el).html(html);
        }

    });

})();
