const fs = require('fs')
const textMessage = fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err)
    }

    
    console.log(data)
})