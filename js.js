const reduzir = document.getElementById('reduzirBtn');
const reset = document.getElementById('reniciarBtn');
const aumentar = document.getElementById('aumentarBtn')
const countLabel = document.getElementById('countLabel')
let count = 0;

aumentar.onclick = function(){
    count++;
    countLabel.textContent = count;
};

reduzir.onclick = function(){
    count--;
    countLabel.textContent = count;
};

reset.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}