'use strict';

var StringMask = require('string-mask');
var BrV = require('br-validations');
var maskFactory = require('mask-factory');

var cpfPattern = new StringMask('000.000.000-00');

module.exports = {
	directive: maskFactory({
		clearValue: function (rawValue) {
			return rawValue.replace(/[^\d]/g, '').slice(0, 11);
		},
		format: function (cleanValue) {
			return format(cleanValue);
		},
		validations: {
			cpf: function (value) {
				return BrV.cpf.validate(value);
			}
		}
	}),
	filter: CpfFilter
}

function format(value) {
	return (cpfPattern.apply(value) || '').trim().replace(/[^0-9]$/, '');
}

function CpfFilter($filter) {
	return function (input) {
		return format(input);
	};
}
CpfFilter.$inject = ['$filter'];