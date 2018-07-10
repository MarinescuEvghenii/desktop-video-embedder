// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Window size
const windowWidth  = 560;
const windowHeight = 315;

function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width  : windowWidth,
        height : windowHeight,
        frame  : false
    });

    mainWindow.setAspectRatio(windowWidth/windowHeight);
    mainWindow.setAlwaysOnTop(true, "floating");
    mainWindow.setVisibleOnAllWorkspaces(true);
    mainWindow.setFullScreenable(false);
    mainWindow.loadFile('index.html')

    mainWindow.on('closed', function () {
        mainWindow = null
    });

    require('./menu.js');
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
