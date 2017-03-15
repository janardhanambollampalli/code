
var app = angular.module("myApp",['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/index',{templateUrl:'templates/home.html',controller:'homeCtrl'})
	.when('/about',{templateUrl:'templates/about.html',controller:'aboutCtrl'})
	.when('/contact',{templateUrl:'templates/contct.html',controller:'contactCtrl'})
	.otherwise({redirectTo:'/index'})
})

app.controller("myCtrl",function(){
	console.log("I m In Controller");
})

app.controller("homeCtrl",function($scope){
	console.log("I m In home Controller");
	$scope.registerUser = function(){
		console.log($scope.register);
	}

})

app.controller("aboutCtrl",function(){
	console.log("I m In About Controller");
})

app.controller("contactCtrl",function(){
	console.log("I m In contact Controller");
})
