import megjelenit from "./kartya.js";
export function kartyaMegjelenit(ALLATLISTA) {
    const articleELEM=document.querySelector("article")
    articleELEM.innerHTML = "";
    ALLATLISTA.forEach(function(allat,i){
    megjelenit(articleELEM,allat)
    })
}