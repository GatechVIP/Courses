/*global Courses, Backbone, JST*/

Courses.Views = Courses.Views || {};

(function () {
    'use strict';

    Courses.Views.SearchBar = Backbone.View.extend({

        template: JST['app/scripts/templates/Search-Bar.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            "keyup .search-query": "search"
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        search: function () {
            var courseName = $('#searchText').val();
            this.model.filter(courseName);
        }

    });

})();
