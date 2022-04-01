const button = document.getElementById('circle_button')
let dice = document.getElementById('dice')

button.addEventListener('click',function(){
  let url = 'https://api.adviceslip.com/advice';
  dice.style.transform =`rotate(75deg)`
  fetch(url)
  .then(res => res.json())
  .then((out) => {
    console.log( out.slip.id, out.slip.advice);
  })
  .catch(err => { throw err });
})




// function rotateImg(){
//   rotation += 90; // add 90 degrees, you can change this as you want
//       if (rotation === 360) { 
//         // 360 means rotate back to 0
//         rotation = 0;
//   return rotation
// }

// }

