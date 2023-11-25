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
maria=altera;
}

function setJoao(altera2){
joao=altera2;
}
export {getMaria, getJoao, deMariaParaJoao, deJoaoParaMaria, setMaria, setJoao, maria, joao};

