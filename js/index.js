
const timeDisplay = document.getElementById("timeDisplay")
const outDefus = document.querySelectorAll('.number')
const keypad = document.querySelector(".keypad")
const btn = document.querySelectorAll('button')

let time = 60;
let defuseCode = [];
let usedCode = []

// Random number:
// usedCode.push(Math.floor(1000 + Math.random() * 9000));
// console.log(usedCode);

const randomCode = () => {
    for (let i = 0; i < 4; i++) {
        usedCode.push(Math.floor(Math.random() * 10))
    }
    return usedCode
}
console.log(randomCode());

//
setInterval(() => {
    time --;
    if (time == 0) {
        document.querySelector('.lose').style.display = 'block';
        document.querySelector('body').style.backgroundColor = 'gray';
    }
    if (time >= 10) {
        timeDisplay.textContent = "00:" + time;
    }else if (time >= 0) {
        timeDisplay.textContent = "00:0" + time;
    }
}, 1000)


// set color:
const color_code = (colorRezult, code, defuse) => {
    let count = 0
    for (let i = 0; i < code.length; i++) {
        if (code[i] === defuse[i]) {
            colorRezult[i].classList.add('green')
            count++
        } else {
            colorRezult[i].classList.add('red')
        }
    }
    win(count)
}

//
const defuseValue = (testCod) => {
    outDefus.forEach((item, index) => {
        item.textContent = testCod[index]
    })
    if (testCod.length === 4) {
        color_code(outDefus, usedCode, defuseCode)
    }
}

// WIN:
const win = (counter) => {
    if (counter === 4) {
        document.querySelector('.win').style.display = "flex"
        document.querySelector('body').style.backgroundColor = 'gray'
        document.querySelector('.time-defused').textContent = `You had ${time} seconds to spare`
    } else {
        setTimeout(reset, 500)
        defuseCode = []
    }
}

// codu introdus:
keypad.addEventListener('click', (event) => {
        const data = event.target.textContent
        if (event.target.classList.contains('key')) {
            defuseCode.push(+data)
            defuseValue(defuseCode)
            console.log(defuseCode);

        }
})

// reset:
const reset = () => {
    outDefus.forEach(item => {
        item.textContent = '0'
        if (item.classList.contains('green') || item.classList.contains('red')) {
            item.classList.remove('green')
            item.classList.remove('red')
        }
    })
}

btn.forEach(item => {
    item.addEventListener("click", () => {
        location.reload()
    })
})









