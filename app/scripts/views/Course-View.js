/*global Courses, Backbone, JST*/

Courses.Views = Courses.Views || {};

(function () {
    'use strict';

    Courses.Views.CourseView = Backbone.View.extend({

        template: JST['app/scripts/templates/Course-View.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click a' : 'onClick'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        onClick :function() {
            
        }
    });

})();
