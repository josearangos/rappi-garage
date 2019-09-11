"use strict";

module.exports = function(Product) {
  Product.search = function(query, skip, limit, callback) {
    const filter = {
      where: {
        or: [
          { name: { regexp: `${query}/i` } },
          { description: { regexp: `${query}/i` } }
        ]
      },
      limit: limit,
      skip: skip,
      fields: { id: true, name: true, price: true, photos: true }
    };

    if (query === undefined) {
      Product.find({ limit: limit, skip: skip }, function(_, products) {
        callback(null, products);
      });
    } else {
      Product.find(filter, function(_, products) {
        callback(null, products);
      });
    }
  };

  Product.remoteMethod("search", {
    http: {
      path: "/search",
      verb: "get"
    },
    accepts: [
      { arg: "query", type: "string" },
      { arg: "skip", type: "number" },
      { arg: "limit", type: "number" }
    ],
    returns: {
      arg: "search",
      type: "array"
    }
  });
};
