
(function() {
	'use strict';

    angular.module('myApp').service('niceService', function(){
        
        this.niceList = [];
        this.naughtyList = [];

        this.addNewPerson = function(personObj){
                var differenceScore = personObj.niceScore - personObj.naughtyScore;

                var person = buildPerson(personObj.name, differenceScore);

                    if(differenceScore >= 10) {
                        niceList.push(person);
                    } else {
                        naughtyList.push(person);
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