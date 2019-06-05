// const sp = document.getElementById('active--icon');
// const sp__menu = document.getElementById('sp--menu--block');
// sp.addEventListener('click', ()=>{
//   sp__menu.classList.toggle('active');
// });

$('#active--icon').on('click', function(){
  $('#sp--menu--block').toggleClass('active');
})