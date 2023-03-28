//Access the speed governor button
const speedTest = document.querySelector('#speedGov-btn')

//Click event listener added to the speed governor button
speedTest.addEventListener("click", Function())

//Access the speed value element 
const speedInput = document.querySelector('#speedValue');

//Parses the speedInput value to an integer
const speed = parseInt(speedInput.value);
const speedLimit = 70;
const kmPerDemeritPoint = 5;
let demeritPoints = 0;
if (speed <= speedLimit) {
    alert('ok');
    
}     else if (speed > speedLimit) {
    demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    alert('SLOW DOWN!');
}

if (demeritPoints >= 12) {
    alert("License suspended!! KINDLY VISIT OUR OFFICES FOR RENEWAL.");
    
}


