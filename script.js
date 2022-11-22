// -----------------------------------------------------------------------
// Cards de recomendações de jogos.
// -----------------------------------------------------------------------
var qtdeJogosInicial_jogos = 10;
var qtdeJogosAtual_jogos = qtdeJogosInicial_jogos;

fetch('https://api.rawg.io/api/games?key=965cf8a1fa7f420387e453ca63050020')
  .then((resposta) => resposta.json())
  .then((data) => {
    let str = '';

    for (let i = 0; i < qtdeJogosInicial_jogos; i++) {
      let jogo = data.results[i];

      str += `<div class="card_lancamento">
                <h4>${jogo.name} (${jogo.platforms[0].platform.name})</h4>
                <h5>${jogo.rating}</h5>
                <img src="${jogo.background_image}" alt="Capa do jogo">
                <p><a href="">Mais detalhes</a></p>
              </div>`;
    }
    document.querySelector('.area_lancamento').innerHTML = str;
  });

// Carregar mais jogos na tela
let btn_carregarMaisJogos = document.querySelector('#btn_carregarMaisJogos');

btn_carregarMaisJogos.addEventListener('click', () => {
  fetch('https://api.rawg.io/api/games?key=965cf8a1fa7f420387e453ca63050020')
    .then((resposta) => resposta.json())
    .then((data) => {
      let str = '';

      qtdeJogosAtual_jogos += 5;

      for (let i = 0; i < qtdeJogosAtual_jogos; i++) {
        let jogo = data.results[i];

        str += `<div class="card_lancamento">
                <h4>${jogo.name} (${jogo.platforms[0].platform.name})</h4>
                <h5>${jogo.rating}</h5>
                <img src="${jogo.background_image}" alt="Capa do jogo">
                <p><a href="">Mais detalhes</a></p>
              </div>`;
      }
      document.querySelector('.area_lancamento').innerHTML = str;
    });
});

var qtdeJogosInicial_plataformas = 6;
var qtdeJogosAtual_plataformas = qtdeJogosInicial_plataformas;

// -----------------------------------------------------------------------
// Cards de plataformas.
// -----------------------------------------------------------------------
fetch('https://api.rawg.io/api/platforms?key=965cf8a1fa7f420387e453ca63050020')
  .then((resposta) => resposta.json())
  .then((data) => {
    let str = '';

    for (let i = 0; i < qtdeJogosInicial_plataformas; i++) {
      let plataforma = data.results[i];

      str += `<div class="card_plataforma">
                <img src="${plataforma.image_background}" alt="">
                 <div class="informacoes_plataforma">
                   <h4><a href="#">${plataforma.name}</a></h4>
                 </div>
              </div>`;
    }
    document.querySelector('.area_plataforma').innerHTML = str;
  });

// Carregar mais plataformas tela
let btn_carregarMaisPlataformas = document.querySelector(
  '#btn_carregarMaisPlataformas'
);

btn_carregarMaisPlataformas.addEventListener('click', () => {
  fetch(
    'https://api.rawg.io/api/platforms?key=965cf8a1fa7f420387e453ca63050020'
  )
    .then((resposta) => resposta.json())
    .then((data) => {
      let str = '';

      qtdeJogosAtual_plataformas += 3;

      for (let i = 0; i < qtdeJogosAtual_plataformas; i++) {
        let plataforma = data.results[i];

        str += `<div class="card_plataforma">
                  <img src="${plataforma.image_background}" alt="">
                   <div class="informacoes_plataforma">
                     <h4><a href="#">${plataforma.name}</a></h4>
                   </div>
                </div>`;
      }
      document.querySelector('.area_plataforma').innerHTML = str;
    });
});

// -----------------------------------------------------------------------
// Cards de desenvolvedores
// -----------------------------------------------------------------------
var qtdeJogosInicial_desenvolvedores = 5;
var qtdeJogosAtual_desenvolvedores = qtdeJogosInicial_desenvolvedores;

fetch('https://api.rawg.io/api/developers?key=965cf8a1fa7f420387e453ca63050020')
  .then((resposta) => resposta.json())
  .then((data) => {
    let str = '';

    for (let i = 0; i < qtdeJogosInicial_desenvolvedores; i++) {
      let desenvolvedoras = data.results[i];

      str += `<div class="col-12 col-sm-12 col-md-6 col-lg-3 card_publisher">
                <h4>${desenvolvedoras.name}</h4>
                <img src="${desenvolvedoras.image_background}" alt="">
                <h5>Principais jogos:</h5>
                <ul>
                  <li>${desenvolvedoras.games[0].name}</li>
                  <li>${desenvolvedoras.games[1].name}</li>
                  <li>${desenvolvedoras.games[2].name}</li>
                </ul>
              </div>`;
    }
    document.querySelector('.area_publisher').innerHTML = str;
  });

// Carregar mais desenvolvedoras tela
let btn_carregarMaisDesenvolvedoras = document.querySelector(
  '#btn_carregarMaisDesenvolvedoras'
);

btn_carregarMaisDesenvolvedoras.addEventListener('click', () => {
  fetch(
    'https://api.rawg.io/api/developers?key=965cf8a1fa7f420387e453ca63050020'
  )
    .then((resposta) => resposta.json())
    .then((data) => {
      let str = '';

      qtdeJogosAtual_desenvolvedores +=5;

      for (let i = 0; i < qtdeJogosAtual_desenvolvedores; i++) {
        let desenvolvedoras = data.results[i];

        str += `<div class="col-12 col-sm-12 col-md-6 col-lg-3 card_publisher">
                <h4>${desenvolvedoras.name}</h4>
                <img src="${desenvolvedoras.image_background}" alt="">
                <h5>Principais jogos:</h5>
                <ul>
                  <li>${desenvolvedoras.games[0].name}</li>
                  <li>${desenvolvedoras.games[1].name}</li>
                  <li>${desenvolvedoras.games[2].name}</li>
                </ul>
              </div>`;
      }
      document.querySelector('.area_publisher').innerHTML = str;
    });
});
