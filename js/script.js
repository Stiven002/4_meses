function balanceImages() {
    const textDiv = document.getElementById('text');
    const imgContainer = document.getElementById('conten_img');
    let textHeight = textDiv.clientHeight;
    let imgHeight = imgContainer.clientHeight;
    
    const images = [
        "../imgs/Promesse__-removebg.png",
        "../imgs/descarga-removebg-preview (1).png"
    ];
    let index = 0;

    while (imgHeight < textHeight) {
        let newImg = document.createElement('img');
        newImg.src = images[index % images.length];
        newImg.alt = "Imagen extra";
        imgContainer.appendChild(newImg);
        imgHeight = imgContainer.clientHeight;
        index++;
    }
}

window.addEventListener('resize', balanceImages);
window.addEventListener('load', balanceImages);