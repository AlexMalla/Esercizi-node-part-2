import * as fs from "node:fs"

const data = "Content of file.txt"

fs.writeFile("file.txt", data, "utf-8", (error) => {
    if (error) {
        console.error(error)
    } else {
        console.log(data)
    }
})
