//const radioInput = document.querySelector("#answer");
const radioOutput1 = document.querySelector("#radio-output1");
const radioOutput2 = document.querySelector("#radio-output2");
const radioInput = document.querySelector("#answer");

const displayAnswer = (e) => {
    const Answer = e.target.value;

     if (Answer == "1"){
    radioOutput1.innerHTML = `<p>You picked 1! 👀</p>`
    radioOutput2.innerHTML = 
    `<p>Neat, right? How did the "Choose One." text change?</p>
    <p style="transform: translate(0%, -40%)">Well, lemme show you. :D</p>
    <h6 style="transform: translate(0%, 100%)">(HTML & JavaScript shown respectively.)</h6>
    <div class = inInBox><p><img src="radioSS1.png" alt="HTML Code" width="450" height="80"></p>
    <p><img src="radioSS2.png" alt="JavaScript Code" width="450" height="245"></p></div>
    <p>The total outcome of these lines of code result in the ability to not only change text, but continously change it. Go ahead and choose another answer! ;D</p>`

radioInput.addEventListener('change', displayAnswer);


    } else if (Answer == "2"){
    radioOutput1.innerHTML = `<p>You picked 2! </p>`
    radioOutput2.innerHTML = 
    `<p>Neat, right? How did the "Choose One." text change?</p>
    <p style="transform: translate(0%, -40%)">Well, lemme show you. :D</p>
    <h6 style="transform: translate(0%, 100%)">(HTML & JavaScript shown respectively.)</h6>
    <div class = inInBox><p><img src="radioSS1.png" alt="HTML Code" width="450" height="80"></p>
    <p><img src="radioSS2.png" alt="JavaScript Code" width="450" height="245"></p></div>
    <p>The total outcome of these lines of code result in the ability to not only change text, but continously change it. Go ahead and choose another answer! ;D</p>`

    } else if (Answer == "3"){
    radioOutput1.innerHTML = `<p>You picked 3! </p>`
    radioOutput2.innerHTML = 
    `<p>Neat, right? How did the "Choose One." text change?</p>
    <p style="transform: translate(0%, -40%)">Well, lemme show you. :D</p>
    <h6 style="transform: translate(0%, 100%)">(HTML & JavaScript shown respectively.)</h6>
    <div class = inInBox><p><img src="radioSS1.png" alt="HTML Code" width="450" height="80"></p>
    <p><img src="radioSS2.png" alt="JavaScript Code" width="450" height="245"></p></div>
    <p>The total outcome of these lines of code result in the ability to not only change text, but continously change it. Go ahead and choose another answer! ;D</p>`

    } else if (Answer == "4"){
    radioOutput1.innerHTML = `<p>🧑‍🦯</p>`
    radioOutput2.innerHTML = 
    radioOutput2.innerHTML = 
    `<p>Neat, right? How did the "Choose One." text change?</p>
    <p style="transform: translate(0%, -40%)">Well, lemme show you. :D</p>
    <h6 style="transform: translate(0%, 100%)">(HTML & JavaScript shown respectively.)</h6>
    <div class = inInBox><p><img src="radioSS1.png" alt="HTML Code" width="450" height="80"></p>
    <p><img src="radioSS2.png" alt="JavaScript Code" width="450" height="245"></p></div>
    <p>The total outcome of these lines of code result in the ability to not only change text, but continously change it. Go ahead and choose another answer! ;D</p>`
    }
};

radioInput.addEventListener('change', displayAnswer);