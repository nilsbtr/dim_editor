import { Database } from '@shared/databaseTypes'
import SQLite from 'better-sqlite3'
import { Kysely, SqliteDialect } from 'kysely'

export const db = new Kysely<Database>({
  dialect: new SqliteDialect({
    database: new SQLite('./resources/storage.db')
  })
})
