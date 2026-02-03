const radioInput = document.querySelector("#answer");
const radioOutput1 = document.querySelector("#radio-output1");
const radioOutput2 = document.querySelector("#radio-output2");
const radioOutput3 = document.querySelector("#radio-output3");

const displayAnswer = (e) => {
    const Answer = e.target.value;

     if (Answer == "1"){
    radioOutput1.innerHTML = `<p>🍎✓</p>`
    radioOutput2.innerHTML = 
    `<p>Answer locked in? Click the link to move on to the next question! :D</p>`
    radioOutput3.innerHTML = 
    `<p>Click Me!!</p>`

    } else if (Answer == "2"){
    radioOutput1.innerHTML = `<p>🥦✓</p>`
    radioOutput2.innerHTML = 
    `<p>Answer locked in? Click the link below to find out what type of person you are! :D</p>`
    radioOutput3.innerHTML = 
    `<p>Click Me!!</p>`

    } else if (Answer == "3"){
    radioOutput1.innerHTML = `<p>🥩✓</p>`
    radioOutput2.innerHTML = 
    `<p>Answer locked in? Click the link below to find out what type of person you are! :D</p>`
    radioOutput3.innerHTML = 
    `<p>Click Me!!</p>`

    } else if (Answer == "4"){
    radioOutput1.innerHTML = `<p>🍞✓</p>`
    radioOutput2.innerHTML = 
    `<p>Side question. How much bread do you eat in a day?</p>`
    radioOutput3.innerHTML = 
    `<p>Click Me!!</p>`
    
    } else if (Answer == "5"){
    radioOutput1.innerHTML = `<p>🐄✓</p>`
    radioOutput2.innerHTML = 
    `<p>Answer locked in? Click the link below to find out what type of person you are! :D</p>`
    radioOutput3.innerHTML = 
    `<p>Click Me!!</p>`
    }

};


radioInput.addEventListener('change', displayAnswer);