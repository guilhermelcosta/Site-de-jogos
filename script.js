// -----------------------------------------------------------------------
// Área de recomendações - geração dos cards.
// -----------------------------------------------------------------------
var qtdeJogos = 10;

document.addEventListener(
  'load',
  fetch('https://api.rawg.io/api/games?key=965cf8a1fa7f420387e453ca63050020')
    .then((resposta) => resposta.json())
    .then((data) => {
      let str = '';

      for (let i = 0; i < qtdeJogos; i++) {
        let jogo = data.results[i];

        str += `<div class="card_recomendacao">
              <h4>${jogo.name} (${jogo.platforms[0].platform.name})</h4>
              <h5>${jogo.rating}</h5>
              <img src="${jogo.background_image}" alt="Capa do jogo">
              <p><a href="detalhes.html?id=${jogo.id}">Mais detalhes</a></p>
            </div>`;
      }
      document.querySelector('#areaCard_recomendacoes').innerHTML = str;
    })
);

// Carregar mais jogos
let btn_carregarMaisJogos = document.querySelector('#btn_carregarMaisJogos');

btn_carregarMaisJogos.addEventListener('click', () => {
  fetch('https://api.rawg.io/api/games?key=965cf8a1fa7f420387e453ca63050020')
    .then((resposta) => resposta.json())
    .then((data) => {
      let str = '';

      qtdeJogos += 5;

      for (let i = 0; i < qtdeJogos; i++) {
        let jogo = data.results[i];

        str += `<div class="card_recomendacao">
                  <h4>${jogo.name} (${jogo.platforms[0].platform.name})</h4>
                  <h5>${jogo.rating}</h5>
                  <img src="${jogo.background_image}" alt="Capa do jogo">
                  <p><a href="detalhes.html?id=${jogo.id}">Mais detalhes</a></p>
                </div>`;
      }
      document.querySelector('#areaCard_recomendacoes').innerHTML = str;
    });
});

// -----------------------------------------------------------------------
// Área de plataformas - geração dos cards.
// -----------------------------------------------------------------------
var qtdePlataformas = 3;

document.addEventListener(
  'load',
  fetch(
    'https://api.rawg.io/api/platforms?key=965cf8a1fa7f420387e453ca63050020'
  )
    .then((resposta) => resposta.json())
    .then((data) => {
      let str = '';

      for (let i = 0; i < qtdePlataformas; i++) {
        let plataforma = data.results[i];

        str += `<div class="card_plataforma">
              <img src="${plataforma.image_background}" alt="">
              <div class="informacoes_plataforma">
                 <h4>${plataforma.name}</h4>
              </div>
            </div>`;
      }
      document.querySelector('#areaCard_plataformas').innerHTML = str;
    })
);

// Carregar mais plataformas
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

      qtdePlataformas += 3;

      for (let i = 0; i < qtdePlataformas; i++) {
        let plataforma = data.results[i];

        str += `<div class="card_plataforma">
                  <img src="${plataforma.image_background}" alt="">
                   <div class="informacoes_plataforma">
                     <h4>${plataforma.name}</h4>
                   </div>
                </div>`;
      }
      document.querySelector('#areaCard_plataformas').innerHTML = str;
    });
});

// -----------------------------------------------------------------------
// Área de desenvolvedoras - geração dos cards.
// -----------------------------------------------------------------------
var qtdeDesenvolvedoras = 5;

document.addEventListener(
  'load',
  fetch(
    'https://api.rawg.io/api/developers?key=965cf8a1fa7f420387e453ca63050020'
  )
    .then((resposta) => resposta.json())
    .then((data) => {
      let str = '';

      for (let i = 0; i < qtdeDesenvolvedoras; i++) {
        let desenvolvedoras = data.results[i];

        str += `<div class="col-12 col-sm-12 col-md-6 col-lg-3 card_desenvolvedora">
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
      document.querySelector('#areaCard_desenvolvedoras').innerHTML = str;
    })
);

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

      qtdeDesenvolvedoras += 5;

      for (let i = 0; i < qtdeDesenvolvedoras; i++) {
        let desenvolvedoras = data.results[i];

        str += `<div class="col-12 col-sm-12 col-md-6 col-lg-3 card_desenvolvedora">
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
      document.querySelector('#areaCard_desenvolvedoras').innerHTML = str;
    });
});

// -----------------------------------------------------------------------
// Para filtrar as informações que serão impressas na tela.
// -----------------------------------------------------------------------
let input_pesquisa = document.querySelector('#barra_pesquisa');
let btn_pesquisa = document.querySelector('#btn_barraPesquisa');

btn_pesquisa.addEventListener('click', () => {
  fetch('https://api.rawg.io/api/games?key=965cf8a1fa7f420387e453ca63050020')
    .then((resposta) => resposta.json())
    .then((data) => {
      let str = '';

      for (let i = 0; i < data.results.length; i++) {
        let jogo = data.results[i];
        var generos = [];
        var plataformas = [];

        // Confere os gêneros atribuídos do jogo.
        for (let j = 0; j < jogo.genres.length; j++) {
          generos.push(data.results[i].genres[j].name);
        }
        // Confere as plataformas em que o jogo foi lançado.
        for (let k = 0; k < jogo.platforms.length; k++) {
          plataformas.push(data.results[i].platforms[k].platform.name);
        }

        if (
          jogo.name == input_pesquisa.value ||
          generos.includes(input_pesquisa.value) ||
          plataformas.includes(input_pesquisa.value)
        ) {
          str += `<div class="card_recomendacao">
          <h4>${jogo.name} (${jogo.platforms[0].platform.name})</h4>
          <h5>${jogo.rating}</h5>
          <img src="${jogo.background_image}" alt="Capa do jogo">
          <p><a href="detalhes.html?id=${jogo.id}">Mais detalhes</a></p>
        </div>`;
        }
        document.querySelector('#areaCard_recomendacoes').innerHTML = str;
      }
    });
});
