let kinningParkHouse = {
  address: "1 Kinning Park",
  price: 180000,
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
    email: "margaret@fake-emails.com",
  },
};

let parkAvenueHouse = {
  address: "50 Park Avenue",
  price: 195000,
  currentOwner: {
    firstName: "Marie",
    lastName: "McDonald",
    email: "marie.m@real-emails.com",
  },
};

/*
    DO NOT EDIT ANYTHING ABOVE THIS LINE
  
    WRITE YOUR CODE BELOW
  */

// returns the full name (first name + last name) of the owner of the house
function getOwnerFullName(house) {
  return `${house.currentOwner.firstName} ${house.currentOwner.lastName}.`;
}

// returns an array of the owners' email addresses of the two houses
// search for "javascript array concat" to remember how to join two arrays
function getEmailAddresses(house1, house2) {
  return house1.currentOwner.email.concat(`, ${house2.currentOwner.email}.`);
}

// returns the address for the cheapest house out of the two
function getCheapestAddress(house1, house2) {
  let cheapestHouseAddress = "";
  if (house1.price > house2.price) {
    cheapestHouseAddress = house2.address;
  } else {
    cheapestHouseAddress = house1.address;
  }
  return `${cheapestHouseAddress}.`;
}

/*
    DO NOT EDIT ANYTHING BELOW THIS LINE
  */
console.log(
  `Expected result: Margaret Conway. Actual result: ${getOwnerFullName(
    kinningParkHouse
  )}`
);
console.log(
  `Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(
    kinningParkHouse,
    parkAvenueHouse
  )}`
);
console.log(
  `Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(
    parkAvenueHouse,
    kinningParkHouse
  )}`
);
