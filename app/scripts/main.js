/*global Courses, $*/


window.Courses = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        //console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';
    Courses.init();

    this.appRouter = new Courses.Routers.CourseRouter;
    Backbone.history.start({ pushState: true });

    var filter = new Courses.Models.SearchFilter();
    var searchBar = new Courses.Views.SearchBar({ model: filter });
            
    $(".header").append(searchBar.render().el);
});

