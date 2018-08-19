let { argv } = require('./config/yargs')
let { getLugarLatLong } = require('./lugar/lugar')
let { getClima } = require('./clima/clima')

let getInfo = async() => {
    let coors = await getLugarLatLong(argv.direccion);
    let clima = await getClima(coors.lat, coors.long);
    return `El clima en ${coors.direccion} es de ${clima}º`
}

getInfo(argv.direccion)
    .then(response => console.log(response))
    .catch(err => console.log("ERROR  ==>>", err))

// getLugarLatLong(argv.direccion).then(response => {
//     console.log("RESULTADOS ===>>", response)
// }).catch(err => { console.log("ERROR ===>>", err) })


// getClima(35, 139).then(resp => {
//     console.log("CLIMA ===>>", resp);
// }).catch(err => console.log("ERROR  ==>>", err))


// argv.direccion