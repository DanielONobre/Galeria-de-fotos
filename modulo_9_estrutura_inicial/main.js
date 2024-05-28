$(document).ready(function(){
 
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(){
        const enderecoDaNovaImagem  = $('#endereco-imagem-nova').val();
        const novoItem = $('<li></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).apendTo(novoItem);
        $(`<div class="overlay-imagem-link" 

             <a href="${enderecoDaNovaImagem}" target:"_blank" title:"Ver imagem em tamanho real"
               Ver imagem em tempo real
             </a>
            </div>`
        ).apendTo(novoItem);
        $(novoItem).apendTo(`ul`);
    })
})