
const drinksmodel = require("../models/drinksmodel")

exports.renderHomePage = (req, res) => {
  res.render('index', { title: 'home' })
  //  res.render("index")
}

exports.getDrinksMenu = (req, res, next) => {
  const drinks = drinksmodel.getDrinks
  res.json ({drinks});
}

exports.renderBartenderPage = (req, res) => {
  res.render('bartender', { title: 'bartender'})
  //  res.render("bartender")
}

exports.renderCustomerPage = (req, res) => {
  const drinks = drinksmodel.getDrinks
  res.render('customer', { drinks : drinks})
  //res.render("customer")
}
