These are the instructions for lab activity 3.

If you inspect the new files for the trackerService, you'll see
that this time I created the tracker with all of its functions
directly in the constructor instead of using either prototypes
or classes. This is an equally valid of writing the code.

You'll also notice that a few setters have been added. The
setters emit events that indicate a change has occurred.
In the main ActivityTracker/activityTracker.js file you'll
see that I have added an event handler for the exerciseChanged event

Your activity is relatively simple:

Add a nested switch statement to the change option that allows
the user to change ANY of the current trackerService properties
and recalculates the speed and/or calories depending on which needs
to be updated. You'll need to add handlers for each event and
you'll need to be able to write some callback functions as the handlers.