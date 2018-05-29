const homedir = require('os').homedir()
const path = require('path')
const fs = require('fs')

// TODO: 默认拉取`label`为`blog`的`issue`作为示例
const initConfig = {
  username: 'zimplexing',
  repo: 'issue-sync',
  pullType: 'all',
  label: false
}

fs.writeFile(path.join(homedir, '.issue.json'), JSON.stringify(initConfig, null, 2), err => {
  if (err) {
    console.log(err)
  }
})
