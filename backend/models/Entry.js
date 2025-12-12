const db = require('../database/connect')

class Entry {

    constructor({id, date, category, text}){
        this.id = id;
        this.date = date;
        this.category = category;
        this.text = text;
    }

    static async getAll(){
        const response = await db.query("SELECT * FROM entries ORDER BY date;");

        if (response.rows.length === 0){
            throw new Error('No diary entries.')
        }
        return response.rows.map(e => new Entry(e));
    }

    static async getOneByID(id){
        const response = await db.query("SELECT * FROM entries WHERE id = $1;", [id]);
        if (response.rows.length != 1){
            throw new Error('Unable to find specific entry.')
        }
        return new Entry(response.rows[0]);
    }

    static async createEntry(data) {
        const { date, category, text } = data;
        const response = await db.query('INSERT INTO entries (date, category, text) VALUES ($1, $2, $3) RETURNING *;', [date, category, text]);
        const newEntryID = response.rows[0].id;
        const newEntry = await Entry.getOneByID(newEntryID);
        return newEntry;
    }

    async updateEntry(data){
        const { category, text } = data;
        const response = await db.query('UPDATE entries SET category = $1, text = $2 WHERE id = $3 RETURNING *;', [category, text, this.id]);
        if (response.rows.length != 1){
            throw new Error('Unable to update the diary entry')
        } 

        return new Entry(response.rows[0]);
    }

    async deleteEntry() {
        const response = await db.query('DELETE FROM entries WHERE id = $1 RETURNING *;', [this.id]);
        if (response.rows.length !=1) { 
            throw new Error('Unable to delete entry.')
        }
        return new Entry(response.rows[0]);
    }

    static async searchByCategory(category){
        const response = await db.query('SELECT * FROM entries WHERE LOWER(category) = LOWER($1) ORDER BY date;', [category])
        if (response.rows.length === 0){
            throw new Error('No diary entries of this category.')
        }
        return response.rows.map(e => new Entry(e));
    }

    static async searchByDate(date){
        const response = await db.query("SELECT * FROM entries WHERE DATE_TRUNC('day', date) = $1", [date]);
        if (response.rows.length === 0){
            throw new Error('No diary entries from this date.')
        }
        return response.rows.map(e => new Entry(e));
    }
}

module.exports = Entry;