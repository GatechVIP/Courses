/*global Courses, Backbone*/

Courses.Models = Courses.Models || {};

(function () {
    'use strict';

    Courses.Models.SearchFilter = Backbone.Model.extend({

        url: '',

        initialize: function() {
            
        },

        defaults: {
            
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        },

        filter: function(name){
            console.log('search ' + name);
        }
        
    });

})();
