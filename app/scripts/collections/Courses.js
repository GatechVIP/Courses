/*global Courses, Backbone*/

Courses.Collections = Courses.Collections || {};

(function () {
    'use strict';

    Courses.Collections.Courses = Backbone.Collection.extend({

        model: Courses.Models.Course

    });

})();
