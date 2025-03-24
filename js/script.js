$(() => {
    tela10();

    function tela10(params) {
        $('.botao_1').css({ cursor: 'pointer' }).on('click', () => {
            console.log('botao 1');

            insertconteudo();
            $('.atividade').fadeIn();

        })

        $('.atividade').on('click', () => {
            $('.atividade').fadeOut(() => {
                $('.atividade').html('').removeAttr('style');
            });
        })

        function insertconteudo(params) {
            $('.atividade')
                .css({
                    position: 'absolute',
                    width: `${$('.magazine').width()}px`,//'542px',
                    height: `${$('.magazine').height()}px`,//'541px',
                    top: `${$('.magazine').position().top}px`,//'-270.5px',
                    left: `${$('.magazine').position().left}px`,//'-541px',
                    zIndex: 25,
                    display: 'none',
                    cursor: 'pointer'
                })
                .html(`
            <img style="width: 100%; height: 100%; position: absolute; left: 0; top: 0;" src="atividades/interacaop10.png">
            <iframe id="video1" width="859" height="483" style="position: absolute;left: 39.5%;top: 57%;width: 32.5%;height: 39%;" src="https://www.youtube.com/embed/JF_X8-_fOQQ" title="O que todos precisam aprender com os indígenas sobre cuidar da natureza? #shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe id="video2" width="915" height="483" style="position: absolute;left: 4.5%;top: 6%;width: 44.5%;height: 53%;" src="https://www.youtube.com/embed/VXpGFsMpcsM" title="5 - SHIVA E O BEIJA-FLOR - Ailton Krenak e Satish Kumar - CONVERSA NA REDE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `);

        }


        $('.botao_2').css('cursor', 'pointer').on('click', () => {
            // insertconteudo();
            // $('.atividade').fadeIn();

        })
    }


})