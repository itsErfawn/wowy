import { connectToDB } from "@/libs/db/db";
import CookieStore from "../cookies/Cookie";
import { tokenVerifier } from "@/libs/token/token";

class AdminsModel {
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

  async finish() {
    if (this.db) {
      this.db.release();
    }
  }

  async getAll() {
    await this.check();
    const [rows] = await this.db.execute("SELECT * FROM admin");
    await this.finish();
    return rows.length > 0 ? rows : false;
  }

  async get(data) {
    await this.check();
    const [row] = await this.db.execute("SELECT * FROM admin WHERE (username = ? OR email = ?) AND password = ?", [data.userName || data.username, data.userName || data.username, data.password]);
    await this.finish();
    return row.length > 0 ? row : false;
  }

  static async getSelf() {
    const token = await CookieStore.get('__token');
    const data = tokenVerifier(token.value);
    return data;
  }

  async checkAccess() {
    await this.check();
    const adminData = await AdminsModel.getSelf();
    const adminVerify = await this.get(adminData);
    await this.finish();
    return adminVerify ? true : false;
  }
}

export default AdminsModel;
