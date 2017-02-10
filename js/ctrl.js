angular.module('myApp').controller('myCtrl', function($scope){

    $scope.niceList = [];
    $scope.naughtyList = [];

    $scope.addNewPerson = function(){
            var differenceScore = $scope.niceScore - $scope.naughtyScore;

            if(differenceScore >= 10) {
                $scope.niceList.push();
            } else {
                $scope.naughtyList.push({
                    name: $scope.name,
                    score: differenceScore
                });

        }
   }

    /* {

        name: 'Luke Skywalker',
        niceScore: (0-100),
        naughtyScore: (0-100)

    }
    */
    
});