function displayFooterInfo(){
    document.getElementById("footer").innerHTML=`${petSalon.name}it opens at ${petSalon.workingHours.open} to ${petSalon.workingHours.close}`;
}

//this is the constructor
function Pet(n,a,g,b,s){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
}
//global vars for the html inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

function isValid(aPet){
    let valid=true;// we start assuming that the pet is valid 
    if(aPet.name ==="" ){
    //if i get here the pet is not valid
    valid = false;
    inputName.classList.add("inpu-alert-error");
    }
    if(aPet.service===""){
        valid=false;
        inputService.classList.add("inpu-alert-error");
    }
    //add validation  for contact phone and owner name

    return valid; 

} 

function register(){
    console.log("register a new pet");
    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputBreed.value, inputService.value);
    //create a new pet 
    let newPet = new Pet (inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputBreed.value, inputService.value);
    //display the pet on the console
    console.log(newPet);

    //validation 
    if(isValid(newPet) ===true ){
        //push the pet into the array
         petSalon.pets.push(newPet);
         //display the number of registered pets
         updateInfo();
         displayPetCards();
         clearForm();
    }else{
        alert("Please fill out the form");
    }
    
}
function updateInfo(){
    document.getElementById("numberOfPets").innerHTML=petSalon.pets.length;
}
//
function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
}



function init(){
    //events
    //call the functions
    displayFooterInfo();
    //create object
    let santi = new Pet("Santi",3,"Male","Golden retriever","grooming");
   
    let honey = new Pet("Honey", 12, "Female", "Poodle", "Bath");
    
    let boba = new Pet("Boba", 6, "Female", "Beagle", "Nails");
    petSalon.pets.push(santi,honey,boba);
    updateInfo();
    displayPetCards();
}
window.onload=init;


