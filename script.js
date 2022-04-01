const button = document.getElementById('circle_button')
let dice = document.getElementById('dice')
let rotation = 0;
let advice_num = document.getElementById('number')
let advice = document.getElementById('advice_quote')
let url = 'https://api.adviceslip.com/advice';




fetch(url)
.then(res => res.json())
.then((out) => {
  advice_num.innerHTML = `${out.slip.id}`
  advice.innerHTML =`${out.slip.advice}`
})
.catch(err => { throw err });






button.addEventListener('click',function(){
  
  rotateImg()
  fetch(url)
  .then(res => res.json())
  .then((out) => {
    advice_num.innerHTML = `${out.slip.id}`
  advice.innerHTML =`${out.slip.advice}`
  })
  .catch(err => { throw err });
})




function rotateImg(){
  rotation += 90;

dice.style.transform =`rotate(${rotation}deg)`;
}

