const radioInput = document.querySelector("#answer");
const radioOutput1 = document.querySelector("#radio-output1");
const radioOutput2 = document.querySelector("#radio-output2");
const radioOutput3 = document.querySelector("#radio-output3");

const displayAnswer = (e) => {
    const Answer = e.target.value;

     if (Answer == "1"){
    radioOutput1.innerHTML = `<p>🌳✓</p>`
    radioOutput2.innerHTML = 
    `<p>Are you the same person who likes veggies?</p>`
    radioOutput3.innerHTML = 
    `<p>Next Question</p>`

    } else if (Answer == "2"){
    radioOutput1.innerHTML = `<p>🎮✓</p>`
    radioOutput2.innerHTML = 
    `<p><img src="job.png" alt="Code" width="100" height="55"></p>`
    radioOutput3.innerHTML = 
    `<p>Next Question</p>`

    } else if (Answer == "3"){
    radioOutput1.innerHTML = `<p>❓✓</p>`
    radioOutput2.innerHTML = 
   `<p>Stop hiding secrets from me.</p>`
    radioOutput3.innerHTML = 
    `<p>Next Question</p>`

    } else if (Answer == "4"){
    radioOutput1.innerHTML = `<p>✓</p>`
    radioOutput2.innerHTML = 
    `<p>Ok.</p>`
    radioOutput3.innerHTML = 
    `<p>Next Question</p>`
    }
};


radioInput.addEventListener('change', displayAnswer);

