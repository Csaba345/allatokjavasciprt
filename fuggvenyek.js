import { kartyaMegjelenit } from "./kartyak.js";
export function rendezesek() {
    const buttonELEM = document.querySelectorAll(".rendezes button")
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
    const szuroGombok = document.querySelectorAll(".rendezes button");
    const tipusok = ["emlős", "hal", "madár", "hüllő", "kétéltű"];

    szuroGombok.forEach(gomb => {
        gomb.addEventListener("click", event => {
            const szurt = event.target.innerText.toLowerCase();
            if(tipusok.includes(szurt)) {
                const szurtLista = lista.filter(a => a.tipus === szurt);
                kartyaMegjelenit(szurtLista);
            }
        });
    });
}
//reduce

