function displayPetCards(){
    //get the DIV from the html
    const DIV = document.getElementById("pets");
    let card="";
//travel the array
for(let i=0; i< petSalon.pets.length; i++){
    let pet = petSalon.pets[i];
    //create the card tmp
    card += `
    <div class="pet">
        <h5>${pet.name}</h5>
        <p>Age:${pet.age}</p>
        <p>Service:${pet.service}</p>
    </div>`;

    console.log(card);
}
//add the card into the DIv
DIV.innerHTML=card;
}

//dont forget to execute this function in the browser console// displayPetCards()