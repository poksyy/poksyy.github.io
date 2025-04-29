const titles = ["Java Developer", "Fullstack Enthusiast", "API Builder", "Clean Code Lover"];
let index = 0, char = 0;
const typedText = document.getElementById("typed-text");

function type() {
  if (char < titles[index].length) {
    typedText.textContent += titles[index].charAt(char++);
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (char > 0) {
    typedText.textContent = titles[index].substring(0, --char);
    setTimeout(erase, 40);
  } else {
    index = (index + 1) % titles.length;
    setTimeout(type, 300);
  }
}

type();
