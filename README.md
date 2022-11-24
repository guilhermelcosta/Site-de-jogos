# Site-de-jogos

Este site foi criado como trabalho à disciplina de Desenvolvimento de Interfaces Web - PUC Minas.

https://guilhermelcosta.github.io/Site-de-jogos/

Os seguintes requisitos foram abarcados neste trabalho:

* Botões "+ Carregar mais", que adicionam mais informações à tela, dependendo da sessão em que é utilizado (recomendações, plataformas ou desenvolvedoras).
*Obs.: a quantidade de elementos adicionados à cada sessão depende do limite de resposta encaminhado pela API RAWG (ex.: o limite de desenvolvedoras é 10, pois a resposta encaminhada pela API contém 10 resultados).*

* Barra de pesquisa integrada no cabeçalho. Para pesquisar um determinado jogo, podem ser utilizados as seguintes entradas:
    * Nome do jogo: deve ser escrito conforme indicado nos cards. Por exemplo: o filtro reconhecerá Grand Theft Auto V, mas **não** reconhecerá GTA V, grand theft auto V ou demais variações, por exemplo.

    * Gênero do jogo: em inglês e com primeira letra maiúscula. Por exemplo: Action, RPG, Puzzle, Adventure, Shooter ou Indie.

    * Plataforma lançada: escrito com primeras letras maíusculas. Por exemplo: PC, Xbox Series S/X, Xbox One, Xbox 360, PlayStation 5, PlayStation 4, PlayStation 3, Nintendo Switch, dentre outras.