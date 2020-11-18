// Demo
import * as process from 'process'

const log = (s: string) => {
  // 
  console.log(`${Date.now}: ${s}`)
}

// Test: Node version    
log(process.version)

// Test: Force Webpack error
const data = require('some_file')
log(data)
