const textH1 = document.querySelector('.text');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const restartBtn = document.querySelector('.restart');

let cont = 0

plusBtn.addEventListener('click' , () => {
    cont++
    textH1.textContent = cont
})

minusBtn.addEventListener('click' , () => {
    if (cont=== 0) return;
    cont--
    textH1.textContent = cont
})



restartBtn.addEventListener('click' , () => {
    cont = 0
    textH1.textContent = cont
})
