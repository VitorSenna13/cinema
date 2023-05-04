const hamburger = document.querySelector('.menu_container .hamburger');

hamburger.addEventListener('click', () => {
    const mobileActived = document.querySelector('.menu_mobile');

    if(mobileActived.classList.contains('menu_mobile_ativado')){
        mobileActived.classList.remove('menu_mobile_ativado');
    }
    else{
        mobileActived.classList.add('menu_mobile_ativado');
    }
})