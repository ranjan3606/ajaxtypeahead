const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const cityData = []
const fDatas = document.querySelector('.findDatas')
const gData = document.querySelector('.show')

fetch(url)
.then(res => res.json())
.then(data => cityData.push(...data))
console.log(cityData)

function findData(matchCity, cityData){
    return cityData.filter(place => {
        const datas = new RegExp(matchCity, 'gi');
        return place.city.match(datas) || place.state.match(datas) || place.population.match(datas) || place.rank.match(datas)
    })
}
function dataMatch(){
    const dataMatches = findData(this.value, cityData)
    const html = dataMatches.map(place => {
        const datas = new RegExp(this.value, 'gi');
        const cityName  = place.city.replace(datas, `<span class="h1">${this.value}</span>`)
        const stateName = place.state.replace(datas, `<span class="h1">${this.value}</span>`)
        const populations = place.population.replace(datas, `<span class="h1">${this.value}</span>`)
        const ranks = place.rank.replace(datas, `<span class="h1">${this.value}</span>`)


        return `
            <li>
                <h3 class="name">City<p>${cityName}</p></h3>
                <h4 class="name">State<p>${stateName}</p> </h4>
                <h4 class="population"> Population <p>${populations}</p> </h4>
                <h4 class="population"> Rank <p>${ranks}</p> </h4>
            <li>
        `;
        
    }).join('')
    gData.innerHTML = html
}

fDatas.addEventListener('change', dataMatch)
fDatas.addEventListener('keyup', dataMatch)




