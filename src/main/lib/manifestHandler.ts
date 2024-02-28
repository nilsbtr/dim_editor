import { bungieBaseURL } from '@shared/constants'
import { NewVersion, tableNames } from '@shared/databaseTypes'
import axios from 'axios'
import * as manifestDB from './database/manifestRepository'

export async function loadManifest() {
  const manifest = await requestManifest()
  const version = manifest?.version
  const localVersion = await manifestDB.findVersionNumber(0)

  console.log('Version:' + version)
  console.log('Local:' + localVersion)

  if (!version || version == localVersion) {
    console.log('!db')
    return
  }

  console.log('db')

  manifestDB.clearDefinitions()

  const newVersion: NewVersion = {
    id: 0,
    version: version,
    description: undefined
  }

  if (localVersion) {
    manifestDB.updateVersion(0, newVersion)
  } else {
    manifestDB.createVersion(newVersion)
  }

  console.log('Current Version: ' + version)
  console.log('Local Version: ' + localVersion)

  const componentPaths = manifest.jsonWorldComponentContentPaths.en

  await updateDefinitions(componentPaths)
}

async function updateDefinitions(componentPaths) {
  for (const key in tableNames) {
    manifestDB.createDefinition(await downloadComponent(componentPaths?.[key]), tableNames?.[key])
  }
}

async function requestManifest() {
  const response = await axios
    .get(`${bungieBaseURL}/Platform/Destiny2/Manifest/`, { timeout: 10000 })
    .then((res) => {
      return res.data?.Response
    })
    .catch((err) => console.log(err))
  return response
}

async function downloadComponent(path: string) {
  const response = await axios
    .get(`${bungieBaseURL}/${path}`, { timeout: 10000 })
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err))
  console.log(typeof response)
  return response
}

loadManifest().then(() => console.log('done'))
