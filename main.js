
const populate = async (value,currency)=> {
    let myStr = ""
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_ZwLdGdpRsW99I8YVYrtgDUsVoZfFtRS12XlBqmiG&base_currency=" + currency
  let response = await fetch(url)
  let rJson = await response.json()
  document.querySelector(".output").style.display = "block"
  for (let key of Object.keys(rJson["data"])) { //for off is used because in for in index comes out
    myStr += ` <tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${(rJson["data"][key]["value"] * value)}</td>
                    </tr> 
             `
  }
const tableBody = document.querySelector("tbody");
tableBody.innerHTML = myStr;
}

const btn = document.querySelector(".btn")
btn.addEventListener("click",(e)=>{
e.preventDefault()
console.log("buttonn")
const value = parseInt(document.querySelector("input[name='quantity']").value);
  //return value as a string in single quotes converted into int
  const currency = document.querySelector("select[name='currency']").value;
  populate(value,currency)
})
