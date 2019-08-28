// Your code goes here

let signBtn = document.getElementsByClassName('btn');
for (let i = 0; i < signBtn.length;i++) {
  signBtn[i].addEventListener('click', () => {
    signBtn[i].innerHTML = `You're signed up!`
  })
}

let navBtn = document.querySelectorAll('.nav-link');
for (let i = 0; i < navBtn.length; i++) {
  navBtn[i].addEventListener('mouseover', (e) => {
    e.target.style.color = "purple"

    setTimeout(() => {
      e.target.style.color = "black"}, 1500);
  })
}