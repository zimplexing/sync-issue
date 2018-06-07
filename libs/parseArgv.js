module.exports = function parseArgv (argv) {
  let parseArgv = {}
  let keys = argv
    .slice(2)
    .filter((item, index) => !(index % 2))
    .map(item => item.replace('-', ''))

  let values = argv.slice(2).filter((item, index) => index % 2)

  for (let i = 0; i < keys.length; i++) {
    parseArgv[keys[i]] = values[i]
  }
  return parseArgv
}