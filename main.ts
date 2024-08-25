import 'style.css'

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    document.addEventListener('DOMContentLoaded', () => {
        const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;

        if (!interBubble) {
            console.log('Element .interactive nie został znaleziony!');
            return;
        } else {
            console.log('Element .interactive został znaleziony.');
        }

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        
        // Przeniesienie elementu względem jego rodzica
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;

        requestAnimationFrame(move);
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX - (interBubble.clientWidth / 2); 
        tgY = event.clientY - (interBubble.clientHeight / 2); 

        console.log(`tgX: ${tgX}, tgY: ${tgY}`);
    });

    move();
});