// PART 1: 
// Step 1: get all the bubbles - refer to HTML elements in this doc
const bubbles = document.querySelectorAll('.bubble');

// Step 2: for each bubble, attach an on-click event listener that executes a function (loop throouogh it)
bubbles.forEach(function(bubble) {
    bubble.addEventListener('click', toggleButton)
});

// Step 3: write the function that when you click the bubble, it removes the play class and adds a pause class, or vice versa
const startstamp = {};
const endstamp = {};
const totalstamp = {};

function toggleButton(ev){
    const currentbubble = ev.currentTarget;
    const currentproject = currentbubble.getElementsByClassName('project-name')[0].innerHTML;
    if (currentbubble.classList.contains('play')) {
        currentbubble.classList.remove('play');
        currentbubble.classList.add('pause');
        startstamp[currentproject] = Date.now();
        console.log(startstamp);
// log start time 
    } else {
        currentbubble.classList.remove('pause');
        currentbubble.classList.add('play');
        endstamp[currentproject] = Date.now();
        totalstamp[currentproject] = Math.floor(endstamp[currentproject]/1000) - Math.floor(startstamp[currentproject]/1000);
        //log end time and time diff
        console.log(endstamp);
        console.log(totalstamp);
    }

};

// PART 2: Track time
// Step 1: log time of click and then minus time of click again (comes from eventlistener info)
// Step 2: do all of that in the togglebutton function, get the children from the currentbubble (project name is one of them)
// when hit play, save the current time on the project name (in a dict) 
// when hit pause, calculate time difference and save over infoo on project name dict
// one dict for start time, one dict with end time, one dict where I collect all the time - key is always project name
// save the times in a dictionary and add new times to it
// at hover, calculate time difference and show next to project name