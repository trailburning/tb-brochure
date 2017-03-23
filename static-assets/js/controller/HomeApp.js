var app = app || {};

define([
  'underscore',
  'backbone',
  'imageScale'
], function(_, Backbone, imageScale){
  app.dispatcher = _.clone(Backbone.Events);

  _.templateSettings = {
      evaluate:    /\{\{(.+?)\}\}/g,
      interpolate: /\{\{=(.+?)\}\}/g,
      escape:      /\{\{-(.+?)\}\}/g
  };

  var initialize = function() {
    var self = this;

    $('img.scale').imageScale({
      'rescaleOnResize': true
    });
  };

  return { 
    initialize: initialize
  };
});

