const radioInput = document.querySelector("#answer");
const radioOutput1 = document.querySelector("#radio-output1");
const radioOutput2 = document.querySelector("#radio-output2");
const radioOutput3 = document.querySelector("#radio-output3");

const displayAnswer = (e) => {
    const Answer = e.target.value;

     if (Answer == "1"){
    radioOutput1.innerHTML = `<p>✓</p>`
    radioOutput2.innerHTML = 
    `<p>That was very worth your time.</p>`
    radioOutput3.innerHTML = 
    `<p>Next Question</p>`
    }
};


radioInput.addEventListener('change', displayAnswer);