



// count button click the love button

let countBtn = 0;
let countEl = document.getElementById('countBtn');
let hearts = document.getElementsByClassName('heart-btn');

for(const btn of hearts){
    btn.addEventListener('click',function(){
        countBtn++;
        countEl.innerText = countBtn;
    })
}