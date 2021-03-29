# vue-themoviedbapiproject

- Antes de qualquer coisa é necessário que você saiba que o projeto foi criado em Vue 3.
- Foi utilizado o Yarn para configuração e execução do projeto, portanto, é necessário ter Yarn instalado no seu computador.

## Após instalar o Yarn e fazer o download do projeto, execute dentro da pasta o comando abaixo:
```
yarn install

Responsável por criar todos modulos e arquivos necessários para a execução do projeto.
```

### Para executar o projeto, digite o comando abaixo:
```
yarn run serve

Após a compilação, abra no seu navegador a porta 8080, ou seja, digite: "localhost:8080".
```

### Não obrigatório, mas como algumas coisas diferem do windows para o linux e iOS, é aconselhavél utilizar o comando abaixo:
```
yarn lint
```

# Consumo da API
<ol>
    <li> 
        <strong>
            Foi utilizado para conclusão desse projeto o uso da API do The Movie Database que pode ser encontrada [aqui](https://www.themoviedb.org/settings/api).
        </strong>
    </li>
    <br/>
    <li>
        <strong>
            A documentação completa da API pode ser encontrada [aqui](https://developers.themoviedb.org/3/getting-started/introduction).
        </strong>
    </li>
    <br/>
    <li>
        <strong>Foram usadas as seguintes URLs de requisição da API:</strong>
    </li>
    <ol>
    <li>
        <h5>https://api.themoviedb.org/3/movie/popular?api_key={CHAVE API}&language=pt-BR&page={PÁGINA DESEJADA}</h5>
        <span>Com essa URL é possível adquirir os filmes populares, onde a <strong>CHAVE API</strong> é sua chave da API ao se cadastrar no site do TMDB. A <strong>PÁGINA DESEJADA</strong> é o número que você pode colocar de 1 a 500. Como resultado será entregue dados como a página que você escolhe, um array contendo 20 filmes que estão naquela página, o total de páginas, e outra informação indicando o total de filmes. Para mais detalhes, <a href="https://developers.themoviedb.org/3/movies/get-popular-movies">clique aqui</a>.</span>
    </li>
    <li>
        <h5>https://api.themoviedb.org/3/movie/{ID DO FILME}?api_key={CHAVE API}&language=pt-BR</h5>
        <span>Com essa URL é possível adquirir todas as informações de um filme específico, onde <strong>ID DO FILME</strong> é a identificação do filme, seu ID. A <strong>CHAVE API</strong> é sua chave da API ao se cadastrar no site do TMDB. Para mais detalhes, <a href="https://developers.themoviedb.org/3/movies/get-movie-details">clique aqui</a>.</span>
    </li>
    <li>
        <h5>https://api.themoviedb.org/3/search/movie?api_key={CHAVE API}&language=pt-BR&query={FRASE PARA PESQUISA}&page=1&include_adult=false</h5>
        <span>Com essa URL é possível adquirir todos os filmes que deram resultado na pesquisa feita de acordo com a query fornecida. A <strong>CHAVE API</strong> é sua chave da API ao se cadastrar no site do TMDB. O <strong>FRASE PRA PESQUISA</strong> é a frase fornecida para gerar o resultado com os filmes encontrados. Para mais detalhes, <a href="https://developers.themoviedb.org/3/search/search-movies">clique aqui</a>.</span>
    </li>
    <li>
        <h5>http://image.tmdb.org/t/p/original + {poster_path}</h5>
        <span>Com essa URL é possível adquirir a imagem do filme em seu tamanho original, onde o <strong>poster_path</strong> é nome da imagem que vem como resultado do filme adquirido ao pesquisar um filme específico. Para mais detalhes, <a href="https://developers.themoviedb.org/3/getting-started/images">clique aqui</a>.</span>
    </li>
    </ol>
</ol>

