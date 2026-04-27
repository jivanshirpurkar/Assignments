//Object : Object Datatype that can help us to store multiple properties in the form of key-value pair 
//1. Storing the data inside the object 

interface personinfo {
    name: string;
    age?: number;
    visastatus: boolean;
    salary?: number; //? indiate this is not a mondatory.
    address: {
        city: string;
        state: string;
        zip: number;
        country: string;
    };
}

let person: personinfo = {
    name: "Jeevan",
    visastatus: true,
    address: {
        city: "Nagpur",
        state: "Maharashtra",
        zip: 440001,
        country: "India"
    }
};

//Access the data from the object
//print the persons name from the person object
console.log(person.name);
console.log(person["name"]);


//print the zip  from the person object
console.log(person.address.zip);
console.log(person.address["zip"]);

//Adding a new property to the existing object.

//Add salary as 200,000 in the main object and county:India in the address object
person.salary = 20000;
person.address.country = "India"
console.log(person);