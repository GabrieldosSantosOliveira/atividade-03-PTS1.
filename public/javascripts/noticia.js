class Noticia {
  constructor(titulo, data, autor, resumo, link, conteudo) {
    this._titulo = titulo;
    this._data = data;
    this._resumo = resumo;
    this._autor = autor;
    this._link = link;
    this._conteudo = conteudo;

  }
  set titulo(titulo) {
    this._titulo = titulo
  }
  set conteudo(conteudo) {
    this._conteudo = conteudo
  }
  set data(data) {
    this._data = data
  }
  set resumo(resumo) {
    this._resumo = resumo
  }
  set autor(autor) {
    this._autor = autor
  }
  set link(link) {
    this._link = link
  }
  get formar() {
    try {
      return this.formarnoticia(this._titulo, this._data, this._resumo, this._autor, this._link, this._conteudo)
    } catch (erro) {
      return erro.message
    } finally {
      console.log("Código terminado")
    }
  }
  formarnoticia(titulo, data, resumo, autor, link, conteudo) {
    if ((titulo.length > 0) && (data.length > 0) && (resumo.length > 0) && (autor.length > 0) && (link.length > 0) && (conteudo.length > 0)) {
      return `
      <div id="row">
       <div id="col-12" style="background-color: #E5E5E5;">
       <a href=${link}>  <h5>${(titulo)}</h5></a>
       <div> Publicado em: ${(data)}</div> 
       <div>${(autor)}</div> 
       <div>${(resumo)}</div>  
       <div>${(conteudo)}</div>  
       </div>
       
`
    } else {
      throw new Pitucha("O texto de ter no mínimo de 1 cacacter")
    }
  }
}
