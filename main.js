function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento?.localName === 'audio') elemento.play();
    else console.log('Elemento não encontrado ou seletor inválido');
}

document.querySelectorAll('.tecla').forEach(tecla => {
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.addEventListener('click', () => tocaSom(idAudio));

    tecla.addEventListener('keydown', evento => {
        if (evento.code === 'Space' || evento.code === 'Enter') tecla.classList.add('ativa');
    });

    tecla.addEventListener('keyup', () => tecla.classList.remove('ativa'));
});
