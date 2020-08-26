'use strict';

function SwitchDirective($compile, $timeout) {

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, ctrl) {

            if (!ctrl) {
                console.error('ngModel não informado para o elemento:', element[0]);
                return;
            }

            var template = $compile('<div style="width: 110px"></div>')(scope);

            element.after(template);
            template.append(element);

            template.hide();

            $timeout(function () {

                FLUIGC.switcher.init(element, {
                    "state": ctrl.$modelValue
                });

                if (ctrl.$modelValue == true || ctrl.$modelValue == 'true') {
                    
                    var isReadOnly = false;
                    var isDisabled = false;
                    if ($(element).attr('readonly') == 'readonly') {
                        isReadOnly = true;
                        FLUIGC.switcher.isReadOnly(element, false);
                    }
                    if ($(element).attr('disabled') == 'disabled') {
                        isDisabled = true;
                        FLUIGC.switcher.enable(element);
                    }
                    $timeout(() => {
                        FLUIGC.switcher.setTrue(element);

                        FLUIGC.switcher.isReadOnly(element, isReadOnly);

                        if (isDisabled) {
                            FLUIGC.switcher.disable(element);
                        }
                    })

                }

                FLUIGC.switcher.onChange(element, function (event, state) {
                    ctrl.$setViewValue(state);
                    ctrl.$render();

                });
                $timeout(function () {

                    template.fadeIn();
                }, 10);
            }, 10);
        }
    }
}

SwitchDirective.$inject = ['$compile', '$timeout'];

module.exports = SwitchDirective;