const trackerService = require('./trackerService');

function updateSpeedAndCalories() {
  trackerService.recalculate('speed');
  trackerService.recalculate('calories');
}

function updateCalories() {
  trackerService.recalculate('calories');
}

function updateSpeed() {
  trackerService.recalculate('speed');
}

function handleChange(property, value) {
  switch (property) {
    case 'exercise':
      trackerService.set('exercise', value);
      break;
    case 'weight':
      trackerService.set('weight', value);
      break;
    case 'distance':
      trackerService.set('distance', value);
      break;
    case 'time':
      trackerService.set('time', value);
      break;
    default:
      console.log('Property not found.');
      return;
  }

  switch (property) {
    case 'exercise':
      trackerService.on('exerciseChanged', updateSpeedAndCalories);
      break;
    case 'weight':
      trackerService.on('weightChanged', updateCalories);
      break;
    case 'distance':
      trackerService.on('distanceChanged', updateSpeed);
      trackerService.on('distanceChanged', updateCalories);
      break;
    case 'time':
      trackerService.on('timeChanged', updateSpeed);
      trackerService.on('timeChanged', updateCalories);
      break;
    default:
      break;
  }
}

handleChange('exercise', 'Running');
handleChange('weight', 75);
handleChange('distance', 3);
handleChange('time', 20);
