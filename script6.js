const textInput = document.querySelector("#submitButton");
const textOutput1 = document.querySelector("#text-output1");
const textOutput2 = document.querySelector("#text-output2");
const textOutput3 = document.querySelector("#text-output3");

console.log(textInput, textOutput1, textOutput2, textOutput3)



const displaySubmit = (e) => {
    const Submit = e.target.value;
    console.log(Submit);

     if (Submit == "1"){
    textOutput1.innerHTML = `<p>⬛✓</p>`
    textOutput2.innerHTML = 
    `<p>It's okay. I love the Mandela Catalouge. :)</p>`
    textOutput3.innerHTML = 
    `<p>Next Question</p>`
    } 
    else if (Submit == "2") {
    textOutput1.innerHTML = `<p>...✓</p>`
    textOutput2.innerHTML = 
    `<p>I think you just have low self esteem.</p>`
    textOutput3.innerHTML = 
    `<p>Next Question</p>`

    }
    else if (Submit == "3") {
    textOutput1.innerHTML = `<p>🤏✓</p>`
    textOutput2.innerHTML = 
    `<p>That's alright. You're getting there.</p>`
    textOutput3.innerHTML = 
    `<p>Next Question</p>`

    }
    else if (Submit == "4") {
    textOutput1.innerHTML = `<p>🍫✓</p>`
    textOutput2.innerHTML = 
    `<p>Just because you stole a candy bar when you were five doesn't mean you're a monster, brudda.</p>`
    textOutput3.innerHTML = 
    `<p>Next Question</p>`

    }
    else if (Submit == "5") {
    textOutput1.innerHTML = `<p>🧍✓</p>`
    textOutput2.innerHTML = 
    `<p>Figured.</p>`
    textOutput3.innerHTML = 
    `<p>Next Question</p>`

    }

};


quantity.addEventListener('change', displaySubmit);