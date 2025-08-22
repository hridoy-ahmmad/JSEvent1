function yellowMaker() {
    document.body.style.backgroundColor = 'yellow'
}
function redMaker() {
    document.body.style.backgroundColor = 'red'
}
function defaultcolor() {
    document.body.style.backgroundColor = ''
}

//  Another way 

const blueMaker = document.getElementById('btn-blue');
blueMaker.onclick = function blue() {
    document.body.style.backgroundColor = 'blue';
}


// another system

const purpleMaker = document.getElementById('purple-btn')

function makePurple() {
    document.body.style.backgroundColor = 'purple'
}
purpleMaker.onclick = makePurple;


// professional way and best practice
/**
 * RECOMMENDED ---------------->>>>
 */

document.getElementById('green-btn').addEventListener('click',
        function greenMaker() {
            document.body.style.backgroundColor = 'green';
        }
    )