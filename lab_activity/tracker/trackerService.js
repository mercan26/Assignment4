function TrackerService() {
  this.details = {
    exercise: null,
    weight: null,
    distance: null,
    time: null,
    speed: 0,
    calories: 0
  };

  this.events = {};
	
  this.on = (event, callback) => {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  };

  this.emit = (event) => {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback());
    }
  };

  this.set = (property, value) => {
    this.details[property] = value;
    this.emit(`${property}Changed`);
  };

  this.recalculate = (type) => {
    if (type === 'speed') {
      this.details.speed = this.details.distance / this.details.time;
    } else if (type === 'calories') {
      this.details.calories = this.details.weight * 10; // Just an example formula
    }
  };
}

const trackerService = new TrackerService();
module.exports = trackerService;
