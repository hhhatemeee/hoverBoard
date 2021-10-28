const board = document.querySelector('#board');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#63d683', '#f5389d', '#38f5e8', '#f2dc18', '#f26818', '#fff'];
const btn = document.querySelector('.btn')
const input = document.querySelector('.input');
const label = document.querySelector('.label')
const body = document.querySelector('.body')

btn.addEventListener('click', () => {
    const inputValue = input.value;
    console.log(inputValue)
    if (!inputValue) {
        input.placeholder = 'Число > 0';
        return;
    }
    for (let i = 0; i < inputValue; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', () => {
            setColor(square)
        })

        square.addEventListener('mouseleave', () => {
            removeColor(square)
        })

        board.append(square)
    }
    const divBtn = document.createElement('div')
    board.append(divBtn)
    divBtn.classList.add('divBtn')
    divBtn.innerHTML = '<button class= "btn" onClick="location.reload()"">Перезапустить</button>'
    input.classList.add('remove');
    btn.classList.add('remove');
    label.classList.add('remove');


})

function update() {
    return function () {
        return this;
    }
}



function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index];

}