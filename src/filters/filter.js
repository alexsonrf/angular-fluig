'use strict';

var m = angular.module('angular.filters', [
        require('../helpers'),
    ])
    .filter('pagination', require('./pagination/pagination'))

module.exports = m.name;