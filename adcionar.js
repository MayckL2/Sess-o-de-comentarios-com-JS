function addcomment(){
    // coleta oque esta escrito nos inputs
    let name= document.querySelector("#name").value
    let comment= document.querySelector("#comment").value
    
    // identifica onde ficara salva os comentarios
    let list= document.querySelector("#list")

    // cria os comentarios vazios
    let bar1= document.createElement("h2")
    let bar2= document.createElement("h4")
    
    // se nao identificar nome, ficara identificado como "estranho"
    if (name == ""){
        name= "Estranho"
    }
    
    // transforma texto em textnode e adciona aos comentarios
    let txt= document.createTextNode(name)
    bar1.appendChild(txt)
    txt1= document.createTextNode(comment)
    bar2.appendChild(txt1)
    
    // coloca comentarios dentro da lista de comentarios
    list.appendChild(bar1)
    list.appendChild(bar2)

    // limpa barra de comentarios apos enviar
    document.querySelector("#comment").value= ""

}