const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: "Ciudad de donde sacar",
            demand: true
        }
    })
    .help()
    .argv

module.exports = {
    argv
}