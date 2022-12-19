const goodsMock = require("../mock/goods.json");

const Good = require("../models/Good");


module.exports = async () => {
    const goods = await Good.find();
    if (goods.length !== goodsMock.length) {
        await createInitialEntity(Good, goodsMock);
    }
};

async function createInitialEntity(Model, data) {
    await Model.collection.drop();
    return Promise.all(
        data.map(async item => {
            try {
                delete item._id;
                const newItem = new Model(item);
                await newItem.save();
                return newItem;
            } catch (e) {
                return e;
            }
        })
    );
}
