import {
  getCollectibleDefinition,
  getCollectibles,
  getInventoryItemDefinition,
  getPresentationNodeDefinition
} from './manifestHandler'

const collectionRootNode: number = 3790247699
const destinyWeaponType: number = 3
const filteredWeapons: Record<string, any> = {}

async function getWeapons(): Promise<void> {
  const collectibleDefinitions: any = getCollectibles()
}

async function searchWeapons(nodeHash: number): Promise<void> {
  const node: any = getPresentationNodeDefinition(nodeHash)

  if (node) {
    for (const child in node?.children?.presentationNodes) {
      searchWeapons(child?.presentationNodeHash)
    }
    for (const child in node?.children?.collectibles) {
      const collectibleDefinition: any = getCollectibleDefinition(child?.collectibleHash)
      const itemDefinition: any = getInventoryItemDefinition(collectible?.itemHash)

      if (itemDefinition && filterWeapon(itemDefinition)) {
        await processWeapon(collectibleDefinition, itemDefinition)
      }
    }
  }
}

function filterWeapon(itemDefinition: any): boolean {
  const itemType: number = itemDefinition?.itemType
  const itemVersions: any[] = itemDefinition?.quality?.versions
  const itemRarity: number = itemDefinition?.inventory?.tierTypeHash

  return (
    itemType === weaponType &&
    itemVersions.some((v) => v.powerCapHash === 2759499571) &&
    (itemRarity === 4008398120 || itemRarity === 2759499571)
  )
}

function processWeapon(collectibleDefinition: any, itemDefinition: any): void {
  const weaponData: Record<string, any> = {
    itemHash: itemDefinition.hash,
    displayName: itemDefinition?.displayProperties?.name,
    releaseSeason: getReleaseSeason(itemDefinition),
    itemRarity: itemDefinition?.inventory?.tierTypeName,
    isCraftable: false,
    itemSockets: getItemSockets(itemDefinition),
    itemSource: collectibleDefinition.sourceString.replace(/[^\w\s]+/g, '').replace('Source: ', '')
  }

  filteredWeapons[itemDefinition.hash] = weaponData
}

function getReleaseSeason(itemDefinition: any): void {}

function getItemSockets(itemDefinition: any): void {}
