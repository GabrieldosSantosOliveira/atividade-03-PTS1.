

let requestURL = "https://www.luizpicolo.com.br/api.json";
let arquivos = new XMLHttpRequest();
arquivos.open('GET', requestURL);
arquivos.responseType = 'json'
arquivos.send();

arquivos.onload = function () {
  var dados = arquivos.response

  dados.articles.forEach(dados => {
    let title = dados.title;
    let publishedAt = dados.publishedAt;
    let author = dados.author;
    let description = dados.description;
    let urlToImage = dados.urlToImage;
    let url = dados.url;
    let content = dados.content;


    let noticia = new Noticia(title, publishedAt, author, description, url, content)
    let noticiaDestaque = new NoticiaDestaque(title, publishedAt, author, description, urlToImage, url, content)
    let pagina = document.getElementById("container")

    pagina.insertAdjacentHTML('afterbegin', noticiaDestaque.pegar + '<br/> ');

  })


}