'use strict';

function PopoverDirective($compile) {

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            
            var trigger = attrs.trigger || 'hover';
            var placement = attrs.placement || 'auto';
            var content = attrs.fluigContent || attrs.dataContent || '';

            FLUIGC.popover(element, { trigger: trigger, placement: placement, content: content });

        }
    }
}

PopoverDirective.$inject = ['$compile'];

module.exports = PopoverDirective;