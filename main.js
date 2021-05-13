// app 是管理应用程序生命周期用的
// BrowserWindow 是创建还有控制应用窗口用的 ..
// ipcMain 主进程监听
const {
    app,
    // BrowserWindow,
} = require('electron')

// 导入模块
const window = require('./demo/window')

const path = require('path')

// 自动重载应用
require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})


// 绑定事件
// 现在是从子模块进行回调
app.on('ready', () => {
    window.createWindow()
})

// 不是 mac 平台就完全退出
app.on('window-all-closed', () => {
    if(process.platform !== "darwin") {
        app.quit()
    }
})

// mac 平台可以重新激活
// 同 ready
app.on('activate', () => {
    if(window.mainWindow = null) {
        window.createWindow()
    }
})
