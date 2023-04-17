
window.addEventListener('DOMContentLoaded',() => {
const drawer = document.querySelector('#drawer');
const key = document.querySelector('#key');
const safe = document.querySelector('#safe');
const feedback = document.querySelector('#feedback');

let hasKey = false;

key.addEventListener('click', () => {
  keyfound =true;
  key.setAttribute('visable',true);
  alert('You found the key'); 
});
   

safe.addEventListener('click', () => {
  if (keyfound) {
    feedback.setAttribute('visible',true);
    alert('you unlocked the safe and found the treasure!');
  } else {
    alert('the safe is locked you need the key');
  }
});
});