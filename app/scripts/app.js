'use strict';

var $j = jQuery.noConflict();

var app = angular.module('footballTrainingCamp', ['ngAnimate', 'ngTouch', 'ui.bootstrap', 'ui.router']);

// defining globalConfig here in order to help facilitate self-referencing variables
var globalConfig = {};

app
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.hashPrefix('!');

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('titlescreen', {
				url: '/',
				templateUrl: '_templates/_states/title-screen.html',
				controller: 'TitleScreenCtrl as ctrl'
			})
			.state('40yarddash', {
				url: '/40yarddash',
				templateUrl: '_templates/_states/40-yard-dash.html',
				controller: '40YardDashCtrl as ctrl'
			})
			.state('footballthrow', {
				url: '/footballthrow',
				templateUrl: '_templates/_states/football-throw.html',
				controller: 'FootballThrowCtrl as ctrl'
			})
			.state('benchpress', {
				url: '/benchpress',
				templateUrl: '_templates/_states/bench-press.html',
				controller: 'BenchPressCtrl as ctrl'
			})
			.state('3conedrill', {
				url: '/3conedrill',
				templateUrl: '_templates/_states/3-cone-drill.html',
				controller: '3ConeDrillCtrl as ctrl'
			})
			.state('about', {
				url: '/about',
				templateUrl: '_templates/_states/about.html',
				controller: 'AboutCtrl as ctrl'
			})
		;
	}])
;
