'use strict';
module.exports = function (app) {
  var productsCtrl = require('./controllers/ProductsController');
  var TrademarkCtrl = require('./controllers/TrademarksController');
  var CategoriCtrl = require('./controllers/CategoriesController');
  var RoleCtrl = require('./controllers/RoleController');
  var UserCtrl = require('./controllers/UserController');
  var AttributesCtrl = require('./controllers/AttributesController');
  var AttributesdetailCtrl = require('./controllers/AttributesdetailController');
  var ProudctattributesdetailCtrl = require('./controllers/ProudctattributesdetailController');

  var OrderCtrl = require('./controllers/OrderController');

  var SearchCtrl = require('./controllers/SearchController');
  //OrderCtrl


  app.all('*', function (req, res, next) {
    /**
     * Response settings
     * @type {Object}
     */
    var responseSettings = {
      "AccessControlAllowOrigin": req.headers.origin,
      "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
      "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
      "AccessControlAllowCredentials": true
    };

    /**
     * Headers
     */
    res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
    res.header("Access-Control-Allow-Origin", responseSettings.AccessControlAllowOrigin);
    res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
    res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }


  });

  //SearchCtrl
  app.route('/getSize/:id')
    .get(SearchCtrl.getSize)
  app.route('/getColor/:id')
    .get(SearchCtrl.getColor)
  app.route('/getFrom/:id')
    .get(SearchCtrl.getFrom)
  app.route('/getProductByCategoryId/:id')
    .get(SearchCtrl.getCategory)
  app.route('/search')
    .get(SearchCtrl.search)
  //SearchCtrl

  app.route('/order')
    .get(OrderCtrl.get)
    .post(OrderCtrl.store);


  app.route('/order/:id')
    .get(OrderCtrl.detail)
    .put(OrderCtrl.update)
    .delete(OrderCtrl.delete);



  //ProudctattributesdetailCtrl

  app.route('/proudctattributesdetail')
    .get(ProudctattributesdetailCtrl.get)
    .post(ProudctattributesdetailCtrl.store);


  app.route('/proudctattributesdetail/:id')
    .get(ProudctattributesdetailCtrl.detail)
    .put(ProudctattributesdetailCtrl.update)
    .delete(ProudctattributesdetailCtrl.delete);


  // todoList Routes
  app.route('/products')
    .get(productsCtrl.get)
    .post(productsCtrl.store);


  app.route('/products/:productId')
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);

  // TrademarkCtrl 
  app.route('/band')
    .get(TrademarkCtrl.get)
    .post(TrademarkCtrl.store);


  app.route('/band/:id')
    .get(TrademarkCtrl.detail)
    .put(TrademarkCtrl.update)
    .delete(TrademarkCtrl.delete);


  // CategoriCtrl 
  app.route('/category')
    .get(CategoriCtrl.get)
    .post(CategoriCtrl.store);


  app.route('/category/:id')
    .get(CategoriCtrl.detail)
    .put(CategoriCtrl.update)
    .delete(CategoriCtrl.delete);

  // RoleCtrl 
  app.route('/role')
    .get(RoleCtrl.get)
    .post(RoleCtrl.store);


  app.route('/role/:id')
    .get(RoleCtrl.detail)
    .put(RoleCtrl.update)
    .delete(RoleCtrl.delete);


  // UserCtrl 
  app.route('/user')
    .get(UserCtrl.get)
    .post(UserCtrl.store);


  app.route('/user/:id')
    .get(UserCtrl.detail)
    .put(UserCtrl.update)
    .delete(UserCtrl.delete);


  // AttributesCtrl 
  app.route('/attributes')
    .get(AttributesCtrl.get)
    .post(AttributesCtrl.store);


  app.route('/attributes/:id')
    .get(AttributesCtrl.detail)
    .put(AttributesCtrl.update)
    .delete(AttributesCtrl.delete);
  //AttributesdetailCtrl
  app.route('/attributesdetail')
    .get(AttributesdetailCtrl.get)
    .post(AttributesdetailCtrl.store);


  app.route('/attributesdetail/:id')
    .get(AttributesdetailCtrl.detail)
    .put(AttributesdetailCtrl.update)
    .delete(AttributesdetailCtrl.delete);
};
