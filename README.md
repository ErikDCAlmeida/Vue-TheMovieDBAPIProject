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
            Foi utilizado para conclusão desse projeto o uso da API do The Movie Database que pode ser encontrada <a href="https://www.themoviedb.org/settings/api">aqui</a>.
        </strong>
    </li>
    <br/>
    <li>
        <strong>
            A documentação completa da API pode ser encontrada <a href="https://developers.themoviedb.org/3/getting-started/introduction">aqui</a>.
        </strong>
    </li>
    <br/>
    <li>
        <strong>Foram usadas as seguintes URLs de requisição da API:</strong>
    </li>
    <ol>
    <li>
        <h5><a href="" style="text-decoration: none; color: #fff">https://api.themoviedb.org/3/movie/popular?api_key={CHAVE_API}&language=pt-BR&page={PÁGINA_DESEJADA}</a></h5>
        <span>Com essa URL é possível adquirir os filmes populares, onde a <strong>CHAVE_API</strong> é sua chave da API ao se cadastrar no site do TMDB. A <strong>PÁGINA_DESEJADA</strong> é o número que você pode colocar de 1 a 500. Como resultado será entregue dados como a página que você escolhe, um array contendo 20 filmes que estão naquela página, o total de páginas, e outra informação indicando o total de filmes. Para mais detalhes, <a href="https://developers.themoviedb.org/3/movies/get-popular-movies">clique aqui</a>.</span>
    </li>
    <li>
        <h5><a href="" style="text-decoration: none; color: #fff">https://api.themoviedb.org/3/movie/{ID_DO_FILME}?api_key={CHAVE_API}&language=pt-BR</a></h5>
        <span>Com essa URL é possível adquirir todas as informações de um filme específico, onde <strong>ID_DO_FILME</strong> é a identificação do filme, seu ID. A <strong>CHAVE_API</strong> é sua chave da API ao se cadastrar no site do TMDB. Para mais detalhes, <a href="https://developers.themoviedb.org/3/movies/get-movie-details">clique aqui</a>.</span>
    </li>
    <li>
        <h5><a href="" style="text-decoration: none; color: #fff">https://api.themoviedb.org/3/search/movie?api_key={CHAVE_API}&language=pt-BR&query={FRASE_PARA_PESQUISA}&page=1&include_adult=false</a></h5>
        <span>Com essa URL é possível adquirir todos os filmes que deram resultado na pesquisa feita de acordo com a query fornecida. A <strong>CHAVE API</strong> é sua chave da API ao se cadastrar no site do TMDB. O <strong>FRASE PRA PESQUISA</strong> é a frase fornecida para gerar o resultado com os filmes encontrados. Para mais detalhes, <a href="https://developers.themoviedb.org/3/search/search-movies">clique aqui</a>.</span>
    </li>
    <li>
        <h5><a href="" style="text-decoration: none; color: #fff">http://image.tmdb.org/t/p/original{poster_path}</a></h5>
        <span>Com essa URL é possível adquirir a imagem do filme em seu tamanho original, onde o <strong>poster_path</strong> é nome da imagem que vem como resultado do filme adquirido ao pesquisar um filme específico. Para mais detalhes, <a href="https://developers.themoviedb.org/3/getting-started/images">clique aqui</a>.</span>
    </li>
    </ol>
</ol>

