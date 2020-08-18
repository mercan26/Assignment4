var events = require("events");
var Exercise = require("Exercise");

/*trackerService.js

Improved Tracker Functionality.
In this lab, I've added the ability for the tracker to emit an event when
a new exercise is set.  In a fully-featured application we could respond to
this event in a variety of ways. For now we are just going to re-

Activities:  Walk/Run/Swim
Input:  Exercise type
        Distance (miles)
        Weight (lbs)
        Time (minutes)
Output: Calories Burned

 Formula Sources:

 https://lovandy.com/wellness/physical/calories-burned-by-walking.html AND
 https://lovandy.com/wellness/physical/calories-burned-running.html
*/

//requires weight in lbs
//Time in minutes
//distance in miles
//This is yet another way to define the tracker Class.  
var tracker = function(exercise, weight, distance, time) {
    try{

	this.exercise=new Exercise(exercise);
	
	this.weight = Number(weight);
	this.distance = Number(distance);
	this.time = Number(time);
	events.EventEmitter.call(this);
    } catch (err){
	console.err("Error recieved during service creation");
	throw err;
    }

    //updated to accomodate swimming
    this.calculate = function() {
	return this.exercise.calculate(this.weight, this.distance, this.time);
    };
    
    //speed is consistently calculated for all exercise times (distance/time)
    this.calcSpeed = function(){
	return this.distance/(this.time/60);//miles per hour
    };

    this.setExercise = function(exercise){
	this.exercise=new Exercise(exercise);
	this.emit('exerciseChanged');

    };

    this.setWeight =function(weight){
	this.weight=weight;
	this.emit('weightChanged');
    };
    this.setTime = function(time){
	this.time=time;
	this.emit('timeChanged', time);
    };
    this.setDistance = function(distance){
	this.distance=distance;
	this.emit('distanceChanged', distance);
    };  
};

//this is an old way of "inheriting" from event emitter
//we're basically adding a pointer that points to the
//parent class prototype.  This is a rather old and esoteric
//way of doing things but you WILL see it out in the "wild"
//There's even yet one more way to inherit using the 'util'
//module and util.inherits method.  We won't cover that because
//it was transitional (ES6 Classes are recommended now and prototyping is
//what was used in the majority of old libraries you'll see)
tracker.prototype.__proto__=events.EventEmitter.prototype;

module.exports = tracker;
