let petSalon = {
    name:"The Fashion Pet",
    phone:"619-777-7777",
    workingHours:{
        open:"9:00 am",
        close: "9:00pm",
    },
    address:{
        street:"Palm Ave",
        zip: "22345",
        city:"San Diego",
        },

        pets:[]
}
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
letinputName = document.getElementById("txtName");
letinputAge = document.getElementById("txtAge");
letinputGender = document.getElementById("txtGender");
letinputBreed = document.getElementById("txtBreed");
letinputService = document.getElementById("txtService");

function register(){
    console.log("register a new pet");
    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputBreed.value, inputService.value);
    //create a new pet 
    let newPet = new Pet (inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputBreed.value, inputService.value);
    //display the pet on the console
    console.log(newPet);
    //push 
    //display the number 
    petSalon.pets.push(newPet);

    updateInfo();
    clearForm();
}
function updateInfo(){
    document.getElementById("numberOfPets").innerHTML=petSalon.pets.length;
}

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
    //create onject
    let santi = new Pet("Santi",3,"Male","Golden retriever","grooming");
   
    let honey = new Pet("Honey", 12, "Female", "Poodle", "Bath");
    
    let boba = new Pet("Boba", 6, "Female", "Beagle", "Nails");
    petSalon.pets.push(santi,honey,boba);
}
window.onload=init;


