const express = require('express');
const db = require("./database/queries");
const app = express();
const { body, validationResult } = require("express-validator");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
require('dotenv').config();

const validateInput = [
    body("name").trim().isLength({ min: 1, max: 15 }).withMessage("The name can needs to have from 0 to 15 characters."),
  ];
const categories = [
    "Electronics",
    "Fashion",
    "Home & Living",
    "Beauty & Personal Care",
    "Health & Wellness",
    "Kids & Baby",
    "Sports & Outdoors",
    "Automotive",
    "Toys & Games",
    "Groceries & Gourmet Food"
];
  

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


async function renderAllItems(req, res){
    const items = await db.getAllItems();
    console.log(items);
    res.render("index",{items:items});
}
async function addItem(req, res, item){
    await db.addItem(item);
    res.redirect("/");
}

async function deleteItem(req, res, id){
    console.log("to delete: " + id);
    await db.deleteItemById(id);
    res.redirect("/");
}
async function getElement(req, res, id){
    const itemData = await db.getItemById(id);
    console.log("data: " +  itemData);
    res.render("editItem", {name: itemData.name, desc: itemData.description, price: itemData.price, stock: itemData.quantity, id: itemData.id, category: itemData.category, categories:categories});
}
async function updateItem(req, res, item){
    await db.updateItem(item);
    res.redirect("/");
}
async function renderCategory(req, res, category){
    const items = await db.getAllItemsCategory(category);
    console.log(items);
    res.render("category", {items:items, category: category});
}

app.get('/',(req, res)=>{
    renderAllItems(req, res);
});
app.get('/categories',(req, res)=>{
    res.render("categories", {categories: categories});
});
app.get('/categories/:category',(req, res)=>{
    renderCategory(req, res, req.params.category);
});

app.get('/new',(req, res)=>{
    res.render("addItem", {categories:categories});
});
app.post('/new', validateInput, (req, res)=>{
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
       return res.render("error",{value: errors.array()[0].value, error: errors.array()[0].msg});
      }
    console.log(req.body);
    addItem(req, res, req.body);
});
app.get('/delete/:id',(req, res)=>{
    res.render('admin', {id: req.params.id});
    //deleteItem(req, res, req.params.id);
});
app.post('/delete/:id',(req, res)=>{
    console.log("password: " + req.body.password);
    if(req.body.password == process.env.ADMIN){
        deleteItem(req, res, req.params.id);
    }else{
        res.redirect("/");
    }
});
app.get('/edit/:id',(req, res)=>{
    getElement(req, res, req.params.id);
});
app.post('/edit/:id',(req, res)=>{
    updateItem(req, res, {name: req.body.name, desc: req.body.desc, price: req.body.price, stock: req.body.stock, category: req.body.category, id: req.params.id})
});

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}/`)
})