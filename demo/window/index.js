// 暂时设置成全局变量，防止垃圾回收
let win


// 定义事件
const createWindow = () => {
        win = new BrowserWindow({
            width: 960,
            height: 600,
            minWidth: 830,
            minHeight: 500,
            backgroundColor: '#f8f8f8'
        })
        win.loadURL(`file://${__dirname}/main.html`)

        // 关闭窗口时进行的操作，和下面的 all-closed 和 activate 联系
        win.on('closed', () => {
            win = null
        })
    }
