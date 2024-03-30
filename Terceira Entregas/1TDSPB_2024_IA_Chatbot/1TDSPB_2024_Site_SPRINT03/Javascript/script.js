function clickMenu() {
    let linksNavegacao = document.getElementById('linksNavegacao')
    if (linksNavegacao.style.display == 'block') {
        linksNavegacao.classList.remove('menu-open')
        linksNavegacao.style.display = 'none'
    } else {
        linksNavegacao.classList.add('menu-open')
        linksNavegacao.style.display = 'block'
    }
}

function clickMenuProdutos() {
    let linksNavegacao = document.getElementById('linksNavegacaoProdutos')
    if (linksNavegacao.style.display == 'block') {
        linksNavegacao.classList.remove('menu-open-produtos')
        linksNavegacao.style.display = 'none'
    } else {
        linksNavegacao.classList.add('menu-open-produtos')
        linksNavegacao.style.display = 'block'
    }
}

document.querySelector('.iconeFomulario').addEventListener('click', function(){

    var formOculto = document.querySelector('.formularioFixado')

    if( formOculto.classList.contains('formOculto')){

        formOculto.classList.remove('formOculto')
        
    }else{
        formOculto.classList.add('formOculto')
    }

})

document.querySelector('.iconex').addEventListener('click', function(){

    var formOculto = document.querySelector('.formularioFixado')

    if( formOculto.classList.contains('formOculto')){

        formOculto.classList.remove('formOculto')
        
    }else{
        formOculto.classList.add('formOculto')
    }

}  )

