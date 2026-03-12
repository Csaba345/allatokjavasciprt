import { ALLATLISTA } from "./adat.js";
import { kartyaMegjelenit } from "./kartyak.js";
import{rendezesek, szuresek} from "./fuggvenyek.js"

/*for (let index = 0; index < ALLATLISTA.length; index++) {
    megjelenit(ALLATLISTA[0])
}*/

kartyaMegjelenit(ALLATLISTA)

rendezesek(ALLATLISTA)
szuresek(ALLATLISTA)