import { NewVersion, UpdateVersion } from '@shared/databaseTypes'
import { db } from './database'

// Version Handling

export async function findVersionNumber(id: 0 | 1) {
  return await db
    .selectFrom('version')
    .where('id', '=', id)
    .select('version.version')
    .executeTakeFirst()
    .then((data) => data?.version)
}

export async function findVersionDescription(id: 0 | 1) {
  return await db
    .selectFrom('version')
    .where('id', '=', id)
    .select('version.description')
    .executeTakeFirst()
    .then((data) => data?.description)
}

export async function createVersion(version: NewVersion) {
  return await db.insertInto('version').values(version).executeTakeFirstOrThrow()
}

export async function updateVersion(id: 0 | 1, version: UpdateVersion) {
  await db.updateTable('version').set(version).where('id', '=', id).execute()
}

// Definitions Handling

export async function clearDefinitions() {
  await db.deleteFrom('collectible').execute()
  await db.deleteFrom('inventoryItem').execute()
  await db.deleteFrom('plugSet').execute()
  await db.deleteFrom('presentationNode').execute()
}

export async function createDefinition(
  definition,
  dbTable: 'collectible' | 'inventoryItem' | 'plugSet' | 'presentationNode'
) {
  for (const hash in definition) {
    await db
      .insertInto(dbTable)
      .values({ hash: +hash, definition: definition.hash })
      .executeTakeFirstOrThrow()
  }
}

// Definitions Searching

export async function findCollectible(hash: number) {
  return await db
    .selectFrom('collectible')
    .where('hash', '=', hash)
    .select('definition')
    .executeTakeFirst()
}

export async function findInventoryItem(hash: number) {
  return await db
    .selectFrom('inventoryItem')
    .where('hash', '=', hash)
    .select('definition')
    .executeTakeFirst()
}

export async function findPlugSet(hash: number) {
  return await db
    .selectFrom('plugSet')
    .where('hash', '=', hash)
    .select('definition')
    .executeTakeFirst()
}

export async function findPresentationNode(hash: number) {
  return await db
    .selectFrom('presentationNode')
    .where('hash', '=', hash)
    .select('definition')
    .executeTakeFirst()
}
