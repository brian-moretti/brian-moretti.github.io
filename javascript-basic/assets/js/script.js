const output = document.querySelector('.counter-output')
const addValue = document.querySelector('.add-value');
const reduceValue = document.querySelector('.reduce-value');
const reset = document.querySelector('.reset');

let counter = 0;

function getDisplayNumber() {
    output.innerText = counter
}

function updateDisplay() {

    addValue.addEventListener('click', () => {
    
        output.innerText = ++counter;  
})

    reduceValue.addEventListener('click', () => {

        output.innerText = --counter;  
})

    reset.addEventListener('click', () => {

          if(output.innerText != 0){
            counter = 0;
          }

          output.innerText = counter;
})
}


getDisplayNumber();
updateDisplay();
