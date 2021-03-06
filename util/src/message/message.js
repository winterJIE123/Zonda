// Generated by CoffeeScript 1.6.2
define(function(require, exports, module) {
  var $, Backbone, Mustache, TPL, delay, message, prefix, _;

  $ = require("jquery");
  _ = require("underscore");
  Backbone = require("backbone");
  Mustache = require("mustache");
  prefix = "#zonda-util-message";
  delay = 1300;
  TPL = require("./tpl/message.tpl");
  message = _.extend({
    delay: delay,
    open: function() {},
    close: function() {},
    error: function(info, callback) {},
    success: function(info, callback) {},
    tip: function(info, callback) {},
    loading: function(info, callback) {}
  }, Backbone.Events);
  return module.exports = message;
});
