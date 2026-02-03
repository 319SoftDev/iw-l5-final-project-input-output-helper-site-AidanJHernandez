const radioInput = document.querySelector("#answer");
const radioOutput1 = document.querySelector("#radio-output1");
const radioOutput2 = document.querySelector("#radio-output2");
const radioOutput3 = document.querySelector("#radio-output3");

const displayAnswer = (e) => {
    const Answer = e.target.value;

     if (Answer == "1"){
    radioOutput1.innerHTML = `<p>🍎✓</p>`
    radioOutput2.innerHTML = 
    `<p>Answer locked in? Click the link below to find out what type of person you are! :D</p>`
    radioOutput3.innerHTML = 
    `<a href="https://thegeekboiz.github.io/PythonScratcher/youareanidiot/index.html"><p>Click Me!!</p></a>`

    } else if (Answer == "2"){
    radioOutput1.innerHTML = `<p>🥦✓</p>`
    radioOutput2.innerHTML = 
    `<p>Answer locked in? Click the link below to find out what type of person you are! :D</p>`
    radioOutput3.innerHTML = 
    `<a href="https://thegeekboiz.github.io/PythonScratcher/youareanidiot/index.html"><p>Click Me!!</p></a>`

    } else if (Answer == "3"){
    radioOutput1.innerHTML = `<p>🥩✓</p>`
    radioOutput2.innerHTML = 
    `<p>Answer locked in? Click the link below to find out what type of person you are! :D</p>`
    radioOutput3.innerHTML = 
    `<a href="https://thegeekboiz.github.io/PythonScratcher/youareanidiot/index.html"><p>Click Me!!</p></a>`

    } else if (Answer == "4"){
    radioOutput1.innerHTML = `<p>🍞✓</p>`
    radioOutput2.innerHTML = 
    `<p>Side question. How much bread do you eat in a day?</p>`
    radioOutput3.innerHTML = 
    `<a href="https://thegeekboiz.github.io/PythonScratcher/youareanidiot/index.html"><p>Click Me!!</p></a>`
    
    } else if (Answer == "5"){
    radioOutput1.innerHTML = `<p>🐄✓</p>`
    radioOutput2.innerHTML = 
    `<p>Answer locked in? Click the link below to find out what type of person you are! :D</p>`
    radioOutput3.innerHTML = 
    `<a href="https://thegeekboiz.github.io/PythonScratcher/youareanidiot/index.html"><p>Click Me!!</p></a>`
    }

};


radioInput.addEventListener('change', displayAnswer);