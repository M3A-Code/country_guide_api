let containerEle = document.querySelector('.container');
let searchBox = document.querySelector('#search_box')
let searchBtn = document.querySelector('#btn')

let countries = new XMLHttpRequest();
countries.open("GET" , "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population");
countries.send();

let container = document.createElement("div");
containerEle.appendChild(container)
countries.onload = function(){
  let countryObj = JSON.parse(this.responseText);
  // creating elements
  searchBtn.onclick = function (){
        let countryName = searchBox.value;
        let bigElement = document.createElement("div");
        let topSection = document.createElement("div");
        let bottomSection = document.createElement("div")
        let flag = document.createElement("img");
        let region = document.createElement("div");
        let population = document.createElement("div");
        let capital = document.createElement("div");
    for(let i=0; i<countryObj.length;i++){
      if(countryName.toLowerCase().trim() === countryObj[i].name.common.toLowerCase()){
        flag.src = `${countryObj[i].flags.png}`;
        let nameOfCountry = document.createTextNode(countryObj[i].name.common);
        let regionText = document.createTextNode(`Region Is =>>   [  ${countryObj[i].region}  ]`);
        let populationNum = document.createTextNode(`Population Is =>>   [  ${countryObj[i].population}  ]`);
        let capitalText = document.createTextNode(`Capital Is =>>   [  ${countryObj[i].capital[0]}  ]`)
        region.appendChild(regionText)
        population.appendChild(populationNum)
        capital.appendChild(capitalText)
        topSection.append(flag , nameOfCountry)
        bottomSection.append(capital , region , population)
        bigElement.append(topSection , bottomSection)
        // classes for styling
        container.className = "content";
        topSection.className = "topSection";
        bottomSection.className = "bottomSection"; 
        flag.className = "img";
      }
    }
    container.append(bigElement);
    if(container.childElementCount === 2){
      container.firstElementChild.remove();
    }
    searchBox.value = "";
  }
  
}




