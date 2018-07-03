
module.exports = {
  // 判断是否是合法的文件名；
  // 某些特殊字符无法作为文件名
  isLegalPath: (filePath) => {
    return filePath.test(/\\|\//g)
  },

  // 解析文件名称
  parseMarkdownFile: (fileName) => {
    let filePath = path.join(process.cwd(), fileName)
    let body = fs.readFileSync(filePath, 'utf-8')
    let basename = path.basename(filePath, '.md')
    let [number, title] = basename.indexOf('_') > -1 
      ? basename.split('_')
      : [undefined, basename]
    return {
      number,
      title,
      body
    }
  },

  transformBoolean: (str) => str === 'false' ? false : Boolean(str)
}