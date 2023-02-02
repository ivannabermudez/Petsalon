let petSaloon ={
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
        pets:[
            {
                name: "Scooby",
                age: "7",
                gender: "male",
                breed: "Labrador",
                service: "Shower",

                name: "Santi",
                age: "2",
                gender: "male",
                breed: "golden retriever",
                service: "shower",

                name: "Honey",
                age: "12",
                gender: "female",
                breed: "french poodle", 
                service: "Hair style",

            }
        ]
}
function displayFooterInfo(){
    document.getElementById("footer").innerHTML=`${petSalon.name}it opens at ${petSalon.workingHours.open} to ${perSalon.workingHours.close}`;
}

displayFooterInfo();

console.log(petSalon.pets.length); //displaying the number of pets
console.log(petSalon.pets[0].name); //displaying the name

