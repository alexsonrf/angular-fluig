'use strict';

function RequiredDirective($compile) {

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, element, attrs, ctrl) {
            if (!ctrl) {
                console.error('ngModel não informado para o elemento:', element[0]);
                return;
            }

            if (!ctrl || !attrs.fluigRequired) return;
            attrs.required = true; // force truthy in case we are on non input element

            var validator = function(value) {
                if (attrs.required && (value == '' || value === false)) {
                    ctrl.$setValidity('required', false);
                    return;
                } else {
                    ctrl.$setValidity('required', true);
                    return value;
                }
            };

            ctrl.$formatters.push(validator);
            ctrl.$parsers.unshift(validator);

            attrs.$observe('fluigRequired', function(value) {
                var label = $("label[for='" + element.attr('name') + "']");

                if (value === "true") {
                    label.addClass("required");
                } else {
                    label.removeClass("required");
                }
                validator(ctrl.$viewValue);
            });
        }
    }
}

RequiredDirective.$inject = ['$compile'];

module.exports = RequiredDirective;