let res = document.getElementById("res");

function onButtonPress(e){
    let btn = e.target;
    let action = document.getElementById(btn.id).innerHTML;
    
    switch(action){
        case 'c':
            res.innerHTML = "";
            break;
        case '=':
            let re = /(\d+)/g;
            let display = res.innerHTML;
            display= display.replace(re, function(match) {
                return parseInt(match, 2);
            });
            res.innerHTML= eval(display).toString(2);
            break;
        default:
            res.innerHTML += action;
            break;  
        }
    }
let buttons = document.getElementsByTagName('button');
for(let b of buttons){
    b.onclick = onButtonPress;
}