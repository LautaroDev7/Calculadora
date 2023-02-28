let operaciones ='';
let arrayNums =[] ;
let opArray=[];
const result = document.getElementById('resultado')
const botones = document.getElementsByTagName('button');
for (const boton of botones) {
    boton.addEventListener('click', function (event) {
        const text = event.target.innerText;
        processText (text);
    })
}

function processText(text){
    if(operaciones[0] == undefined){
         if(!isNaN(text)){
            operaciones = text;
            result.innerText = operaciones;
        }
    }
    else if (text == 'C'){
        operaciones = operaciones.slice(0,operaciones.length-1);
        result.innerText = operaciones;
    }
    else if (text == 'CC'){
        operaciones = '';
        result.innerText = operaciones;
    }
    else if(text == '='){
        operaciones = eval(operaciones);
        operaciones = operaciones.toString();
        result.innerText = operaciones;
    }
    else if (!isNaN(text)){
        operaciones += text;
        result.innerText = operaciones;
    }
    else if (!isNaN(operaciones[operaciones.length-1]) && isNaN(text)){
        operaciones += text;
        result.innerText = operaciones;       
    }
    else if((operaciones[operaciones.length-1] == '+' || operaciones[operaciones.length-1] == '-' || operaciones[operaciones.length-1] == '/' || operaciones[operaciones.length-1] == '*') && ( text == '+' ||  text == '-' ||  text == '*' || text == '/' )) {
        operaciones= operaciones.slice(0,-1);
        operaciones+=text;
        result.innerText = operaciones;
    }
}
