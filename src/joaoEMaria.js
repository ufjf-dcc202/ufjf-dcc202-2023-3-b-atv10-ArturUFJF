console.log('Módulo joaoEMaria');

let maria = 2;
let joao = 1;

function deJoaoParaMaria(){
maria=maria+joao;
joao=0;
}

function deMariaParaJoao(){
joao=joao+maria;
maria=0;
}

function getMaria(){
return maria;
}

function getJoao(){
return joao;
}

function setMaria(altera){
    if (altera > 0)
    {
        maria = altera;
    }
    else
    {
        maria = 0;
    }
}

function setJoao(altera2){
    if(altera2 > 0)
    {
        joao = altera2;
    }
    else
    {
        joao = 0;
    }
}
export {getMaria, getJoao, deMariaParaJoao, deJoaoParaMaria, setMaria, setJoao};

