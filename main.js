const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hr = document.querySelector('.hour');

setInterval(function(){
  let time = new Date();
  let secs = time.getSeconds() * 6;
  let mins = time.getMinutes() * 6;
  let hrs = time.getHours() * 30;
  sec.style.transform = `rotateZ(${secs}deg)`;
  min.style.transform = `rotateZ(${mins}deg)`;
  hr.style.transform = `rotateZ(${hrs + (mins/12)}deg)`;
})

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});