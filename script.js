setInterval(() => {
  d = new Date();
  htime = d.getHours();//these are the function
  mtime = d.getMinutes();
  stime = d.getSeconds();
  //These are the formulas for to get time , minute and second 
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
