const chalk = require('chalk')
const sassLint = require('sass-lint')

class SassLintWebpackPlugin {
  constructor(options = {}) {
    this.options = options
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('SassLintWebpackPlugin', (compilation) => {
      if (compilation.name) { return }

      compilation.hooks.seal.tap('SassLintWebpackPlugin', () => {
        const { files, options = {}, configPath } = this.options
        const results = sassLint.lintFiles(files, options, configPath)

        results.forEach((result) => {
          result.messages.forEach((message) => {
            const error = [
              chalk.underline(`${result.filePath}:${message.line}:${message.column}`),
              chalk.white(message.message),
              chalk.gray(`[${message.ruleId}]`),
            ].join(' ')

            if (message.severity === 1) {
              compilation.warnings.push(new Error(error))
            } else {
              compilation.errors.push(new Error(error))
            }
          })
        })
      })
    })
  }
}

module.exports = SassLintWebpackPlugin
