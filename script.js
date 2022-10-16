let body = document.querySelector('body');
let buttonDark = document.querySelector('.button-dark');
let buttonLight = document.querySelector('.button-light');
let buttonRandom = document.querySelector('.button-random');
let buttons = document.querySelectorAll('button');


buttonDark.onclick = function() {
    document.body.style.background = '#000616';
    body.style.color = '#ebeef3';
    buttons.forEach(function(button) {
        button.style.color = '#ebeef3';
        button.style.border = '1px solid #ebeef3';
        button.style.background = '#000616';
    });
}

buttonLight.onclick = function () {
    document.body.style.background = '#eae9f2';
    body.style.color = '#031C3D';
    buttons.forEach(function(button) {
        button.style.color = '#031C3D';
        button.style.background = '#eae9f2';
        button.style.border = 'none';
    });
}

buttonRandom.onclick = function () {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    let rgbToYIQ = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    let bgColor = `rgb(${r},${g},${b})`

    document.body.style.background = bgColor;
    buttons.forEach(function(button) {
        button.style.background = bgColor;
        button.style.border = 'none';
    });
    if (rgbToYIQ > 128) {
        body.style.color = '#031C3D';
        buttons.forEach(function(button) {
            button.style.color = '#031C3D';
        });
    } else {
        body.style.color = '#ebeef3';
        buttons.forEach(function(button) {
            button.style.color = '#ebeef3';
        });
    }
}


