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
            'click' : 'onClick'
        },

        isOpen: false,

        courseDetail: null,

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        onClick :function() {
            this.showDetail(this.model.id);
        },

        showDetail:function(id) {
            if(this.isOpen==false){
                if(this.courseDetail == null){
                    var courseVis = new Courses.Models.CourseVis({courseID: id, gpa:3.35, A:5, B:6, C:3, D:2, F:0, W:1});
                    var courseVisView = new Courses.Views.CourseVisView({model:courseVis});
                    this.courseDetail = courseVisView.render().el;
                }
                this.$el.append(this.courseDetail);
                this.isOpen = true;
            }else{
                this.isOpen = false;
                this.courseDetail.remove();
            }

        }
    });

})();
