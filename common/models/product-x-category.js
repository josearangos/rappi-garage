"use strict";

module.exports = function(Productxcategory) {
  Productxcategory.addCategoriesProduct = function(
    product_id,
    categories,
    callback
  ) {
    const end = categories[categories.length - 1];
    // selecciono el valor del ultimo
    categories.forEach(category_id =>
      Productxcategory.create({ product_id, category_id }, function() {
        if (category_id == end) {
          callback(null, "Insert categories succesfull");
        }
      })

      
    );
  };

  Productxcategory.remoteMethod("addCategoriesProduct", {
    http: {
      path: "/addCategories",
      verb: "post"
    },
    accepts: [
      { arg: "product_id", type: "number" },
      { arg: "categories", type: "array" }
    ],
    returns: {
      arg: "response",
      type: "string"
    }
  });
};
