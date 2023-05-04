//Carousel

const RadiusConteiner = document.querySelector('.carousel .radius');
const carousel = document.querySelectorAll('.carousel_image > *');


let x = 0;
carousel.forEach( () => {

    const label = document.createElement('label');
    RadiusConteiner.appendChild(label);
    label.classList.add('radius_style');
    label.id = 'radio' + x ;

    x++
})

const labelButton = document.querySelectorAll('.carousel .radius > label');

document.getElementById('radio0').classList.add('radius_style_selecionado');

function SelecionadoRemove(){
    const selecionados = [...document.querySelectorAll('.radius_style_selecionado')];

    selecionados.map( (rmv) => {
        rmv.classList.remove('radius_style_selecionado');
    })
}

labelButton.forEach((obj) => {

    obj.addEventListener('click', (i) => {

        SelecionadoRemove()
        i.target.classList.toggle('radius_style_selecionado');

    })

})

const tamanhoTela = window.innerWidth;
const carouselScroll = document.querySelector('.carousel_image');

labelButton.forEach((i, iIndex) => {
    
    i.addEventListener('click', ()=>{   

        if(i.classList.contains('radius_style_selecionado')){
            const leftScrool = iIndex * tamanhoTela;
            carouselScroll.scrollLeft = leftScrool;
        }

    })
    
    carouselScroll.addEventListener('scroll', () => {

        if(carouselScroll.scrollLeft >= iIndex*tamanhoTela){ 
            SelecionadoRemove();
            document.querySelector('#radio' + iIndex).classList.toggle('radius_style_selecionado');
        }

    })
    
})

// Manipulação de Scroll

//const carouselScroll = document.querySelector('.carousel_image');
let pressionado = false;
let startX;
let scroll;

carouselScroll.addEventListener('mousedown', (e) => {
    pressionado = true;
    startX = e.pageX - carouselScroll.offsetLeft;
    scroll = carouselScroll.scrollLeft;
    carouselScroll.style.cursor  = 'grabbing'
})
carouselScroll.addEventListener('mouseleave', () => {
    pressionado = false;
    carouselScroll.style.cursor  = 'grab'
})
carouselScroll.addEventListener('mouseup', () => {
    pressionado = false;
    carouselScroll.style.cursor  = 'grab'
})
carouselScroll.addEventListener('mousemove', (e) => {
    if(!pressionado) return;
    e.preventDefault();
    const x = e.pageX - carouselScroll.offsetLeft;
    const walk = x - startX;
    carouselScroll.scrollLeft =  carouselScroll.scrollLeft - walk;

})
