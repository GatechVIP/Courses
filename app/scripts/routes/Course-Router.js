/*global Courses, Backbone*/

Courses.Routers = Courses.Routers || {};

(function () {
    'use strict';

    Courses.Routers.CourseRouter = Backbone.Router.extend({
    	routes: {
            "":"listView",
        	"/detail/:id": "detail"
        	// Backbone will try to match the route above first
    	},

        listView: function(){
            this.loadData();
        },

    	detail: function(id){
    		//this.loadView();
    	},

        loadData: function () {
            var data = [];
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '../json/GatechCourses.json', true);
            xhr.setRequestHeader("Content-type","text/plain");
            xhr.send();
            xhr.onload=function() { 
            var objs = $.parseJSON(xhr.responseText);
                for (var key in objs) {
                    var len = key.indexOf(" ")+5;
                    var courseID = key.substring(0, len);
                    var courseName = key.substring(len+1);
                    var course = new Courses.Models.Course({ 
                        name: courseName,
                        description:objs[key],
                        id: courseID
                    });
                    data.push(course);
                }
                var courseGroup = new Courses.Collections.CourseCollection(data);
                var courseGroupView = new Courses.Views.CourseCollectionView({ collection: courseGroup});
                var v = courseGroupView.render().el;
                this.view && this.view.remove();
                this.view = v;
                $(".content").html(this.view);
            }
        },

        loadView: function (view) {
            this.view && this.view.remove();
            this.view = view;
            $(".content").html(this.view);
        }
    });

})();
