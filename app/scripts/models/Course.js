/*global Courses, Backbone*/

Courses.Models = Courses.Models || {};

(function () {
    'use strict';

    Courses.Models.Course = Backbone.Model.extend({
        
        url: '',

        initialize: function() {
            console.log("model created!");
        },

        defaults: {
            name: "default",
            description: "placeHolder"
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
