const textInput = document.querySelector("#submitButton");
const textOutput1 = document.querySelector("#text-output1");
const textOutput2 = document.querySelector("#text-output2");
const textOutput3 = document.querySelector("#text-output3");

console.log(textInput, textOutput1, textOutput2, textOutput3)



const displaySubmit = (e) => {
    const Submit = e.target.value;
    console.log(Submit);

     if (Submit == ""){
    textOutput1.innerHTML = `<p>✖</p>`
    textOutput2.innerHTML = 
    `<p>Okay... nice try trickster.</p>`
    textOutput3.innerHTML = 
    `<p></p>`
    } 
    else {
    textOutput1.innerHTML = `<p>✓</p>`
    textOutput2.innerHTML = 
    `<p>Thank you, ${Submit}. :3</p>`
    textOutput3.innerHTML = 
    `<p>Next Question</p>`

    }
};


fname.addEventListener('change', displaySubmit);