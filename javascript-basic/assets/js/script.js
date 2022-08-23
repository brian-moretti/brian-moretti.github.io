// V.2 DOPO FEEDBACK COACH

// Creazione DIV interni counter
const counterOutput = document.createElement('div')
counterOutput.className = 'counter-output';

const counterValue = document.createElement('div');
counterValue.className = 'counter-value';

container.append(counterOutput, counterValue); //check altre opzioni per diletto

// Creazione Pulsanti Counter
const buttonAdd = document.createElement('button');
buttonAdd.className = 'add-value';
buttonAdd.insertAdjacentHTML('afterbegin','<i class="fa-solid fa-plus"></i>');

const buttonReduce = document.createElement('button');
buttonReduce.className = 'reduce-value';
buttonReduce.insertAdjacentHTML('afterbegin','<i class="fa-solid fa-minus"></i>');


const buttonReset = document.createElement('button');
buttonReset.className = 'reset';
buttonReset.innerText = 'Reset';

counterValue.append(buttonAdd, buttonReset, buttonReduce);
// È possibile farlo con un ciclo??

//Counter
let counter = 0;
counterOutput.innerText = counter

//Click event 
container.onclick = function(event){
    const click = event.target.closest('button');
    switch(click){
        case buttonAdd: counterOutput.innerText = ++counter; 
        break;
        case buttonReduce: counterOutput.innerText = --counter;
        break;
        case buttonReset: counter = 0;
                          counterOutput.innerText = counter;
             
        /*if(counterOutput.innerText != 0){counter = 0;}
          counterOutput.innerText = counter;*/
        break;
    }    
}