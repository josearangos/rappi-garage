'use strict';

module.exports = function(Product) {
  Product.search = function(query, callback) {
    const filter = {
      'where': {
        'or': [
          {'name': {'regexp': `${query}/i`}},
          {'description': {'regexp': `${query}/i`}},
        ],
      },
    };

    Product.find(filter, function(_, products) {
      callback(null, products);
    }
    );
  };

  Product.remoteMethod(
    'search', {
      http: {
        path: '/search',
        verb: 'get',
      },
      accepts: [
        {arg: 'query', type: 'string'},
      ],
      returns: {
        arg: 'search',
        type: 'array',
      },
    }
  );
};
