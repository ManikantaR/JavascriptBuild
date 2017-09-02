//<reference path="../angular.min.js"/>

var myModule=angular
             .module("myModule",[])
             .controller("myController",function($scope)
             {
                 var Countries=[
                     {
                         name:"UK",
                         cities:[
                                  {name: "Landon"},
                                  {name: "birminghton"},
                                  {name: "manchester" }
                                 ]
                      }  ,
             {
             name:"USA",
             cities:[
                      {name: "los angeles"},
                      {name: "Boston"},
                      {name: "Chicago"}
                    ]
             }
            
                 ];

$scope.Countries=Countries;

             });
