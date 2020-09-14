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
the user to change ANY of the current trackerService properties ( allow
them to change exercise, weight, distance, or time)
and recalculates the speed and/or calories depending on which needs
to be updated.  Only recalculate what needs to be recalculated.

The tracker module includes setters for each propery, and each setter
already emits events that signal the change. Note that events for time and
distance also emit parameters (but you don't need them for this activity).

In the main activityTracker.js file, follow the same strategy that was used for
changing the exercise (lines 55-58) for changing the other tracker properties.

To do this, you'll need to add handlers for each event (using either the .on
or the .addListener functions) and you'll need to be able to write  and pass
some callback functions as the handlers.





