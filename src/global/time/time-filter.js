'use strict';

var StringMask = require('string-mask');
var timeFormat = '00:00';

var formattedValueLength = timeFormat.length;
var unformattedValueLength = timeFormat.replace(':', '').length;
var timeMask = new StringMask(timeFormat);

function TimeFilter($filter) {
    return function (input, decimals) {

        return (timeMask.apply(input) || '').replace(/[^0-9]$/, '');
    };
}
TimeFilter.$inject = ['$filter'];

module.exports = TimeFilter;