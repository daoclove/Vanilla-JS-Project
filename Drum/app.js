window.addEventListener("keydown", soundPlay);

function soundPlay(e) {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const keySpan = document.querySelector(`.key[data-key="${e.keyCode}"]>span`);
  console.log(keySpan);
  if (!audio) return;
  console.log(audio);
  audio.currentTime = "0";
  audio.play();
  key.classList.add("shake");
  keySpan.classList.add("playing");

  setTimeout(() => {
    key.classList.remove("shake");
  }, 200);

  setTimeout(() => {
    keySpan.classList.remove("playing");
  }, 50);
}
