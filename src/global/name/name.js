'use strict';

function NgNameDirective($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, ctrl) {

            console.log(element.attr('name'));
            element.attr('name', attrs.ngName);
        }
    };
}

module.exports = NgNameDirective;