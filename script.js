const button = document.getElementById('circle_button')
let dice = document.getElementById('dice')
let rotation = 0;
let advice_num = document.getElementById('number')
let advice = document.getElementById('advice_quote')

button.addEventListener('click',function(){
  let url = 'https://api.adviceslip.com/advice';
  rotateImg()
  fetch(url)
  .then(res => res.json())
  .then((out) => {
    console.log( out.slip.id, out.slip.advice);
  })
  .catch(err => { throw err });
})




function rotateImg(){
  rotation += 90;

dice.style.transform =`rotate(${rotation}deg)`;
}

