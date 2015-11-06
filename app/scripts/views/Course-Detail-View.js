/*global Courses, Backbone, JST*/

Courses.Views = Courses.Views || {};

(function () {
    'use strict';

    Courses.Views.CourseDetailView = Backbone.View.extend({

        template: JST['app/scripts/templates/Course-Detail-View.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            
            this.$el.html();
            return this;
        }

    });

})();
