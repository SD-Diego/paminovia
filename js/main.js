const windowBackground = document.getElementById("window-background");
const windowContainer = document.getElementById("window-container");
const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");

windowBackground.style.display = 'flex';

openButton.addEventListener('click', () => {
    windowBackground.style.display = 'flex';
}); 

const closeWindow = () => {
    windowContainer.classList.add("close")
    setTimeout(() => {
        windowContainer.classList.remove("close")
        windowBackground.style.display = 'none'
    }, 500);
}

closeButton.addEventListener('click', () => closeWindow() ); 

window.addEventListener('click', e => e.target == windowBackground && closeWindow())

/*
document.querySelectorAll('.container-img img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.lightbox-background').style.display='block';
        document.querySelector('.lightbox-background img').src = image.getAttribute('src');
    }
});
*/

function capturarSrc(event) {
    var contenedor = event.currentTarget;
    var imagen = contenedor.querySelector('img');
    var srcImagen = imagen.getAttribute('src');
    document.querySelector('.lightbox-background').style.display='grid';
    document.querySelector('.lightbox-background img').src = srcImagen;
}
/*
document.querySelector('.lightbox-background').onclick = () =>{
    document.querySelector('.lightbox-background').style.display='none';
}
*/
document.querySelector('.lightbox-background span').onclick = () =>{
    document.querySelector('.lightbox-background').style.display='none';
}
