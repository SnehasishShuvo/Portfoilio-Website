
const typedTextSpan = document.getElementById('typed-text');
const cursorSpan = document.querySelector('.blinking-cursor');

const textArray = ["Developer Of Premier University", "Designer Of Premier University", "Student Of Premier University"];
const typingDelay = 50;
const erasingDelay = 50;
const newTextDelay = 100;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, newTextDelay + 250);
});
