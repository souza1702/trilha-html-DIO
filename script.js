
var searchField = document.getElementById("busca")
var descriptionObjetc = document.getElementById("generalvision")
var textToSearch = descriptionObjetc.innerHTML;

function realizaBusca(busca){
const regex = new RegExp(`(${busca})(?!(>(?!<mark))*/mark>)+`, 'ig')
const ocurrences = textToSearch.match(regex)
descriptionObjetc.innerHTML = textToSearch.replace(regex, `<mark>${busca}</mark>`)
}

searchField.addEventListener('keyup', (e) => realizaBusca(e.target.value))