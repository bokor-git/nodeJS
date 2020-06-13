
// Import filesystem module "fs"
const fs = require("fs")

// Import path module "path"
const path = require("path")

// Create ne directory
fs.mkdir(path.join(__dirname, "test"),(err =>{
    if (err) {
        throw err
    }
    console.log("Directory created")
} ))


// Find file directory an join new dir and file name
const filePath = path.join(__dirname, "test", "test.txt")

// Create new file in directory
fs.writeFile(filePath, "Hello NodeJS!", (err => {
        if (err) {
            throw err
        }
        console.log("File created")
    })
)
// Add data to file
fs.appendFile(filePath, "\nHello Again!", (err => {
        if (err) {
            throw err
        }
        console.log("File changed")
    })
)

// Read file
fs.readFile(filePath,"utf-8",((err, data) => {
    if (err){
        throw err
    }
    console.log(data)
}))
// Delete directory
fs.rmdir(path.join(__dirname,"test2"),(err => {
    if (err){
        throw err
    }
    console.log("directory deleted")
}))
