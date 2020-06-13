//(function (exports, require, module, __dirname,__filename) {
// const chalk = require("chalk")
// const text = require("./data")
//
// console.log(chalk.red(text));
//
// console.log(__filename);
//})

const http = require("http")

//Create server
const server = http.createServer(((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html"
    })
    res.end("<h1>Hello Node JS!</h1>")
}))
// Start server
server.listen(3000, () => {
    console.log("Server has been started...")
})
