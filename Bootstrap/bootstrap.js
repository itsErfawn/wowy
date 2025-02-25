const { default: CategoriesModel } = require("@/models/categories/categories");

class bootStrap{
    static async home(){
        let data={};
        const catModel=new CategoriesModel()
        data.categories=await catModel.getAll()
        return data
    }
}
export default bootStrap