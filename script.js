const envelope = document.querySelector('.envelope');
const heartSeal = document.querySelector('.heart-seal');

// smooth transition
heartSeal.style.transition = 'opacity 0.9s ease';

// CLICK instead of hover
envelope.addEventListener('click', () => {
    // hide seal
    heartSeal.style.opacity = 0;

    // add open class (for your CSS animation)
    envelope.classList.add('open');

    // start hearts
    startHearts();
});


// 💖 HEARTS FUNCTION
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// start continuous hearts
function startHearts() {
    setInterval(createHeart, 200);
}