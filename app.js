setInterval(() => {
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');
  let hh = document.getElementById('hh');
  let ss = document.getElementById('ss');
  let mm = document.getElementById('mm');

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? 'PM' : 'AM';

  // 24 to 12
  if (h > 12) {
    h = h - 12;
  }
  // add zero
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;
});
