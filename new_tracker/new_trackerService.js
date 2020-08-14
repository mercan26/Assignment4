/*trackerService.js

Provides basic Activity Tracker Functionality
Activities:  Walk/Run
Input:  Distance (miles)
        Weight (lbs)
        Time (hours)
Output: Calories Burned

 Formula Sources:

 https://lovandy.com/wellness/physical/calories-burned-by-walking.html AND
 https://lovandy.com/wellness/physical/calories-burned-running.html
*/

//requires weight in lbs

var tracker = function(exercise, weight, distance, time) {
    if (exercise == "walking"){
	this.exercise = walking;
    } else 
	this.weight = weight;
	this.distance = distance;
	this.time = time;
	
    }
    
    setExercise(exercise) {
	this.exercise = exercise;
    }

    calculate(data) {
	return this.exercise.calculate(data);
    }
    
    //speed is whatever units the user wants to use
    calcSpeed(data){
    return data.distance/data.time;
    }


var walking = function(){
    this.calculate = function (data){
	return 0.3 * data.weight * data.distance;
    }
};
//requires weight in lbs, and distance in miles
var running  = function(){
    this.calculate = function (data){
    return 0.63 * data.weight * data.distance;
    }
};

}
