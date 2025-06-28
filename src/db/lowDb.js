import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join } from 'path';
import { existsSync, writeFileSync } from 'fs';

const filePath = join(process.cwd(), 'db.json');

if (!existsSync(filePath)) {
  writeFileSync(filePath, JSON.stringify({ posts: [] }, null, 2));
}

const adapter = new JSONFile(filePath);
const db = new Low(adapter);

export async function initializeDB() {
  await db.read();
  db.data ||= { posts: [] };
  await db.write();
}

export { db };
