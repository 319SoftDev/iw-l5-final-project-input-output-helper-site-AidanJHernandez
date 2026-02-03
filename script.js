//const radioInput = document.querySelector("#answer");
const radioOutput1 = document.querySelector("#radio-output1");
const radioOutput2 = document.querySelector("#radio-output2");
const radioInput = document.querySelector("#answer");

const displayAnswer = (e) => {
    const Answer = e.target.value;

     if (Answer == "1"){
    radioOutput1.innerHTML = `<p>✓</p>`
    radioOutput2.innerHTML = 
    `<p>Good.</p>`

    } else if (Answer == "2"){
    radioOutput1.innerHTML = `<p>✓</p>`
    radioOutput2.innerHTML = 
    `<p>Good, but green.</p>`

    } else if (Answer == "3"){
    radioOutput1.innerHTML = `<p>✓</p>`
    radioOutput2.innerHTML = 
    `<p>500 push-ups.</p>`

    } else if (Answer == "4"){
    radioOutput1.innerHTML = `<p>✓</p>`
    radioOutput2.innerHTML = 
    `<p>Side question. How much bread do you eat in a day?</p>`
    
    } else if (Answer == "5"){
    radioOutput1.innerHTML = `<p>✓</p>`
    radioOutput2.innerHTML = 
    `<p>1% or 2%?</p>`
    }

};

radioInput.addEventListener('change', displayAnswer);

