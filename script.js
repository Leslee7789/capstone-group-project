import {countries} from "./countries.js";

 const gridContainer = document.querySelector(".grid-country-container");
 gridContainer.className = "grid-country-container";

 let countryContainer = document.createElement("div");
 countryContainer.className = "country";
 gridContainer.appendChild(countryContainer);

 let flagImage = document.createElement("div");
 flagImage.className = "flag";
 countryContainer.appendChild(flagImage);

 let image = document.createElement("img");
 image.src = countries[0].flag;
 flagImage.appendChild(image);

 let countryName = document.createElement("p");
countryName.className = "country-name";

countryName.textContent = countries[0].name;
countryContainer.appendChild(countryName);

function getCountryData(){

  for(let i = 1; i < countries.length; i++){
      let countryContainer = document.createElement("div");
      gridContainer.appendChild(countryContainer);
      countryContainer.className = "country";
      
      
      let flagImage = document.createElement("div");
      flagImage.className = "flag";
      countryContainer.appendChild(flagImage);
      
      let image = document.createElement("img");
      image.src = countries[i].flag;
      flagImage.appendChild(image);
      
      let countryName = document.createElement("p");
      countryName.className = "country-name";
      countryName.textContent = countries[i].name;
      countryContainer.appendChild(countryName);
  };
  }
  getCountryData();