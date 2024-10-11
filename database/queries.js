const pool = require("./pool");

async function getAllItems() {
  const { rows } = await pool.query("SELECT * FROM items ORDER BY id DESC");
  return rows;
}
async function addItem(item){
    await pool.query("INSERT INTO items (name, quantity, description, price, category) VALUES ($1, $3, $2, $4, $5)", [item.name, item.desc, item.price, item.stock, item.category]);
}
async function deleteItemById(id) {
    await pool.query("DELETE FROM items WHERE id = $1", [id]);
    return;
  }
async function getItemById(id) {
    const { rows } = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
    return rows[0];
}
async function updateItem(item) {
    await pool.query("UPDATE items SET name = $1, quantity = $2, description = $3, price = $4, category = $5 WHERE id = $6",[item.name, item.stock, item.desc, item.price, item.category, item.id]);
    return;
}
async function getAllItemsCategory(category){
    const { rows } = await pool.query("SELECT * FROM items WHERE category = $1 ORDER BY name", [category]);
    return rows;
}

module.exports = {
    getAllItems,
    addItem,
    deleteItemById,
    getItemById,
    updateItem,
    getAllItemsCategory
  };
  