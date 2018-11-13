'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
    search: (req, res) => {
        let id = req.query.id;
        let name = req.query.name;
        let priceFrom = req.query.priceFrom;
        let priceTo = req.query.priceTo;
        let band = req.query.band;
        let category = req.query.category;
        let size = req.query.size;
        let color = req.query.color;
        console.log(req.query);
        let sql = ' SELECT product.id,product.name,product.imageBase64,product.price'+
        ' FROM product,produtdetail,category,bands'+
        ' WHERE product.band_id = bands.id'+
        ' AND product.category_id = category.id'+
        ' AND product.id = produtdetail.product_id';
        if(category){
            sql+= ' AND category.id ='+category+'';
        }
        if(band){
            sql+= ' AND bands.id ='+band+'';
        }
        if(name){
            sql+= ' AND product.name LIKE "%'+name+'%"';
        }
        if(priceFrom){
            sql+= ' AND product.price >= '+priceFrom+'';
        }
        if(priceTo){
            sql+= ' AND product.price <= '+priceTo+'';
        }
        if(size){
            sql+= ' AND produtdetail.sizeValue = "'+size+'"';
        }
        if(color){
            sql+= ' AND produtdetail.colorVlaue = "'+color+'"';
        }
        sql += ' GROUP BY product.id,product.name,product.imageBase64,product.price';
        console.log(sql);
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    getCategory: (req, res) => {
        let id = req.params.id;
        let sql = ' SELECT product.id,product.name,product.imageBase64,product.price FROM product , category WHERE product.category_id = category.id AND category.id = ?';
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    getSize: (req, res) => {
        let id = req.params.id;
        let sql = 'SELECT produtdetail.sizeName as sizeName , produtdetail.sizeValue as sizeValue'+
        ' FROM category,product,produtdetail'+
        ' WHERE category.id = product.category_id'+
        ' AND product.id = produtdetail.product_id'+
        ' AND category.id = ?'+
        ' GROUP BY produtdetail.sizeValue , produtdetail.sizeName';
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    getColor: (req, res) => {
        let id = req.params.id;
        let sql = 'SELECT produtdetail.colorName as colorName , produtdetail.colorVlaue as colorVlaue'+
        ' FROM category,product,produtdetail'+
        ' WHERE category.id = product.category_id'+
        ' AND product.id = produtdetail.product_id'+
        ' AND category.id = ?'+
        ' GROUP BY produtdetail.colorVlaue , produtdetail.colorName';
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    getFrom: (req, res) => {
        let id = req.params.id;
        let sql = 'SELECT produtdetail.fromName as fromName , produtdetail.fromValue as fromValue'+
        ' FROM category,product,produtdetail'+
        ' WHERE category.id = product.category_id'+
        ' AND product.id = produtdetail.product_id'+
        ' AND category.id = ?'+
        ' GROUP BY produtdetail.fromName , produtdetail.fromValue';
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
}