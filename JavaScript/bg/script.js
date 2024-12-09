let images = [
    'img/img1.jpg', 
    'img/img2.jpg', 
    'img/img3.jpg', 
    'img/img4.jpg'  
];

function openImage(index) {
    let container = document.getElementById('imageContainer');
    container.innerHTML = ''; 

    let img = document.createElement('img');
    img.src = images[index];
    img.alt = `Image ${index + 1}`;
    container.appendChild(img);

    document.getElementById('imageBox').style.display = 'block';
    document.getElementById('open').style.display = 'block';
}

document.getElementById('button1').addEventListener('click', () => openImage(0));
document.getElementById('button2').addEventListener('click', () => openImage(1));
document.getElementById('button3').addEventListener('click', () => openImage(2));
document.getElementById('button4').addEventListener('click', () => openImage(3));

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('imageBox').style.display = 'none';
    document.getElementById('open').style.display = 'none';
});

document.getElementById('open').addEventListener('click', function() {
    document.getElementById('imageBox').style.display = 'none';
    document.getElementById('open').style.display = 'none';
});

