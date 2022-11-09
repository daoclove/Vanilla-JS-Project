setInterval(() => {
  d = new Date();
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = (hr / 12) * 360;
  min_rotation = (min / 60) * 360;
  sec_rotation = (sec / 60) * 360;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;

  const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

  clockTitle.innerText = `${hr < 10 ? `0${hr}` : hr}:${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec}`;
}, 1000);
