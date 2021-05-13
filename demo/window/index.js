const {BrowserWindow} = require('electron')
// 暂时设置成全局变量，防止垃圾回收
let mainWindow,childWindow


// 定义事件
const createWindow = () => {
        this.mainWindow = new BrowserWindow({
            width: 960,
            height: 600,
            minWidth: 830,
            minHeight: 500,
            backgroundColor: '#f8f8f8'
        })
        this.mainWindow.loadURL(`file://${__dirname}/main_window.html`)

        // 关闭窗口时进行的操作，和下面的 all-closed 和 activate 联系
        this.mainWindow.on('closed', () => {
            this.mainWindow = null
        })

        childWindow = new BrowserWindow({
            width: 600,
            height: 300
        })

        childWindow.loadURL(`file://${__dirname}/child_window.html`)
    }

module.exports = { 
    createWindow
}

// 1,引入模块  2，修改window变量名 3，修改html模板名 4，导出模块