
class NoticiaDestaque extends Noticia {
  constructor(titulo, data, autor, resumo, imagem, link, conteudo) {
    super(titulo, data, autor, resumo, link, conteudo);
    this._imagem = imagem
  }
  get pegar() {
    try {
      return this.mostrarNoticia(this._titulo, this._data, this._autor, this._resumo, this._imagem, this._link, this._conteudo)
    } catch (erro) {
      return erro.stack
    } finally {
      console.log("Codigo finalizado")
    }
  }

  mostrarNoticia(titulo, data, autor, resumo, imagem, link, conteudo) {
    if ((titulo.length > 0) && (data.length > 0) && (resumo.length > 0) && (autor.length > 0) && (imagem.length > 0) && (link.length > 0) && (conteudo.length > 0)) {
      return `
      <div id="row">
        
      <div id="col-8 mb-5 g-5" style="background-color: #E5E5E5;">
      <img src=${imagem} class="img-fluid imaginar rounded mx-auto d-block " >
      <a href=${link}><h2 class="text-center">${(titulo)}</h2></a>
      <div>  Publicado em: ${(data)}</div> 
      <div>${(autor)}</div>  
      <div>${(resumo)}</div>
      <div>${(conteudo)}</div>

</div>   
</div>
<br/>
`
    } else {
      throw new Pitucha("O texto de ter no mínimo de 1 cacacter")
    }
  }
}

