
(function() {
	'use strict';

angular.module('myApp').controller('myCtrl', function($scope, niceService){

    $scope.niceList = niceService.niceList;
    $scope.naughtyList = niceService.naughtyList;

    $scope.addNewPerson = function(){
        var person = buildPerson();
        niceService.addNewPerson(person);
    }

    function buildPerson(){
        return {
                name: $scope.name,
                niceScore: $scope.niceScore,
                naughtyScore: $scope.naughtyScore
        }
    }

    /* {

        name: 'Luke Skywalker',
        niceScore: (0-100),
        naughtyScore: (0-100)

    }
    */
    
    });

})();