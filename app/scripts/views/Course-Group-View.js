/*global Courses, Backbone, JST*/

Courses.Views = Courses.Views || {};

(function () {
    'use strict';

    Courses.Views.CourseGroupView = Backbone.View.extend({

        template: JST['app/scripts/templates/Course-Group-View.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
             this.collection.each(this.addCourse, this);
             return this;
        }

        addCourse: function(course) {
            var courseView = new Courses.Views.CourseView({ model: course });
            this.$el.append(courseView.render().el);
        }

    });

})();
