//const radioInput = document.querySelector("#answer");
const radioOutput1 = document.querySelector("#radio-output1");
const radioOutput2 = document.querySelector("#radio-output2");




const radioInput = document.querySelector("#answer");

const displayAnswer = (e) => {
    const Answer = e.target.value;

     if (Answer == "1"){
    radioOutput1.innerHTML = `<p>Whoa! 👀</p>`
    radioOutput2.innerHTML = 
    `<p>Neat, right? How did the "Choose One." text change?</p>
    <p>Well, lemme show you. :D</p>
    <p><img src="radioSS1.png" alt="Code" width="450" height="80"></p>`

    } else if (Answer == "2"){
    radioOutput1.innerHTML = `<p>You picked checkbox 2.</p>`
    radioOutput2.innerHTML = `<p>You picked checkbox 1.</p>`

    } else if (Answer == "3"){
    radioOutput1.innerHTML = `<p>You picked checkbox 3.</p>`
    radioOutput2.innerHTML = `<p>You picked checkbox 1.</p>`

    } else if (Answer == "4"){
    radioOutput1.innerHTML = `<p>🧑‍🦯</p>`
    radioOutput2.innerHTML = 
    `<p>Look, a blind person. Wanna know how I found him?</p>
    <p>Here.</p>`

    }
};

radioInput.addEventListener('change', displayAnswer);