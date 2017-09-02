//<reference path="../angular.min.js"/>
var myModel=angular.module("myModule",[])
            .controller("myController",function($scope)
            {
                var employees=[  { FirstName:"abc",LastName:"abc",Gender:"M",Salary:50000},
                    { FirstName:"def",LastName:"def",Gender:"F",Salary:40000},
                    { FirstName:"ghi",LastName:"ghi",Gender:"M",Salary:60000},
                    { FirstName:"jkl",LastName:"jkl",Gender:"M",Salary:70000}
                    ];

                    $scope.employees = employees;
            });
            

            
