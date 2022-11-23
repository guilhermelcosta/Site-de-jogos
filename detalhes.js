// -----------------------------------------------------------------------
// Área de detalhes - específica para cada card.
// -----------------------------------------------------------------------
function carregaInfoJogo(id) {
  fetch(
    `https://api.rawg.io/api/games/${id}?key=965cf8a1fa7f420387e453ca63050020`
  )
    .then((resposta) => resposta.json())
    .then((data) => {
      let str = '';
      let jogo = data;
      let plataformas = [];
      var slug = jogo.slug;

      //   Procura as plataformas em que o jogo foi lançado.
      for (let i = 0; i < jogo.parent_platforms.length; i++) {
        plataformas.push(jogo.parent_platforms[i].platform.name);
      }

      str += `  <div id="card_detalhes">
                    <img src="${jogo.background_image}" alt="">
                    <div class="topicos_card">
                        <h1>${jogo.name}</h1>
                        <h2>Data de lançamento: ${jogo.released}</h2>
                        <h3>Avaliação: <span id="nota">${jogo.rating}</span></h3>
                        <h4>Sinopse:</h4>
                        <p>${jogo.description}</p>
                        <h5>Plataformas: <span id="plataformas">${plataformas}</span></h5>
                    </div>
                </div>`;

      document.querySelector('#area_detalhes').innerHTML = str;
      console.log(slug);
      carregaFotos(slug);
    });
}

var qtdeFotos = 5;

function carregaFotos(slug) {
  fetch(
    `https://api.rawg.io/api/games/${slug}/screenshots?key=965cf8a1fa7f420387e453ca63050020`
  )
    .then((resposta) => resposta.json())
    .then((data) => {
      let str = '';

      for (let i = 0; i < qtdeFotos; i++) {
        let fotos = data.results[i];

        str += ` <img src="${fotos.image}" alt="">`;

        document.querySelector('#area_fotos').innerHTML = str;
      }
    });
}
