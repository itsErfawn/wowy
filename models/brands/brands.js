import { connectToDB } from "@/libs/db/db";

class brandsModel {
  db = null;

  constructor() {
    this.db = null;
  }

  async check() {
    if (!this.db) {
      await this.init();
    }
  }

  async finish() {
    if (this.db) {
      await this.db.release();
    }
  }

  async init() {
    this.db = await connectToDB();
  }
  async getAll() {
    await this.check();
    const [rows] = await this.db.execute("SELECT * FROM `brands`");
    await this.finish();
    return rows;
  }
  async add(data){
    await this.check()
    const [result]=await this.db.execute("INSERT INTO `brands`(`name`, `image`) VALUES ('"+data.name+"','"+data.image+"')")
    return result.affectedRows > 0 ? true : false;
  }
}

export default brandsModel;
