const textInput = document.querySelector("#submit");
const textOutput1 = document.querySelector("#text-output1");
const textOutput2 = document.querySelector("#text-output2");
const textOutput3 = document.querySelector("#text-output3");

const displaySubmit = (e) => {
    const Submit = e.target.value;

     if (Submit == ""){
    textOutput1.innerHTML = `<p>✖</p>`
    textOutput2.innerHTML = 
    `<p>No, seriously. I need a name.</p>`
    textOutput3.innerHTML = 
    `<p></p>`
    } 
    else {
    textOutput1.innerHTML = `<p>✓</p>`
    textOutput2.innerHTML = 
    `<p>Thank you. :3</p>`
    textOutput3.innerHTML = 
    `<p>Next Question</p>`

    }
};


textInput.addEventListener('change', displaySubmit);
