let arrayImages = [
    {filename: "badebro_st_oeksoe.jpg", title: "Badebro"},
    {filename: "frossen_vandfald.jpg", title: "Frossen Vandfald"},
    {filename: "solnedgang_istrien.jpg", title: "Solnedgang"},
];

for(let image of arrayImages){
    let img = document.createElement('img');
    img.src = image.filename
    document.getElementById('gallery').appendChild(img)
    img.title = image.title;
}

let imgSize = document.querySelectorAll('img');
    imgSize.forEach(img =>{ //Her bruger jeg en forEach loop med en function arrow.
        img.addEventListener('click', function(){
            img.classList.add('bigimg') //Jeg bruger den her funktion til at gøre billedet stort i mit CSS
                
                if(this.classList = ('bigimg')){ //Her opsætter jeg en if function - hvis billedet er stort kan jeg gøre det småt igen
                    img.addEventListener('click', function(){
                        img.classList.remove('bigimg')
                        
                    })
            }
                
        })

    })
    

    //Jeg er usikker på hvordan jeg starter mit loop forfra så jeg kan forstørre billederne igen og gøre dem mindre
    //Medmindre det ikke er muligt i den her loop - jeg har googlet en del på det.

    //Jeg brugte en assets mappe til at starte med, men de blev ved med at breake mine billeder, selvom jeg opsatte en path til min mappe.