const path = require("path")
module.exports = function(){
  debugger
  return {
    mode:"none",
    entry:{
      "entry1":"./src/index.js"
    },
    output:{
      path:path.resolve(__dirname, '../dist'),
      filename:"main[hash:8].js"
    }
  }
}