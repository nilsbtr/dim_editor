import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    getWeaponList: () => ipcRenderer.invoke('getWeaponList'),
    getSingleWeapon: (id: string) => ipcRenderer.invoke('getSingleWeapon', id)
  })
} catch (error) {
  console.error(error)
}
