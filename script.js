fetch('https://api.rawg.io/api/games?key=965cf8a1fa7f420387e453ca63050020')
  .then((resposta) => resposta.json())
  .then((data) => {
    let str = '';

    for (let i = 0; i < 10; i++) {
      let jogo = data.results[i];

      str += `<div class="card_lancamento">
                <h4>${jogo.name}</h4>
                <h5>${jogo.rating}</h5>
                <img src="${jogo.background_image}" alt="Capa do jogo">
                <p><a href="">Mais detalhes</a></p>
              </div>`;
    }
    document.querySelector('.area_lancamento').innerHTML = str;
  });
