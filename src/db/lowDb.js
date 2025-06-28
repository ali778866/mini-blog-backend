import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const adapter = new JSONFile('db.json');
const db = new Low(adapter);

export async function initializeDB() {
    await db.read();
    if (db.data === null) {
        db.data = { posts: [] };
        await db.write();
    }
}

export { db };
