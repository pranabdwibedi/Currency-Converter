const baseURL ="https://api.currencyapi.com/v3/historical?apikey=cur_live_bAO5YkGs9a7clwho2zEdyyjZztV2ywq1pLIboQ73&currencies=INR&base_currency=EUR&date=2024-07-22";
const dropDowns = document.querySelectorAll(".selects");
const button = document.querySelector("#btn");
const fromCurr = document.querySelector("#fromCountry");
const toCurr = document.querySelector("#toCountry");
const outPut = document.querySelector("#outputText")


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


let data;

button.addEventListener("click",async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector("#amount");
    let count = amount.value;
    if(count <=1 || count===""){
        amount.value = 1;
        count = 1
    }

    

    let URL = `${baseURL}${toCurr.value}&base_currency=${fromCurr.value}&date=2024-07-22`;
    let response = await fetch(URL,options);
    data = await response.json();
    let exchangeValue = data.data["INR"].value;
    let total = exchangeValue*count;
    outPut.innerText = `${count} ${fromCurr.value} = ${total} ${toCurr.value}`
})