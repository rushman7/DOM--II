// Your code goes here

// changes button html to 'you're signed up'

let signBtn = document.getElementsByClassName('btn');
for (let i = 0; i < signBtn.length;i++) {
  signBtn[i].addEventListener('click', () => {
    signBtn[i].innerHTML = `You're signed up!`
  })
}

// double click to grow button

for (let i = 0; i < signBtn.length; i++) {
  signBtn[i].addEventListener('dblclick', (e) => {
    e.target.style.transform = `scale(1.1)`;
  });
}

// mouse hover changes nav links to purple then back to black after 1.5s

let navBtn = document.querySelectorAll('.nav-link');
for (let i = 0; i < navBtn.length; i++) {
  navBtn[i].addEventListener('mouseover', (e) => {
    e.target.style.color = "purple"

    setTimeout(() => {
      e.target.style.color = "black"}, 1500);
  })
}

// mousewheel over increases/decreases size

let logo = document.querySelector('.logo-heading');
let scale = 1;
function zoom(e) {
  e.preventDefault();

  scale += e.deltaY * -0.01;
  logo.style.transform = `scale(${scale})`;
}
logo.onwheel = zoom;

//resized window

let headerP = document.querySelector('header p');
function windowResize() {
  console.log('window resized')
  headerP.innerHTML = 'Window was resized!'
}
window.onresize =  windowResize;
