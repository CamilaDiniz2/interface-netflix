function filmePrincipalModal() {
  const assistirFilmePrincipal = document.querySelector('#botao-assistir');
  const modalOverlay = document.querySelector('.modal-overlay');
  assistirFilmePrincipal.addEventListener('click', () => {
    modalOverlay.classList.add('active');
  });

  document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });
}

function imprimeMinhaLista() {
  const arrayImagens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const minhaLista = document.querySelector('.lista-filmes');

  arrayImagens.map((img) => {
    const divisao = document.createElement('div');
    divisao.className = 'item';
    const imagemLista = document.createElement('img');
    imagemLista.className = 'box-filme';
    imagemLista.setAttribute('src', `../src/imgs/mini${img}.jpg`);
    const botaoAdicionaravoritos = document.createElement('a');
    botaoAdicionaravoritos.className = 'adicionarFavoritos';
    botaoAdicionaravoritos.textContent = '+';
    minhaLista.appendChild(divisao);
    divisao.appendChild(imagemLista);
    divisao.appendChild(botaoAdicionaravoritos);
  });
}

function imprimeMeusFavoritos() {
  const arrayImagens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const minhaLista = document.querySelector('.lista-filmes-favoritos');

  arrayImagens.map((img) => {
    const divisao = document.createElement('div');
    divisao.className = 'item';
    const imagemLista = document.createElement('img');
    imagemLista.className = 'box-filme';
    imagemLista.setAttribute('src', `../src/imgs/mini${img}.jpg`);
    minhaLista.appendChild(divisao);
    divisao.appendChild(imagemLista);
  });
}

filmePrincipalModal();
imprimeMinhaLista();
//imprimeMeusFavoritos();

let favoritosList = [];
const pegarItems = document.querySelectorAll('.lista-filmes .item');

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
