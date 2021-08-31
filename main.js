"use strict";

/*
    A car object looks like:
    {
        "id": 1,
        "make": "Volkswagen",
        "model": "Jetta",
        "modelYear": 2011,
        "color": "Purple",
        "numberOfDoors": 2,
        "price": "$5325.89",
        "vin": "1G4CW54K844908680"
    }
*/
let mainElement = document.querySelector("main");



function createCarCard (currentCar){
    let article = document.createElement('article');
    let header = document.createElement('header');
    let ul = document.createElement("ul");
    let priceItem = document.createElement("li");
    let doorCountItem = document.createElement("li");
    let colorItem = document.createElement("li");
    let vinItem = document.createElement("li");
    let removeButton = document.createElement("button");
    
    article.classList = ` ${currentCar.model}`;
    header.append(`${currentCar.make} ${currentCar.model} (${currentCar.modelYear})`);
    article.append(header);
   
    article.append(ul);
    ul.append(priceItem, doorCountItem, colorItem, vinItem);

    let priceLabel = document.createElement("strong");
    priceLabel.append("Price: ");
    priceItem.append(priceLabel, ` ${currentCar.price}`);

    let doorCountLabel = document.createElement("strong");
    doorCountLabel.append("Doors: ");
    doorCountItem.append(doorCountLabel, ` ${currentCar.numberOfDoors}`);

    let colorLabel = document.createElement("strong");
    colorLabel.append("Color: ");
    colorItem.append(colorLabel, ` ${currentCar.color}`);

    let vinLabel = document.createElement("strong");
    vinLabel.append("VIN: ");
    vinItem.append(vinLabel, ` ${currentCar.vin}`);

    removeButton.append("Remove");
    removeButton.classList.add("remove");
    article.append(removeButton);

    mainElement.append(article);
    return article;
}


for (let index = 0; index < cars.length; index += 1){
    let currentCar = cars[index];
    let cardElement = createCarCard(currentCar)
    mainElement.append(cardElement);
}


function addCar (event) {
    event.preventDefault();
    let form = event.target

    let vin = form.vin.value
    let make = form.make.value
    let model = form.model.value
    let color = form.color.value
    let modelYear = form.year.value
    let price = form.price.value
    let numberOfDoors = form["number-of-doors"].value

    let car = {
        make,
        model,
        modelYear,
        price,
        numberOfDoors,
        color,
        vin,
    }
cars.push(car);
let carCardElement = createCarCard(car);
mainElement.prepend(carCardElement);
console.log(cars);
}

let addCarForm = document.querySelector("form#add-car");
addCarForm.addEventListener("submit", addCar);