
(function() {
	'use strict';

    angular.module('myApp').service('niceService', function(){
        
        this.niceList = [];
        this.naughtyList = [];

        this.addPerson = function(personObj){
                var differenceScore = personObj.niceScore - personObj.naughtyScore;

                if(differenceScore >= 10) {
                    niceList.push(buildPerson(personObj.name, differenceScore));
                } else {
                    naughtyList.push(buildPerson(personObj.name, differenceScore));
                }
            }
    
        function buildPerson(name, differenceScore){
        return {
                name: name,
                score: differenceScore
                }
        }

    })

})();