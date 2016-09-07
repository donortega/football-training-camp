'use strict';

var $j = jQuery.noConflict();

var app = angular.module('footballTrainingCamp', ['ngAnimate', 'ngTouch', 'ui.bootstrap', 'ui.router']);

// defining globalConfig here in order to help facilitate self-referencing variables
var globalConfig = {};
