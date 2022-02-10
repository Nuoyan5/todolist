// 引入等比适配插件
const px2rem = require('postcss-px2rem')

const path = require('path'); //引入path模块

function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

// 配置基本大小
const postcss = px2rem({
    // 基准大小 baseSize，需要和rem.js中相同
    remUnit: 16
})

// 使用等比适配插件
module.exports = {
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            //set第一个参数：设置的别名，第二个参数：设置的路径
            .set('@', resolve('./src'))
            .set('assets', resolve('.src/assets'))
            .set('components', resolve('./src/components'))
            .set('views', resolve('src/views'))
            .set('utils', resolve('src/utils'))
            .set('types', resolve('src/types'))
    }
}


// const path = require('path'); //引入path模块
// function resolve(dir) {
//     return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
// }
// module.exports = {
//     chainWebpack: (config) => {
//         config.resolve.alias
//             //set第一个参数：设置的别名，第二个参数：设置的路径
//             .set('@', resolve('./src'))
//             .set('assets', resolve('.src/assets'))
//             .set('components', resolve('./src/components'))
//             .set('views', resolve('src/views'))
//     }
// }