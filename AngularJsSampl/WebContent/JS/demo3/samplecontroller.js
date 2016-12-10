var app=angular.module('personApp',[])

app.controller('PersonController',function($scope){
   $scope.persons=[{id:1,name:'Rupesh',email:'malviya@xyz.com'},
                   {id:2,name:'gapps',email:'gapps@xyz.com'},
                   {id:3,name:'gapu',email:'gapps@xyz.com'}]

})