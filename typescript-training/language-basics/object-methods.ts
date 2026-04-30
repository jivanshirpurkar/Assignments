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

//1.Access the data from the object
//print the persons name from the person object
console.log(person.name);
console.log(person["name"]);


//2.print the zip  from the person object
console.log(person.address.zip);
console.log(person.address["zip"]);

//3.Adding a new property to the existing object.

//Add salary as 200,000 in the main object and county:India in the address object
person.salary = 20000;
person.address.country = "India"
console.log(person);

//4.Update existing property in the existing object
//update the age from 36 to 41
person.age = 41;
console.log(person);

//5. Delete the existing property from the object. 
//Delete the age property from the person object. 
delete person.age;
console.log(person);


//6. Check whether a particular property is available within the object. 
//Verify whether age and name properties are available within the person object. 
//It will give a result "true/false" in boolean .
console.log("age" in person);
console.log("salary" in person);

//7.Get all the keys from the object.
console.log(Object.keys(person));
console.log(Object.keys(person.address));

//8.Get all the values from the object
console.log(Object.values(person));
console.log(Object.values(person.address));

//9. Get all the key and values together from the object
console.log("...............")
console.log(Object.entries(person.address));

//10.Iterate all the keys from the object
for (let key in person) {
    console.log(key);
    console.log(person[key as keyof personinfo]);
}

//10.Verify the data types of the property within the object.
console.log(typeof person.name);
console.log(typeof person.address);

//12.Merging two different objects together
interface projectInfo {
    project: string,
    id: number
}

let project: projectInfo={
    project: "amzaon",
    id:23456
}
let mergeObject = { ...person, ...project };
console.log(mergeObject);