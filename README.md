# Work-Day-Scheduler
This week I made a simple calendar application that allows the user to save events for each work hour of the day (9-5). This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery

![Photo of website](https://user-images.githubusercontent.com/90152576/139592071-a93df884-37a0-4ff7-a067-667c2b578e51.png)
https://hlaing56.github.io/Work-Day-Scheduler/

## Acceptance Criteria
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Process of making this application
Start off with making the container with columns and rows using bootstrap 

Throw in moment.js to tell time 

Then make a for loop that indicate whether it is in the past, present, or future by color coding 

Make a button that saves the tasks written in the time blocks

Make a for loop to load all the saved task form local storage

You can put in a setInterval to refresh the page so the color code updates when the time goes to the next hour mark
