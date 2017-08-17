'use strict';

var messages = require('./messages');

function ErrorDirective($compile) {

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, ctrl) {
            if (!ctrl) {
                console.error('ngModel não informado para o elemento:', element[0]);
                return;
            }
            var watchAttr = attrs.fluigError;

            scope.$watchCollection(watchAttr, function (values) {

                var error = "";

                angular.forEach(values, function (value, key) {

                    if (value) {
                        if (messages[key]) error += messages[key] + "<br>";
                    }
                });

                element.popover('destroy');

                if (error != '') {
                    
                    element.parent().addClass("has-error");
                    FLUIGC.popover(element, {
                        html: 'true',
                        trigger: 'focus',
                        placement: 'bottom',
                        content: error
                    });
                    //element.popover('show');
                } else {
                    element.parent().removeClass("has-error");
                }

            });
        }
    }
}

ErrorDirective.$inject = ['$compile'];

module.exports = ErrorDirective;