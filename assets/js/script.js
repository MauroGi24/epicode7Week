// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

function removeTwitter() {
    let contenitore = document.querySelector("aside div:nth-child(3) li:nth-child(2) a")
    contenitore.remove()
} 

removeTwitter()

window.onload = (removeTwitter)


//EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

function removeDom() {
let continuaLeggere = document.querySelector(".jumbotron a")
let parent = document.querySelector(".jumbotron p:nth-child(2)")
continuaLeggere.addEventListener('click', () => {
    parent.remove()
})
}

removeDom()


// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.


function author() {
    let autore = document.querySelector(".blog-post-meta a")
    autore.addEventListener('mouseover', () => {
    alert("L'autore è " + autore.textContent)})
}

author()