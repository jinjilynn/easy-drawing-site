export default function ClickBubble(canvas) {
    let context = canvas.getContext('2d');
    let bubbleArray;
    let circle;
    let animateID;
    let colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C', 'yellow'];
    function Bubble(x, y, radius, sx, sy, minuteSpeed, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sx = sx;
        this.sy = sy;
        this.minuteSpeed = minuteSpeed;
        this.color = color;
    }
    function Circle(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = 1;
        this.Maxradius = radius;
        this.speed = 4;
        this.reduce = 0.1;
    }
    canvas.onclick = function (e) {
        let x = e.clientX;
        let y = e.clientY;
        bubbleArray = new Array();
        circle = new Circle(x, y, 130);
        for (let i = 0; i < 30; i++) {
            let radius = 20 + Math.random() * 10;
            let speed = 2 + Math.random() * 5;
            let angle = Math.random() * Math.PI * 2;
            let sx = speed * Math.cos(angle);
            let sy = speed * Math.sin(angle);
            let minuteSpeed = Math.random() * 1 + 0.4;
            let color = colors[Math.floor(Math.random() * 4)];
            let bubble = new Bubble(x, y, radius, sx, sy, minuteSpeed, color);
            bubbleArray.push(bubble);
        }
        window.cancelAnimationFrame(animateID);
        animate();
    }
    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.strokeStyle = '#fff'
        context.lineWidth = 1;
        circle.speed -= circle.reduce;
        circle.radius += circle.speed;
        if (circle.radius < circle.Maxradius && circle.radius > 0) {
            context.beginPath();
            context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
            context.stroke();
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            let temptBubble = bubbleArray[i];
            context.fillStyle = temptBubble.color;
            temptBubble.x += temptBubble.sx;
            temptBubble.y += temptBubble.sy;
            temptBubble.radius -= temptBubble.minuteSpeed;
            context.beginPath();
            if (temptBubble.radius > 0) {
                context.arc(temptBubble.x, temptBubble.y, temptBubble.radius, 0, Math.PI * 2, false);
                context.fill();
            }
        }
        animateID = window.requestAnimationFrame(animate);
    }
}