const pesquisa = document.querySelector('.acessos .search');

    pesquisa.addEventListener('click', () => {

        const searchBar = document.querySelector('.pesquisa');
        const mobileActived = document.querySelector('.menu_mobile');

        if(mobileActived.classList.contains('menu_mobile_ativado')){

            mobileActived.classList.remove('menu_mobile_ativado');
            searchBar.classList.add('pesquisa_ativado');

        }
        else{

            if(searchBar.classList.contains('pesquisa_ativado')){
                searchBar.classList.remove('pesquisa_ativado');
            }
            else{
                searchBar.classList.add('pesquisa_ativado');
            }

        }

    })

const searchInput = document.querySelector('.pesquisa .style_input input');

    searchInput.addEventListener('change', (evt) => {

        const filmeName = [...document.querySelectorAll('.films_cartaz_desc .film_name')];

            filmeName.filter((elem) => {
                const encontrado = elem.innerHTML.toUpperCase() == evt.target.value.toUpperCase();
                
                if(encontrado == true){
                    return elem.closest('.container_films_cartaz').style.display = 'flex';
                }
                else if (evt.target.value == ''){
                     return elem.closest('.container_films_cartaz').style.display = 'flex';
                }
                else{
                    return elem.closest('.container_films_cartaz').style.display = 'none';
                }
            })
            
    })