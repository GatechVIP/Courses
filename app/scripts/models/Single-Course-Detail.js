/*global Courses, Backbone*/

Courses.Models = Courses.Models || {};

(function () {
    'use strict';

    Courses.Models.SingleCourseDetail = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
            professor:"",
            size:"",
            courseID:"",
            gpa:0,
            A:0,
            B:0,
            C:0,
            D:0,
            F:0,
            W:0
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
