var image = document.getElementsByTagName('img');
var rbtn = document.getElementById('right');
var lbtn = document.getElementById('left');
var now = 0;
var next = 1;
var prev = image.length - 1;

rbtn.addEventListener('click', function() {
  rbtn.disabled = true
  lbtn.disabled = true
  setTimeout(function(){
    rbtn.disabled = false
    lbtn.disabled = false
  }, 2000)
  
  image[now].classList.remove('now');
  image[now].classList.add('left');

  image[next].classList.remove('right');
  image[next].classList.add('now');

  if(next == image.length - 1) {
    image[0].classList.remove('no');
    image[0].classList.add('right');
  }else {
    image[next+1].classList.remove('no');
    image[next+1].classList.add('right');
  }

  image[prev].classList.remove('left');
  image[prev].classList.add('no');
  
  prev = now;
  now = now === image.length - 1 ? 0 : next;
  next = now === image.length - 1 ?  0: now + 1; 
})

lbtn.addEventListener('click', function() {
  rbtn.disabled = true
  lbtn.disabled = true
  setTimeout(function () {
    rbtn.disabled = false
    lbtn.disabled = false
  }, 2000)

  image[now].classList.remove('now');
  image[now].classList.add('right');

  image[prev].classList.remove('left');
  image[prev].classList.add('now');

  if(prev == 0) {
    image[image.length - 1].classList.remove('no');
    image[image.length - 1].classList.add('left');
  }else {
    image[prev-1].classList.remove('no');
    image[prev-1].classList.add('left');
  }

  image[next].classList.remove('right');
  image[next].classList.add('no');
  
  next = now;
  now = now === 0 ? image.length - 1 : prev;
  prev = now === 0 ?  image.length - 1: now - 1; 
})