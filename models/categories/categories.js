import { connectToDB } from "@/libs/db/db";

class CategoriesModel {
  constructor() {
    this.db = null;
  }

  async check() {
    if (!this.db) {
      await this.init();
    }
  }

  async init() {
    this.db = await connectToDB();
  }
  async add(data) {
    await this.check();
    
    const columns = ['name', 'slug', 'description', 'image'];
    const values = [data.name, data.slug, data.description, data.image];

    if (data.parent) {
        columns.push('parent');
        values.push(data.parent);
    }

    const placeholders = columns.map(() => '?').join(', ');
    const query = `INSERT INTO categories (${columns.join(', ')}) VALUES (${placeholders})`;

    const [result] = await this.db.execute(query, values);

    return result.affectedRows > 0 ? true : false;
}
async getAll(){
  await this.check()
  const [rows]= await this.db.execute("SELECT * FROM `categories`")
  return rows
}

}

export default CategoriesModel;