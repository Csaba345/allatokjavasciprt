import { kartyaMegjelenit } from "./kartyak.js";
export function rendezesek() {
    const buttonELEM = document.querySelector(".rendezes button")
    buttonELEM.forEach(function(button){
        button.addEventListener("click",function(event){
            console.log(event.target.id);
            switch (event.target.id) {
                case "kor_no":
                    lista.sort(function(a,b){
                        return a.atlagElettartam-b.atlagElettartam
                    })
                    kartyaMegjelenit(ALLATLISTA)
                    break;

                case "kor_csokk":
                    lista.sort(function(a,b){
                        return b.atlagElettartam-a.atlagElettartam
                    })
                    kartyaMegjelenit(ALLATLISTA)
                    break;

                case "kor_no":
                    lista.sort(function(a,b){
                        return a.fajnev > b.fajnev ? 1:-1; 
                    })
                    kartyaMegjelenit(lista)
                    break;

                default:
                    break;
            }
        })
    })
}

export function szuresek(lista) {
    const szuresGombELEMEK=document.querySelectorAll(".szures button")
    szuresGombELEMEK.forEach(function (button) {
        button.addEventListener("click",function(event) {
            console.log(event.target.innerText)
            let szurt =event.target.innerText
            const SZURTLISTA=lista.filter(function(a){
                return a.tipus===szurt
            })
            console.log(SZURTLISTA)
            kartyaMegjelenit(ALLATLISTA)
        })
    })
}
//reduce