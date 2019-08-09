const path = require("path")
module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:"https://zuul.gfresh.cn",
                changeOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "api":path.join(__dirname,"./src/api"),
                "components":path.join(__dirname,"./src/components"),
                "views":path.join(__dirname,"./src/views"),
                // "common":path.join(__dirname,"./src/common"),
                "utils":path.join(__dirname,"./src/utils"),
                "router":path.join(__dirname,"./src/router"),
                "store":path.join(__dirname,"./src/store"),
                "lib":path.join(__dirname,"./src/lib")
            }
        }
    }
}


//package.json
// {
//     "name": "api",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
// },
//     "author": "",
//     "license": "ISC"
// }

