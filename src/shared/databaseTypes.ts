import {
  DestinyCollectibleDefinition,
  DestinyInventoryItemDefinition,
  DestinyPlugSetDefinition,
  DestinyPresentationNodeDefinition
} from 'bungie-api-ts/destiny2'
import { Insertable, JSONColumnType, Selectable, Updateable } from 'kysely'

export interface Database {
  version: VersionTable
  collectible: CollectibleDefinition
  inventoryItem: InverntoryItemDefinition
  plugSet: PlugSetDefinition
  presentationNode: PresentationNodeDefinition
  filteredWeapons: FilteredWeaponTable
  filteredPerks: FilteredPerkTable
  wishlistData: WishlistTable
}

export const tableNames = {
  DestinyCollectibleDefinition: 'collectible',
  DestinyInventoryItemDefinition: 'inventoryItem',
  DestinyPlugSetDefinition: 'plugSet',
  DestinyPresentationNodeDefinition: 'presentationNode'
}

export interface VersionTable {
  id: 0 | 1 // 0 = ManifestVersion; 1 = WishlistVersion
  version: string
  description: string | undefined
}

export type Version = Selectable<VersionTable>
export type NewVersion = Insertable<VersionTable>
export type UpdateVersion = Updateable<VersionTable>

export interface CollectibleDefinition {
  hash: number
  definition: JSONColumnType<DestinyCollectibleDefinition>
}

export type Collectible = Selectable<CollectibleDefinition>
export type NewCollectible = Insertable<CollectibleDefinition>
export type UpdateCollectible = Updateable<CollectibleDefinition>

export interface InverntoryItemDefinition {
  hash: number
  definition: JSONColumnType<DestinyInventoryItemDefinition>
}

export type InventoryItem = Selectable<InverntoryItemDefinition>
export type NewInventoryItem = Insertable<InverntoryItemDefinition>
export type UpdateInventoryItem = Updateable<InverntoryItemDefinition>

export interface PlugSetDefinition {
  hash: number
  definition: JSONColumnType<DestinyPlugSetDefinition>
}

export type PlugSet = Selectable<PlugSetDefinition>
export type NewPlugSet = Insertable<PlugSetDefinition>
export type UpdatePlugSet = Updateable<PlugSetDefinition>

export interface PresentationNodeDefinition {
  hash: number
  definition: JSONColumnType<DestinyPresentationNodeDefinition>
}

export type PresentationNode = Selectable<PresentationNodeDefinition>
export type NewPresentationNode = Insertable<PresentationNodeDefinition>
export type UpdatePresenationNode = Updateable<PresentationNodeDefinition>

export interface FilteredWeaponTable {
  hash: number
  definiton: JSONColumnType<{
    name: string
    icon: string
    release: number
    rarity: string
    craftable: boolean
    sockets: {
      slot1: number[]
      slot2: number[]
      slot3: number[]
      slot4: number[]
    }
    source: string
  }>
}

export type Weapon = Selectable<FilteredWeaponTable>
export type NewWeapon = Insertable<FilteredWeaponTable>
export type UpdateWeapon = Updateable<FilteredWeaponTable>

export interface FilteredPerkTable {
  hash: number
  definition: JSONColumnType<{
    name: string
    icon: string
    type: string
  }>
}

export type Perk = Selectable<FilteredPerkTable>
export type NewPerk = Insertable<FilteredPerkTable>
export type UpdatePerk = Updateable<FilteredPerkTable>

interface WishlistRoll {
  slot1: number[] | undefined
  slot2: number[] | undefined
  slot3: number[] | undefined
  slot4: number[] | undefined
  masterwork: number[] | undefined
  note: string
}

export interface WishlistTable {
  hash: number
  pve: JSONColumnType<{
    global: WishlistRoll
    rolls: WishlistRoll[]
  }>
  pvp: JSONColumnType<{
    global: WishlistRoll
    rolls: WishlistRoll[]
  }>
}
