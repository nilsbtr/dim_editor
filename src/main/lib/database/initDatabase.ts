import { db } from './database'

export async function iniDatabase() {
  await initVersion()
  await initManifest()
}

async function initVersion() {
  await db.schema
    .createTable('version')
    .addColumn('id', 'integer', (col) => col.primaryKey())
    .addColumn('version', 'text')
    .addColumn('description', 'text')
    .execute()
}

async function initManifest() {
  await db.schema
    .createTable('collectible')
    .addColumn('hash', 'integer', (col) => col.primaryKey())
    .addColumn('definition', 'json', (col) => col.notNull())
    .execute()
  await db.schema
    .createTable('inventoryItem')
    .addColumn('hash', 'integer', (col) => col.primaryKey())
    .addColumn('definition', 'json', (col) => col.notNull())
    .execute()
  await db.schema
    .createTable('plugSet')
    .addColumn('hash', 'integer', (col) => col.primaryKey())
    .addColumn('definition', 'json', (col) => col.notNull())
    .execute()
  await db.schema
    .createTable('presentationNode')
    .addColumn('hash', 'integer', (col) => col.primaryKey())
    .addColumn('definition', 'json', (col) => col.notNull())
    .execute()
}

/*
async function initFiltered() {}

async function initWishlist() {}
*/
