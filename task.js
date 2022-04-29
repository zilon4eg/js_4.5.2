const img = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

var resize = true;
var count = 0;

img.onclick = () => {
    count++;
    counter.textContent = `${count}`;

    if (resize) {
        img.width += 20;
        img.height += 20;
        resize = false;
    }
    else {
        img.width -= 20;
        img.height -= 20;
        resize = true;
    }
    
}