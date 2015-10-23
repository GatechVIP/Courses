/*global Courses, Backbone*/

Courses.Routers = Courses.Routers || {};

(function () {
    'use strict';

    Courses.Routers.CourseRouter = Backbone.Router.extend({
    	routes: {
        	":id": "getCourse"
        	// Backbone will try to match the route above first
    	},
    	getCourse: function(id){
    		console.log(id);
    		var detailCourse = new Courses.Views.CourseDetailView({model: course});
    		$(".container").html(detailCourse.render().el);
    	}
    });

})();
