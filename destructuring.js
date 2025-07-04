const user = {
    name: "Shukumar",
    age: 25,
    address: {
      city: "Dhaka",
      zip: 1207
    }
  };

//   Get name and city from the object using destructuring

//   console.log("Name : ",user.name , "Age : ",  user.age);

//    Rename zip to postalCode

const updateCityAndZip = {
    ...user,
   address :  {
    city : user?.address.city,
    zip : 3000
   }
}

// console.log(updateCityAndZip);

const users = [
    { name: "shukumar", address: { city: "Dhaka", zip: 1207 } },
    { name: "Rita", address: { city: "Khulna", zip: 1612 } }
  ];


const updateUserInfo = users?.map(user=>{
    if(user?.name === "Rita"){
        return{
            ...user,
            address : {
                city : user?.address.city,
                zip : 300
            }
        }

    }
    return user
})

// console.log(updateUserInfo);