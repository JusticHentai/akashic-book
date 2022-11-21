const { app, BrowserWindow } = require('electron')

const createWindow = async () => {
  await app.whenReady()

  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  await win.loadURL(' http://localhost:3000')
}

createWindow()
