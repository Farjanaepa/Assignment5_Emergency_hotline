
// call button click
let coinsEl = document.getElementById('coins');
let historyEl = document.getElementById('history');
let callButton = document.getElementsByClassName('call-btn');
for(const btn of callButton){
    btn.addEventListener('click',function() {
        let coins = parseInt(coinsEl.innerText);
        if (coins < 20) {
            alert('you have no point to call');
            return;
        }

       let parent = btn.parentElement;
       while (!parent.classList.contains('card')){
        parent = parent.parentElement;
       }

       let name = parent.getElementsByClassName('service-name')[0].innerText;
       let number = parent.getElementsByClassName('service-number')[0].innerText;

        alert('Calling' + name + 'at ' + number);
        coinsEl.innerText = coins - 20;

        let now = new Date();
        let hours = now.getHours().toString();
        let minutes = now.getMinutes().toString();
        let seconds = now.getSeconds().toString();
        let time = hours + ':' + minutes + ':' + seconds;

        let li = document.createElement('li');
        li.style.display= 'flex';
        li.style.backgroundColor = '#FAFAFA';
        li.style.borderRadius='20px';
        li.style.padding='15px'
        li.style.justifyContent='space-between';
        let leftspan = document.createElement('span');
       leftspan.innerHTML = `<b>${name}</b><br>${number}`;
       

        let rightspan = document.createElement('span');
        rightspan.innerText=`${time}`;

        li.appendChild(leftspan);
        li.appendChild(rightspan);
   
        historyEl.appendChild(li);
    });
}
// clear btn
document.getElementById('clear-btn').addEventListener('click',function(){
    historyEl.innerHTML = '';
});



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