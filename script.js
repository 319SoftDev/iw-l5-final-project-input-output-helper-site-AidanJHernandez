const radioInput = document.querySelector("#answer");
const radioOutput1 = document.querySelector("#radio-output1");
const radioOutput2 = document.querySelector("#radio-output2");
const radioOutput3 = document.querySelector("#radio-output3");

const displayAnswer = (e) => {
    const Answer = e.target.value;

     if (Answer == "1"){
    radioOutput1.innerHTML = `<p>🍎✓</p>`
    radioOutput2.innerHTML = 
    `<p>Very fruity of you.</p>`
    radioOutput3.innerHTML = 
    `<p>Next Question</p>`

    } else if (Answer == "2"){
    radioOutput1.innerHTML = `<p>🥦✓</p>`
    radioOutput2.innerHTML = 
    `<p>I mean, alright.</p>`
    radioOutput3.innerHTML = 
    `<p>Next Question</p>`

    } else if (Answer == "3"){
    radioOutput1.innerHTML = `<p>🥩✓</p>`
    radioOutput2.innerHTML = 
   `<p>You're either very buff, very fat, or both.</p>`
    radioOutput3.innerHTML = 
    `<p>Next Question</p>`

    } else if (Answer == "4"){
    radioOutput1.innerHTML = `<p>🍞✓</p>`
    radioOutput2.innerHTML = 
    `<p>Side question. How much bread do you eat in a day?</p>`
    radioOutput3.innerHTML = 
    `<p>Next Question</p>`
    
    } else if (Answer == "5"){
    radioOutput1.innerHTML = `<p>🐄✓</p>`
    radioOutput2.innerHTML = 
    `<p>🐄</p>`
    radioOutput3.innerHTML = 
    `<p>Next Question</p>`
    }


};


radioInput.addEventListener('change', displayAnswer);

