'use strict';


function PercentageFilter($filter) {
    return function (input, decimals) {
        return $filter('number')(input * 100, decimals) + '%';
    };
}
PercentageFilter.$inject = ['$filter'];

module.exports = PercentageFilter;