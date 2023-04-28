var hesab = document.getElementById('hesablama');

function Click1(id) {
    let element = document.getElementById(id);
    const last = hesab.innerHTML.slice(-1);
    let elemetArray  = document.getElementsByClassName('emeliyyat');

    var yoxlanis= false;
    
    for (let i = 0; i < elemetArray.length; i++) {
        const element = elemetArray[i];
        if(element.id===last){
            yoxlanis=true;
            break;
        }
        else{
            yoxlanis=false;
        }
    }
    
    if ((element.id === last) &&(yoxlanis)) {
        alert('Eyni emeliyyat 2 defe ard-arda yazila bilmez!!!!');
        ClearAll();
    }
    else {
        hesab.innerHTML = hesab.innerHTML + element.id;
        ResultAll();
    }    
}

function ClearAll() {
    let result = document.getElementById('result');

    hesab.innerHTML = ' ';
    result.innerHTML = ' ';
}

function ResultAll() {
    let result = document.getElementById('result');
    result.innerHTML = eval(hesab.innerHTML);
}

function ClearLast() {
    hesab.innerHTML = hesab.innerHTML.slice(0, -1);
    ResultAll();
}

// function Checktog(){
//     let element = document.getElementById('darkmode-toggle');
//     alert(element.nodeType);
// }