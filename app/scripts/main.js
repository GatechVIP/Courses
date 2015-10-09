/*global Courses, $*/

window.Courses = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';
    Courses.init();
    var course1 = new Courses.Models.Course({
            name:"ACCT 2101 ACCOUNTING I",
            description:"An introduction to the measurement and financial reporting of organizations and the interpretation of the resulting financial statements. Credit not allowed for MGT 3000 and ACCT 2101. ",
            id:"12345"
        });

    var course2 = new Courses.Models.Course({
            name:"AE 1350 INTRO TO AEROSPACE ENGR",
            description:"Introduction to the field of aerospace engineering, discussion of basic aerospace systems and disciplines, working vocabulary of the field. Demonstration through examples. Wind tunnel visit. Students cannot receive credit for both AE 1350 and AE 1601. ",
            id:"12345"
        });

    var course3 = new Courses.Models.Course({
            name:"ARCH 6113 HIST RENAISS&MANNER ARCH",
            description:"Investigation of the history and theory of Renaissance and Mannerist architecture with a primary emphasis on Italy. ",
            id:"12345"
        });

    var courseGroup = new Courses.Collections([ course1, course2, course3 ]);
    var courseGroupView = new Courses.Views.CourseGroupView({ collection: courseGroup});

    $(".courseResults").html(courseGroupView.render().el);
});
