export default megjelenit(articleELEM, adat=(fajnev, tipus, atlagElettartam, erdekesseg, kep));{
    let kod=`
        <div class="card col-lg-4">
                <img class="card-img-top" src="${adat.kep}" alt="${adat.fajnev}">
                <div class="card-body">
                <h4 class="card-title">${adat.fajnev}/h4>
                <p class="card-text">${adat.tipus}</p>
                <p class="card-text">${adat.atlagElettartam}</p>
                <p class="card-text">${adat.erdekesseg}</p>
            </div>
        </div>
    `
    articleELEM.innerHTML+=kod
} 