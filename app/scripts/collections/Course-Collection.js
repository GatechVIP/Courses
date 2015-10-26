/*global Courses, Backbone*/

Courses.Collections = Courses.Collections || {};

(function () {
    'use strict';

    Courses.Collections.CourseCollection = Backbone.Collection.extend({

        model: Courses.Models.Course

    });

})();
