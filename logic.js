const baseURL ="https://api.currencyapi.com/v3/historical?apikey=cur_live_bAO5YkGs9a7clwho2zEdyyjZztV2ywq1pLIboQ73&currencies=";
const dropDowns = document.querySelectorAll(".selects");
const button = document.querySelector("#btn");
const fromCurr = document.querySelector("#fromCountry");
const toCurr = document.querySelector("#toCountry");
const outPut = document.querySelector("#outputText")
const outputBox = document.querySelector(".output")
 
for (select of dropDowns) {
  for (currency in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = countryList[currency];
    newOption.value = currency;
    select.append(newOption);
    if(currency === "USD" && select.name === "fromCountry")
        newOption.selected = "selected";
    else if(currency === "INR" && select.name === "toCountry")
        newOption.selected = "selected";
  }
  select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
  });
}


const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let image = element.parentElement.querySelector(".image");
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    image.src = newSrc;
}


const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'Sign Up for Key',
		'x-rapidapi-host': 'simple-currency-conversion.p.rapidapi.com'
	}
};



button.addEventListener("click",async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector("#amount");
    let count = amount.value;
    if(count <=1 || count===""){
        amount.value = 1;
        count = 1
    }

    let URL;
    try{
      URL = `${baseURL}${toCurr.value}&base_currency=${fromCurr.value}&date=${year}-0${month}-${day-1}`;
      console.log("Updated")
    }catch{
      URL = `${baseURL}${toCurr.value}&base_currency=${fromCurr.value}&date=2024-07-23`;
    }

    let response = await fetch(URL,options);
    let responseData = await response.json();

    console.log(responseData);
    //let Cvalue = `${toCurr.value}`;
    let exchangeValue = responseData.data[`${toCurr.value}`].value;
    let total = exchangeValue*count;
    outPut.innerHTML = `<b>${count} ${fromCurr.value} = ${total} ${toCurr.value}</b>`
    outputBox.setAttribute("id","hiddenOutput")
})