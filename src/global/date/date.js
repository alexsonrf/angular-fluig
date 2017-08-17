'use strict';

function DateMaskDirective($locale, $compile, $timeout, $parse) {
    return {
        restrict: 'A',
        require: '?ngModel',
        scope: {
            showDisabled: "@",
            maxDate: "="
        },
        link: function (scope, element, attrs, ctrl) {

            if (attrs.fluigDateMask === "false") return;

            var dt = FLUIGC.calendar(element, {
                pickDate: attrs.pickDate,
                pickTime: attrs.pickTime,
                maxDate: scope.maxDate,
                minuteStepping: attrs.minuteStepping,
                sideBySide: true,
                useCurrent: false
            });

            if (scope.showDisabled) {

                element.prop('readonly', true);
                element.on('click', function () {
                    dt.show();
                })
            }

            element.on('change', function () {
                if (dt.getDate()) {
                    var date = new Date(dt.getDate());
                    if (!attrs.pickTime) {
                        date.setHours(23, 59, 59);
                    }
                    ctrl.$setViewValue(date);
                }
            });

            function formatter(value) {
                if (ctrl.$isEmpty(value)) {
                    return value;
                }
                dt.setDate(new Date(value));
                return element.val();
            }

            ctrl.$formatters.push(formatter);

            var template = $compile('<div class="input-group" ><span class="input-group-addon"><i class="fluigicon fluigicon-calendar"></i></span></div>')(scope);

            element.after(template);
            template.append(element);
        }
    }
};

DateMaskDirective.$inject = ['$locale', '$compile', '$timeout', '$parse'];

module.exports = DateMaskDirective;