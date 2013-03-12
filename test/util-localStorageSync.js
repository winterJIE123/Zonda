// Generated by CoffeeScript 1.6.1
var Backbone, assert, localStorageSync, vows;

vows = require("vows");

assert = require("assert");

require("seajs");

require("../etc/env");

localStorageSync = require("../util/0.1.2/src/localStorageSync/localStorageSync");

Backbone = require("backbone");

Backbone.sync = localStorageSync;

vows.describe("LocalStorage Server for Backbone.sync").addBatch({
  "API": {
    topic: function() {
      return Backbone.sync;
    },
    "output is string": function(topic) {
      return assert.equal(typeof topic, "function");
    }
  }
})["export"](module);
