'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
   
    
    search: (req, res) => {
        let id = req.params.id;
        let name = req.params.name;
        let priceFrom = req.params.priceFrom;
        let priceTo = req.params.priceTo;
        let band = req.params.band;
        let category = req.params.category;
        let size = req.params.size;
        let color = req.params.color;
        console.log(req.params);
        let sql = ' SELECT product.id,product.name,product.imageBase64,product.price'+
        ' FROM product,produtdetail,category,bands'+
        ' WHERE product.band_id = bands.id'+
        ' AND product.category_id = category.id'+
        ' AND product.id = produtdetail.product_id'+
        ' AND ('+category+' OR category.id ='+category+')'+
        ' AND ('+band+' OR bands.id ='+band+')'+
        ' AND ('+priceFrom+' OR product.price > '+priceFrom+')'+
        ' AND ('+priceTo+' OR product.price < '+priceTo+')'+
        ' AND ('+name+' OR product.name LIKE "%'+name+'%")'+
        ' AND ('+size+' OR produtdetail.sizeValue = '+size+')'+
        ' AND ('+color+' ORprodutdetail.colorVlaue = '+color+')'+
        ' GROUP BY product.id,product.name,product.imageBase64,product.price';

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