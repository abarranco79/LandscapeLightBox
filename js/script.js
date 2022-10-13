const images = document.querySelectorAll('.img');
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const btnCerrar = document.querySelector('.fa-solid.fa-xmark');

images.forEach(image =>{
    image.addEventListener('click', ()=>{

        addImage(image.getAttribute('src'),image.getAttribute('alt'));
    })
}) 

const addImage = (src, alt)=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('scale');
    imageContainer.src = src;
}

btnCerrar.addEventListener('click', ()=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('scale');  
})