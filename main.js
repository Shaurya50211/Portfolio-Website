const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
var typed = new Typed('.typed', {
    strings: ['web developer.', 'iOS developer.',  'teen.'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: 'forwards' })


    document.documentElement.style.setProperty(
        '--x', (
            e.clientX + window.scrollX
        )
    + 'px'
    );
    document.documentElement.style.setProperty(
        '--y', (
            e.clientY + window.scrollY
        )
    + 'px'
    );
})


