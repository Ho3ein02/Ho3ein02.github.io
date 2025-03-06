const mainContent = document.getElementById('main-content');
const skeletonContent = document.getElementById('skeleton-content');
const imageElement = document.querySelector('.image');
const captionElement = document.querySelector('.caption');
const randomBtn = document.querySelector('.btn');


function getRandomImage () {
    mainContent.style.display = 'none';
    skeletonContent.style.display = 'block';
    let lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nemo assumenda molestiae sequi accusantium ipsam quibusdam aliquid.'
    
    fetch('https://picsum.photos/560/200?random=50')
    .then(response => response.blob())
    .then(blob => {
        let imageURL = URL.createObjectURL(blob);
        let img = document.createElement('img');
        img.src = imageURL;
        imageElement.innerHTML = '';
        imageElement.appendChild(img);
        captionElement.innerHTML = lorem;
        skeletonContent.style.display = 'none';
        mainContent.style.display = 'block';
    })

}


window.addEventListener('load', () => {
    getRandomImage();
})

randomBtn.addEventListener('click', () => {
    getRandomImage();
})
