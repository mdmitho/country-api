const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayCountries(data))
}

const displayCountries = countries =>{
    // console.log(countries) //chcek value
    const countriesHTML = countries.map(country => getCountryHTML(country))
    // console.log(countriesHTML[0])
    const container = document.getElementById('countries')
    container.innerHTML = countriesHTML.join(' ')//arrayr moday onake khula jenis thakly join deay akta banano jai and string ar moday ja debay ta array komar k chacng korba and string ar moday ja devay tai 
}

const getCountryHTML =({name, flags,area,region}) =>{
    //option 2
    return `
    <div class="country">
         <h2>${name.common}</h2>
         <p>Area: ${area}</p>
         <p>Continet: ${region}</p>
         <img src="${flags.png}">
    </div>
    `
}


/* const getCountryHTML =country =>{
    //option 1
    const {name, flags} =country//destructuring data
    return `
    <div class="country">
         <h2>${name.common}</h2>
         <img src="${flags.png}">
    </div>
    `
} */

/* //orignal
const getCountryHTML =country =>{
    return `
    <div class="country">
         <h2>${country.name.common}</h2>
         <img src="${country.flags.png}">
    </div>
    `
} */
loadCountries()