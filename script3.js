const radioInput = document.querySelector("#answer");
const radioOutput1 = document.querySelector("#radio-output1");
const radioOutput2 = document.querySelector("#radio-output2");
const radioOutput3 = document.querySelector("#radio-output3");

const displayAnswer = (e) => {
    const Answer = e.target.value;

     if (Answer == "1"){
    radioOutput1.innerHTML = `<p>👫✓</p>`
    radioOutput2.innerHTML = 
    `<p>Boring flavor.</p>`
    radioOutput3.innerHTML = 
    `<p>Next Question</p>`

    } else if (Answer == "2"){
    radioOutput1.innerHTML = `<p>👨‍❤️‍💋‍👨✓</p>`
    radioOutput2.innerHTML = 
    `<h1>I KNEW IT!! I KNEW IT I KNEW IT I KNEW IT</h1>`
    radioOutput3.innerHTML = 
    `<p>Next Question</p>`

    } else if (Answer == "3"){
    radioOutput1.innerHTML = `<p>🤝✓</p>`
    radioOutput2.innerHTML = 
   `<p>Neat.</p>`
    radioOutput3.innerHTML = 
    `<p>Next Question</p>`

    } else if (Answer == "4"){
    radioOutput1.innerHTML = `<p>💭✓</p>`
    radioOutput2.innerHTML = 
    `<p>kay. Gotcha.</p>`
    radioOutput3.innerHTML = 
    `<p>Next Question</p>`
    }
};


radioInput.addEventListener('change', displayAnswer);
