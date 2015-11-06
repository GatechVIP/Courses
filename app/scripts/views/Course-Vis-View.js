/*global Courses, Backbone, JST*/

Courses.Views = Courses.Views || {};

(function () {
    'use strict';

    Courses.Views.CourseVisView = Backbone.View.extend({

        template: JST['app/scripts/templates/Course-Vis-View.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click button' : 'onClick'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        onClick: function() {
            //appRouter.history.navigate();
            var destination = "detail/#"+this.model.attributes.courseID;
            Backbone.history.navigate(destination, {trigger: true});
        }

    });

})();
