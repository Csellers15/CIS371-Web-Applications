let dbRef = firebase.database().ref("countries");

dbRef.remove();

const showIndividualCountry = (snapshot) => {
    const country = snapshot.val();
    // Use backquotes (not "forward" quoates) for JS string interpolation
    var t = document.getElementById("tbl");

    let cName = country.name;
    let cCode = country.code;
    let cCapital = country.capital;
    let cPop = country.population;
    let cRegion = country.region; 

    var row = t.insertRow();

    row.setAttribute('id', country.name);
    
    var rOne = row.insertCell(0);
    
    var rTwo = row.insertCell(1);
    var rThree = row.insertCell(2);
    var rFour = row.insertCell(3);
    var rFive = row.insertCell(4);

    rOne.innerHTML = cName;
    rTwo.innerHTML = cCode;
    rThree.innerHTML = cCapital;
    rFour.innerHTML = cPop;
    rFive.innerHTML = cRegion;
}

const whoIsGone = snapshot => {
    const country = snapshot.val();
    
    const whichRow = tbl.querySelector(`tr[id='${country.name}']`);
    whichRow.parentNode.removeChild(whichRow);
}

const updatedChild = snapshot => {
    console.log(`Country Updated: ${snapshot.key}`);
};

const showData = snapshot => {
    const data = snapshot.val();
    console.log(`Key ${snapshot.key}: ${data}`);
};

dbRef.on('child_removed', whoIsGone);
dbRef.on('child_changed', updatedChild)

dbRef.push().set({
    name: "Germany",
    code: "DEU",
    capital: "Berlin",
    population: 81770900,
    region: "Europe"
});

dbRef.push().set({
    name: "Afghanistan",
    code: "AFG",
    capital: "Kabul",
    population: 27657145,
    region: "Asia"
});

dbRef.push().set({
    name: "Aland Islands",
    code: "ALA",
    capital: "Mariehamn",
    population: 28875,
    region: "Europe"
});

dbRef.push().set({
    name: "Albania",
    code: "ALB",
    capital: "Tirana",
    population: 2886026,
    region: "Europe"
});

dbRef.push().set({
    name: "Algeria",
    code: "DZA",
    capital: "Algeria",
    population: 40400000,
    region: "Africa"
});

dbRef.push().set({
    name: "Andorra",
    code: "AND",
    capital: "Andorra la Vella",
    population: 78014,
    region: "Europe"
});

dbRef.push().set({
    name: "American Samoa",
    code: "ASM",
    capital: "Pago Pago",
    population: 57100,
    region: "Oceania"
});

dbRef.push().set({
    name: "Angola",
    code: "AGO",
    capital: "Luanda",
    population: 25868000,
    region: "Africa"
});

dbRef.push().set({
    name: "Anguilla",
    code: "AIA",
    capital: "The Valley",
    population: 13452,
    region: "Americas"
});

dbRef.push().set({
    name: "Antarctica",
    code: "ATA",
    capital: "",
    population: 1000,
    region: "Polar"
});

dbRef.on('value', showData);
dbRef.on('child_added', showIndividualCountry);

