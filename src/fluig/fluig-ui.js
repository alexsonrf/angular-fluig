'use strict';

var m = angular.module('angular.fluig.utils', [
        require('../helpers'),
    ])
    .directive('fluigAutocomplete', require('./autocomplete/autocomplete'))
    .directive('fluigChart', require('./chart/chart'))
    .directive('fluigHeader', require('./header/header'))
    .directive('fluigRequired', require('./required/required'))
    .directive('fluigError', require('./error/error'))
    .directive('fluigSwitch', require('./switch/switch'))
    .directive('fluigPopover', require('./popover/popover'))

module.exports = m.name;