'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
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