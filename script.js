const button = document.getElementById('circle_button')


button.addEventListener('click',function(){
  let url = 'https://api.adviceslip.com/advice';

  fetch(url)
  .then(res => res.json())
  .then((out) => {
    console.log( out.slip.id, out.slip.advice);
  })
  .catch(err => { throw err });
})

