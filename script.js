let check = 0;
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let am = document.getElementById("am")

const appear = (x) => {return (x<10 ? "0" + x : x);}

const update = function(){
  let a = new Date()
  let h = appear(a.getHours());
  let m = appear(a.getMinutes());
  let s = appear(a.getSeconds());
  let d = a.getDate();
  am.innerHTML = ((h > 12 || (h == 12 && m > 0)) ? "pm" : "am");
  h = (check % 2 == 0 && h > 12) ? appear(h - 12) : h;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}
let blink = document.getElementsByTagName("span")
setInterval((x)=>{blink[0].classList.toggle("blink")},520)
setInterval((x)=>{blink[1].classList.toggle("blink")},520)
setInterval(update, 100);