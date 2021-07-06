async function renderCats(id) {
    const catEl = document.querySelector(id)
    const limit = getParameterByName('images') || 5

    let catHTML = ''
    const catJSON = await catAPI(limit)
    for(const json of catJSON) {
        catHTML += genCatImgHTML(json)
    }

    catEl.innerHTML = catHTML
}

function genCatImgHTML(json) {
    return `<img class='cat' src="${json.url}">`
}

function catAPI(limit) {
    return new Promise(async function(resolve, reject){
        $.getJSON(`https://api.thecatapi.com/v1/images/search?limit=${limit}`, async function(cats) {
            return resolve(cats)
        })
    })
}

function getParameterByName(name) {
    const url = window.location.href
    name = name.replace(/[\[\]]/g, '\\$&')
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
}