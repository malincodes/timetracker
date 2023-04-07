//Main framework
const startstamp = {};
const endstamp = {};
const totalstamp = {};

//toggles button from play to pause and back
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

//function to add new bubbles to main container
document.getElementById("add-button").addEventListener('click', addProject);
let counter = 0;
function addProject() {
    let addinput = document.getElementById("add-topic").value;//prompt("Please enter your project name", "Your Project Name Here");
    if (addinput != null) {
        const bubbletemplate = document.createElement("div");
        bubbletemplate.id = "ID" + ++counter;
        bubbletemplate.classList.add('bubble', 'play');
        bubbletemplate.innerHTML = `<img class="play-btn" src="./images/play.png"><img class="pause-btn" src="./images/pause.png"><span class="project-name">${addinput}</span><button class="change-button">Change Name</button><button class="remove-button">Remove</button>`
        document.getElementById("maincontainer");
        const bubble = maincontainer.appendChild(bubbletemplate);
        //remove bubble function
        document.querySelector("#ID" + counter + " .remove-button").addEventListener('click',removeProject);
        function removeProject(ev1) {
            const currentRemoveButton = ev1.currentTarget;
            currentRemoveButton.parentElement.remove();
        }
        //listen for click in newly created bubble
        bubble.addEventListener('click', toggleButton);
    }
}
