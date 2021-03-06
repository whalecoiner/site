const debug = require('debug')('indieweb-express-site:drivers:markdown:update');
const fs = require('fs')
const path = require('path')
const is = require('is_js')
const config = require('../../config')
const AppError = require('../../utilities/app-error')

const update = async (type, id, fileContent) => {
  // debug('type: ', type)
  // debug('id: ', id)
  // debug('fileContent: ', fileContent)
  try {
    if (!type || !fileContent || !id) throw new Error('markdown.update: Missing parameters')
    if (is.not.string(type) || is.not.string(id)) throw new Error('markdown.update: Parameters must be supplied as strings')

    let destination = path.join(config.contentRoot(), type, id, 'index.md')

    fs.stat(destination, (err, stat) => {
      if (is.truthy(err)) throw new Error(`markdown.update: No file exists to update.`)
    })

    return await fs.promises.writeFile(destination, fileContent, 'utf8')
  } catch (error) {
    return Promise.reject(error)
  }
}

module.exports = update
