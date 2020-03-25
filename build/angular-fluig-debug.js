/**
 * ng-fluig
 * A list of AngularJS services, directives, filters, utilities an resources for Fluig
 * @version v1.0.3
 * @link 
 * @license MIT
 */
require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * br-validations
 * A library of validations applicable to several Brazilian data like I.E., CNPJ, CPF and others
 * @version v0.2.4
 * @link http://github.com/the-darc/br-validations
 * @license MIT
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.BrV = factory();
	}
}(this, function () {
var CNPJ = {};

CNPJ.validate = function(c) {
	var b = [6,5,4,3,2,9,8,7,6,5,4,3,2];
	c = c.replace(/[^\d]/g,'');

	var r = /^(0{14}|1{14}|2{14}|3{14}|4{14}|5{14}|6{14}|7{14}|8{14}|9{14})$/;
	if (!c || c.length !== 14 || r.test(c)) {
		return false;
	}
	c = c.split('');

	for (var i = 0, n = 0; i < 12; i++) {
		n += c[i] * b[i+1];
	}
	n = 11 - n%11;
	n = n >= 10 ? 0 : n;
	if (parseInt(c[12]) !== n)  {
		return false;
	}

	for (i = 0, n = 0; i <= 12; i++) {
		n += c[i] * b[i];
	}
	n = 11 - n%11;
	n = n >= 10 ? 0 : n;
	if (parseInt(c[13]) !== n)  {
		return false;
	}
	return true;
};


var CPF = {};

CPF.validate = function(cpf) {
	cpf = cpf.replace(/[^\d]+/g,'');
	var r = /^(0{11}|1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11})$/;
	if (!cpf || cpf.length !== 11 || r.test(cpf)) {
		return false;
	}
	function validateDigit(digit) {
		var add = 0;
		var init = digit - 9;
		for (var i = 0; i < 9; i ++) {
			add += parseInt(cpf.charAt(i + init)) * (i+1);
		}
		return (add%11)%10 === parseInt(cpf.charAt(digit));
	}
	return validateDigit(9) && validateDigit(10);
};

var IE = function(uf) {
	if (!(this instanceof IE)) {
		return new IE(uf);
	}

	this.rules = IErules[uf] || [];
	this.rule;
	IE.prototype._defineRule = function(value) {
		this.rule = undefined;
		for (var r = 0; r < this.rules.length && this.rule === undefined; r++) {
			var str = value.replace(/[^\d]/g,'');
			var ruleCandidate = this.rules[r];
			if (str.length === ruleCandidate.chars && (!ruleCandidate.match || ruleCandidate.match.test(value))) {
				this.rule = ruleCandidate;
			}
		}
		return !!this.rule;
	};

	IE.prototype.validate = function(value) {
		if (!value || !this._defineRule(value)) {
			return false;
		}
		return this.rule.validate(value);
	};
};

var IErules = {};

var algorithmSteps = {
	handleStr: {
		onlyNumbers: function(str) {
			return str.replace(/[^\d]/g,'').split('');
		},
		mgSpec: function(str) {
			var s = str.replace(/[^\d]/g,'');
			s = s.substr(0,3)+'0'+s.substr(3, s.length);
			return s.split('');
		}
	},
	sum: {
		normalSum: function(handledStr, pesos) {
			var nums = handledStr;
			var sum = 0;
			for (var i = 0; i < pesos.length; i++) {
				sum += parseInt(nums[i]) * pesos[i];
			}
			return sum;
		},
		individualSum: function(handledStr, pesos) {
			var nums = handledStr;
			var sum = 0;
			for (var i = 0; i < pesos.length; i++) {
				var mult = parseInt(nums[i]) * pesos[i];
				sum += mult%10 + parseInt(mult/10);
			}
			return sum;
		},
		apSpec: function(handledStr, pesos) {
			var sum = this.normalSum(handledStr, pesos);
			var ref = handledStr.join('');
			if (ref >= '030000010' && ref <= '030170009') {
				return sum + 5;
			}
			if (ref >= '030170010' && ref <= '030190229') {
				return sum + 9;
			}
			return sum;
		}
	},
	rest: {
		mod11: function(sum) {
			return sum%11;
		},
		mod10: function(sum) {
			return sum%10;
		},
		mod9: function(sum) {
			return sum%9;
		}
	},
	expectedDV: {
		minusRestOf11: function(rest) {
			return rest < 2 ? 0 : 11 - rest;
		},
		minusRestOf11v2: function(rest) {
			return rest < 2 ? 11 - rest - 10 : 11 - rest;
		},
		minusRestOf10: function(rest) {
			return rest < 1 ? 0 : 10 - rest;
		},
		mod10: function(rest) {
			return rest%10;
		},
		goSpec: function(rest, handledStr) {
			var ref = handledStr.join('');
			if (rest === 1) {
				return ref >= '101031050' && ref <= '101199979' ? 1 : 0;
			}
			return rest === 0 ? 0 : 11 - rest;
		},
		apSpec: function(rest, handledStr) {
			var ref = handledStr.join('');
			if (rest === 0) {
				return ref >= '030170010' && ref <= '030190229' ? 1 : 0;
			}
			return rest === 1 ? 0 : 11 - rest;
		},
		voidFn: function(rest) {
			return rest;
		}
	}
};


/**
 * options {
 *     pesos: Array of values used to operate in sum step
 *     dvPos: Position of the DV to validate considering the handledStr
 *     algorithmSteps: The four DV's validation algorithm steps names
 * }
 */
function validateDV(value, options) {
	var steps = options.algorithmSteps;

	// Step 01: Handle String
	var handledStr = algorithmSteps.handleStr[steps[0]](value);

	// Step 02: Sum chars
	var sum = algorithmSteps.sum[steps[1]](handledStr, options.pesos);

	// Step 03: Rest calculation
	var rest = algorithmSteps.rest[steps[2]](sum);

	// Fixed Step: Get current DV
	var currentDV = parseInt(handledStr[options.dvpos]);

	// Step 04: Expected DV calculation
	var expectedDV = algorithmSteps.expectedDV[steps[3]](rest, handledStr);

	// Fixed step: DV verification
	return currentDV === expectedDV;
}

function validateIE(value, rule) {
	if (rule.match && !rule.match.test(value)) {
		return false;
	}
	for (var i = 0; i < rule.dvs.length; i++) {
		// console.log('>> >> dv'+i);
		if (!validateDV(value, rule.dvs[i])) {
			return false;
		}
	}
	return true;
}

IErules.PE = [{
	//mask: new StringMask('0000000-00'),
	chars: 9,
	dvs: [{
		dvpos: 7,
		pesos: [8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	},{
		dvpos: 8,
		pesos: [9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
},{
	// mask: new StringMask('00.0.000.0000000-0'),
	chars: 14,
	pesos: [[1,2,3,4,5,9,8,7,6,5,4,3,2]],
	dvs: [{
		dvpos: 13,
		pesos: [5,4,3,2,1,9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11v2']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.RS = [{
	// mask: new StringMask('000/0000000'),
	chars: 10,
	dvs: [{
		dvpos: 9,
		pesos: [2,9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.AC = [{
	// mask: new StringMask('00.000.000/000-00'),
	chars: 13,
	match: /^01/,
	dvs: [{
		dvpos: 11,
		pesos: [4,3,2,9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	},{
		dvpos: 12,
		pesos: [5,4,3,2,9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.MG = [{
	// mask: new StringMask('000.000.000/0000'),
	chars: 13,
	dvs: [{
		dvpos: 12,
		pesos: [1,2,1,2,1,2,1,2,1,2,1,2],
		algorithmSteps: ['mgSpec', 'individualSum', 'mod10', 'minusRestOf10']
	},{
		dvpos: 12,
		pesos: [3,2,11,10,9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.SP = [{
	// mask: new StringMask('000.000.000.000'),
	chars: 12,
	match: /^[0-9]/,
	dvs: [{
		dvpos: 8,
		pesos: [1,3,4,5,6,7,8,10],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'mod10']
	},{
		dvpos: 11,
		pesos: [3,2,10,9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'mod10']
	}],
	validate: function(value) { return validateIE(value, this); }
},{
	// mask: new StringMask('P-00000000.0/000')
	chars: 12,
	match: /^P/i,
	dvs: [{
		dvpos: 8,
		pesos: [1,3,4,5,6,7,8,10],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'mod10']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.DF = [{
	// mask: new StringMask('00000000000-00'),
	chars: 13,
	dvs: [{
		dvpos: 11,
		pesos: [4,3,2,9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	},{
		dvpos: 12,
		pesos: [5,4,3,2,9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.ES = [{
	// mask: new StringMask('000.000.00-0')
	chars: 9,
	dvs: [{
		dvpos: 8,
		pesos: [9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.BA = [{
	// mask: new StringMask('000000-00')
	chars: 8,
	match: /^[0123458]/,
	dvs: [{
		dvpos: 7,
		pesos: [7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod10', 'minusRestOf10']
	},{
		dvpos: 6,
		pesos: [8,7,6,5,4,3,0,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod10', 'minusRestOf10']
	}],
	validate: function(value) { return validateIE(value, this); }
},{
	chars: 8,
	match: /^[679]/,
	dvs: [{
		dvpos: 7,
		pesos: [7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	},{
		dvpos: 6,
		pesos: [8,7,6,5,4,3,0,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
},{
	// mask: new StringMask('0000000-00')
	chars: 9,
	match: /^[0-9][0123458]/,
	dvs: [{
		dvpos: 8,
		pesos: [8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod10', 'minusRestOf10']
	},{
		dvpos: 7,
		pesos: [9,8,7,6,5,4,3,0,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod10', 'minusRestOf10']
	}],
	validate: function(value) { return validateIE(value, this); }
},{
	chars: 9,
	match: /^[0-9][679]/,
	dvs: [{
		dvpos: 8,
		pesos: [8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	},{
		dvpos: 7,
		pesos: [9,8,7,6,5,4,3,0,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.AM = [{
	//mask: new StringMask('00.000.000-0')
	chars: 9,
	dvs: [{
		dvpos: 8,
		pesos: [9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.RN = [{
	// {mask: new StringMask('00.000.000-0')
	chars: 9,
	match: /^20/,
	dvs: [{
		dvpos: 8,
		pesos: [9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
},{
	// {mask: new StringMask('00.0.000.000-0'), chars: 10}
	chars: 10,
	match: /^20/,
	dvs: [{
		dvpos: 8,
		pesos: [10,9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.RO = [{
	// mask: new StringMask('0000000000000-0')
	chars: 14,
	dvs: [{
		dvpos: 13,
		pesos: [6,5,4,3,2,9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.PR = [{
	// mask: new StringMask('00000000-00')
	chars: 10,
	dvs: [{
		dvpos: 8,
		pesos: [3,2,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	},{
		dvpos: 9,
		pesos: [4,3,2,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.SC = [{
	// {mask: new StringMask('000.000.000'), uf: 'SANTA CATARINA'}
	chars: 9,
	dvs: [{
		dvpos: 8,
		pesos: [9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.RJ = [{
	// {mask: new StringMask('00.000.00-0'), uf: 'RIO DE JANEIRO'}
	chars: 8,
	dvs: [{
		dvpos: 7,
		pesos: [2,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.PA = [{
	// {mask: new StringMask('00-000000-0')
	chars: 9,
	match: /^15/,
	dvs: [{
		dvpos: 8,
		pesos: [9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.SE = [{
	// {mask: new StringMask('00000000-0')
	chars: 9,
	dvs: [{
		dvpos: 8,
		pesos: [9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.PB = [{
	// {mask: new StringMask('00000000-0')
	chars: 9,
	dvs: [{
		dvpos: 8,
		pesos: [9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.CE = [{
	// {mask: new StringMask('00000000-0')
	chars: 9,
	dvs: [{
		dvpos: 8,
		pesos: [9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.PI = [{
	// {mask: new StringMask('000000000')
	chars: 9,
	dvs: [{
		dvpos: 8,
		pesos: [9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.MA = [{
	// {mask: new StringMask('000000000')
	chars: 9,
	match: /^12/,
	dvs: [{
		dvpos: 8,
		pesos: [9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.MT = [{
	// {mask: new StringMask('0000000000-0')
	chars: 11,
	dvs: [{
		dvpos: 10,
		pesos: [3,2,9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.MS = [{
	// {mask: new StringMask('000000000')
	chars: 9,
	match: /^28/,
	dvs: [{
		dvpos: 8,
		pesos: [9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.TO = [{
	// {mask: new StringMask('00000000000'),
	chars: 11,
	match: /^[0-9]{2}((0[123])|(99))/,
	dvs: [{
		dvpos: 10,
		pesos: [9,8,0,0,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.AL = [{
	// {mask: new StringMask('000000000')
	chars: 9,
	match: /^24[03578]/,
	dvs: [{
		dvpos: 8,
		pesos: [9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'minusRestOf11']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.RR = [{
	// {mask: new StringMask('00000000-0')
	chars: 9,
	match: /^24/,
	dvs: [{
		dvpos: 8,
		pesos: [1,2,3,4,5,6,7,8],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod9', 'voidFn']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.GO = [{
	// {mask: new StringMask('00.000.000-0')
	chars: 9,
	match: /^1[015]/,
	dvs: [{
		dvpos: 8,
		pesos: [9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'normalSum', 'mod11', 'goSpec']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

IErules.AP = [{
	// {mask: new StringMask('000000000')
	chars: 9,
	match: /^03/,
	dvs: [{
		dvpos: 8,
		pesos: [9,8,7,6,5,4,3,2],
		algorithmSteps: ['onlyNumbers', 'apSpec', 'mod11', 'apSpec']
	}],
	validate: function(value) { return validateIE(value, this); }
}];

	return {
		ie: IE,
		cpf: CPF,
		cnpj: CNPJ
	};
}));
},{}],2:[function(require,module,exports){
(function(root, factory) {
    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.StringMask = factory();
    }
}(this, function() {
    var tokens = {
        '0': {pattern: /\d/, _default: '0'},
        '9': {pattern: /\d/, optional: true},
        '#': {pattern: /\d/, optional: true, recursive: true},
        'A': {pattern: /[a-zA-Z0-9]/},
        'S': {pattern: /[a-zA-Z]/},
        'U': {pattern: /[a-zA-Z]/, transform: function(c) { return c.toLocaleUpperCase(); }},
        'L': {pattern: /[a-zA-Z]/, transform: function(c) { return c.toLocaleLowerCase(); }},
        '$': {escape: true}
    };

    function isEscaped(pattern, pos) {
        var count = 0;
        var i = pos - 1;
        var token = {escape: true};
        while (i >= 0 && token && token.escape) {
            token = tokens[pattern.charAt(i)];
            count += token && token.escape ? 1 : 0;
            i--;
        }
        return count > 0 && count % 2 === 1;
    }

    function calcOptionalNumbersToUse(pattern, value) {
        var numbersInP = pattern.replace(/[^0]/g,'').length;
        var numbersInV = value.replace(/[^\d]/g,'').length;
        return numbersInV - numbersInP;
    }

    function concatChar(text, character, options, token) {
        if (token && typeof token.transform === 'function') {
            character = token.transform(character);
        }
        if (options.reverse) {
            return character + text;
        }
        return text + character;
    }

    function hasMoreTokens(pattern, pos, inc) {
        var pc = pattern.charAt(pos);
        var token = tokens[pc];
        if (pc === '') {
            return false;
        }
        return token && !token.escape ? true : hasMoreTokens(pattern, pos + inc, inc);
    }

    function hasMoreRecursiveTokens(pattern, pos, inc) {
        var pc = pattern.charAt(pos);
        var token = tokens[pc];
        if (pc === '') {
            return false;
        }
        return token && token.recursive ? true : hasMoreRecursiveTokens(pattern, pos + inc, inc);
    }

    function insertChar(text, char, position) {
        var t = text.split('');
        t.splice(position, 0, char);
        return t.join('');
    }

    function StringMask(pattern, opt) {
        this.options = opt || {};
        this.options = {
            reverse: this.options.reverse || false,
            usedefaults: this.options.usedefaults || this.options.reverse
        };
        this.pattern = pattern;
    }

    StringMask.prototype.process = function proccess(value) {
        if (!value) {
            return {result: '', valid: false};
        }
        value = value + '';
        var pattern2 = this.pattern;
        var valid = true;
        var formatted = '';
        var valuePos = this.options.reverse ? value.length - 1 : 0;
        var patternPos = 0;
        var optionalNumbersToUse = calcOptionalNumbersToUse(pattern2, value);
        var escapeNext = false;
        var recursive = [];
        var inRecursiveMode = false;

        var steps = {
            start: this.options.reverse ? pattern2.length - 1 : 0,
            end: this.options.reverse ? -1 : pattern2.length,
            inc: this.options.reverse ? -1 : 1
        };

        function continueCondition(options) {
            if (!inRecursiveMode && !recursive.length && hasMoreTokens(pattern2, patternPos, steps.inc)) {
                // continue in the normal iteration
                return true;
            } else if (!inRecursiveMode && recursive.length &&
                hasMoreRecursiveTokens(pattern2, patternPos, steps.inc)) {
                // continue looking for the recursive tokens
                // Note: all chars in the patterns after the recursive portion will be handled as static string
                return true;
            } else if (!inRecursiveMode) {
                // start to handle the recursive portion of the pattern
                inRecursiveMode = recursive.length > 0;
            }

            if (inRecursiveMode) {
                var pc = recursive.shift();
                recursive.push(pc);
                if (options.reverse && valuePos >= 0) {
                    patternPos++;
                    pattern2 = insertChar(pattern2, pc, patternPos);
                    return true;
                } else if (!options.reverse && valuePos < value.length) {
                    pattern2 = insertChar(pattern2, pc, patternPos);
                    return true;
                }
            }
            return patternPos < pattern2.length && patternPos >= 0;
        }

        /**
         * Iterate over the pattern's chars parsing/matching the input value chars
         * until the end of the pattern. If the pattern ends with recursive chars
         * the iteration will continue until the end of the input value.
         *
         * Note: The iteration must stop if an invalid char is found.
         */
        for (patternPos = steps.start; continueCondition(this.options); patternPos = patternPos + steps.inc) {
            // Value char
            var vc = value.charAt(valuePos);
            // Pattern char to match with the value char
            var pc = pattern2.charAt(patternPos);

            var token = tokens[pc];
            if (recursive.length && token && !token.recursive) {
                // In the recursive portion of the pattern: tokens not recursive must be seen as static chars
                token = null;
            }

            // 1. Handle escape tokens in pattern
            // go to next iteration: if the pattern char is a escape char or was escaped
            if (!inRecursiveMode || vc) {
                if (this.options.reverse && isEscaped(pattern2, patternPos)) {
                    // pattern char is escaped, just add it and move on
                    formatted = concatChar(formatted, pc, this.options, token);
                    // skip escape token
                    patternPos = patternPos + steps.inc;
                    continue;
                } else if (!this.options.reverse && escapeNext) {
                    // pattern char is escaped, just add it and move on
                    formatted = concatChar(formatted, pc, this.options, token);
                    escapeNext = false;
                    continue;
                } else if (!this.options.reverse && token && token.escape) {
                    // mark to escape the next pattern char
                    escapeNext = true;
                    continue;
                }
            }

            // 2. Handle recursive tokens in pattern
            // go to next iteration: if the value str is finished or
            //                       if there is a normal token in the recursive portion of the pattern
            if (!inRecursiveMode && token && token.recursive) {
                // save it to repeat in the end of the pattern and handle the value char now
                recursive.push(pc);
            } else if (inRecursiveMode && !vc) {
                // in recursive mode but value is finished. Add the pattern char if it is not a recursive token
                formatted = concatChar(formatted, pc, this.options, token);
                continue;
            } else if (!inRecursiveMode && recursive.length > 0 && !vc) {
                // recursiveMode not started but already in the recursive portion of the pattern
                continue;
            }

            // 3. Handle the value
            // break iterations: if value is invalid for the given pattern
            if (!token) {
                // add char of the pattern
                formatted = concatChar(formatted, pc, this.options, token);
                if (!inRecursiveMode && recursive.length) {
                    // save it to repeat in the end of the pattern
                    recursive.push(pc);
                }
            } else if (token.optional) {
                // if token is optional, only add the value char if it matchs the token pattern
                //                       if not, move on to the next pattern char
                if (token.pattern.test(vc) && optionalNumbersToUse) {
                    formatted = concatChar(formatted, vc, this.options, token);
                    valuePos = valuePos + steps.inc;
                    optionalNumbersToUse--;
                } else if (recursive.length > 0 && vc) {
                    valid = false;
                    break;
                }
            } else if (token.pattern.test(vc)) {
                // if token isn't optional the value char must match the token pattern
                formatted = concatChar(formatted, vc, this.options, token);
                valuePos = valuePos + steps.inc;
            } else if (!vc && token._default && this.options.usedefaults) {
                // if the token isn't optional and has a default value, use it if the value is finished
                formatted = concatChar(formatted, token._default, this.options, token);
            } else {
                // the string value don't match the given pattern
                valid = false;
                break;
            }
        }

        return {result: formatted, valid: valid};
    };

    StringMask.prototype.apply = function(value) {
        return this.process(value).result;
    };

    StringMask.prototype.validate = function(value) {
        return this.process(value).valid;
    };

    StringMask.process = function(value, pattern, options) {
        return new StringMask(pattern, options).process(value);
    };

    StringMask.apply = function(value, pattern, options) {
        return new StringMask(pattern, options).apply(value);
    };

    StringMask.validate = function(value, pattern, options) {
        return new StringMask(pattern, options).validate(value);
    };

    return StringMask;
}));

},{}],3:[function(require,module,exports){
'use strict';

module.exports = angular.module('angular.fluig', [
    require('./global/global-masks'),
    require('./br/br-masks'),
    require('./fluig/fluig-ui'),
    require('./filters/filter')
]).name;
},{"./br/br-masks":5,"./filters/filter":14,"./fluig/fluig-ui":19,"./global/global-masks":27}],4:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');
var maskFactory = require('mask-factory');

var boletoBancarioMask = new StringMask('00000.00000 00000.000000 00000.000000 0 00000000000000');

module.exports = {
	directive: maskFactory({
		clearValue: function (rawValue) {
			return rawValue.replace(/[^0-9]/g, '').slice(0, 47);
		},
		format: function (cleanValue) {
			return format(cleanValue);
		},
		validations: {
			boletoBancario: function (value) {
				return value.length === 47;
			}
		}
	}),
	filter: BoletoBancarioFilter
}

function format (value) {
	if (!value || value.length === 0) {
		return value;
	}

	return boletoBancarioMask.apply(value).replace(/[^0-9]$/, '');
}

function BoletoBancarioFilter($filter) {
	return function (input) {
		return format(input);
	};
}
BoletoBancarioFilter.$inject = ['$filter'];
},{"mask-factory":"mask-factory","string-mask":2}],5:[function(require,module,exports){
'use strict';

var m = angular.module('fluig.masks.br', [
        require('../helpers'),
    ])
    .directive('fluigBoletoBancarioMask', require('./boleto-bancario/boleto-bancario').directive)
    .filter('boletoBancario', require('./boleto-bancario/boleto-bancario').filter)

    .directive('fluigCepMask', require('./cep/cep').directive)
    .filter('cep', require('./cep/cep').filter)

    .directive('fluigCnpjMask', require('./cnpj/cnpj').directive)
    .filter('cnpj', require('./cnpj/cnpj').filter)

    .directive('fluigCpfMask', require('./cpf/cpf').directive)
    .filter('cpf', require('./cpf/cpf').filter)

    .directive('fluigCpfCnpjMask', require('./cpf-cnpj/cpf-cnpj').directive)
    .filter('cpfCnpj', require('./cpf-cnpj/cpf-cnpj').filter)

    .directive('fluigIeMask', require('./inscricao-estadual/ie'))

    .directive('fluigNfeMask', require('./nfe/nfe').directive)
    .filter('nfe', require('./nfe/nfe').filter)

    .directive('fluigCarPlateMask', require('./car-plate/car-plate').directive)
    .filter('carPlate', require('./car-plate/car-plate').filter)

    .directive('fluigBrPhoneMask', require('./phone/br-phone').directive)
    .filter('brPhone', require('./phone/br-phone').filter)

    
    
    

module.exports = m.name;
},{"../helpers":36,"./boleto-bancario/boleto-bancario":4,"./car-plate/car-plate":6,"./cep/cep":7,"./cnpj/cnpj":8,"./cpf-cnpj/cpf-cnpj":9,"./cpf/cpf":10,"./inscricao-estadual/ie":11,"./nfe/nfe":12,"./phone/br-phone":13}],6:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');
var maskFactory = require('mask-factory');

var carPlateMask = new StringMask('UUU-0000');

module.exports = {
	directive: maskFactory({
		clearValue: function (rawValue) {
			return rawValue.replace(/[^a-zA-Z0-9]/g, '').slice(0, 7);
		},
		format: function (cleanValue) {
			return format(cleanValue);
		},
		validations: {
			carPlate: function (value) {
				return value.length === 7;
			}
		}
	}),
	filter: CarPlateFilter
}

function format(value) {
	return (carPlateMask.apply(value) || '').replace(/[^a-zA-Z0-9]$/, '');
}

function CarPlateFilter($filter) {
	return function (input) {
		return format(input);
	};
}

CarPlateFilter.$inject = ['$filter'];
},{"mask-factory":"mask-factory","string-mask":2}],7:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');
var maskFactory = require('mask-factory');

var cepMask = new StringMask('00000-000');

module.exports = {
	directive: maskFactory({
		clearValue: function (rawValue) {
			return rawValue.toString().replace(/[^0-9]/g, '').slice(0, 8);
		},
		format: function (cleanValue) {
			return format(cleanValue);
		},
		validations: {
			cep: function (value) {
				return value.length === 8;
			}
		}
	}),
	filter: CepFilter	
};

function format (value) {
	return (cepMask.apply(value) || '').replace(/[^0-9]$/, '');
}

function CepFilter($filter) {
    return function (input) {
        return format(input);
    };
}
CepFilter.$inject = ['$filter'];
},{"mask-factory":"mask-factory","string-mask":2}],8:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');
var BrV = require('br-validations');
var maskFactory = require('mask-factory');

var cnpjPattern = new StringMask('00.000.000\/0000-00');

module.exports = {
	directive: maskFactory({
		clearValue: function (rawValue) {
			return String(rawValue).replace(/[^\d]/g, '').slice(0, 14);
		},
		format: function (cleanValue) {
			return format(cleanValue);
		},
		validations: {
			cnpj: function (value) {
				return BrV.cnpj.validate(String(value));
			}
		}
	}),
	filter: CnpjFilter
}

function format(value) {
	return (cnpjPattern.apply(value) || '').trim().replace(/[^0-9]$/, '');
}

function CnpjFilter($filter) {
	return function (input) {
		return format(input);
	};
}
CnpjFilter.$inject = ['$filter'];
},{"br-validations":1,"mask-factory":"mask-factory","string-mask":2}],9:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');
var BrV = require('br-validations');
var maskFactory = require('mask-factory');

var cnpjPattern = new StringMask('00.000.000\/0000-00');
var cpfPattern = new StringMask('000.000.000-00');

module.exports = {
	directive: maskFactory({
		clearValue: function (rawValue) {
			return String(rawValue).replace(/[^\d]/g, '').slice(0, 14);
		},
		format: function (cleanValue) {
			return format(cleanValue);
		},
		validations: {
			cpf: function (value) {
				return value.length > 11 || BrV.cpf.validate(String(value));
			},
			cnpj: function (value) {
				return value.length <= 11 || BrV.cnpj.validate(String(value));
			}
		}
	}),
	filter: CpfCnpjFilter
}

function format(value) {

	if (!value) return value;
	var formatedValue;

	if (value.length > 11) {
		formatedValue = cnpjPattern.apply(value);
	} else {
		formatedValue = cpfPattern.apply(value) || '';
	}

	return formatedValue.trim().replace(/[^0-9]$/, '');
}

function CpfCnpjFilter($filter) {
	return function (input) {
		return format(input);
	};
}
CpfCnpjFilter.$inject = ['$filter'];
},{"br-validations":1,"mask-factory":"mask-factory","string-mask":2}],10:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');
var BrV = require('br-validations');
var maskFactory = require('mask-factory');

var cpfPattern = new StringMask('000.000.000-00');

module.exports = {
	directive: maskFactory({
		clearValue: function (rawValue) {
			return String(rawValue).replace(/[^\d]/g, '').slice(0, 11);
		},
		format: function (cleanValue) {
			return format(String(cleanValue));
		},
		validations: {
			cpf: function (value) {
				return BrV.cpf.validate(String(value));
			}
		}
	}),
	filter: CpfFilter
}

function format(value) {
	return (cpfPattern.apply(String(value)) || '').trim().replace(/[^0-9]$/, '');
}

function CpfFilter($filter) {
	return function (input) {
		return format(input);
	};
}
CpfFilter.$inject = ['$filter'];
},{"br-validations":1,"mask-factory":"mask-factory","string-mask":2}],11:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');
var BrV = require('br-validations');

function FluigIeMaskDirective($parse) {
	var ieMasks = {
		'AC': [{mask: new StringMask('00.000.000/000-00')}],
		'AL': [{mask: new StringMask('000000000')}],
		'AM': [{mask: new StringMask('00.000.000-0')}],
		'AP': [{mask: new StringMask('000000000')}],
		'BA': [{chars: 8, mask: new StringMask('000000-00')},
			{mask: new StringMask('0000000-00')}],
		'CE': [{mask: new StringMask('00000000-0')}],
		'DF': [{mask: new StringMask('00000000000-00')}],
		'ES': [{mask: new StringMask('00000000-0')}],
		'GO': [{mask: new StringMask('00.000.000-0')}],
		'MA': [{mask: new StringMask('000000000')}],
		'MG': [{mask: new StringMask('000.000.000/0000')}],
		'MS': [{mask: new StringMask('000000000')}],
		'MT': [{mask: new StringMask('0000000000-0')}],
		'PA': [{mask: new StringMask('00-000000-0')}],
		'PB': [{mask: new StringMask('00000000-0')}],
		'PE': [{chars: 9, mask: new StringMask('0000000-00')},
			{mask: new StringMask('00.0.000.0000000-0')}],
		'PI': [{mask: new StringMask('000000000')}],
		'PR': [{mask: new StringMask('000.00000-00')}],
		'RJ': [{mask: new StringMask('00.000.00-0')}],
		'RN': [{chars: 9, mask: new StringMask('00.000.000-0')},
			{mask: new StringMask('00.0.000.000-0')}],
		'RO': [{mask: new StringMask('0000000000000-0')}],
		'RR': [{mask: new StringMask('00000000-0')}],
		'RS': [{mask: new StringMask('000/0000000')}],
		'SC': [{mask: new StringMask('000.000.000')}],
		'SE': [{mask: new StringMask('00000000-0')}],
		'SP': [{mask: new StringMask('000.000.000.000')},
			{mask: new StringMask('-00000000.0/000')}],
		'TO': [{mask: new StringMask('00000000000')}]
	};

	function clearValue(value) {
		if (!value) {
			return value;
		}

		return value.replace(/[^0-9]/g, '');
	}

	function getMask(uf, value) {
		if (!uf || !ieMasks[uf]) {
			return;
		}

		if (uf === 'SP' && /^P/i.test(value)) {
			return ieMasks.SP[1].mask;
		}

		var masks = ieMasks[uf];
		var i = 0;
		while (masks[i].chars && masks[i].chars < clearValue(value).length && i < masks.length - 1) {
			i++;
		}

		return masks[i].mask;
	}

	function applyIEMask(value, uf) {
		var mask = getMask(uf, value);

		if (!mask) {
			return value;
		}

		var processed = mask.process(clearValue(value));
		var formatedValue = processed.result || '';
		formatedValue = formatedValue.trim().replace(/[^0-9]$/, '');

		if (uf === 'SP' && /^p/i.test(value)) {
			return 'P' + formatedValue;
		}

		return formatedValue;
	}

	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl) {
			var state = ($parse(attrs.fluigIeMask)(scope) || '').toUpperCase();

			function formatter(value) {
				if (ctrl.$isEmpty(value)) {
					return value;
				}

				return applyIEMask(value, state);
			}

			function parser(value) {
				if (ctrl.$isEmpty(value)) {
					return value;
				}

				var formatedValue = applyIEMask(value, state);
				var actualValue = clearValue(formatedValue);

				if (ctrl.$viewValue !== formatedValue) {
					ctrl.$setViewValue(formatedValue);
					ctrl.$render();
				}

				if (state && state.toUpperCase() === 'SP' && /^p/i.test(value)) {
					return 'P' + actualValue;
				}

				return actualValue;
			}

			ctrl.$formatters.push(formatter);
			ctrl.$parsers.push(parser);

			ctrl.$validators.ie = function validator(modelValue) {
				return ctrl.$isEmpty(modelValue) || BrV.ie(state).validate(modelValue);
			};

			scope.$watch(attrs.fluigIeMask, function(newState) {
				state = (newState || '').toUpperCase();

				parser(ctrl.$viewValue);
				ctrl.$validate();
			});
		}
	};
}
FluigIeMaskDirective.$inject = ['$parse'];

module.exports = FluigIeMaskDirective;

},{"br-validations":1,"string-mask":2}],12:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');
var maskFactory = require('mask-factory');

var nfeAccessKeyMask = new StringMask('0000 0000 0000 0000 0000' +
	' 0000 0000 0000 0000 0000 0000');

module.exports = {
	directive: maskFactory({
		clearValue: function (rawValue) {
			return rawValue.replace(/[^0-9]/g, '').slice(0, 44);
		},
		format: function (cleanValue) {
			return format(cleanValue);
		},
		validations: {
			nfeAccessKey: function (value) {
				return value.length === 44;
			}
		}
	}),
	filter: NfeFilter
}

function format(value) {
	return (nfeAccessKeyMask.apply(value) || '').replace(/[^0-9]$/, '');
}

function NfeFilter($filter) {
	return function (input) {
		return format(input);
	};
}
NfeFilter.$inject = ['$filter'];
},{"mask-factory":"mask-factory","string-mask":2}],13:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');
var maskFactory = require('mask-factory');

/**
 * FIXME: all numbers will have 9 digits after 2016.
 * see http://portal.embratel.com.br/embratel/9-digito/
 */
var phoneMask8D = new StringMask('(00) 0000-0000'),
	phoneMask9D = new StringMask('(00) 00000-0000'),
	phoneMask8DSemDDD = new StringMask('0000-0000'),
	phoneMask9DSemDDD = new StringMask('00000-0000'),
	phoneMask0800 = new StringMask('0000-000-0000');

module.exports = {
	directive: maskFactory({
		clearValue: function (rawValue) {
			return rawValue.toString().replace(/[^0-9]/g, '').slice(0, 11);
		},
		format: function (cleanValue) {
			return format(cleanValue)
		},
		getModelValue: function (formattedValue, originalModelType) {
			var cleanValue = this.clearValue(formattedValue);

			return originalModelType === 'number' ? parseInt(cleanValue) : cleanValue;
		},
		validations: {
			phoneNumber: function (value) {
				var valueLength = value && value.toString().length;
				return valueLength === 8 || valueLength === 9 || valueLength === 10 || valueLength === 11;
			}
		}
	}),
	filter: BrPhoneFilter
}

function format(value) {

	if (!value) return "";

	var formatedValue;
	if (value.indexOf('0800') === 0) {
		formatedValue = phoneMask0800.apply(value);
	} else if (value.length < 9) {
		formatedValue = phoneMask8DSemDDD.apply(value) || '';
	} else if (value.length < 10) {
		formatedValue = phoneMask9DSemDDD.apply(value) || '';
	} else if (value.length < 11) {
		formatedValue = phoneMask8D.apply(value) || '';
	} else {
		formatedValue = phoneMask9D.apply(value);
	}

	return formatedValue.trim().replace(/[^0-9]$/, '');
}

function BrPhoneFilter($filter) {
	return function (input) {
		return format(input);
	};
}
BrPhoneFilter.$inject = ['$filter'];
},{"mask-factory":"mask-factory","string-mask":2}],14:[function(require,module,exports){
'use strict';

var m = angular.module('angular.filters', [
        require('../helpers'),
    ])
    .filter('pagination', require('./pagination/pagination'))

module.exports = m.name;
},{"../helpers":36,"./pagination/pagination":15}],15:[function(require,module,exports){
'use strict';

function PaginationFilter() {
    return function(input, start) {
        start = +start;

        if (!input) return 0;
        return input.slice(start);
    };
};


module.exports = PaginationFilter;
},{}],16:[function(require,module,exports){
'use strict';

function AutocompleteDirective($locale, $window, $timeout, $compile) {

    return {
        restrict: 'A',
        require: '?ngModel',
        scope: {
            dataset: "@",
            fluigAutocompleteLimit: "@",
            fluigAutocompleteType: "@",
            minLength: "@",
            filterFields: "=",
            resultFields: "=",
            displayKey: "@",
            searchTimeout: "@",
            values: "=",
            acSelected: "&"
        },
        link: function (scope, element, attrs, ctrl) {

            var fluigAutocomplete = attrs.fluigAutocomplete;

            if (fluigAutocomplete == 'false') return;

            if (!ctrl) {
                console.error('ngModel não informado para o elemento:', element[0]);
                return;
            }

            scope.displayKey = scope.displayKey || 'name';
            scope.fluigAutocompleteLimit = scope.fluigAutocompleteLimit || 100;
            scope.fluigAutocompleteType = scope.fluigAutocompleteType || 'autocomplete';
            scope.minLength = Number(attrs.minLength) || 0;
            scope.searchTimeout = attrs.searchTimeout || 500;

            element.on('focus', function () {

                if (!$window.getSelection().toString()) {
                    this.setSelectionRange(0, this.value.length)
                }
            });

            scope.$watch('filterFields', function (val, oldval) {

                if ((oldval || val) && val != oldval) {

                    //createAutocomplete();
                }
            });

            scope.$watch('resultFields', function (val, oldval) {

                if ((oldval || val) && val != oldval) {
                    //createAutocomplete();
                }

            });

            scope.$watch('values', function (val, oldval) {

                if ((oldval || val) && val != oldval) {
                    createAutocomplete();
                }

            })

            scope.$watch('dataset', function (val, oldval) {

                if ((oldval || val) && val != oldval) {
                    createAutocomplete();
                }

            })

            createAutocomplete()


            function loadData(arr) {

                return function (txt, fnc) {
                    var result, f, filter;
                    result = [],
                        filter = new RegExp((txt.normalize ? txt.normalize("NFD") : txt).replace(/[\u0300-\u036f]/g, ""), "i"),
                        $.each(arr,
                            function (arr, obj) {
                                var obj2;

                                if (scope.resultFields) {
                                    obj2 = {};
                                    scope.resultFields.forEach(function (f) {
                                        obj2[f] = obj[f];
                                    })
                                } else {
                                    obj2 = obj;
                                }

                                ((scope.displayKey && filter.test((obj2[scope.displayKey].normalize ? obj2[scope.displayKey].normalize("NFD") : obj2[scope.displayKey]).replace(/[\u0300-\u036f]/g, ""))) ||
                                    (!scope.displayKey && filter.test(JSON.stringify(obj2)))
                                ) && result.length < scope.fluigAutocompleteLimit && result.push(obj2)
                            }), fnc(result);
                }
            }

            function createAutocomplete() {

                if (!scope.dataset && !scope.values) return;

                if (scope.autocomplete) {
                    scope.autocomplete.destroy();
                    scope.autocomplete = null;
                }

                var filterFields = '';
                if (scope.filterFields) {
                    filterFields = scope.filterFields.join();
                }

                var resultFields = '';
                if (scope.resultFields) {
                    resultFields = scope.resultFields.join();
                }

                if (scope.dataset) {
                    var restUrl = "/api/public/ecm/dataset/search?datasetId=" + scope.dataset + "&searchField=" + scope.displayKey + "&filterFields=" + filterFields + "&resultFields=" + resultFields + "&limit=" + scope.fluigAutocompleteLimit + "&";

                    console.log(restUrl)

                    // var restUrl = "/api/public/ecm/dataset/search?datasetId=" + scope.dataset + "&";

                    var source = {
                        url: restUrl,
                        patternKey: "searchValue",
                        root: "content"
                    };
                } else {
                    var source = loadData(scope.values);
                }

                if (!scope.autocomplete) {

                    scope.autocomplete = FLUIGC.autocomplete(element, {
                        source: source,
                        highlight: true,
                        displayKey: scope.displayKey,
                        type: scope.fluigAutocompleteType,
                        minLength: Number(scope.minLength),
                        limit: scope.fluigAutocompleteLimit,
                        searchTimeout: scope.searchTimeout
                    });

                    scope.autocomplete
                        .on('fluig.autocomplete.opened', function () {
                            //element.parent().addClass("active");
                        })
                        .on('fluig.autocomplete.closed', function () {
                            //element.parent().removeClass("active");
                        })
                        .on('fluig.autocomplete.selected', function (result) {

                            element.blur();

                            $timeout(function () {
                                if (scope.fluigAutocompleteType == 'autocomplete') {
                                    ctrl.$setViewValue(result.item);
                                } else {
                                    ctrl.$setViewValue(scope.autocomplete.items());
                                }
                                if (attrs.fluigOnSelect) {
                                    scope.$apply(function () {
                                        scope.$eval(attrs.fluigOnSelect);
                                    });
                                }

                                scope.acSelected();
                            });

                        })
                        .on('fluig.autocomplete.itemRemoved', function (result) {
                            console.log("autocomplete 12")
                            if (scope.fluigAutocompleteType == 'autocomplete') {
                                ctrl.$setViewValue();
                            } else {
                                ctrl.$setViewValue(scope.autocomplete.items());
                            }
                        })
                }
            }

            function formatter(value) {

                var ac = [];

                if (scope.fluigAutocompleteType == 'autocomplete') {
                    if (ctrl.$isEmpty(value)) {
                        return value;
                    }
                    if (scope.autocomplete) scope.autocomplete.val(value[scope.displayKey]);
                    ac.push(value[scope.displayKey]);

                } else {
                    if (scope.autocomplete) scope.autocomplete.removeAll();
                    angular.forEach(value, function (item) {
                        if (scope.autocomplete) scope.autocomplete.add(item);
                        ac.push(item[scope.displayKey]);
                    })
                    ctrl.$setViewValue(value);
                }

                return ac.join();

            }

            ctrl.$formatters.push(formatter);
            element.attr('placeholder', 'Digite para buscar...')

            // var template = $compile('<div class="input-group"><span class="input-group-addon"><i class="fluigicon fluigicon-search"></i></span></div>')(scope);

            // element.after(template);
            // template.append(element);

        }
    };
}

AutocompleteDirective.$inject = ['$locale', '$window', '$timeout', '$compile'];

module.exports = AutocompleteDirective;
},{}],17:[function(require,module,exports){
'use strict';

function ChartDirective($locale, $window) {

    return {
        restrict: 'A',
        scope: {
            chartType: "@",
            chartLabels: "=",
            chartDatasets: "="
        },
        link: function (scope, element, attrs) {

            var fluigChart = attrs.fluigChart;
            var defaultFillColor = [
                "rgba(26, 188, 156,0.2)",
                "rgba(52, 152, 219,0.2)",
                "rgba(155, 89, 182,0.2)",
                "rgba(52, 73, 94,0.2)",
                "rgba(230, 126, 34,0.2)",
                "rgba(231, 76, 60,0.2)",
                "rgba(149, 165, 166,0.2)",
                "rgba(241, 196, 15,0.2)",
                "rgba(236, 240, 241,0.2)"
            ]
            var defaultStrokeColor = [
                "rgba(26, 188, 156,1.0)",
                "rgba(52, 152, 219,1.0)",
                "rgba(155, 89, 182,1.0)",
                "rgba(52, 73, 94,1.0)",
                "rgba(230, 126, 34,1.0)",
                "rgba(231, 76, 60,1.0)",
                "rgba(149, 165, 166,1.0)",
                "rgba(241, 196, 15,1.0)",
                "rgba(236, 240, 241,1.0)"
            ]

            var defaultPointColor = defaultStrokeColor;

            var defaultPointStrokeColor = [
                "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"
            ]

            var defaultPointHighlightFill = defaultPointStrokeColor;
            var defaultPointHighlightStroke = defaultStrokeColor;
            
            if (fluigChart == 'false') return;

            var chart;

            scope.$watch('chartType', function (val, oldval) {
                createChart();
            })

            scope.$watch('chartLabels', function (val, oldval) {
                createChart();
            })

            scope.$watch('chartData', function (val, oldval) {
                createChart();
            })

            createChart()

            function createChart() {

                console.log(scope.chartLabels);
                console.log(scope.chartDatasets);
                console.log(scope.chartType);

                if (!scope.chartLabels || !scope.chartDatasets || !scope.chartType) return;

                if (chart) {

                    chart.destroy();
                    chart = null;
                }

                if (!chart) {

                    chart = FLUIGC.chart(element);

                    scope.chartDatasets.forEach(function (dataset, index) {
                        dataset.fillColor = dataset.fillColor || defaultFillColor[index];
                        dataset.strokeColor = dataset.strokeColor || defaultStrokeColor[index];
                        dataset.pointColor = dataset.pointColor || defaultPointColor[index];
                        dataset.pointStrokeColor = dataset.pointStrokeColor || defaultPointStrokeColor[index];
                        dataset.pointHighlightFill = dataset.pointHighlightFill || defaultPointHighlightFill[index];
                        dataset.pointHighlightStroke = dataset.pointHighlightStroke || defaultPointHighlightStroke[index];
                    })

                    var data = {
                        labels: scope.chartLabels,
                        datasets: scope.chartDatasets
                    }

                    switch (scope.chartType) {
                        case "line":
                            chart.line(data);
                            break;

                    }
                };
            }
        }
    };
}

ChartDirective.$inject = ['$locale', '$window'];

module.exports = ChartDirective;
},{}],18:[function(require,module,exports){
'use strict';

function DateMaskDirective($locale, $compile, $timeout, $parse) {
    return {
        restrict: 'A',
        require: '?ngModel',
        scope: {
            showDisabled: "@",
            defaultDate: "=",
            minDate: "=",
            maxDate: "=",
            useCurrent: '@',
            showOnStart: '@',
            disabledDates: '=',
            sideBySide: '@',
            datePattern: "@",
            dateLocale: "@"

        },
        link: function (scope, element, attrs, ctrl) {

            if (attrs.fluigDateMask === "false") return;

            var dt = FLUIGC.calendar(element, {
                pickDate: attrs.pickDate,
                pickTime: attrs.pickTime,
                disabledDates: scope.disabledDates,
                minDate: scope.minDate,
                maxDate: scope.maxDate,
                defaultDate: scope.defaultDate,
                minuteStepping: attrs.minuteStepping,
                sideBySide: scope.sideBySide,
                useCurrent: scope.useCurrent == 'false' ? false : true
            });

            if (scope.showOnStart == 'true') {
                dt.show();
            }

            if (scope.showDisabled) {

                element.prop('readonly', true);
                element.on('click', function () {
                    dt.show();
                })
            }

            element.on('change', function () {
                console.log('change', dt.getDate());
                console.log(scope.datePattern, scope.dateLocale);
                if (dt.getDate()) {
                    var date = new Date(dt.getDate());
                    if (!attrs.pickTime) {
                        date.setHours(23, 59, 59);
                    }
                    
                    ctrl.$setViewValue(date.getTime());
                    element.val(FLUIGC.calendar.formatDate(date, scope.datePattern, scope.dateLocale));
                }
            });

            function formatter(value) {
                
                if (ctrl.$isEmpty(value)) {
                    return value;
                }
                dt.setDate(new Date(Number(value)));
                
                return FLUIGC.calendar.formatDate(new Date(Number(value)), scope.datePattern, scope.dateLocale);
                // return element.val();
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
},{}],19:[function(require,module,exports){
'use strict';

var m = angular.module('angular.fluig.utils', [
        require('../helpers'),
    ])

    .directive('fluigAutocomplete', require('./autocomplete/autocomplete'))
    .directive('fluigChart', require('./chart/chart'))
    .directive('fluigDateMask', require('./date/date'))
    .directive('fluigHeader', require('./header/header'))
    .directive('fluigRequired', require('./required/required'))
    
    .directive('fluigSwitch', require('./switch/switch'))
    .directive('fluigPopover', require('./popover/popover'))

module.exports = m.name;
},{"../helpers":36,"./autocomplete/autocomplete":16,"./chart/chart":17,"./date/date":18,"./header/header":20,"./popover/popover":21,"./required/required":22,"./switch/switch":23}],20:[function(require,module,exports){
'use strict';

function HeaderDirective($locale) {

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, ctrl) {

            var title = attrs.fluigHeader || $(document).find("title").text();
            var logo = attrs.logo || '/portal/resources/images/logo.png';
            var height = attrs.height || '80';

            var html = '<div class="row">';
            var h = "h1";

            if (title.length > 54) {
                h = "h4";
            } else if (title.length > 43) {
                h = "h3";
            } else if (title.length > 34) {
                h = "h2";
            }

            html += '<div class="col-xs-6">';
            html += "<img src='" + logo + "' id='logo' class='logo' height='" + height + "' alt='Logo' title='Logo' border='0' />";
            html += '</div>';
            html += '<div class="col-xs-6">';
            html += '<' + h + ' class="text-right">' + title + '</' + h + '>';
            html += '</div>';
            html += '</div>';

            element.prepend(html);

        }
    };
}

HeaderDirective.$inject = ['$locale'];

module.exports = HeaderDirective;
},{}],21:[function(require,module,exports){
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
},{}],22:[function(require,module,exports){
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
},{}],23:[function(require,module,exports){
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

                console.log('switch', ctrl.$modelValue)

                FLUIGC.switcher.init(element, {
                    "state": ctrl.$modelValue
                });

                if (ctrl.$modelValue == true || ctrl.$modelValue == 'true') {
                    
                    let isReadOnly = false;
                    let isDisabled = false;
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
                    console.log('switch onChange', state)
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
},{}],24:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');
var maskFactory = require('mask-factory');

var ccSize = 16;

var ccMask = new StringMask('0000 0000 0000 0000');

module.exports = maskFactory({
	clearValue: function(rawValue) {
		return rawValue.toString().replace(/[^0-9]/g, '').slice(0, ccSize);
	},
	format: function(cleanValue) {
		var formatedValue;

		formatedValue = ccMask.apply(cleanValue) || '';

		return formatedValue.trim().replace(/[^0-9]$/, '');
	},
	validations: {
		creditCard: function(value) {
			var valueLength = value && value.toString().length;
			return valueLength === ccSize;
		}
	}
});

},{"mask-factory":"mask-factory","string-mask":2}],25:[function(require,module,exports){
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
                var label = $("label[for='" + element.attr('name') + "']");

                if (error != '') {

                    label.parent()
                        .addClass("has-error");

                    FLUIGC.popover(element, {
                        html: 'true',
                        trigger: 'focus',
                        placement: 'top',
                        content: error
                    });
                    //element.popover('show');
                } else {
                    label.parent()
                        .removeClass("has-error");
                }

            });
        }
    }
}

ErrorDirective.$inject = ['$compile'];

module.exports = ErrorDirective;
},{"./messages":26}],26:[function(require,module,exports){
var messages = {
    "required": "O campo é obrigatório",
    "min": "O valor informado é inferior ao mínimo",
    "max": "O valor informado é superior ao máximo",
    "cpf": "O CPF informado é inválido",
    "time": "O horário informado é inválido",
    "cnpj": "O CNPJ informado é inválido",
    "phoneNumber": "O telefone informado é inválido",
    "cep": "O CEP informado é inválido",
    "ie": "Inscrição estadual inválida",
    "carPlate": "A placa informada é inválida",
    "creditCard": "O número de cartão de crédito informado é inválido",
    "boletoBancario": "O número do boleto bancário informado é inválido",
    "nfeAccessKey": "Chave de acesso inválida"

}

module.exports = messages;
},{}],27:[function(require,module,exports){
'use strict';

var m = angular.module('fluig.global.masks', [
        require('../helpers'),
    ])
    .directive('fluigMoneyMask', require('./money/money'))
    .directive('fluigNumberMask', require('./number/number'))
    .directive('fluigPercentageMask', require('./percentage/percentage'))
    .directive('fluigScientificNotationMask', require('./scientific-notation/scientific-notation'))
    .directive('fluigTimeMask', require('./time/time'))
    .directive('fluigCreditCard', require('./credit-card/credit-card'))
    .directive('fluigError', require('./error/error'))
    .directive('ngName', require('./name/name'))

    .filter('percentage', require('./percentage/percentage-filter'))
    .filter('time', require('./time/time-filter'))


module.exports = m.name;
},{"../helpers":36,"./credit-card/credit-card":24,"./error/error":25,"./money/money":28,"./name/name":29,"./number/number":30,"./percentage/percentage":32,"./percentage/percentage-filter":31,"./scientific-notation/scientific-notation":33,"./time/time":35,"./time/time-filter":34}],28:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');
var validators = require('validators');

function MoneyMaskDirective($locale, $parse, $compile, PreFormatters) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {

            if (attrs.fluigMoneyMask === "false") return;

            var decimalDelimiter = $locale.NUMBER_FORMATS.DECIMAL_SEP,
                thousandsDelimiter = $locale.NUMBER_FORMATS.GROUP_SEP,
                currencySym = $locale.NUMBER_FORMATS.CURRENCY_SYM,
                symbolSeparation = ' ',
                decimals = $parse(attrs.fluigMoneyMask)(scope);


            function maskFactory(decimals) {
                var decimalsPattern = decimals > 0 ? decimalDelimiter + new Array(decimals + 1).join('0') : '';
                var maskPattern = symbolSeparation + '#' + thousandsDelimiter + '##0' + decimalsPattern;
                return new StringMask(maskPattern, { reverse: true });
            }

            if (angular.isDefined(attrs.fluigHideSpace) && attrs.fluigHideSpace != 'false') {
                symbolSeparation = '';
            }

            if (angular.isDefined(attrs.currencySymbol)) {
                currencySym = attrs.currencySymbol;
                if (attrs.currencySymbol.length === 0) {
                    symbolSeparation = '';
                }
            }

            if (isNaN(decimals)) {
                decimals = 2;
            }
            decimals = parseInt(decimals);
            var moneyMask = maskFactory(decimals);

            function formatter(value) {
                if (ctrl.$isEmpty(value)) {
                    return value;
                }
                var prefix = (angular.isDefined(attrs.fluigNegativeNumber) && value < 0) ? '-' : '';
                var valueToFormat = PreFormatters.prepareNumberToFormatter(value, decimals);
                return prefix + moneyMask.apply(valueToFormat);
            }

            function parser(value) {
                if (ctrl.$isEmpty(value)) {
                    return value;
                }

                var actualNumber = value.replace(/[^\d]+/g, '');
                actualNumber = actualNumber.replace(/^[0]+([1-9])/, '$1');
                actualNumber = actualNumber || '0';
                var formatedValue = moneyMask.apply(actualNumber);

                if (angular.isDefined(attrs.fluigNegativeNumber)) {
                    var isNegative = (value[0] === '-'),
                        needsToInvertSign = (value.slice(-1) === '-');

                    //only apply the minus sign if it is negative or(exclusive)
                    //needs to be negative and the number is different from zero
                    if (needsToInvertSign ^ isNegative && !!actualNumber) {
                        actualNumber *= -1;
                        formatedValue = '-' + formatedValue;
                    }
                }

                if (value !== formatedValue) {
                    ctrl.$setViewValue(formatedValue);
                    ctrl.$render();
                }

                return formatedValue ? parseInt(formatedValue.replace(/[^\d\-]+/g, '')) / Math.pow(10, decimals) : null;
            }

            ctrl.$formatters.push(formatter);
            ctrl.$parsers.push(parser);

            if (attrs.fluigMoneyMask) {
                scope.$watch(attrs.fluigMoneyMask, function(_decimals) {
                    decimals = isNaN(_decimals) ? 2 : _decimals;
                    decimals = parseInt(decimals);
                    moneyMask = maskFactory(decimals);

                    parser(ctrl.$viewValue);
                });
            }



            if (attrs.fluigHideGroupSep) {
                scope.$watch(attrs.fluigHideGroupSep, function(_hideGroupSep) {
                    
                    if (_hideGroupSep == true) {
                        thousandsDelimiter = '';
                    } else {
                        thousandsDelimiter = $locale.NUMBER_FORMATS.GROUP_SEP;
                    }
                    moneyMask = maskFactory(decimals);
                    parser(ctrl.$viewValue);

                });
            }

            if (attrs.min) {
                var minVal;

                ctrl.$validators.min = function(modelValue) {
                    return validators.minNumber(ctrl, modelValue, minVal);
                };

                scope.$watch(attrs.min, function(value) {
                    minVal = value;
                    ctrl.$validate();
                });
            }

            if (attrs.max) {
                var maxVal;

                ctrl.$validators.max = function(modelValue) {
                    return validators.maxNumber(ctrl, modelValue, maxVal);
                };

                scope.$watch(attrs.max, function(value) {
                    maxVal = value;
                    ctrl.$validate();
                });
            }

            var template = $compile('<div class="input-group" ><span class="input-group-addon"><b>' + currencySym + '</b></span></div>')(scope);

            element.after(template);
            template.append(element);
        }
    };
}
MoneyMaskDirective.$inject = ['$locale', '$parse', '$compile', 'PreFormatters'];

module.exports = MoneyMaskDirective;
},{"string-mask":2,"validators":"validators"}],29:[function(require,module,exports){
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

NgNameDirective.$inject = ['$timeout'];

module.exports = NgNameDirective;
},{}],30:[function(require,module,exports){
'use strict';

var validators = require('validators');

function NumberMaskDirective($locale, $parse, PreFormatters, NumberMasks) {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, element, attrs, ctrl) {
			var decimalDelimiter = $locale.NUMBER_FORMATS.DECIMAL_SEP,
				thousandsDelimiter = $locale.NUMBER_FORMATS.GROUP_SEP,
				decimals = $parse(attrs.fluigNumberMask)(scope);

			if (angular.isDefined(attrs.fluigHideGroupSep)) {
				thousandsDelimiter = '';
			}

			if (isNaN(decimals)) {
				decimals = 2;
			}

			var viewMask = NumberMasks.viewMask(decimals, decimalDelimiter, thousandsDelimiter),
				modelMask = NumberMasks.modelMask(decimals);

			function parser(value) {
				if (ctrl.$isEmpty(value)) {
					return null;
				}

				var valueToFormat = PreFormatters.clearDelimitersAndLeadingZeros(value) || '0';
				var formatedValue = viewMask.apply(valueToFormat);
				var actualNumber = parseFloat(modelMask.apply(valueToFormat));

				if (angular.isDefined(attrs.fluigNegativeNumber)) {
					var isNegative = (value[0] === '-'),
						needsToInvertSign = (value.slice(-1) === '-');

					//only apply the minus sign if it is negative or(exclusive) or the first character
					//needs to be negative and the number is different from zero
					if ((needsToInvertSign ^ isNegative) || value === '-') {
						actualNumber *= -1;
						formatedValue = '-' + ((actualNumber !== 0) ? formatedValue : '');
					}
				}

				if (ctrl.$viewValue !== formatedValue) {
					ctrl.$setViewValue(formatedValue);
					ctrl.$render();
				}

				return actualNumber;
			}

			function formatter(value) {
				if (ctrl.$isEmpty(value)) {
					return value;
				}

				var prefix = (angular.isDefined(attrs.fluigNegativeNumber) && value < 0) ? '-' : '';
				var valueToFormat = PreFormatters.prepareNumberToFormatter(value, decimals);
				return prefix + viewMask.apply(valueToFormat);
			}

			function clearViewValueIfMinusSign() {
				if (ctrl.$viewValue === '-') {
					ctrl.$setViewValue('');
					ctrl.$render();
				}
			}

			element.on('blur', clearViewValueIfMinusSign);

			ctrl.$formatters.push(formatter);
			ctrl.$parsers.push(parser);

			if (attrs.fluigNumberMask) {
				scope.$watch(attrs.fluigNumberMask, function (_decimals) {
					decimals = isNaN(_decimals) ? 2 : _decimals;
					viewMask = NumberMasks.viewMask(decimals, decimalDelimiter, thousandsDelimiter);
					modelMask = NumberMasks.modelMask(decimals);

					parser(ctrl.$viewValue);
				});
			}

			if (attrs.min) {
				var minVal;

				ctrl.$validators.min = function (modelValue) {
					return validators.minNumber(ctrl, modelValue, minVal);
				};

				scope.$watch(attrs.min, function (value) {
					minVal = value;
					ctrl.$validate();
				});
			}

			if (attrs.max) {
				var maxVal;

				ctrl.$validators.max = function (modelValue) {
					return validators.maxNumber(ctrl, modelValue, maxVal);
				};

				scope.$watch(attrs.max, function (value) {
					maxVal = value;
					ctrl.$validate();
				});
			}
		}
	};
}
NumberMaskDirective.$inject = ['$locale', '$parse', 'PreFormatters', 'NumberMasks'];

module.exports = NumberMaskDirective;
},{"validators":"validators"}],31:[function(require,module,exports){
'use strict';


function PercentageFilter($filter) {
    return function (input, decimals) {
        return $filter('number')(input * 100, decimals) + '%';
    };
}
PercentageFilter.$inject = ['$filter'];

module.exports = PercentageFilter;
},{}],32:[function(require,module,exports){
'use strict';

var validators = require('validators');

function PercentageMaskDirective($locale, $parse, PreFormatters, NumberMasks) {
    function preparePercentageToFormatter(value, decimals, modelMultiplier) {
        return PreFormatters.clearDelimitersAndLeadingZeros((parseFloat(value) * modelMultiplier).toFixed(decimals));
    }

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {

            if (attrs.fluigPercentageMask === "false") return;

            var decimalDelimiter = $locale.NUMBER_FORMATS.DECIMAL_SEP,
                thousandsDelimiter = $locale.NUMBER_FORMATS.GROUP_SEP,
                decimals = parseInt(attrs.fluigPercentageMask),
                hideSpace = false,
                backspacePressed = false;

            element.bind('keydown keypress', function(event) {
                backspacePressed = event.which === 8;
            });

            var modelValue = {
                multiplier: 100,
                decimalMask: 2
            };

            if (angular.isDefined(attrs.hideGroupSep)) {
                thousandsDelimiter = '';
            }

            if (angular.isDefined(attrs.hideSpace)) {
                hideSpace = true;
            }

            if (angular.isDefined(attrs.percentageValue)) {
                modelValue.multiplier = 1;
                modelValue.decimalMask = 0;
            }

            if (isNaN(decimals)) {
                decimals = 2;
            }

            var numberDecimals = decimals + modelValue.decimalMask;
            var viewMask = NumberMasks.viewMask(decimals, decimalDelimiter, thousandsDelimiter),
                modelMask = NumberMasks.modelMask(numberDecimals);

            function formatter(value) {
                if (ctrl.$isEmpty(value)) {
                    return value;
                }

                var valueToFormat = preparePercentageToFormatter(value, decimals, modelValue.multiplier);
                return viewMask.apply(valueToFormat) + ' %';
            }

            function parse(value) {
                if (ctrl.$isEmpty(value)) {
                    return null;
                }

                var valueToFormat = PreFormatters.clearDelimitersAndLeadingZeros(value) || '0';
                if (value.length > 1 && value.indexOf('%') === -1) {
                    valueToFormat = valueToFormat.slice(0, valueToFormat.length - 1);
                }
                if (backspacePressed && value.length === 1 && value !== '%') {
                    valueToFormat = '0';
                }
                var percentSign = hideSpace ? '%' : ' %';
                var formatedValue = viewMask.apply(valueToFormat) + percentSign;
                var actualNumber = parseFloat(modelMask.apply(valueToFormat));

                if (ctrl.$viewValue !== formatedValue) {
                    ctrl.$setViewValue(formatedValue);
                    ctrl.$render();
                }

                return actualNumber;
            }

            ctrl.$formatters.push(formatter);
            ctrl.$parsers.push(parse);

            if (attrs.fluigPercentageMask) {
                scope.$watch(attrs.fluigPercentageMask, function(_decimals) {
                    decimals = isNaN(_decimals) ? 2 : _decimals;

                    if (angular.isDefined(attrs.percentageValue)) {
                        modelValue.multiplier = 1;
                        modelValue.decimalMask = 0;
                    }

                    numberDecimals = decimals + modelValue.decimalMask;
                    viewMask = NumberMasks.viewMask(decimals, decimalDelimiter, thousandsDelimiter);
                    modelMask = NumberMasks.modelMask(numberDecimals);

                    parse(ctrl.$viewValue);
                });
            }

            if (attrs.min) {
                var minVal;

                ctrl.$validators.min = function(modelValue) {
                    return validators.minNumber(ctrl, modelValue, minVal);
                };

                scope.$watch(attrs.min, function(value) {
                    minVal = value;
                    ctrl.$validate();
                });
            }

            if (attrs.max) {
                var maxVal;

                ctrl.$validators.max = function(modelValue) {
                    return validators.maxNumber(ctrl, modelValue, maxVal);
                };

                scope.$watch(attrs.max, function(value) {
                    maxVal = value;
                    ctrl.$validate();
                });
            }
        }
    };
}
PercentageMaskDirective.$inject = ['$locale', '$parse', 'PreFormatters', 'NumberMasks'];

module.exports = PercentageMaskDirective;
},{"validators":"validators"}],33:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');

function ScientificNotationMaskDirective($locale, $parse) {
	var decimalDelimiter = $locale.NUMBER_FORMATS.DECIMAL_SEP,
		defaultPrecision = 2;

	function significandMaskBuilder(decimals) {
		var mask = '0';

		if (decimals > 0) {
			mask += decimalDelimiter;
			for (var i = 0; i < decimals; i++) {
				mask += '0';
			}
		}

		return new StringMask(mask, {
			reverse: true
		});
	}

	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl) {
			var decimals = $parse(attrs.fluigScientificNotationMask)(scope);

			if (isNaN(decimals)) {
				decimals = defaultPrecision;
			}

			var significandMask = significandMaskBuilder(decimals);

			function splitNumber(value) {
				var stringValue = value.toString(),
					splittedNumber = stringValue.match(/(-?[0-9]*)[\.]?([0-9]*)?[Ee]?([\+-]?[0-9]*)?/);

				return {
					integerPartOfSignificand: splittedNumber[1],
					decimalPartOfSignificand: splittedNumber[2],
					exponent: splittedNumber[3] | 0
				};
			}

			function formatter(value) {
				if (ctrl.$isEmpty(value)) {
					return value;
				}

				if (typeof value === 'string') {
					value = value.replace(decimalDelimiter, '.');
				} else if (typeof value === 'number') {
					value = value.toExponential(decimals);
				}

				var formattedValue, exponent;
				var splittedNumber = splitNumber(value);

				var integerPartOfSignificand = splittedNumber.integerPartOfSignificand || 0;
				var numberToFormat = integerPartOfSignificand.toString();
				if (angular.isDefined(splittedNumber.decimalPartOfSignificand)) {
					numberToFormat += splittedNumber.decimalPartOfSignificand;
				}

				var needsNormalization =
					(integerPartOfSignificand >= 1 || integerPartOfSignificand <= -1) &&
					(
						(angular.isDefined(splittedNumber.decimalPartOfSignificand) &&
						splittedNumber.decimalPartOfSignificand.length > decimals) ||
						(decimals === 0 && numberToFormat.length >= 2)
					);

				if (needsNormalization) {
					exponent = numberToFormat.slice(decimals + 1, numberToFormat.length);
					numberToFormat = numberToFormat.slice(0, decimals + 1);
				}

				formattedValue = significandMask.apply(numberToFormat);

				if (splittedNumber.exponent !== 0) {
					exponent = splittedNumber.exponent;
				}

				if (angular.isDefined(exponent)) {
					formattedValue += 'e' + exponent;
				}

				return formattedValue;
			}

			function parser(value) {
				if (ctrl.$isEmpty(value)) {
					return value;
				}

				var viewValue = formatter(value),
					modelValue = parseFloat(viewValue.replace(decimalDelimiter, '.'));

				if (ctrl.$viewValue !== viewValue) {
					ctrl.$setViewValue(viewValue);
					ctrl.$render();
				}

				return modelValue;
			}

			ctrl.$formatters.push(formatter);
			ctrl.$parsers.push(parser);

			ctrl.$validators.max = function validator(value) {
				return ctrl.$isEmpty(value) || value < Number.MAX_VALUE;
			};
		}
	};
}
ScientificNotationMaskDirective.$inject = ['$locale', '$parse'];

module.exports = ScientificNotationMaskDirective;

},{"string-mask":2}],34:[function(require,module,exports){
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
},{"string-mask":2}],35:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');

function TimeMaskDirective($timeout) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {

            if (attrs.fluigTimeMask === "false") return;

            var timeFormat = '00:00:00';

            if (angular.isDefined(attrs.fluigTimeMask) && attrs.fluigTimeMask === 'short') {
                timeFormat = '00:00';
            }

            var formattedValueLength = timeFormat.length;
            var unformattedValueLength = timeFormat.replace(':', '').length;
            var timeMask = new StringMask(timeFormat);

            function formatter(value) {
                if (ctrl.$isEmpty(value)) {
                    return value;
                }

                var cleanValue = value.replace(/[^0-9]/g, '').slice(0, unformattedValueLength) || '';
                return (timeMask.apply(cleanValue) || '').replace(/[^0-9]$/, '');
            }

            ctrl.$formatters.push(formatter);

            ctrl.$parsers.push(function parser(value) {
                if (ctrl.$isEmpty(value)) {
                    return value;
                }

                var viewValue = formatter(value);
                var modelValue = viewValue;

                if (ctrl.$viewValue !== viewValue) {
                    ctrl.$setViewValue(viewValue);
                    ctrl.$render();
                }

                var start = element[0].selectionStart;
                var end = element[0].selectionEnd + viewValue.length - value.length;

                $timeout(function () {
                    element[0].setSelectionRange(start, start);
                });

                return modelValue;
            });

            ctrl.$validators.time = function (modelValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    return true;
                }

                var splittedValue = modelValue.toString().split(/:/).filter(function (v) {
                    return !!v;
                });

                var hours = parseInt(splittedValue[0]),
                    minutes = parseInt(splittedValue[1]),
                    seconds = parseInt(splittedValue[2] || 0);

                return modelValue.toString().length === formattedValueLength &&
                    hours < 24 && minutes < 60 && seconds < 60;
            };
        }
    };
}

TimeMaskDirective.$inject = ['$timeout'];

module.exports = TimeMaskDirective;
},{"string-mask":2}],36:[function(require,module,exports){
'use strict';

var StringMask = require('string-mask');

var m = angular.module('ui.utils.masks.helpers', []);

module.exports = m.name;

m.factory('PreFormatters', [function() {
	function clearDelimitersAndLeadingZeros(value) {
		if (value === '0') {
			return '0';
		}

		var cleanValue = value.replace(/^-/,'').replace(/^0*/, '');
		return cleanValue.replace(/[^0-9]/g, '');
	}

	function prepareNumberToFormatter(value, decimals) {
		return clearDelimitersAndLeadingZeros((parseFloat(value)).toFixed(decimals));
	}

	return {
		clearDelimitersAndLeadingZeros: clearDelimitersAndLeadingZeros,
		prepareNumberToFormatter: prepareNumberToFormatter
	};
}])
.factory('NumberMasks', [function() {
	return {
		viewMask: function(decimals, decimalDelimiter, thousandsDelimiter) {
			var mask = '#' + thousandsDelimiter + '##0';

			if (decimals > 0) {
				mask += decimalDelimiter;
				for (var i = 0; i < decimals; i++) {
					mask += '0';
				}
			}

			return new StringMask(mask, {
				reverse: true
			});
		},
		modelMask: function(decimals) {
			var mask = '###0';

			if (decimals > 0) {
				mask += '.';
				for (var i = 0; i < decimals; i++) {
					mask += '0';
				}
			}

			return new StringMask(mask, {
				reverse: true
			});
		}
	};
}]);

},{"string-mask":2}],"mask-factory":[function(require,module,exports){
'use strict';

module.exports = function maskFactory(maskDefinition) {
	return function MaskDirective() {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, element, attrs, ctrl) {
				ctrl.$formatters.push(function formatter(value) {
					if (ctrl.$isEmpty(value)) {
						return value;
					}

					var cleanValue = maskDefinition.clearValue(value);
					return maskDefinition.format(cleanValue);
				});

				ctrl.$parsers.push(function parser(value) {
					if (ctrl.$isEmpty(value)) {
						return value;
					}

					var cleanValue = maskDefinition.clearValue(value);
					var formattedValue = maskDefinition.format(cleanValue);

					if (ctrl.$viewValue !== formattedValue) {
						ctrl.$setViewValue(formattedValue);
						ctrl.$render();
					}

					if (angular.isUndefined(maskDefinition.getModelValue)) {
						return cleanValue;
					}

					var actualModelType = typeof ctrl.$modelValue;
					return maskDefinition.getModelValue(formattedValue, actualModelType);
				});

				angular.forEach(maskDefinition.validations, function(validatorFn, validationErrorKey) {
					ctrl.$validators[validationErrorKey] = function validator(modelValue, viewValue) {
						return ctrl.$isEmpty(modelValue) || validatorFn(modelValue, viewValue);
					};
				});
			}
		};
	};
};

},{}],"validators":[function(require,module,exports){
'use strict';

module.exports = {
	maxNumber: function(ctrl, value, limit) {
		var max = parseFloat(limit, 10);
		return ctrl.$isEmpty(value) || isNaN(max) || value <= max;
	},
	minNumber: function(ctrl, value, limit) {
		var min = parseFloat(limit, 10);
		return ctrl.$isEmpty(value) || isNaN(min) || value >= min;
	}
};

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9ub2RlX21vZHVsZXMvYnItdmFsaWRhdGlvbnMvcmVsZWFzZXMvYnItdmFsaWRhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvc3RyaW5nLW1hc2svc3JjL3N0cmluZy1tYXNrLmpzIiwiYW5ndWxhci1mbHVpZy5qcyIsImJyL2JvbGV0by1iYW5jYXJpby9ib2xldG8tYmFuY2FyaW8uanMiLCJici9ici1tYXNrcy5qcyIsImJyL2Nhci1wbGF0ZS9jYXItcGxhdGUuanMiLCJici9jZXAvY2VwLmpzIiwiYnIvY25wai9jbnBqLmpzIiwiYnIvY3BmLWNucGovY3BmLWNucGouanMiLCJici9jcGYvY3BmLmpzIiwiYnIvaW5zY3JpY2FvLWVzdGFkdWFsL2llLmpzIiwiYnIvbmZlL25mZS5qcyIsImJyL3Bob25lL2JyLXBob25lLmpzIiwiZmlsdGVycy9maWx0ZXIuanMiLCJmaWx0ZXJzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5qcyIsImZsdWlnL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuanMiLCJmbHVpZy9jaGFydC9jaGFydC5qcyIsImZsdWlnL2RhdGUvZGF0ZS5qcyIsImZsdWlnL2ZsdWlnLXVpLmpzIiwiZmx1aWcvaGVhZGVyL2hlYWRlci5qcyIsImZsdWlnL3BvcG92ZXIvcG9wb3Zlci5qcyIsImZsdWlnL3JlcXVpcmVkL3JlcXVpcmVkLmpzIiwiZmx1aWcvc3dpdGNoL3N3aXRjaC5qcyIsImdsb2JhbC9jcmVkaXQtY2FyZC9jcmVkaXQtY2FyZC5qcyIsImdsb2JhbC9lcnJvci9lcnJvci5qcyIsImdsb2JhbC9lcnJvci9tZXNzYWdlcy5qcyIsImdsb2JhbC9nbG9iYWwtbWFza3MuanMiLCJnbG9iYWwvbW9uZXkvbW9uZXkuanMiLCJnbG9iYWwvbmFtZS9uYW1lLmpzIiwiZ2xvYmFsL251bWJlci9udW1iZXIuanMiLCJnbG9iYWwvcGVyY2VudGFnZS9wZXJjZW50YWdlLWZpbHRlci5qcyIsImdsb2JhbC9wZXJjZW50YWdlL3BlcmNlbnRhZ2UuanMiLCJnbG9iYWwvc2NpZW50aWZpYy1ub3RhdGlvbi9zY2llbnRpZmljLW5vdGF0aW9uLmpzIiwiZ2xvYmFsL3RpbWUvdGltZS1maWx0ZXIuanMiLCJnbG9iYWwvdGltZS90aW1lLmpzIiwiaGVscGVycy5qcyIsIi4uL21hc2stZmFjdG9yeSIsIi4uL3ZhbGlkYXRvcnMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqXG4gKiBici12YWxpZGF0aW9uc1xuICogQSBsaWJyYXJ5IG9mIHZhbGlkYXRpb25zIGFwcGxpY2FibGUgdG8gc2V2ZXJhbCBCcmF6aWxpYW4gZGF0YSBsaWtlIEkuRS4sIENOUEosIENQRiBhbmQgb3RoZXJzXG4gKiBAdmVyc2lvbiB2MC4yLjRcbiAqIEBsaW5rIGh0dHA6Ly9naXRodWIuY29tL3RoZS1kYXJjL2JyLXZhbGlkYXRpb25zXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHQvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcblx0XHQvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcblx0XHQvLyBsaWtlIE5vZGUuXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcblx0XHRyb290LkJyViA9IGZhY3RvcnkoKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG52YXIgQ05QSiA9IHt9O1xuXG5DTlBKLnZhbGlkYXRlID0gZnVuY3Rpb24oYykge1xuXHR2YXIgYiA9IFs2LDUsNCwzLDIsOSw4LDcsNiw1LDQsMywyXTtcblx0YyA9IGMucmVwbGFjZSgvW15cXGRdL2csJycpO1xuXG5cdHZhciByID0gL14oMHsxNH18MXsxNH18MnsxNH18M3sxNH18NHsxNH18NXsxNH18NnsxNH18N3sxNH18OHsxNH18OXsxNH0pJC87XG5cdGlmICghYyB8fCBjLmxlbmd0aCAhPT0gMTQgfHwgci50ZXN0KGMpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGMgPSBjLnNwbGl0KCcnKTtcblxuXHRmb3IgKHZhciBpID0gMCwgbiA9IDA7IGkgPCAxMjsgaSsrKSB7XG5cdFx0biArPSBjW2ldICogYltpKzFdO1xuXHR9XG5cdG4gPSAxMSAtIG4lMTE7XG5cdG4gPSBuID49IDEwID8gMCA6IG47XG5cdGlmIChwYXJzZUludChjWzEyXSkgIT09IG4pICB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Zm9yIChpID0gMCwgbiA9IDA7IGkgPD0gMTI7IGkrKykge1xuXHRcdG4gKz0gY1tpXSAqIGJbaV07XG5cdH1cblx0biA9IDExIC0gbiUxMTtcblx0biA9IG4gPj0gMTAgPyAwIDogbjtcblx0aWYgKHBhcnNlSW50KGNbMTNdKSAhPT0gbikgIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG5cbnZhciBDUEYgPSB7fTtcblxuQ1BGLnZhbGlkYXRlID0gZnVuY3Rpb24oY3BmKSB7XG5cdGNwZiA9IGNwZi5yZXBsYWNlKC9bXlxcZF0rL2csJycpO1xuXHR2YXIgciA9IC9eKDB7MTF9fDF7MTF9fDJ7MTF9fDN7MTF9fDR7MTF9fDV7MTF9fDZ7MTF9fDd7MTF9fDh7MTF9fDl7MTF9KSQvO1xuXHRpZiAoIWNwZiB8fCBjcGYubGVuZ3RoICE9PSAxMSB8fCByLnRlc3QoY3BmKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRmdW5jdGlvbiB2YWxpZGF0ZURpZ2l0KGRpZ2l0KSB7XG5cdFx0dmFyIGFkZCA9IDA7XG5cdFx0dmFyIGluaXQgPSBkaWdpdCAtIDk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCA5OyBpICsrKSB7XG5cdFx0XHRhZGQgKz0gcGFyc2VJbnQoY3BmLmNoYXJBdChpICsgaW5pdCkpICogKGkrMSk7XG5cdFx0fVxuXHRcdHJldHVybiAoYWRkJTExKSUxMCA9PT0gcGFyc2VJbnQoY3BmLmNoYXJBdChkaWdpdCkpO1xuXHR9XG5cdHJldHVybiB2YWxpZGF0ZURpZ2l0KDkpICYmIHZhbGlkYXRlRGlnaXQoMTApO1xufTtcblxudmFyIElFID0gZnVuY3Rpb24odWYpIHtcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIElFKSkge1xuXHRcdHJldHVybiBuZXcgSUUodWYpO1xuXHR9XG5cblx0dGhpcy5ydWxlcyA9IElFcnVsZXNbdWZdIHx8IFtdO1xuXHR0aGlzLnJ1bGU7XG5cdElFLnByb3RvdHlwZS5fZGVmaW5lUnVsZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0dGhpcy5ydWxlID0gdW5kZWZpbmVkO1xuXHRcdGZvciAodmFyIHIgPSAwOyByIDwgdGhpcy5ydWxlcy5sZW5ndGggJiYgdGhpcy5ydWxlID09PSB1bmRlZmluZWQ7IHIrKykge1xuXHRcdFx0dmFyIHN0ciA9IHZhbHVlLnJlcGxhY2UoL1teXFxkXS9nLCcnKTtcblx0XHRcdHZhciBydWxlQ2FuZGlkYXRlID0gdGhpcy5ydWxlc1tyXTtcblx0XHRcdGlmIChzdHIubGVuZ3RoID09PSBydWxlQ2FuZGlkYXRlLmNoYXJzICYmICghcnVsZUNhbmRpZGF0ZS5tYXRjaCB8fCBydWxlQ2FuZGlkYXRlLm1hdGNoLnRlc3QodmFsdWUpKSkge1xuXHRcdFx0XHR0aGlzLnJ1bGUgPSBydWxlQ2FuZGlkYXRlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gISF0aGlzLnJ1bGU7XG5cdH07XG5cblx0SUUucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRpZiAoIXZhbHVlIHx8ICF0aGlzLl9kZWZpbmVSdWxlKHZhbHVlKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5ydWxlLnZhbGlkYXRlKHZhbHVlKTtcblx0fTtcbn07XG5cbnZhciBJRXJ1bGVzID0ge307XG5cbnZhciBhbGdvcml0aG1TdGVwcyA9IHtcblx0aGFuZGxlU3RyOiB7XG5cdFx0b25seU51bWJlcnM6IGZ1bmN0aW9uKHN0cikge1xuXHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC9bXlxcZF0vZywnJykuc3BsaXQoJycpO1xuXHRcdH0sXG5cdFx0bWdTcGVjOiBmdW5jdGlvbihzdHIpIHtcblx0XHRcdHZhciBzID0gc3RyLnJlcGxhY2UoL1teXFxkXS9nLCcnKTtcblx0XHRcdHMgPSBzLnN1YnN0cigwLDMpKycwJytzLnN1YnN0cigzLCBzLmxlbmd0aCk7XG5cdFx0XHRyZXR1cm4gcy5zcGxpdCgnJyk7XG5cdFx0fVxuXHR9LFxuXHRzdW06IHtcblx0XHRub3JtYWxTdW06IGZ1bmN0aW9uKGhhbmRsZWRTdHIsIHBlc29zKSB7XG5cdFx0XHR2YXIgbnVtcyA9IGhhbmRsZWRTdHI7XG5cdFx0XHR2YXIgc3VtID0gMDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcGVzb3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0c3VtICs9IHBhcnNlSW50KG51bXNbaV0pICogcGVzb3NbaV07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3VtO1xuXHRcdH0sXG5cdFx0aW5kaXZpZHVhbFN1bTogZnVuY3Rpb24oaGFuZGxlZFN0ciwgcGVzb3MpIHtcblx0XHRcdHZhciBudW1zID0gaGFuZGxlZFN0cjtcblx0XHRcdHZhciBzdW0gPSAwO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwZXNvcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgbXVsdCA9IHBhcnNlSW50KG51bXNbaV0pICogcGVzb3NbaV07XG5cdFx0XHRcdHN1bSArPSBtdWx0JTEwICsgcGFyc2VJbnQobXVsdC8xMCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3VtO1xuXHRcdH0sXG5cdFx0YXBTcGVjOiBmdW5jdGlvbihoYW5kbGVkU3RyLCBwZXNvcykge1xuXHRcdFx0dmFyIHN1bSA9IHRoaXMubm9ybWFsU3VtKGhhbmRsZWRTdHIsIHBlc29zKTtcblx0XHRcdHZhciByZWYgPSBoYW5kbGVkU3RyLmpvaW4oJycpO1xuXHRcdFx0aWYgKHJlZiA+PSAnMDMwMDAwMDEwJyAmJiByZWYgPD0gJzAzMDE3MDAwOScpIHtcblx0XHRcdFx0cmV0dXJuIHN1bSArIDU7XG5cdFx0XHR9XG5cdFx0XHRpZiAocmVmID49ICcwMzAxNzAwMTAnICYmIHJlZiA8PSAnMDMwMTkwMjI5Jykge1xuXHRcdFx0XHRyZXR1cm4gc3VtICsgOTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdW07XG5cdFx0fVxuXHR9LFxuXHRyZXN0OiB7XG5cdFx0bW9kMTE6IGZ1bmN0aW9uKHN1bSkge1xuXHRcdFx0cmV0dXJuIHN1bSUxMTtcblx0XHR9LFxuXHRcdG1vZDEwOiBmdW5jdGlvbihzdW0pIHtcblx0XHRcdHJldHVybiBzdW0lMTA7XG5cdFx0fSxcblx0XHRtb2Q5OiBmdW5jdGlvbihzdW0pIHtcblx0XHRcdHJldHVybiBzdW0lOTtcblx0XHR9XG5cdH0sXG5cdGV4cGVjdGVkRFY6IHtcblx0XHRtaW51c1Jlc3RPZjExOiBmdW5jdGlvbihyZXN0KSB7XG5cdFx0XHRyZXR1cm4gcmVzdCA8IDIgPyAwIDogMTEgLSByZXN0O1xuXHRcdH0sXG5cdFx0bWludXNSZXN0T2YxMXYyOiBmdW5jdGlvbihyZXN0KSB7XG5cdFx0XHRyZXR1cm4gcmVzdCA8IDIgPyAxMSAtIHJlc3QgLSAxMCA6IDExIC0gcmVzdDtcblx0XHR9LFxuXHRcdG1pbnVzUmVzdE9mMTA6IGZ1bmN0aW9uKHJlc3QpIHtcblx0XHRcdHJldHVybiByZXN0IDwgMSA/IDAgOiAxMCAtIHJlc3Q7XG5cdFx0fSxcblx0XHRtb2QxMDogZnVuY3Rpb24ocmVzdCkge1xuXHRcdFx0cmV0dXJuIHJlc3QlMTA7XG5cdFx0fSxcblx0XHRnb1NwZWM6IGZ1bmN0aW9uKHJlc3QsIGhhbmRsZWRTdHIpIHtcblx0XHRcdHZhciByZWYgPSBoYW5kbGVkU3RyLmpvaW4oJycpO1xuXHRcdFx0aWYgKHJlc3QgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIHJlZiA+PSAnMTAxMDMxMDUwJyAmJiByZWYgPD0gJzEwMTE5OTk3OScgPyAxIDogMDtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN0ID09PSAwID8gMCA6IDExIC0gcmVzdDtcblx0XHR9LFxuXHRcdGFwU3BlYzogZnVuY3Rpb24ocmVzdCwgaGFuZGxlZFN0cikge1xuXHRcdFx0dmFyIHJlZiA9IGhhbmRsZWRTdHIuam9pbignJyk7XG5cdFx0XHRpZiAocmVzdCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gcmVmID49ICcwMzAxNzAwMTAnICYmIHJlZiA8PSAnMDMwMTkwMjI5JyA/IDEgOiAwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3QgPT09IDEgPyAwIDogMTEgLSByZXN0O1xuXHRcdH0sXG5cdFx0dm9pZEZuOiBmdW5jdGlvbihyZXN0KSB7XG5cdFx0XHRyZXR1cm4gcmVzdDtcblx0XHR9XG5cdH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25zIHtcbiAqICAgICBwZXNvczogQXJyYXkgb2YgdmFsdWVzIHVzZWQgdG8gb3BlcmF0ZSBpbiBzdW0gc3RlcFxuICogICAgIGR2UG9zOiBQb3NpdGlvbiBvZiB0aGUgRFYgdG8gdmFsaWRhdGUgY29uc2lkZXJpbmcgdGhlIGhhbmRsZWRTdHJcbiAqICAgICBhbGdvcml0aG1TdGVwczogVGhlIGZvdXIgRFYncyB2YWxpZGF0aW9uIGFsZ29yaXRobSBzdGVwcyBuYW1lc1xuICogfVxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZURWKHZhbHVlLCBvcHRpb25zKSB7XG5cdHZhciBzdGVwcyA9IG9wdGlvbnMuYWxnb3JpdGhtU3RlcHM7XG5cblx0Ly8gU3RlcCAwMTogSGFuZGxlIFN0cmluZ1xuXHR2YXIgaGFuZGxlZFN0ciA9IGFsZ29yaXRobVN0ZXBzLmhhbmRsZVN0cltzdGVwc1swXV0odmFsdWUpO1xuXG5cdC8vIFN0ZXAgMDI6IFN1bSBjaGFyc1xuXHR2YXIgc3VtID0gYWxnb3JpdGhtU3RlcHMuc3VtW3N0ZXBzWzFdXShoYW5kbGVkU3RyLCBvcHRpb25zLnBlc29zKTtcblxuXHQvLyBTdGVwIDAzOiBSZXN0IGNhbGN1bGF0aW9uXG5cdHZhciByZXN0ID0gYWxnb3JpdGhtU3RlcHMucmVzdFtzdGVwc1syXV0oc3VtKTtcblxuXHQvLyBGaXhlZCBTdGVwOiBHZXQgY3VycmVudCBEVlxuXHR2YXIgY3VycmVudERWID0gcGFyc2VJbnQoaGFuZGxlZFN0cltvcHRpb25zLmR2cG9zXSk7XG5cblx0Ly8gU3RlcCAwNDogRXhwZWN0ZWQgRFYgY2FsY3VsYXRpb25cblx0dmFyIGV4cGVjdGVkRFYgPSBhbGdvcml0aG1TdGVwcy5leHBlY3RlZERWW3N0ZXBzWzNdXShyZXN0LCBoYW5kbGVkU3RyKTtcblxuXHQvLyBGaXhlZCBzdGVwOiBEViB2ZXJpZmljYXRpb25cblx0cmV0dXJuIGN1cnJlbnREViA9PT0gZXhwZWN0ZWREVjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVJRSh2YWx1ZSwgcnVsZSkge1xuXHRpZiAocnVsZS5tYXRjaCAmJiAhcnVsZS5tYXRjaC50ZXN0KHZhbHVlKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGUuZHZzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJz4+ID4+IGR2JytpKTtcblx0XHRpZiAoIXZhbGlkYXRlRFYodmFsdWUsIHJ1bGUuZHZzW2ldKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuSUVydWxlcy5QRSA9IFt7XG5cdC8vbWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAtMDAnKSxcblx0Y2hhcnM6IDksXG5cdGR2czogW3tcblx0XHRkdnBvczogNyxcblx0XHRwZXNvczogWzgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fSx7XG5cdFx0ZHZwb3M6IDgsXG5cdFx0cGVzb3M6IFs5LDgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn0se1xuXHQvLyBtYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAuMC4wMDAuMDAwMDAwMC0wJyksXG5cdGNoYXJzOiAxNCxcblx0cGVzb3M6IFtbMSwyLDMsNCw1LDksOCw3LDYsNSw0LDMsMl1dLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDEzLFxuXHRcdHBlc29zOiBbNSw0LDMsMiwxLDksOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTF2MiddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuSUVydWxlcy5SUyA9IFt7XG5cdC8vIG1hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAvMDAwMDAwMCcpLFxuXHRjaGFyczogMTAsXG5cdGR2czogW3tcblx0XHRkdnBvczogOSxcblx0XHRwZXNvczogWzIsOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuSUVydWxlcy5BQyA9IFt7XG5cdC8vIG1hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMC4wMDAuMDAwLzAwMC0wMCcpLFxuXHRjaGFyczogMTMsXG5cdG1hdGNoOiAvXjAxLyxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiAxMSxcblx0XHRwZXNvczogWzQsMywyLDksOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9LHtcblx0XHRkdnBvczogMTIsXG5cdFx0cGVzb3M6IFs1LDQsMywyLDksOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cbklFcnVsZXMuTUcgPSBbe1xuXHQvLyBtYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwLjAwMC4wMDAvMDAwMCcpLFxuXHRjaGFyczogMTMsXG5cdGR2czogW3tcblx0XHRkdnBvczogMTIsXG5cdFx0cGVzb3M6IFsxLDIsMSwyLDEsMiwxLDIsMSwyLDEsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnbWdTcGVjJywgJ2luZGl2aWR1YWxTdW0nLCAnbW9kMTAnLCAnbWludXNSZXN0T2YxMCddXG5cdH0se1xuXHRcdGR2cG9zOiAxMixcblx0XHRwZXNvczogWzMsMiwxMSwxMCw5LDgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLlNQID0gW3tcblx0Ly8gbWFzazogbmV3IFN0cmluZ01hc2soJzAwMC4wMDAuMDAwLjAwMCcpLFxuXHRjaGFyczogMTIsXG5cdG1hdGNoOiAvXlswLTldLyxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA4LFxuXHRcdHBlc29zOiBbMSwzLDQsNSw2LDcsOCwxMF0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21vZDEwJ11cblx0fSx7XG5cdFx0ZHZwb3M6IDExLFxuXHRcdHBlc29zOiBbMywyLDEwLDksOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21vZDEwJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn0se1xuXHQvLyBtYXNrOiBuZXcgU3RyaW5nTWFzaygnUC0wMDAwMDAwMC4wLzAwMCcpXG5cdGNoYXJzOiAxMixcblx0bWF0Y2g6IC9eUC9pLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDgsXG5cdFx0cGVzb3M6IFsxLDMsNCw1LDYsNyw4LDEwXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbW9kMTAnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cbklFcnVsZXMuREYgPSBbe1xuXHQvLyBtYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAwMDAtMDAnKSxcblx0Y2hhcnM6IDEzLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDExLFxuXHRcdHBlc29zOiBbNCwzLDIsOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH0se1xuXHRcdGR2cG9zOiAxMixcblx0XHRwZXNvczogWzUsNCwzLDIsOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuSUVydWxlcy5FUyA9IFt7XG5cdC8vIG1hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAuMDAwLjAwLTAnKVxuXHRjaGFyczogOSxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA4LFxuXHRcdHBlc29zOiBbOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuSUVydWxlcy5CQSA9IFt7XG5cdC8vIG1hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAtMDAnKVxuXHRjaGFyczogOCxcblx0bWF0Y2g6IC9eWzAxMjM0NThdLyxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA3LFxuXHRcdHBlc29zOiBbNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMCcsICdtaW51c1Jlc3RPZjEwJ11cblx0fSx7XG5cdFx0ZHZwb3M6IDYsXG5cdFx0cGVzb3M6IFs4LDcsNiw1LDQsMywwLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMCcsICdtaW51c1Jlc3RPZjEwJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn0se1xuXHRjaGFyczogOCxcblx0bWF0Y2g6IC9eWzY3OV0vLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDcsXG5cdFx0cGVzb3M6IFs3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9LHtcblx0XHRkdnBvczogNixcblx0XHRwZXNvczogWzgsNyw2LDUsNCwzLDAsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufSx7XG5cdC8vIG1hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwLTAwJylcblx0Y2hhcnM6IDksXG5cdG1hdGNoOiAvXlswLTldWzAxMjM0NThdLyxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA4LFxuXHRcdHBlc29zOiBbOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDEwJywgJ21pbnVzUmVzdE9mMTAnXVxuXHR9LHtcblx0XHRkdnBvczogNyxcblx0XHRwZXNvczogWzksOCw3LDYsNSw0LDMsMCwyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTAnLCAnbWludXNSZXN0T2YxMCddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59LHtcblx0Y2hhcnM6IDksXG5cdG1hdGNoOiAvXlswLTldWzY3OV0vLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDgsXG5cdFx0cGVzb3M6IFs4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH0se1xuXHRcdGR2cG9zOiA3LFxuXHRcdHBlc29zOiBbOSw4LDcsNiw1LDQsMywwLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLkFNID0gW3tcblx0Ly9tYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAuMDAwLjAwMC0wJylcblx0Y2hhcnM6IDksXG5cdGR2czogW3tcblx0XHRkdnBvczogOCxcblx0XHRwZXNvczogWzksOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cbklFcnVsZXMuUk4gPSBbe1xuXHQvLyB7bWFzazogbmV3IFN0cmluZ01hc2soJzAwLjAwMC4wMDAtMCcpXG5cdGNoYXJzOiA5LFxuXHRtYXRjaDogL14yMC8sXG5cdGR2czogW3tcblx0XHRkdnBvczogOCxcblx0XHRwZXNvczogWzksOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufSx7XG5cdC8vIHttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAuMC4wMDAuMDAwLTAnKSwgY2hhcnM6IDEwfVxuXHRjaGFyczogMTAsXG5cdG1hdGNoOiAvXjIwLyxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA4LFxuXHRcdHBlc29zOiBbMTAsOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuSUVydWxlcy5STyA9IFt7XG5cdC8vIG1hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwMDAwMDAwLTAnKVxuXHRjaGFyczogMTQsXG5cdGR2czogW3tcblx0XHRkdnBvczogMTMsXG5cdFx0cGVzb3M6IFs2LDUsNCwzLDIsOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuSUVydWxlcy5QUiA9IFt7XG5cdC8vIG1hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwMC0wMCcpXG5cdGNoYXJzOiAxMCxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA4LFxuXHRcdHBlc29zOiBbMywyLDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH0se1xuXHRcdGR2cG9zOiA5LFxuXHRcdHBlc29zOiBbNCwzLDIsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLlNDID0gW3tcblx0Ly8ge21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAuMDAwLjAwMCcpLCB1ZjogJ1NBTlRBIENBVEFSSU5BJ31cblx0Y2hhcnM6IDksXG5cdGR2czogW3tcblx0XHRkdnBvczogOCxcblx0XHRwZXNvczogWzksOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cbklFcnVsZXMuUkogPSBbe1xuXHQvLyB7bWFzazogbmV3IFN0cmluZ01hc2soJzAwLjAwMC4wMC0wJyksIHVmOiAnUklPIERFIEpBTkVJUk8nfVxuXHRjaGFyczogOCxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA3LFxuXHRcdHBlc29zOiBbMiw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cbklFcnVsZXMuUEEgPSBbe1xuXHQvLyB7bWFzazogbmV3IFN0cmluZ01hc2soJzAwLTAwMDAwMC0wJylcblx0Y2hhcnM6IDksXG5cdG1hdGNoOiAvXjE1Lyxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA4LFxuXHRcdHBlc29zOiBbOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuSUVydWxlcy5TRSA9IFt7XG5cdC8vIHttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAtMCcpXG5cdGNoYXJzOiA5LFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDgsXG5cdFx0cGVzb3M6IFs5LDgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLlBCID0gW3tcblx0Ly8ge21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwMC0wJylcblx0Y2hhcnM6IDksXG5cdGR2czogW3tcblx0XHRkdnBvczogOCxcblx0XHRwZXNvczogWzksOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cbklFcnVsZXMuQ0UgPSBbe1xuXHQvLyB7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwLTAnKVxuXHRjaGFyczogOSxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA4LFxuXHRcdHBlc29zOiBbOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuSUVydWxlcy5QSSA9IFt7XG5cdC8vIHttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAwJylcblx0Y2hhcnM6IDksXG5cdGR2czogW3tcblx0XHRkdnBvczogOCxcblx0XHRwZXNvczogWzksOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cbklFcnVsZXMuTUEgPSBbe1xuXHQvLyB7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwMCcpXG5cdGNoYXJzOiA5LFxuXHRtYXRjaDogL14xMi8sXG5cdGR2czogW3tcblx0XHRkdnBvczogOCxcblx0XHRwZXNvczogWzksOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cbklFcnVsZXMuTVQgPSBbe1xuXHQvLyB7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwMDAtMCcpXG5cdGNoYXJzOiAxMSxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiAxMCxcblx0XHRwZXNvczogWzMsMiw5LDgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLk1TID0gW3tcblx0Ly8ge21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwMDAnKVxuXHRjaGFyczogOSxcblx0bWF0Y2g6IC9eMjgvLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDgsXG5cdFx0cGVzb3M6IFs5LDgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLlRPID0gW3tcblx0Ly8ge21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwMDAwMCcpLFxuXHRjaGFyczogMTEsXG5cdG1hdGNoOiAvXlswLTldezJ9KCgwWzEyM10pfCg5OSkpLyxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiAxMCxcblx0XHRwZXNvczogWzksOCwwLDAsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLkFMID0gW3tcblx0Ly8ge21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwMDAnKVxuXHRjaGFyczogOSxcblx0bWF0Y2g6IC9eMjRbMDM1NzhdLyxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA4LFxuXHRcdHBlc29zOiBbOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuSUVydWxlcy5SUiA9IFt7XG5cdC8vIHttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAtMCcpXG5cdGNoYXJzOiA5LFxuXHRtYXRjaDogL14yNC8sXG5cdGR2czogW3tcblx0XHRkdnBvczogOCxcblx0XHRwZXNvczogWzEsMiwzLDQsNSw2LDcsOF0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDknLCAndm9pZEZuJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLkdPID0gW3tcblx0Ly8ge21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMC4wMDAuMDAwLTAnKVxuXHRjaGFyczogOSxcblx0bWF0Y2g6IC9eMVswMTVdLyxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA4LFxuXHRcdHBlc29zOiBbOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnZ29TcGVjJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLkFQID0gW3tcblx0Ly8ge21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwMDAnKVxuXHRjaGFyczogOSxcblx0bWF0Y2g6IC9eMDMvLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDgsXG5cdFx0cGVzb3M6IFs5LDgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ2FwU3BlYycsICdtb2QxMScsICdhcFNwZWMnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cblx0cmV0dXJuIHtcblx0XHRpZTogSUUsXG5cdFx0Y3BmOiBDUEYsXG5cdFx0Y25wajogQ05QSlxuXHR9O1xufSkpOyIsIihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAgICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgICAgIC8vIGxpa2UgTm9kZS5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICAgICAgcm9vdC5TdHJpbmdNYXNrID0gZmFjdG9yeSgpO1xuICAgIH1cbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRva2VucyA9IHtcbiAgICAgICAgJzAnOiB7cGF0dGVybjogL1xcZC8sIF9kZWZhdWx0OiAnMCd9LFxuICAgICAgICAnOSc6IHtwYXR0ZXJuOiAvXFxkLywgb3B0aW9uYWw6IHRydWV9LFxuICAgICAgICAnIyc6IHtwYXR0ZXJuOiAvXFxkLywgb3B0aW9uYWw6IHRydWUsIHJlY3Vyc2l2ZTogdHJ1ZX0sXG4gICAgICAgICdBJzoge3BhdHRlcm46IC9bYS16QS1aMC05XS99LFxuICAgICAgICAnUyc6IHtwYXR0ZXJuOiAvW2EtekEtWl0vfSxcbiAgICAgICAgJ1UnOiB7cGF0dGVybjogL1thLXpBLVpdLywgdHJhbnNmb3JtOiBmdW5jdGlvbihjKSB7IHJldHVybiBjLnRvTG9jYWxlVXBwZXJDYXNlKCk7IH19LFxuICAgICAgICAnTCc6IHtwYXR0ZXJuOiAvW2EtekEtWl0vLCB0cmFuc2Zvcm06IGZ1bmN0aW9uKGMpIHsgcmV0dXJuIGMudG9Mb2NhbGVMb3dlckNhc2UoKTsgfX0sXG4gICAgICAgICckJzoge2VzY2FwZTogdHJ1ZX1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaXNFc2NhcGVkKHBhdHRlcm4sIHBvcykge1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICB2YXIgaSA9IHBvcyAtIDE7XG4gICAgICAgIHZhciB0b2tlbiA9IHtlc2NhcGU6IHRydWV9O1xuICAgICAgICB3aGlsZSAoaSA+PSAwICYmIHRva2VuICYmIHRva2VuLmVzY2FwZSkge1xuICAgICAgICAgICAgdG9rZW4gPSB0b2tlbnNbcGF0dGVybi5jaGFyQXQoaSldO1xuICAgICAgICAgICAgY291bnQgKz0gdG9rZW4gJiYgdG9rZW4uZXNjYXBlID8gMSA6IDA7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50ID4gMCAmJiBjb3VudCAlIDIgPT09IDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY09wdGlvbmFsTnVtYmVyc1RvVXNlKHBhdHRlcm4sIHZhbHVlKSB7XG4gICAgICAgIHZhciBudW1iZXJzSW5QID0gcGF0dGVybi5yZXBsYWNlKC9bXjBdL2csJycpLmxlbmd0aDtcbiAgICAgICAgdmFyIG51bWJlcnNJblYgPSB2YWx1ZS5yZXBsYWNlKC9bXlxcZF0vZywnJykubGVuZ3RoO1xuICAgICAgICByZXR1cm4gbnVtYmVyc0luViAtIG51bWJlcnNJblA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uY2F0Q2hhcih0ZXh0LCBjaGFyYWN0ZXIsIG9wdGlvbnMsIHRva2VuKSB7XG4gICAgICAgIGlmICh0b2tlbiAmJiB0eXBlb2YgdG9rZW4udHJhbnNmb3JtID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXIgPSB0b2tlbi50cmFuc2Zvcm0oY2hhcmFjdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5yZXZlcnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hhcmFjdGVyICsgdGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dCArIGNoYXJhY3RlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNNb3JlVG9rZW5zKHBhdHRlcm4sIHBvcywgaW5jKSB7XG4gICAgICAgIHZhciBwYyA9IHBhdHRlcm4uY2hhckF0KHBvcyk7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1twY107XG4gICAgICAgIGlmIChwYyA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW4gJiYgIXRva2VuLmVzY2FwZSA/IHRydWUgOiBoYXNNb3JlVG9rZW5zKHBhdHRlcm4sIHBvcyArIGluYywgaW5jKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNNb3JlUmVjdXJzaXZlVG9rZW5zKHBhdHRlcm4sIHBvcywgaW5jKSB7XG4gICAgICAgIHZhciBwYyA9IHBhdHRlcm4uY2hhckF0KHBvcyk7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1twY107XG4gICAgICAgIGlmIChwYyA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW4gJiYgdG9rZW4ucmVjdXJzaXZlID8gdHJ1ZSA6IGhhc01vcmVSZWN1cnNpdmVUb2tlbnMocGF0dGVybiwgcG9zICsgaW5jLCBpbmMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc2VydENoYXIodGV4dCwgY2hhciwgcG9zaXRpb24pIHtcbiAgICAgICAgdmFyIHQgPSB0ZXh0LnNwbGl0KCcnKTtcbiAgICAgICAgdC5zcGxpY2UocG9zaXRpb24sIDAsIGNoYXIpO1xuICAgICAgICByZXR1cm4gdC5qb2luKCcnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTdHJpbmdNYXNrKHBhdHRlcm4sIG9wdCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHQgfHwge307XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJldmVyc2U6IHRoaXMub3B0aW9ucy5yZXZlcnNlIHx8IGZhbHNlLFxuICAgICAgICAgICAgdXNlZGVmYXVsdHM6IHRoaXMub3B0aW9ucy51c2VkZWZhdWx0cyB8fCB0aGlzLm9wdGlvbnMucmV2ZXJzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuICAgIH1cblxuICAgIFN0cmluZ01hc2sucHJvdG90eXBlLnByb2Nlc3MgPSBmdW5jdGlvbiBwcm9jY2Vzcyh2YWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4ge3Jlc3VsdDogJycsIHZhbGlkOiBmYWxzZX07XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSB2YWx1ZSArICcnO1xuICAgICAgICB2YXIgcGF0dGVybjIgPSB0aGlzLnBhdHRlcm47XG4gICAgICAgIHZhciB2YWxpZCA9IHRydWU7XG4gICAgICAgIHZhciBmb3JtYXR0ZWQgPSAnJztcbiAgICAgICAgdmFyIHZhbHVlUG9zID0gdGhpcy5vcHRpb25zLnJldmVyc2UgPyB2YWx1ZS5sZW5ndGggLSAxIDogMDtcbiAgICAgICAgdmFyIHBhdHRlcm5Qb3MgPSAwO1xuICAgICAgICB2YXIgb3B0aW9uYWxOdW1iZXJzVG9Vc2UgPSBjYWxjT3B0aW9uYWxOdW1iZXJzVG9Vc2UocGF0dGVybjIsIHZhbHVlKTtcbiAgICAgICAgdmFyIGVzY2FwZU5leHQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHJlY3Vyc2l2ZSA9IFtdO1xuICAgICAgICB2YXIgaW5SZWN1cnNpdmVNb2RlID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIHN0ZXBzID0ge1xuICAgICAgICAgICAgc3RhcnQ6IHRoaXMub3B0aW9ucy5yZXZlcnNlID8gcGF0dGVybjIubGVuZ3RoIC0gMSA6IDAsXG4gICAgICAgICAgICBlbmQ6IHRoaXMub3B0aW9ucy5yZXZlcnNlID8gLTEgOiBwYXR0ZXJuMi5sZW5ndGgsXG4gICAgICAgICAgICBpbmM6IHRoaXMub3B0aW9ucy5yZXZlcnNlID8gLTEgOiAxXG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gY29udGludWVDb25kaXRpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKCFpblJlY3Vyc2l2ZU1vZGUgJiYgIXJlY3Vyc2l2ZS5sZW5ndGggJiYgaGFzTW9yZVRva2VucyhwYXR0ZXJuMiwgcGF0dGVyblBvcywgc3RlcHMuaW5jKSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnRpbnVlIGluIHRoZSBub3JtYWwgaXRlcmF0aW9uXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpblJlY3Vyc2l2ZU1vZGUgJiYgcmVjdXJzaXZlLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgIGhhc01vcmVSZWN1cnNpdmVUb2tlbnMocGF0dGVybjIsIHBhdHRlcm5Qb3MsIHN0ZXBzLmluYykpIHtcbiAgICAgICAgICAgICAgICAvLyBjb250aW51ZSBsb29raW5nIGZvciB0aGUgcmVjdXJzaXZlIHRva2Vuc1xuICAgICAgICAgICAgICAgIC8vIE5vdGU6IGFsbCBjaGFycyBpbiB0aGUgcGF0dGVybnMgYWZ0ZXIgdGhlIHJlY3Vyc2l2ZSBwb3J0aW9uIHdpbGwgYmUgaGFuZGxlZCBhcyBzdGF0aWMgc3RyaW5nXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpblJlY3Vyc2l2ZU1vZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBzdGFydCB0byBoYW5kbGUgdGhlIHJlY3Vyc2l2ZSBwb3J0aW9uIG9mIHRoZSBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgaW5SZWN1cnNpdmVNb2RlID0gcmVjdXJzaXZlLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpblJlY3Vyc2l2ZU1vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGMgPSByZWN1cnNpdmUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICByZWN1cnNpdmUucHVzaChwYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucmV2ZXJzZSAmJiB2YWx1ZVBvcyA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5Qb3MrKztcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjIgPSBpbnNlcnRDaGFyKHBhdHRlcm4yLCBwYywgcGF0dGVyblBvcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMucmV2ZXJzZSAmJiB2YWx1ZVBvcyA8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuMiA9IGluc2VydENoYXIocGF0dGVybjIsIHBjLCBwYXR0ZXJuUG9zKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm5Qb3MgPCBwYXR0ZXJuMi5sZW5ndGggJiYgcGF0dGVyblBvcyA+PSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0ZXJhdGUgb3ZlciB0aGUgcGF0dGVybidzIGNoYXJzIHBhcnNpbmcvbWF0Y2hpbmcgdGhlIGlucHV0IHZhbHVlIGNoYXJzXG4gICAgICAgICAqIHVudGlsIHRoZSBlbmQgb2YgdGhlIHBhdHRlcm4uIElmIHRoZSBwYXR0ZXJuIGVuZHMgd2l0aCByZWN1cnNpdmUgY2hhcnNcbiAgICAgICAgICogdGhlIGl0ZXJhdGlvbiB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RlOiBUaGUgaXRlcmF0aW9uIG11c3Qgc3RvcCBpZiBhbiBpbnZhbGlkIGNoYXIgaXMgZm91bmQuXG4gICAgICAgICAqL1xuICAgICAgICBmb3IgKHBhdHRlcm5Qb3MgPSBzdGVwcy5zdGFydDsgY29udGludWVDb25kaXRpb24odGhpcy5vcHRpb25zKTsgcGF0dGVyblBvcyA9IHBhdHRlcm5Qb3MgKyBzdGVwcy5pbmMpIHtcbiAgICAgICAgICAgIC8vIFZhbHVlIGNoYXJcbiAgICAgICAgICAgIHZhciB2YyA9IHZhbHVlLmNoYXJBdCh2YWx1ZVBvcyk7XG4gICAgICAgICAgICAvLyBQYXR0ZXJuIGNoYXIgdG8gbWF0Y2ggd2l0aCB0aGUgdmFsdWUgY2hhclxuICAgICAgICAgICAgdmFyIHBjID0gcGF0dGVybjIuY2hhckF0KHBhdHRlcm5Qb3MpO1xuXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbcGNdO1xuICAgICAgICAgICAgaWYgKHJlY3Vyc2l2ZS5sZW5ndGggJiYgdG9rZW4gJiYgIXRva2VuLnJlY3Vyc2l2ZSkge1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSByZWN1cnNpdmUgcG9ydGlvbiBvZiB0aGUgcGF0dGVybjogdG9rZW5zIG5vdCByZWN1cnNpdmUgbXVzdCBiZSBzZWVuIGFzIHN0YXRpYyBjaGFyc1xuICAgICAgICAgICAgICAgIHRva2VuID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gMS4gSGFuZGxlIGVzY2FwZSB0b2tlbnMgaW4gcGF0dGVyblxuICAgICAgICAgICAgLy8gZ28gdG8gbmV4dCBpdGVyYXRpb246IGlmIHRoZSBwYXR0ZXJuIGNoYXIgaXMgYSBlc2NhcGUgY2hhciBvciB3YXMgZXNjYXBlZFxuICAgICAgICAgICAgaWYgKCFpblJlY3Vyc2l2ZU1vZGUgfHwgdmMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJldmVyc2UgJiYgaXNFc2NhcGVkKHBhdHRlcm4yLCBwYXR0ZXJuUG9zKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBwYXR0ZXJuIGNoYXIgaXMgZXNjYXBlZCwganVzdCBhZGQgaXQgYW5kIG1vdmUgb25cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gY29uY2F0Q2hhcihmb3JtYXR0ZWQsIHBjLCB0aGlzLm9wdGlvbnMsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2tpcCBlc2NhcGUgdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgcGF0dGVyblBvcyA9IHBhdHRlcm5Qb3MgKyBzdGVwcy5pbmM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5yZXZlcnNlICYmIGVzY2FwZU5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0dGVybiBjaGFyIGlzIGVzY2FwZWQsIGp1c3QgYWRkIGl0IGFuZCBtb3ZlIG9uXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZCA9IGNvbmNhdENoYXIoZm9ybWF0dGVkLCBwYywgdGhpcy5vcHRpb25zLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZU5leHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vcHRpb25zLnJldmVyc2UgJiYgdG9rZW4gJiYgdG9rZW4uZXNjYXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmsgdG8gZXNjYXBlIHRoZSBuZXh0IHBhdHRlcm4gY2hhclxuICAgICAgICAgICAgICAgICAgICBlc2NhcGVOZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAyLiBIYW5kbGUgcmVjdXJzaXZlIHRva2VucyBpbiBwYXR0ZXJuXG4gICAgICAgICAgICAvLyBnbyB0byBuZXh0IGl0ZXJhdGlvbjogaWYgdGhlIHZhbHVlIHN0ciBpcyBmaW5pc2hlZCBvclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgIGlmIHRoZXJlIGlzIGEgbm9ybWFsIHRva2VuIGluIHRoZSByZWN1cnNpdmUgcG9ydGlvbiBvZiB0aGUgcGF0dGVyblxuICAgICAgICAgICAgaWYgKCFpblJlY3Vyc2l2ZU1vZGUgJiYgdG9rZW4gJiYgdG9rZW4ucmVjdXJzaXZlKSB7XG4gICAgICAgICAgICAgICAgLy8gc2F2ZSBpdCB0byByZXBlYXQgaW4gdGhlIGVuZCBvZiB0aGUgcGF0dGVybiBhbmQgaGFuZGxlIHRoZSB2YWx1ZSBjaGFyIG5vd1xuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZS5wdXNoKHBjKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5SZWN1cnNpdmVNb2RlICYmICF2Yykge1xuICAgICAgICAgICAgICAgIC8vIGluIHJlY3Vyc2l2ZSBtb2RlIGJ1dCB2YWx1ZSBpcyBmaW5pc2hlZC4gQWRkIHRoZSBwYXR0ZXJuIGNoYXIgaWYgaXQgaXMgbm90IGEgcmVjdXJzaXZlIHRva2VuXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gY29uY2F0Q2hhcihmb3JtYXR0ZWQsIHBjLCB0aGlzLm9wdGlvbnMsIHRva2VuKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWluUmVjdXJzaXZlTW9kZSAmJiByZWN1cnNpdmUubGVuZ3RoID4gMCAmJiAhdmMpIHtcbiAgICAgICAgICAgICAgICAvLyByZWN1cnNpdmVNb2RlIG5vdCBzdGFydGVkIGJ1dCBhbHJlYWR5IGluIHRoZSByZWN1cnNpdmUgcG9ydGlvbiBvZiB0aGUgcGF0dGVyblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAzLiBIYW5kbGUgdGhlIHZhbHVlXG4gICAgICAgICAgICAvLyBicmVhayBpdGVyYXRpb25zOiBpZiB2YWx1ZSBpcyBpbnZhbGlkIGZvciB0aGUgZ2l2ZW4gcGF0dGVyblxuICAgICAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgICAgIC8vIGFkZCBjaGFyIG9mIHRoZSBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gY29uY2F0Q2hhcihmb3JtYXR0ZWQsIHBjLCB0aGlzLm9wdGlvbnMsIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAoIWluUmVjdXJzaXZlTW9kZSAmJiByZWN1cnNpdmUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgaXQgdG8gcmVwZWF0IGluIHRoZSBlbmQgb2YgdGhlIHBhdHRlcm5cbiAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlLnB1c2gocGMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0b2tlbiBpcyBvcHRpb25hbCwgb25seSBhZGQgdGhlIHZhbHVlIGNoYXIgaWYgaXQgbWF0Y2hzIHRoZSB0b2tlbiBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgIGlmIG5vdCwgbW92ZSBvbiB0byB0aGUgbmV4dCBwYXR0ZXJuIGNoYXJcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybi50ZXN0KHZjKSAmJiBvcHRpb25hbE51bWJlcnNUb1VzZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQgPSBjb25jYXRDaGFyKGZvcm1hdHRlZCwgdmMsIHRoaXMub3B0aW9ucywgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVBvcyA9IHZhbHVlUG9zICsgc3RlcHMuaW5jO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbE51bWJlcnNUb1VzZS0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjdXJzaXZlLmxlbmd0aCA+IDAgJiYgdmMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2tlbi5wYXR0ZXJuLnRlc3QodmMpKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdG9rZW4gaXNuJ3Qgb3B0aW9uYWwgdGhlIHZhbHVlIGNoYXIgbXVzdCBtYXRjaCB0aGUgdG9rZW4gcGF0dGVyblxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZCA9IGNvbmNhdENoYXIoZm9ybWF0dGVkLCB2YywgdGhpcy5vcHRpb25zLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgdmFsdWVQb3MgPSB2YWx1ZVBvcyArIHN0ZXBzLmluYztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXZjICYmIHRva2VuLl9kZWZhdWx0ICYmIHRoaXMub3B0aW9ucy51c2VkZWZhdWx0cykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB0b2tlbiBpc24ndCBvcHRpb25hbCBhbmQgaGFzIGEgZGVmYXVsdCB2YWx1ZSwgdXNlIGl0IGlmIHRoZSB2YWx1ZSBpcyBmaW5pc2hlZFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZCA9IGNvbmNhdENoYXIoZm9ybWF0dGVkLCB0b2tlbi5fZGVmYXVsdCwgdGhpcy5vcHRpb25zLCB0b2tlbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBzdHJpbmcgdmFsdWUgZG9uJ3QgbWF0Y2ggdGhlIGdpdmVuIHBhdHRlcm5cbiAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtyZXN1bHQ6IGZvcm1hdHRlZCwgdmFsaWQ6IHZhbGlkfTtcbiAgICB9O1xuXG4gICAgU3RyaW5nTWFzay5wcm90b3R5cGUuYXBwbHkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzKHZhbHVlKS5yZXN1bHQ7XG4gICAgfTtcblxuICAgIFN0cmluZ01hc2sucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzcyh2YWx1ZSkudmFsaWQ7XG4gICAgfTtcblxuICAgIFN0cmluZ01hc2sucHJvY2VzcyA9IGZ1bmN0aW9uKHZhbHVlLCBwYXR0ZXJuLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgU3RyaW5nTWFzayhwYXR0ZXJuLCBvcHRpb25zKS5wcm9jZXNzKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgU3RyaW5nTWFzay5hcHBseSA9IGZ1bmN0aW9uKHZhbHVlLCBwYXR0ZXJuLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgU3RyaW5nTWFzayhwYXR0ZXJuLCBvcHRpb25zKS5hcHBseSh2YWx1ZSk7XG4gICAgfTtcblxuICAgIFN0cmluZ01hc2sudmFsaWRhdGUgPSBmdW5jdGlvbih2YWx1ZSwgcGF0dGVybiwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFN0cmluZ01hc2socGF0dGVybiwgb3B0aW9ucykudmFsaWRhdGUodmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU3RyaW5nTWFzaztcbn0pKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYW5ndWxhci5mbHVpZycsIFtcbiAgICByZXF1aXJlKCcuL2dsb2JhbC9nbG9iYWwtbWFza3MnKSxcbiAgICByZXF1aXJlKCcuL2JyL2JyLW1hc2tzJyksXG4gICAgcmVxdWlyZSgnLi9mbHVpZy9mbHVpZy11aScpLFxuICAgIHJlcXVpcmUoJy4vZmlsdGVycy9maWx0ZXInKVxuXSkubmFtZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBTdHJpbmdNYXNrID0gcmVxdWlyZSgnc3RyaW5nLW1hc2snKTtcbnZhciBtYXNrRmFjdG9yeSA9IHJlcXVpcmUoJ21hc2stZmFjdG9yeScpO1xuXG52YXIgYm9sZXRvQmFuY2FyaW9NYXNrID0gbmV3IFN0cmluZ01hc2soJzAwMDAwLjAwMDAwIDAwMDAwLjAwMDAwMCAwMDAwMC4wMDAwMDAgMCAwMDAwMDAwMDAwMDAwMCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGlyZWN0aXZlOiBtYXNrRmFjdG9yeSh7XG5cdFx0Y2xlYXJWYWx1ZTogZnVuY3Rpb24gKHJhd1ZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gcmF3VmFsdWUucmVwbGFjZSgvW14wLTldL2csICcnKS5zbGljZSgwLCA0Nyk7XG5cdFx0fSxcblx0XHRmb3JtYXQ6IGZ1bmN0aW9uIChjbGVhblZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gZm9ybWF0KGNsZWFuVmFsdWUpO1xuXHRcdH0sXG5cdFx0dmFsaWRhdGlvbnM6IHtcblx0XHRcdGJvbGV0b0JhbmNhcmlvOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gNDc7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KSxcblx0ZmlsdGVyOiBCb2xldG9CYW5jYXJpb0ZpbHRlclxufVxuXG5mdW5jdGlvbiBmb3JtYXQgKHZhbHVlKSB7XG5cdGlmICghdmFsdWUgfHwgdmFsdWUubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIGJvbGV0b0JhbmNhcmlvTWFzay5hcHBseSh2YWx1ZSkucmVwbGFjZSgvW14wLTldJC8sICcnKTtcbn1cblxuZnVuY3Rpb24gQm9sZXRvQmFuY2FyaW9GaWx0ZXIoJGZpbHRlcikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0cmV0dXJuIGZvcm1hdChpbnB1dCk7XG5cdH07XG59XG5Cb2xldG9CYW5jYXJpb0ZpbHRlci4kaW5qZWN0ID0gWyckZmlsdGVyJ107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbSA9IGFuZ3VsYXIubW9kdWxlKCdmbHVpZy5tYXNrcy5icicsIFtcbiAgICAgICAgcmVxdWlyZSgnLi4vaGVscGVycycpLFxuICAgIF0pXG4gICAgLmRpcmVjdGl2ZSgnZmx1aWdCb2xldG9CYW5jYXJpb01hc2snLCByZXF1aXJlKCcuL2JvbGV0by1iYW5jYXJpby9ib2xldG8tYmFuY2FyaW8nKS5kaXJlY3RpdmUpXG4gICAgLmZpbHRlcignYm9sZXRvQmFuY2FyaW8nLCByZXF1aXJlKCcuL2JvbGV0by1iYW5jYXJpby9ib2xldG8tYmFuY2FyaW8nKS5maWx0ZXIpXG5cbiAgICAuZGlyZWN0aXZlKCdmbHVpZ0NlcE1hc2snLCByZXF1aXJlKCcuL2NlcC9jZXAnKS5kaXJlY3RpdmUpXG4gICAgLmZpbHRlcignY2VwJywgcmVxdWlyZSgnLi9jZXAvY2VwJykuZmlsdGVyKVxuXG4gICAgLmRpcmVjdGl2ZSgnZmx1aWdDbnBqTWFzaycsIHJlcXVpcmUoJy4vY25wai9jbnBqJykuZGlyZWN0aXZlKVxuICAgIC5maWx0ZXIoJ2NucGonLCByZXF1aXJlKCcuL2NucGovY25waicpLmZpbHRlcilcblxuICAgIC5kaXJlY3RpdmUoJ2ZsdWlnQ3BmTWFzaycsIHJlcXVpcmUoJy4vY3BmL2NwZicpLmRpcmVjdGl2ZSlcbiAgICAuZmlsdGVyKCdjcGYnLCByZXF1aXJlKCcuL2NwZi9jcGYnKS5maWx0ZXIpXG5cbiAgICAuZGlyZWN0aXZlKCdmbHVpZ0NwZkNucGpNYXNrJywgcmVxdWlyZSgnLi9jcGYtY25wai9jcGYtY25waicpLmRpcmVjdGl2ZSlcbiAgICAuZmlsdGVyKCdjcGZDbnBqJywgcmVxdWlyZSgnLi9jcGYtY25wai9jcGYtY25waicpLmZpbHRlcilcblxuICAgIC5kaXJlY3RpdmUoJ2ZsdWlnSWVNYXNrJywgcmVxdWlyZSgnLi9pbnNjcmljYW8tZXN0YWR1YWwvaWUnKSlcblxuICAgIC5kaXJlY3RpdmUoJ2ZsdWlnTmZlTWFzaycsIHJlcXVpcmUoJy4vbmZlL25mZScpLmRpcmVjdGl2ZSlcbiAgICAuZmlsdGVyKCduZmUnLCByZXF1aXJlKCcuL25mZS9uZmUnKS5maWx0ZXIpXG5cbiAgICAuZGlyZWN0aXZlKCdmbHVpZ0NhclBsYXRlTWFzaycsIHJlcXVpcmUoJy4vY2FyLXBsYXRlL2Nhci1wbGF0ZScpLmRpcmVjdGl2ZSlcbiAgICAuZmlsdGVyKCdjYXJQbGF0ZScsIHJlcXVpcmUoJy4vY2FyLXBsYXRlL2Nhci1wbGF0ZScpLmZpbHRlcilcblxuICAgIC5kaXJlY3RpdmUoJ2ZsdWlnQnJQaG9uZU1hc2snLCByZXF1aXJlKCcuL3Bob25lL2JyLXBob25lJykuZGlyZWN0aXZlKVxuICAgIC5maWx0ZXIoJ2JyUGhvbmUnLCByZXF1aXJlKCcuL3Bob25lL2JyLXBob25lJykuZmlsdGVyKVxuXG4gICAgXG4gICAgXG4gICAgXG5cbm1vZHVsZS5leHBvcnRzID0gbS5uYW1lOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFN0cmluZ01hc2sgPSByZXF1aXJlKCdzdHJpbmctbWFzaycpO1xudmFyIG1hc2tGYWN0b3J5ID0gcmVxdWlyZSgnbWFzay1mYWN0b3J5Jyk7XG5cbnZhciBjYXJQbGF0ZU1hc2sgPSBuZXcgU3RyaW5nTWFzaygnVVVVLTAwMDAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGRpcmVjdGl2ZTogbWFza0ZhY3Rvcnkoe1xuXHRcdGNsZWFyVmFsdWU6IGZ1bmN0aW9uIChyYXdWYWx1ZSkge1xuXHRcdFx0cmV0dXJuIHJhd1ZhbHVlLnJlcGxhY2UoL1teYS16QS1aMC05XS9nLCAnJykuc2xpY2UoMCwgNyk7XG5cdFx0fSxcblx0XHRmb3JtYXQ6IGZ1bmN0aW9uIChjbGVhblZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gZm9ybWF0KGNsZWFuVmFsdWUpO1xuXHRcdH0sXG5cdFx0dmFsaWRhdGlvbnM6IHtcblx0XHRcdGNhclBsYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gNztcblx0XHRcdH1cblx0XHR9XG5cdH0pLFxuXHRmaWx0ZXI6IENhclBsYXRlRmlsdGVyXG59XG5cbmZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSkge1xuXHRyZXR1cm4gKGNhclBsYXRlTWFzay5hcHBseSh2YWx1ZSkgfHwgJycpLnJlcGxhY2UoL1teYS16QS1aMC05XSQvLCAnJyk7XG59XG5cbmZ1bmN0aW9uIENhclBsYXRlRmlsdGVyKCRmaWx0ZXIpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xuXHRcdHJldHVybiBmb3JtYXQoaW5wdXQpO1xuXHR9O1xufVxuXG5DYXJQbGF0ZUZpbHRlci4kaW5qZWN0ID0gWyckZmlsdGVyJ107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3RyaW5nTWFzayA9IHJlcXVpcmUoJ3N0cmluZy1tYXNrJyk7XG52YXIgbWFza0ZhY3RvcnkgPSByZXF1aXJlKCdtYXNrLWZhY3RvcnknKTtcblxudmFyIGNlcE1hc2sgPSBuZXcgU3RyaW5nTWFzaygnMDAwMDAtMDAwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkaXJlY3RpdmU6IG1hc2tGYWN0b3J5KHtcblx0XHRjbGVhclZhbHVlOiBmdW5jdGlvbiAocmF3VmFsdWUpIHtcblx0XHRcdHJldHVybiByYXdWYWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL1teMC05XS9nLCAnJykuc2xpY2UoMCwgOCk7XG5cdFx0fSxcblx0XHRmb3JtYXQ6IGZ1bmN0aW9uIChjbGVhblZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gZm9ybWF0KGNsZWFuVmFsdWUpO1xuXHRcdH0sXG5cdFx0dmFsaWRhdGlvbnM6IHtcblx0XHRcdGNlcDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KSxcblx0ZmlsdGVyOiBDZXBGaWx0ZXJcdFxufTtcblxuZnVuY3Rpb24gZm9ybWF0ICh2YWx1ZSkge1xuXHRyZXR1cm4gKGNlcE1hc2suYXBwbHkodmFsdWUpIHx8ICcnKS5yZXBsYWNlKC9bXjAtOV0kLywgJycpO1xufVxuXG5mdW5jdGlvbiBDZXBGaWx0ZXIoJGZpbHRlcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdChpbnB1dCk7XG4gICAgfTtcbn1cbkNlcEZpbHRlci4kaW5qZWN0ID0gWyckZmlsdGVyJ107IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3RyaW5nTWFzayA9IHJlcXVpcmUoJ3N0cmluZy1tYXNrJyk7XG52YXIgQnJWID0gcmVxdWlyZSgnYnItdmFsaWRhdGlvbnMnKTtcbnZhciBtYXNrRmFjdG9yeSA9IHJlcXVpcmUoJ21hc2stZmFjdG9yeScpO1xuXG52YXIgY25walBhdHRlcm4gPSBuZXcgU3RyaW5nTWFzaygnMDAuMDAwLjAwMFxcLzAwMDAtMDAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGRpcmVjdGl2ZTogbWFza0ZhY3Rvcnkoe1xuXHRcdGNsZWFyVmFsdWU6IGZ1bmN0aW9uIChyYXdWYWx1ZSkge1xuXHRcdFx0cmV0dXJuIFN0cmluZyhyYXdWYWx1ZSkucmVwbGFjZSgvW15cXGRdL2csICcnKS5zbGljZSgwLCAxNCk7XG5cdFx0fSxcblx0XHRmb3JtYXQ6IGZ1bmN0aW9uIChjbGVhblZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gZm9ybWF0KGNsZWFuVmFsdWUpO1xuXHRcdH0sXG5cdFx0dmFsaWRhdGlvbnM6IHtcblx0XHRcdGNucGo6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gQnJWLmNucGoudmFsaWRhdGUoU3RyaW5nKHZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KSxcblx0ZmlsdGVyOiBDbnBqRmlsdGVyXG59XG5cbmZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSkge1xuXHRyZXR1cm4gKGNucGpQYXR0ZXJuLmFwcGx5KHZhbHVlKSB8fCAnJykudHJpbSgpLnJlcGxhY2UoL1teMC05XSQvLCAnJyk7XG59XG5cbmZ1bmN0aW9uIENucGpGaWx0ZXIoJGZpbHRlcikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0cmV0dXJuIGZvcm1hdChpbnB1dCk7XG5cdH07XG59XG5DbnBqRmlsdGVyLiRpbmplY3QgPSBbJyRmaWx0ZXInXTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBTdHJpbmdNYXNrID0gcmVxdWlyZSgnc3RyaW5nLW1hc2snKTtcbnZhciBCclYgPSByZXF1aXJlKCdici12YWxpZGF0aW9ucycpO1xudmFyIG1hc2tGYWN0b3J5ID0gcmVxdWlyZSgnbWFzay1mYWN0b3J5Jyk7XG5cbnZhciBjbnBqUGF0dGVybiA9IG5ldyBTdHJpbmdNYXNrKCcwMC4wMDAuMDAwXFwvMDAwMC0wMCcpO1xudmFyIGNwZlBhdHRlcm4gPSBuZXcgU3RyaW5nTWFzaygnMDAwLjAwMC4wMDAtMDAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGRpcmVjdGl2ZTogbWFza0ZhY3Rvcnkoe1xuXHRcdGNsZWFyVmFsdWU6IGZ1bmN0aW9uIChyYXdWYWx1ZSkge1xuXHRcdFx0cmV0dXJuIFN0cmluZyhyYXdWYWx1ZSkucmVwbGFjZSgvW15cXGRdL2csICcnKS5zbGljZSgwLCAxNCk7XG5cdFx0fSxcblx0XHRmb3JtYXQ6IGZ1bmN0aW9uIChjbGVhblZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gZm9ybWF0KGNsZWFuVmFsdWUpO1xuXHRcdH0sXG5cdFx0dmFsaWRhdGlvbnM6IHtcblx0XHRcdGNwZjogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZS5sZW5ndGggPiAxMSB8fCBCclYuY3BmLnZhbGlkYXRlKFN0cmluZyh2YWx1ZSkpO1xuXHRcdFx0fSxcblx0XHRcdGNucGo6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUubGVuZ3RoIDw9IDExIHx8IEJyVi5jbnBqLnZhbGlkYXRlKFN0cmluZyh2YWx1ZSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSksXG5cdGZpbHRlcjogQ3BmQ25wakZpbHRlclxufVxuXG5mdW5jdGlvbiBmb3JtYXQodmFsdWUpIHtcblxuXHRpZiAoIXZhbHVlKSByZXR1cm4gdmFsdWU7XG5cdHZhciBmb3JtYXRlZFZhbHVlO1xuXG5cdGlmICh2YWx1ZS5sZW5ndGggPiAxMSkge1xuXHRcdGZvcm1hdGVkVmFsdWUgPSBjbnBqUGF0dGVybi5hcHBseSh2YWx1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0Zm9ybWF0ZWRWYWx1ZSA9IGNwZlBhdHRlcm4uYXBwbHkodmFsdWUpIHx8ICcnO1xuXHR9XG5cblx0cmV0dXJuIGZvcm1hdGVkVmFsdWUudHJpbSgpLnJlcGxhY2UoL1teMC05XSQvLCAnJyk7XG59XG5cbmZ1bmN0aW9uIENwZkNucGpGaWx0ZXIoJGZpbHRlcikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0cmV0dXJuIGZvcm1hdChpbnB1dCk7XG5cdH07XG59XG5DcGZDbnBqRmlsdGVyLiRpbmplY3QgPSBbJyRmaWx0ZXInXTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBTdHJpbmdNYXNrID0gcmVxdWlyZSgnc3RyaW5nLW1hc2snKTtcbnZhciBCclYgPSByZXF1aXJlKCdici12YWxpZGF0aW9ucycpO1xudmFyIG1hc2tGYWN0b3J5ID0gcmVxdWlyZSgnbWFzay1mYWN0b3J5Jyk7XG5cbnZhciBjcGZQYXR0ZXJuID0gbmV3IFN0cmluZ01hc2soJzAwMC4wMDAuMDAwLTAwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkaXJlY3RpdmU6IG1hc2tGYWN0b3J5KHtcblx0XHRjbGVhclZhbHVlOiBmdW5jdGlvbiAocmF3VmFsdWUpIHtcblx0XHRcdHJldHVybiBTdHJpbmcocmF3VmFsdWUpLnJlcGxhY2UoL1teXFxkXS9nLCAnJykuc2xpY2UoMCwgMTEpO1xuXHRcdH0sXG5cdFx0Zm9ybWF0OiBmdW5jdGlvbiAoY2xlYW5WYWx1ZSkge1xuXHRcdFx0cmV0dXJuIGZvcm1hdChTdHJpbmcoY2xlYW5WYWx1ZSkpO1xuXHRcdH0sXG5cdFx0dmFsaWRhdGlvbnM6IHtcblx0XHRcdGNwZjogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBCclYuY3BmLnZhbGlkYXRlKFN0cmluZyh2YWx1ZSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSksXG5cdGZpbHRlcjogQ3BmRmlsdGVyXG59XG5cbmZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSkge1xuXHRyZXR1cm4gKGNwZlBhdHRlcm4uYXBwbHkoU3RyaW5nKHZhbHVlKSkgfHwgJycpLnRyaW0oKS5yZXBsYWNlKC9bXjAtOV0kLywgJycpO1xufVxuXG5mdW5jdGlvbiBDcGZGaWx0ZXIoJGZpbHRlcikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0cmV0dXJuIGZvcm1hdChpbnB1dCk7XG5cdH07XG59XG5DcGZGaWx0ZXIuJGluamVjdCA9IFsnJGZpbHRlciddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFN0cmluZ01hc2sgPSByZXF1aXJlKCdzdHJpbmctbWFzaycpO1xudmFyIEJyViA9IHJlcXVpcmUoJ2JyLXZhbGlkYXRpb25zJyk7XG5cbmZ1bmN0aW9uIEZsdWlnSWVNYXNrRGlyZWN0aXZlKCRwYXJzZSkge1xuXHR2YXIgaWVNYXNrcyA9IHtcblx0XHQnQUMnOiBbe21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMC4wMDAuMDAwLzAwMC0wMCcpfV0sXG5cdFx0J0FMJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAwJyl9XSxcblx0XHQnQU0nOiBbe21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMC4wMDAuMDAwLTAnKX1dLFxuXHRcdCdBUCc6IFt7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwMCcpfV0sXG5cdFx0J0JBJzogW3tjaGFyczogOCwgbWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMC0wMCcpfSxcblx0XHRcdHttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMC0wMCcpfV0sXG5cdFx0J0NFJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAtMCcpfV0sXG5cdFx0J0RGJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAwMDAtMDAnKX1dLFxuXHRcdCdFUyc6IFt7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwLTAnKX1dLFxuXHRcdCdHTyc6IFt7bWFzazogbmV3IFN0cmluZ01hc2soJzAwLjAwMC4wMDAtMCcpfV0sXG5cdFx0J01BJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAwJyl9XSxcblx0XHQnTUcnOiBbe21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAuMDAwLjAwMC8wMDAwJyl9XSxcblx0XHQnTVMnOiBbe21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwMDAnKX1dLFxuXHRcdCdNVCc6IFt7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwMDAtMCcpfV0sXG5cdFx0J1BBJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAtMDAwMDAwLTAnKX1dLFxuXHRcdCdQQic6IFt7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwLTAnKX1dLFxuXHRcdCdQRSc6IFt7Y2hhcnM6IDksIG1hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwLTAwJyl9LFxuXHRcdFx0e21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMC4wLjAwMC4wMDAwMDAwLTAnKX1dLFxuXHRcdCdQSSc6IFt7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwMCcpfV0sXG5cdFx0J1BSJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwLjAwMDAwLTAwJyl9XSxcblx0XHQnUkonOiBbe21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMC4wMDAuMDAtMCcpfV0sXG5cdFx0J1JOJzogW3tjaGFyczogOSwgbWFzazogbmV3IFN0cmluZ01hc2soJzAwLjAwMC4wMDAtMCcpfSxcblx0XHRcdHttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAuMC4wMDAuMDAwLTAnKX1dLFxuXHRcdCdSTyc6IFt7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwMDAwMDAtMCcpfV0sXG5cdFx0J1JSJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAtMCcpfV0sXG5cdFx0J1JTJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwLzAwMDAwMDAnKX1dLFxuXHRcdCdTQyc6IFt7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMC4wMDAuMDAwJyl9XSxcblx0XHQnU0UnOiBbe21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwMC0wJyl9XSxcblx0XHQnU1AnOiBbe21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAuMDAwLjAwMC4wMDAnKX0sXG5cdFx0XHR7bWFzazogbmV3IFN0cmluZ01hc2soJy0wMDAwMDAwMC4wLzAwMCcpfV0sXG5cdFx0J1RPJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAwMDAnKX1dXG5cdH07XG5cblx0ZnVuY3Rpb24gY2xlYXJWYWx1ZSh2YWx1ZSkge1xuXHRcdGlmICghdmFsdWUpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZSgvW14wLTldL2csICcnKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldE1hc2sodWYsIHZhbHVlKSB7XG5cdFx0aWYgKCF1ZiB8fCAhaWVNYXNrc1t1Zl0pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodWYgPT09ICdTUCcgJiYgL15QL2kudGVzdCh2YWx1ZSkpIHtcblx0XHRcdHJldHVybiBpZU1hc2tzLlNQWzFdLm1hc2s7XG5cdFx0fVxuXG5cdFx0dmFyIG1hc2tzID0gaWVNYXNrc1t1Zl07XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHdoaWxlIChtYXNrc1tpXS5jaGFycyAmJiBtYXNrc1tpXS5jaGFycyA8IGNsZWFyVmFsdWUodmFsdWUpLmxlbmd0aCAmJiBpIDwgbWFza3MubGVuZ3RoIC0gMSkge1xuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXNrc1tpXS5tYXNrO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXBwbHlJRU1hc2sodmFsdWUsIHVmKSB7XG5cdFx0dmFyIG1hc2sgPSBnZXRNYXNrKHVmLCB2YWx1ZSk7XG5cblx0XHRpZiAoIW1hc2spIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHR2YXIgcHJvY2Vzc2VkID0gbWFzay5wcm9jZXNzKGNsZWFyVmFsdWUodmFsdWUpKTtcblx0XHR2YXIgZm9ybWF0ZWRWYWx1ZSA9IHByb2Nlc3NlZC5yZXN1bHQgfHwgJyc7XG5cdFx0Zm9ybWF0ZWRWYWx1ZSA9IGZvcm1hdGVkVmFsdWUudHJpbSgpLnJlcGxhY2UoL1teMC05XSQvLCAnJyk7XG5cblx0XHRpZiAodWYgPT09ICdTUCcgJiYgL15wL2kudGVzdCh2YWx1ZSkpIHtcblx0XHRcdHJldHVybiAnUCcgKyBmb3JtYXRlZFZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmb3JtYXRlZFZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0EnLFxuXHRcdHJlcXVpcmU6ICduZ01vZGVsJyxcblx0XHRsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcblx0XHRcdHZhciBzdGF0ZSA9ICgkcGFyc2UoYXR0cnMuZmx1aWdJZU1hc2spKHNjb3BlKSB8fCAnJykudG9VcHBlckNhc2UoKTtcblxuXHRcdFx0ZnVuY3Rpb24gZm9ybWF0dGVyKHZhbHVlKSB7XG5cdFx0XHRcdGlmIChjdHJsLiRpc0VtcHR5KHZhbHVlKSkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBhcHBseUlFTWFzayh2YWx1ZSwgc3RhdGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBwYXJzZXIodmFsdWUpIHtcblx0XHRcdFx0aWYgKGN0cmwuJGlzRW1wdHkodmFsdWUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIGZvcm1hdGVkVmFsdWUgPSBhcHBseUlFTWFzayh2YWx1ZSwgc3RhdGUpO1xuXHRcdFx0XHR2YXIgYWN0dWFsVmFsdWUgPSBjbGVhclZhbHVlKGZvcm1hdGVkVmFsdWUpO1xuXG5cdFx0XHRcdGlmIChjdHJsLiR2aWV3VmFsdWUgIT09IGZvcm1hdGVkVmFsdWUpIHtcblx0XHRcdFx0XHRjdHJsLiRzZXRWaWV3VmFsdWUoZm9ybWF0ZWRWYWx1ZSk7XG5cdFx0XHRcdFx0Y3RybC4kcmVuZGVyKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoc3RhdGUgJiYgc3RhdGUudG9VcHBlckNhc2UoKSA9PT0gJ1NQJyAmJiAvXnAvaS50ZXN0KHZhbHVlKSkge1xuXHRcdFx0XHRcdHJldHVybiAnUCcgKyBhY3R1YWxWYWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBhY3R1YWxWYWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y3RybC4kZm9ybWF0dGVycy5wdXNoKGZvcm1hdHRlcik7XG5cdFx0XHRjdHJsLiRwYXJzZXJzLnB1c2gocGFyc2VyKTtcblxuXHRcdFx0Y3RybC4kdmFsaWRhdG9ycy5pZSA9IGZ1bmN0aW9uIHZhbGlkYXRvcihtb2RlbFZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBjdHJsLiRpc0VtcHR5KG1vZGVsVmFsdWUpIHx8IEJyVi5pZShzdGF0ZSkudmFsaWRhdGUobW9kZWxWYWx1ZSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS4kd2F0Y2goYXR0cnMuZmx1aWdJZU1hc2ssIGZ1bmN0aW9uKG5ld1N0YXRlKSB7XG5cdFx0XHRcdHN0YXRlID0gKG5ld1N0YXRlIHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xuXG5cdFx0XHRcdHBhcnNlcihjdHJsLiR2aWV3VmFsdWUpO1xuXHRcdFx0XHRjdHJsLiR2YWxpZGF0ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xufVxuRmx1aWdJZU1hc2tEaXJlY3RpdmUuJGluamVjdCA9IFsnJHBhcnNlJ107XG5cbm1vZHVsZS5leHBvcnRzID0gRmx1aWdJZU1hc2tEaXJlY3RpdmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBTdHJpbmdNYXNrID0gcmVxdWlyZSgnc3RyaW5nLW1hc2snKTtcbnZhciBtYXNrRmFjdG9yeSA9IHJlcXVpcmUoJ21hc2stZmFjdG9yeScpO1xuXG52YXIgbmZlQWNjZXNzS2V5TWFzayA9IG5ldyBTdHJpbmdNYXNrKCcwMDAwIDAwMDAgMDAwMCAwMDAwIDAwMDAnICtcblx0JyAwMDAwIDAwMDAgMDAwMCAwMDAwIDAwMDAgMDAwMCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGlyZWN0aXZlOiBtYXNrRmFjdG9yeSh7XG5cdFx0Y2xlYXJWYWx1ZTogZnVuY3Rpb24gKHJhd1ZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gcmF3VmFsdWUucmVwbGFjZSgvW14wLTldL2csICcnKS5zbGljZSgwLCA0NCk7XG5cdFx0fSxcblx0XHRmb3JtYXQ6IGZ1bmN0aW9uIChjbGVhblZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gZm9ybWF0KGNsZWFuVmFsdWUpO1xuXHRcdH0sXG5cdFx0dmFsaWRhdGlvbnM6IHtcblx0XHRcdG5mZUFjY2Vzc0tleTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDQ0O1xuXHRcdFx0fVxuXHRcdH1cblx0fSksXG5cdGZpbHRlcjogTmZlRmlsdGVyXG59XG5cbmZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSkge1xuXHRyZXR1cm4gKG5mZUFjY2Vzc0tleU1hc2suYXBwbHkodmFsdWUpIHx8ICcnKS5yZXBsYWNlKC9bXjAtOV0kLywgJycpO1xufVxuXG5mdW5jdGlvbiBOZmVGaWx0ZXIoJGZpbHRlcikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0cmV0dXJuIGZvcm1hdChpbnB1dCk7XG5cdH07XG59XG5OZmVGaWx0ZXIuJGluamVjdCA9IFsnJGZpbHRlciddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFN0cmluZ01hc2sgPSByZXF1aXJlKCdzdHJpbmctbWFzaycpO1xudmFyIG1hc2tGYWN0b3J5ID0gcmVxdWlyZSgnbWFzay1mYWN0b3J5Jyk7XG5cbi8qKlxuICogRklYTUU6IGFsbCBudW1iZXJzIHdpbGwgaGF2ZSA5IGRpZ2l0cyBhZnRlciAyMDE2LlxuICogc2VlIGh0dHA6Ly9wb3J0YWwuZW1icmF0ZWwuY29tLmJyL2VtYnJhdGVsLzktZGlnaXRvL1xuICovXG52YXIgcGhvbmVNYXNrOEQgPSBuZXcgU3RyaW5nTWFzaygnKDAwKSAwMDAwLTAwMDAnKSxcblx0cGhvbmVNYXNrOUQgPSBuZXcgU3RyaW5nTWFzaygnKDAwKSAwMDAwMC0wMDAwJyksXG5cdHBob25lTWFzazhEU2VtREREID0gbmV3IFN0cmluZ01hc2soJzAwMDAtMDAwMCcpLFxuXHRwaG9uZU1hc2s5RFNlbURERCA9IG5ldyBTdHJpbmdNYXNrKCcwMDAwMC0wMDAwJyksXG5cdHBob25lTWFzazA4MDAgPSBuZXcgU3RyaW5nTWFzaygnMDAwMC0wMDAtMDAwMCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGlyZWN0aXZlOiBtYXNrRmFjdG9yeSh7XG5cdFx0Y2xlYXJWYWx1ZTogZnVuY3Rpb24gKHJhd1ZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gcmF3VmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpLnNsaWNlKDAsIDExKTtcblx0XHR9LFxuXHRcdGZvcm1hdDogZnVuY3Rpb24gKGNsZWFuVmFsdWUpIHtcblx0XHRcdHJldHVybiBmb3JtYXQoY2xlYW5WYWx1ZSlcblx0XHR9LFxuXHRcdGdldE1vZGVsVmFsdWU6IGZ1bmN0aW9uIChmb3JtYXR0ZWRWYWx1ZSwgb3JpZ2luYWxNb2RlbFR5cGUpIHtcblx0XHRcdHZhciBjbGVhblZhbHVlID0gdGhpcy5jbGVhclZhbHVlKGZvcm1hdHRlZFZhbHVlKTtcblxuXHRcdFx0cmV0dXJuIG9yaWdpbmFsTW9kZWxUeXBlID09PSAnbnVtYmVyJyA/IHBhcnNlSW50KGNsZWFuVmFsdWUpIDogY2xlYW5WYWx1ZTtcblx0XHR9LFxuXHRcdHZhbGlkYXRpb25zOiB7XG5cdFx0XHRwaG9uZU51bWJlcjogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHZhciB2YWx1ZUxlbmd0aCA9IHZhbHVlICYmIHZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoO1xuXHRcdFx0XHRyZXR1cm4gdmFsdWVMZW5ndGggPT09IDggfHwgdmFsdWVMZW5ndGggPT09IDkgfHwgdmFsdWVMZW5ndGggPT09IDEwIHx8IHZhbHVlTGVuZ3RoID09PSAxMTtcblx0XHRcdH1cblx0XHR9XG5cdH0pLFxuXHRmaWx0ZXI6IEJyUGhvbmVGaWx0ZXJcbn1cblxuZnVuY3Rpb24gZm9ybWF0KHZhbHVlKSB7XG5cblx0aWYgKCF2YWx1ZSkgcmV0dXJuIFwiXCI7XG5cblx0dmFyIGZvcm1hdGVkVmFsdWU7XG5cdGlmICh2YWx1ZS5pbmRleE9mKCcwODAwJykgPT09IDApIHtcblx0XHRmb3JtYXRlZFZhbHVlID0gcGhvbmVNYXNrMDgwMC5hcHBseSh2YWx1ZSk7XG5cdH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoIDwgOSkge1xuXHRcdGZvcm1hdGVkVmFsdWUgPSBwaG9uZU1hc2s4RFNlbURERC5hcHBseSh2YWx1ZSkgfHwgJyc7XG5cdH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoIDwgMTApIHtcblx0XHRmb3JtYXRlZFZhbHVlID0gcGhvbmVNYXNrOURTZW1EREQuYXBwbHkodmFsdWUpIHx8ICcnO1xuXHR9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA8IDExKSB7XG5cdFx0Zm9ybWF0ZWRWYWx1ZSA9IHBob25lTWFzazhELmFwcGx5KHZhbHVlKSB8fCAnJztcblx0fSBlbHNlIHtcblx0XHRmb3JtYXRlZFZhbHVlID0gcGhvbmVNYXNrOUQuYXBwbHkodmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIGZvcm1hdGVkVmFsdWUudHJpbSgpLnJlcGxhY2UoL1teMC05XSQvLCAnJyk7XG59XG5cbmZ1bmN0aW9uIEJyUGhvbmVGaWx0ZXIoJGZpbHRlcikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0cmV0dXJuIGZvcm1hdChpbnB1dCk7XG5cdH07XG59XG5CclBob25lRmlsdGVyLiRpbmplY3QgPSBbJyRmaWx0ZXInXTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBtID0gYW5ndWxhci5tb2R1bGUoJ2FuZ3VsYXIuZmlsdGVycycsIFtcbiAgICAgICAgcmVxdWlyZSgnLi4vaGVscGVycycpLFxuICAgIF0pXG4gICAgLmZpbHRlcigncGFnaW5hdGlvbicsIHJlcXVpcmUoJy4vcGFnaW5hdGlvbi9wYWdpbmF0aW9uJykpXG5cbm1vZHVsZS5leHBvcnRzID0gbS5uYW1lOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gUGFnaW5hdGlvbkZpbHRlcigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oaW5wdXQsIHN0YXJ0KSB7XG4gICAgICAgIHN0YXJ0ID0gK3N0YXJ0O1xuXG4gICAgICAgIGlmICghaW5wdXQpIHJldHVybiAwO1xuICAgICAgICByZXR1cm4gaW5wdXQuc2xpY2Uoc3RhcnQpO1xuICAgIH07XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gUGFnaW5hdGlvbkZpbHRlcjsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIEF1dG9jb21wbGV0ZURpcmVjdGl2ZSgkbG9jYWxlLCAkd2luZG93LCAkdGltZW91dCwgJGNvbXBpbGUpIHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIHJlcXVpcmU6ICc/bmdNb2RlbCcsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBkYXRhc2V0OiBcIkBcIixcbiAgICAgICAgICAgIGZsdWlnQXV0b2NvbXBsZXRlTGltaXQ6IFwiQFwiLFxuICAgICAgICAgICAgZmx1aWdBdXRvY29tcGxldGVUeXBlOiBcIkBcIixcbiAgICAgICAgICAgIG1pbkxlbmd0aDogXCJAXCIsXG4gICAgICAgICAgICBmaWx0ZXJGaWVsZHM6IFwiPVwiLFxuICAgICAgICAgICAgcmVzdWx0RmllbGRzOiBcIj1cIixcbiAgICAgICAgICAgIGRpc3BsYXlLZXk6IFwiQFwiLFxuICAgICAgICAgICAgc2VhcmNoVGltZW91dDogXCJAXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFwiPVwiLFxuICAgICAgICAgICAgYWNTZWxlY3RlZDogXCImXCJcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuXG4gICAgICAgICAgICB2YXIgZmx1aWdBdXRvY29tcGxldGUgPSBhdHRycy5mbHVpZ0F1dG9jb21wbGV0ZTtcblxuICAgICAgICAgICAgaWYgKGZsdWlnQXV0b2NvbXBsZXRlID09ICdmYWxzZScpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKCFjdHJsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignbmdNb2RlbCBuw6NvIGluZm9ybWFkbyBwYXJhIG8gZWxlbWVudG86JywgZWxlbWVudFswXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY29wZS5kaXNwbGF5S2V5ID0gc2NvcGUuZGlzcGxheUtleSB8fCAnbmFtZSc7XG4gICAgICAgICAgICBzY29wZS5mbHVpZ0F1dG9jb21wbGV0ZUxpbWl0ID0gc2NvcGUuZmx1aWdBdXRvY29tcGxldGVMaW1pdCB8fCAxMDA7XG4gICAgICAgICAgICBzY29wZS5mbHVpZ0F1dG9jb21wbGV0ZVR5cGUgPSBzY29wZS5mbHVpZ0F1dG9jb21wbGV0ZVR5cGUgfHwgJ2F1dG9jb21wbGV0ZSc7XG4gICAgICAgICAgICBzY29wZS5taW5MZW5ndGggPSBOdW1iZXIoYXR0cnMubWluTGVuZ3RoKSB8fCAwO1xuICAgICAgICAgICAgc2NvcGUuc2VhcmNoVGltZW91dCA9IGF0dHJzLnNlYXJjaFRpbWVvdXQgfHwgNTAwO1xuXG4gICAgICAgICAgICBlbGVtZW50Lm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGlmICghJHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgdGhpcy52YWx1ZS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgnZmlsdGVyRmllbGRzJywgZnVuY3Rpb24gKHZhbCwgb2xkdmFsKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoKG9sZHZhbCB8fCB2YWwpICYmIHZhbCAhPSBvbGR2YWwpIHtcblxuICAgICAgICAgICAgICAgICAgICAvL2NyZWF0ZUF1dG9jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goJ3Jlc3VsdEZpZWxkcycsIGZ1bmN0aW9uICh2YWwsIG9sZHZhbCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKChvbGR2YWwgfHwgdmFsKSAmJiB2YWwgIT0gb2xkdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY3JlYXRlQXV0b2NvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKCd2YWx1ZXMnLCBmdW5jdGlvbiAodmFsLCBvbGR2YWwpIHtcblxuICAgICAgICAgICAgICAgIGlmICgob2xkdmFsIHx8IHZhbCkgJiYgdmFsICE9IG9sZHZhbCkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVBdXRvY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgnZGF0YXNldCcsIGZ1bmN0aW9uICh2YWwsIG9sZHZhbCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKChvbGR2YWwgfHwgdmFsKSAmJiB2YWwgIT0gb2xkdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUF1dG9jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY3JlYXRlQXV0b2NvbXBsZXRlKClcblxuXG4gICAgICAgICAgICBmdW5jdGlvbiBsb2FkRGF0YShhcnIpIHtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodHh0LCBmbmMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCwgZiwgZmlsdGVyO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlciA9IG5ldyBSZWdFeHAoKHR4dC5ub3JtYWxpemUgPyB0eHQubm9ybWFsaXplKFwiTkZEXCIpIDogdHh0KS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKSwgXCJpXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGFycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoYXJyLCBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iajI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLnJlc3VsdEZpZWxkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqMiA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucmVzdWx0RmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmoyW2ZdID0gb2JqW2ZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajIgPSBvYmo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHNjb3BlLmRpc3BsYXlLZXkgJiYgZmlsdGVyLnRlc3QoKG9iajJbc2NvcGUuZGlzcGxheUtleV0ubm9ybWFsaXplID8gb2JqMltzY29wZS5kaXNwbGF5S2V5XS5ub3JtYWxpemUoXCJORkRcIikgOiBvYmoyW3Njb3BlLmRpc3BsYXlLZXldKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKSkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIXNjb3BlLmRpc3BsYXlLZXkgJiYgZmlsdGVyLnRlc3QoSlNPTi5zdHJpbmdpZnkob2JqMikpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICYmIHJlc3VsdC5sZW5ndGggPCBzY29wZS5mbHVpZ0F1dG9jb21wbGV0ZUxpbWl0ICYmIHJlc3VsdC5wdXNoKG9iajIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGZuYyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlQXV0b2NvbXBsZXRlKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzY29wZS5kYXRhc2V0ICYmICFzY29wZS52YWx1ZXMpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGlmIChzY29wZS5hdXRvY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuYXV0b2NvbXBsZXRlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuYXV0b2NvbXBsZXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZmlsdGVyRmllbGRzID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmZpbHRlckZpZWxkcykge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJGaWVsZHMgPSBzY29wZS5maWx0ZXJGaWVsZHMuam9pbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciByZXN1bHRGaWVsZHMgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGUucmVzdWx0RmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEZpZWxkcyA9IHNjb3BlLnJlc3VsdEZpZWxkcy5qb2luKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3RVcmwgPSBcIi9hcGkvcHVibGljL2VjbS9kYXRhc2V0L3NlYXJjaD9kYXRhc2V0SWQ9XCIgKyBzY29wZS5kYXRhc2V0ICsgXCImc2VhcmNoRmllbGQ9XCIgKyBzY29wZS5kaXNwbGF5S2V5ICsgXCImZmlsdGVyRmllbGRzPVwiICsgZmlsdGVyRmllbGRzICsgXCImcmVzdWx0RmllbGRzPVwiICsgcmVzdWx0RmllbGRzICsgXCImbGltaXQ9XCIgKyBzY29wZS5mbHVpZ0F1dG9jb21wbGV0ZUxpbWl0ICsgXCImXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdFVybClcblxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgcmVzdFVybCA9IFwiL2FwaS9wdWJsaWMvZWNtL2RhdGFzZXQvc2VhcmNoP2RhdGFzZXRJZD1cIiArIHNjb3BlLmRhdGFzZXQgKyBcIiZcIjtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiByZXN0VXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybktleTogXCJzZWFyY2hWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdDogXCJjb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gbG9hZERhdGEoc2NvcGUudmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNjb3BlLmF1dG9jb21wbGV0ZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmF1dG9jb21wbGV0ZSA9IEZMVUlHQy5hdXRvY29tcGxldGUoZWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5S2V5OiBzY29wZS5kaXNwbGF5S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogc2NvcGUuZmx1aWdBdXRvY29tcGxldGVUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiBOdW1iZXIoc2NvcGUubWluTGVuZ3RoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBzY29wZS5mbHVpZ0F1dG9jb21wbGV0ZUxpbWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVGltZW91dDogc2NvcGUuc2VhcmNoVGltZW91dFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBzY29wZS5hdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vbignZmx1aWcuYXV0b2NvbXBsZXRlLm9wZW5lZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsZW1lbnQucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLm9uKCdmbHVpZy5hdXRvY29tcGxldGUuY2xvc2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWxlbWVudC5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAub24oJ2ZsdWlnLmF1dG9jb21wbGV0ZS5zZWxlY3RlZCcsIGZ1bmN0aW9uIChyZXN1bHQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYmx1cigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcGUuZmx1aWdBdXRvY29tcGxldGVUeXBlID09ICdhdXRvY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHJsLiRzZXRWaWV3VmFsdWUocmVzdWx0Lml0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3RybC4kc2V0Vmlld1ZhbHVlKHNjb3BlLmF1dG9jb21wbGV0ZS5pdGVtcygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuZmx1aWdPblNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS4kZXZhbChhdHRycy5mbHVpZ09uU2VsZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuYWNTZWxlY3RlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLm9uKCdmbHVpZy5hdXRvY29tcGxldGUuaXRlbVJlbW92ZWQnLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdXRvY29tcGxldGUgMTJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcGUuZmx1aWdBdXRvY29tcGxldGVUeXBlID09ICdhdXRvY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuJHNldFZpZXdWYWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuJHNldFZpZXdWYWx1ZShzY29wZS5hdXRvY29tcGxldGUuaXRlbXMoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGZvcm1hdHRlcih2YWx1ZSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGFjID0gW107XG5cbiAgICAgICAgICAgICAgICBpZiAoc2NvcGUuZmx1aWdBdXRvY29tcGxldGVUeXBlID09ICdhdXRvY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdHJsLiRpc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5hdXRvY29tcGxldGUpIHNjb3BlLmF1dG9jb21wbGV0ZS52YWwodmFsdWVbc2NvcGUuZGlzcGxheUtleV0pO1xuICAgICAgICAgICAgICAgICAgICBhYy5wdXNoKHZhbHVlW3Njb3BlLmRpc3BsYXlLZXldKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5hdXRvY29tcGxldGUpIHNjb3BlLmF1dG9jb21wbGV0ZS5yZW1vdmVBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLmF1dG9jb21wbGV0ZSkgc2NvcGUuYXV0b2NvbXBsZXRlLmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjLnB1c2goaXRlbVtzY29wZS5kaXNwbGF5S2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGN0cmwuJHNldFZpZXdWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjLmpvaW4oKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdHJsLiRmb3JtYXR0ZXJzLnB1c2goZm9ybWF0dGVyKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXR0cigncGxhY2Vob2xkZXInLCAnRGlnaXRlIHBhcmEgYnVzY2FyLi4uJylcblxuICAgICAgICAgICAgLy8gdmFyIHRlbXBsYXRlID0gJGNvbXBpbGUoJzxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPjxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj48aSBjbGFzcz1cImZsdWlnaWNvbiBmbHVpZ2ljb24tc2VhcmNoXCI+PC9pPjwvc3Bhbj48L2Rpdj4nKShzY29wZSk7XG5cbiAgICAgICAgICAgIC8vIGVsZW1lbnQuYWZ0ZXIodGVtcGxhdGUpO1xuICAgICAgICAgICAgLy8gdGVtcGxhdGUuYXBwZW5kKGVsZW1lbnQpO1xuXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5BdXRvY29tcGxldGVEaXJlY3RpdmUuJGluamVjdCA9IFsnJGxvY2FsZScsICckd2luZG93JywgJyR0aW1lb3V0JywgJyRjb21waWxlJ107XG5cbm1vZHVsZS5leHBvcnRzID0gQXV0b2NvbXBsZXRlRGlyZWN0aXZlOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gQ2hhcnREaXJlY3RpdmUoJGxvY2FsZSwgJHdpbmRvdykge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIGNoYXJ0VHlwZTogXCJAXCIsXG4gICAgICAgICAgICBjaGFydExhYmVsczogXCI9XCIsXG4gICAgICAgICAgICBjaGFydERhdGFzZXRzOiBcIj1cIlxuICAgICAgICB9LFxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgICAgICAgIHZhciBmbHVpZ0NoYXJ0ID0gYXR0cnMuZmx1aWdDaGFydDtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0RmlsbENvbG9yID0gW1xuICAgICAgICAgICAgICAgIFwicmdiYSgyNiwgMTg4LCAxNTYsMC4yKVwiLFxuICAgICAgICAgICAgICAgIFwicmdiYSg1MiwgMTUyLCAyMTksMC4yKVwiLFxuICAgICAgICAgICAgICAgIFwicmdiYSgxNTUsIDg5LCAxODIsMC4yKVwiLFxuICAgICAgICAgICAgICAgIFwicmdiYSg1MiwgNzMsIDk0LDAuMilcIixcbiAgICAgICAgICAgICAgICBcInJnYmEoMjMwLCAxMjYsIDM0LDAuMilcIixcbiAgICAgICAgICAgICAgICBcInJnYmEoMjMxLCA3NiwgNjAsMC4yKVwiLFxuICAgICAgICAgICAgICAgIFwicmdiYSgxNDksIDE2NSwgMTY2LDAuMilcIixcbiAgICAgICAgICAgICAgICBcInJnYmEoMjQxLCAxOTYsIDE1LDAuMilcIixcbiAgICAgICAgICAgICAgICBcInJnYmEoMjM2LCAyNDAsIDI0MSwwLjIpXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIHZhciBkZWZhdWx0U3Ryb2tlQ29sb3IgPSBbXG4gICAgICAgICAgICAgICAgXCJyZ2JhKDI2LCAxODgsIDE1NiwxLjApXCIsXG4gICAgICAgICAgICAgICAgXCJyZ2JhKDUyLCAxNTIsIDIxOSwxLjApXCIsXG4gICAgICAgICAgICAgICAgXCJyZ2JhKDE1NSwgODksIDE4MiwxLjApXCIsXG4gICAgICAgICAgICAgICAgXCJyZ2JhKDUyLCA3MywgOTQsMS4wKVwiLFxuICAgICAgICAgICAgICAgIFwicmdiYSgyMzAsIDEyNiwgMzQsMS4wKVwiLFxuICAgICAgICAgICAgICAgIFwicmdiYSgyMzEsIDc2LCA2MCwxLjApXCIsXG4gICAgICAgICAgICAgICAgXCJyZ2JhKDE0OSwgMTY1LCAxNjYsMS4wKVwiLFxuICAgICAgICAgICAgICAgIFwicmdiYSgyNDEsIDE5NiwgMTUsMS4wKVwiLFxuICAgICAgICAgICAgICAgIFwicmdiYSgyMzYsIDI0MCwgMjQxLDEuMClcIlxuICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICB2YXIgZGVmYXVsdFBvaW50Q29sb3IgPSBkZWZhdWx0U3Ryb2tlQ29sb3I7XG5cbiAgICAgICAgICAgIHZhciBkZWZhdWx0UG9pbnRTdHJva2VDb2xvciA9IFtcbiAgICAgICAgICAgICAgICBcIiNmZmZcIiwgXCIjZmZmXCIsIFwiI2ZmZlwiLCBcIiNmZmZcIiwgXCIjZmZmXCIsIFwiI2ZmZlwiLCBcIiNmZmZcIiwgXCIjZmZmXCIsIFwiI2ZmZlwiXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIHZhciBkZWZhdWx0UG9pbnRIaWdobGlnaHRGaWxsID0gZGVmYXVsdFBvaW50U3Ryb2tlQ29sb3I7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdFBvaW50SGlnaGxpZ2h0U3Ryb2tlID0gZGVmYXVsdFN0cm9rZUNvbG9yO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZmx1aWdDaGFydCA9PSAnZmFsc2UnKSByZXR1cm47XG5cbiAgICAgICAgICAgIHZhciBjaGFydDtcblxuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKCdjaGFydFR5cGUnLCBmdW5jdGlvbiAodmFsLCBvbGR2YWwpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVDaGFydCgpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKCdjaGFydExhYmVscycsIGZ1bmN0aW9uICh2YWwsIG9sZHZhbCkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUNoYXJ0KCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goJ2NoYXJ0RGF0YScsIGZ1bmN0aW9uICh2YWwsIG9sZHZhbCkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUNoYXJ0KCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjcmVhdGVDaGFydCgpXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUNoYXJ0KCkge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2NvcGUuY2hhcnRMYWJlbHMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjb3BlLmNoYXJ0RGF0YXNldHMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjb3BlLmNoYXJ0VHlwZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNjb3BlLmNoYXJ0TGFiZWxzIHx8ICFzY29wZS5jaGFydERhdGFzZXRzIHx8ICFzY29wZS5jaGFydFR5cGUpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGlmIChjaGFydCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghY2hhcnQpIHtcblxuICAgICAgICAgICAgICAgICAgICBjaGFydCA9IEZMVUlHQy5jaGFydChlbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICBzY29wZS5jaGFydERhdGFzZXRzLmZvckVhY2goZnVuY3Rpb24gKGRhdGFzZXQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0LmZpbGxDb2xvciA9IGRhdGFzZXQuZmlsbENvbG9yIHx8IGRlZmF1bHRGaWxsQ29sb3JbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldC5zdHJva2VDb2xvciA9IGRhdGFzZXQuc3Ryb2tlQ29sb3IgfHwgZGVmYXVsdFN0cm9rZUNvbG9yW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXQucG9pbnRDb2xvciA9IGRhdGFzZXQucG9pbnRDb2xvciB8fCBkZWZhdWx0UG9pbnRDb2xvcltpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0LnBvaW50U3Ryb2tlQ29sb3IgPSBkYXRhc2V0LnBvaW50U3Ryb2tlQ29sb3IgfHwgZGVmYXVsdFBvaW50U3Ryb2tlQ29sb3JbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldC5wb2ludEhpZ2hsaWdodEZpbGwgPSBkYXRhc2V0LnBvaW50SGlnaGxpZ2h0RmlsbCB8fCBkZWZhdWx0UG9pbnRIaWdobGlnaHRGaWxsW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXQucG9pbnRIaWdobGlnaHRTdHJva2UgPSBkYXRhc2V0LnBvaW50SGlnaGxpZ2h0U3Ryb2tlIHx8IGRlZmF1bHRQb2ludEhpZ2hsaWdodFN0cm9rZVtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHNjb3BlLmNoYXJ0TGFiZWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM6IHNjb3BlLmNoYXJ0RGF0YXNldHNcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc2NvcGUuY2hhcnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibGluZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0LmxpbmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5DaGFydERpcmVjdGl2ZS4kaW5qZWN0ID0gWyckbG9jYWxlJywgJyR3aW5kb3cnXTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGFydERpcmVjdGl2ZTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIERhdGVNYXNrRGlyZWN0aXZlKCRsb2NhbGUsICRjb21waWxlLCAkdGltZW91dCwgJHBhcnNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgcmVxdWlyZTogJz9uZ01vZGVsJyxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIHNob3dEaXNhYmxlZDogXCJAXCIsXG4gICAgICAgICAgICBkZWZhdWx0RGF0ZTogXCI9XCIsXG4gICAgICAgICAgICBtaW5EYXRlOiBcIj1cIixcbiAgICAgICAgICAgIG1heERhdGU6IFwiPVwiLFxuICAgICAgICAgICAgdXNlQ3VycmVudDogJ0AnLFxuICAgICAgICAgICAgc2hvd09uU3RhcnQ6ICdAJyxcbiAgICAgICAgICAgIGRpc2FibGVkRGF0ZXM6ICc9JyxcbiAgICAgICAgICAgIHNpZGVCeVNpZGU6ICdAJyxcbiAgICAgICAgICAgIGRhdGVQYXR0ZXJuOiBcIkBcIixcbiAgICAgICAgICAgIGRhdGVMb2NhbGU6IFwiQFwiXG5cbiAgICAgICAgfSxcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuXG4gICAgICAgICAgICBpZiAoYXR0cnMuZmx1aWdEYXRlTWFzayA9PT0gXCJmYWxzZVwiKSByZXR1cm47XG5cbiAgICAgICAgICAgIHZhciBkdCA9IEZMVUlHQy5jYWxlbmRhcihlbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgcGlja0RhdGU6IGF0dHJzLnBpY2tEYXRlLFxuICAgICAgICAgICAgICAgIHBpY2tUaW1lOiBhdHRycy5waWNrVGltZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGVzOiBzY29wZS5kaXNhYmxlZERhdGVzLFxuICAgICAgICAgICAgICAgIG1pbkRhdGU6IHNjb3BlLm1pbkRhdGUsXG4gICAgICAgICAgICAgICAgbWF4RGF0ZTogc2NvcGUubWF4RGF0ZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0RGF0ZTogc2NvcGUuZGVmYXVsdERhdGUsXG4gICAgICAgICAgICAgICAgbWludXRlU3RlcHBpbmc6IGF0dHJzLm1pbnV0ZVN0ZXBwaW5nLFxuICAgICAgICAgICAgICAgIHNpZGVCeVNpZGU6IHNjb3BlLnNpZGVCeVNpZGUsXG4gICAgICAgICAgICAgICAgdXNlQ3VycmVudDogc2NvcGUudXNlQ3VycmVudCA9PSAnZmFsc2UnID8gZmFsc2UgOiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHNjb3BlLnNob3dPblN0YXJ0ID09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgIGR0LnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNjb3BlLnNob3dEaXNhYmxlZCkge1xuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wcm9wKCdyZWFkb25seScsIHRydWUpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBkdC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2UnLCBkdC5nZXREYXRlKCkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjb3BlLmRhdGVQYXR0ZXJuLCBzY29wZS5kYXRlTG9jYWxlKTtcbiAgICAgICAgICAgICAgICBpZiAoZHQuZ2V0RGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoZHQuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhdHRycy5waWNrVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY3RybC4kc2V0Vmlld1ZhbHVlKGRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWwoRkxVSUdDLmNhbGVuZGFyLmZvcm1hdERhdGUoZGF0ZSwgc2NvcGUuZGF0ZVBhdHRlcm4sIHNjb3BlLmRhdGVMb2NhbGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZm9ybWF0dGVyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGN0cmwuJGlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZHQuc2V0RGF0ZShuZXcgRGF0ZShOdW1iZXIodmFsdWUpKSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZMVUlHQy5jYWxlbmRhci5mb3JtYXREYXRlKG5ldyBEYXRlKE51bWJlcih2YWx1ZSkpLCBzY29wZS5kYXRlUGF0dGVybiwgc2NvcGUuZGF0ZUxvY2FsZSk7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIGVsZW1lbnQudmFsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN0cmwuJGZvcm1hdHRlcnMucHVzaChmb3JtYXR0ZXIpO1xuXG4gICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSAkY29tcGlsZSgnPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCIgPjxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj48aSBjbGFzcz1cImZsdWlnaWNvbiBmbHVpZ2ljb24tY2FsZW5kYXJcIj48L2k+PC9zcGFuPjwvZGl2PicpKHNjb3BlKTtcblxuICAgICAgICAgICAgZWxlbWVudC5hZnRlcih0ZW1wbGF0ZSk7XG4gICAgICAgICAgICB0ZW1wbGF0ZS5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5EYXRlTWFza0RpcmVjdGl2ZS4kaW5qZWN0ID0gWyckbG9jYWxlJywgJyRjb21waWxlJywgJyR0aW1lb3V0JywgJyRwYXJzZSddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGVNYXNrRGlyZWN0aXZlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG0gPSBhbmd1bGFyLm1vZHVsZSgnYW5ndWxhci5mbHVpZy51dGlscycsIFtcbiAgICAgICAgcmVxdWlyZSgnLi4vaGVscGVycycpLFxuICAgIF0pXG5cbiAgICAuZGlyZWN0aXZlKCdmbHVpZ0F1dG9jb21wbGV0ZScsIHJlcXVpcmUoJy4vYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZScpKVxuICAgIC5kaXJlY3RpdmUoJ2ZsdWlnQ2hhcnQnLCByZXF1aXJlKCcuL2NoYXJ0L2NoYXJ0JykpXG4gICAgLmRpcmVjdGl2ZSgnZmx1aWdEYXRlTWFzaycsIHJlcXVpcmUoJy4vZGF0ZS9kYXRlJykpXG4gICAgLmRpcmVjdGl2ZSgnZmx1aWdIZWFkZXInLCByZXF1aXJlKCcuL2hlYWRlci9oZWFkZXInKSlcbiAgICAuZGlyZWN0aXZlKCdmbHVpZ1JlcXVpcmVkJywgcmVxdWlyZSgnLi9yZXF1aXJlZC9yZXF1aXJlZCcpKVxuICAgIFxuICAgIC5kaXJlY3RpdmUoJ2ZsdWlnU3dpdGNoJywgcmVxdWlyZSgnLi9zd2l0Y2gvc3dpdGNoJykpXG4gICAgLmRpcmVjdGl2ZSgnZmx1aWdQb3BvdmVyJywgcmVxdWlyZSgnLi9wb3BvdmVyL3BvcG92ZXInKSlcblxubW9kdWxlLmV4cG9ydHMgPSBtLm5hbWU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBIZWFkZXJEaXJlY3RpdmUoJGxvY2FsZSkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgcmVxdWlyZTogJz9uZ01vZGVsJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuXG4gICAgICAgICAgICB2YXIgdGl0bGUgPSBhdHRycy5mbHVpZ0hlYWRlciB8fCAkKGRvY3VtZW50KS5maW5kKFwidGl0bGVcIikudGV4dCgpO1xuICAgICAgICAgICAgdmFyIGxvZ28gPSBhdHRycy5sb2dvIHx8ICcvcG9ydGFsL3Jlc291cmNlcy9pbWFnZXMvbG9nby5wbmcnO1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IGF0dHJzLmhlaWdodCB8fCAnODAnO1xuXG4gICAgICAgICAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwicm93XCI+JztcbiAgICAgICAgICAgIHZhciBoID0gXCJoMVwiO1xuXG4gICAgICAgICAgICBpZiAodGl0bGUubGVuZ3RoID4gNTQpIHtcbiAgICAgICAgICAgICAgICBoID0gXCJoNFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aXRsZS5sZW5ndGggPiA0Mykge1xuICAgICAgICAgICAgICAgIGggPSBcImgzXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRpdGxlLmxlbmd0aCA+IDM0KSB7XG4gICAgICAgICAgICAgICAgaCA9IFwiaDJcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cImNvbC14cy02XCI+JztcbiAgICAgICAgICAgIGh0bWwgKz0gXCI8aW1nIHNyYz0nXCIgKyBsb2dvICsgXCInIGlkPSdsb2dvJyBjbGFzcz0nbG9nbycgaGVpZ2h0PSdcIiArIGhlaWdodCArIFwiJyBhbHQ9J0xvZ28nIHRpdGxlPSdMb2dvJyBib3JkZXI9JzAnIC8+XCI7XG4gICAgICAgICAgICBodG1sICs9ICc8L2Rpdj4nO1xuICAgICAgICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cImNvbC14cy02XCI+JztcbiAgICAgICAgICAgIGh0bWwgKz0gJzwnICsgaCArICcgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+JyArIHRpdGxlICsgJzwvJyArIGggKyAnPic7XG4gICAgICAgICAgICBodG1sICs9ICc8L2Rpdj4nO1xuICAgICAgICAgICAgaHRtbCArPSAnPC9kaXY+JztcblxuICAgICAgICAgICAgZWxlbWVudC5wcmVwZW5kKGh0bWwpO1xuXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5IZWFkZXJEaXJlY3RpdmUuJGluamVjdCA9IFsnJGxvY2FsZSddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlckRpcmVjdGl2ZTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFBvcG92ZXJEaXJlY3RpdmUoJGNvbXBpbGUpIHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdHJpZ2dlciA9IGF0dHJzLnRyaWdnZXIgfHwgJ2hvdmVyJztcbiAgICAgICAgICAgIHZhciBwbGFjZW1lbnQgPSBhdHRycy5wbGFjZW1lbnQgfHwgJ2F1dG8nO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBhdHRycy5mbHVpZ0NvbnRlbnQgfHwgYXR0cnMuZGF0YUNvbnRlbnQgfHwgJyc7XG5cbiAgICAgICAgICAgIEZMVUlHQy5wb3BvdmVyKGVsZW1lbnQsIHsgdHJpZ2dlcjogdHJpZ2dlciwgcGxhY2VtZW50OiBwbGFjZW1lbnQsIGNvbnRlbnQ6IGNvbnRlbnQgfSk7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuUG9wb3ZlckRpcmVjdGl2ZS4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcG92ZXJEaXJlY3RpdmU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBSZXF1aXJlZERpcmVjdGl2ZSgkY29tcGlsZSkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgcmVxdWlyZTogJz9uZ01vZGVsJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG4gICAgICAgICAgICBpZiAoIWN0cmwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCduZ01vZGVsIG7Do28gaW5mb3JtYWRvIHBhcmEgbyBlbGVtZW50bzonLCBlbGVtZW50WzBdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghY3RybCB8fCAhYXR0cnMuZmx1aWdSZXF1aXJlZCkgcmV0dXJuO1xuICAgICAgICAgICAgYXR0cnMucmVxdWlyZWQgPSB0cnVlOyAvLyBmb3JjZSB0cnV0aHkgaW4gY2FzZSB3ZSBhcmUgb24gbm9uIGlucHV0IGVsZW1lbnRcblxuICAgICAgICAgICAgdmFyIHZhbGlkYXRvciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJzLnJlcXVpcmVkICYmICh2YWx1ZSA9PSAnJyB8fCB2YWx1ZSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0cmwuJHNldFZhbGlkaXR5KCdyZXF1aXJlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN0cmwuJHNldFZhbGlkaXR5KCdyZXF1aXJlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY3RybC4kZm9ybWF0dGVycy5wdXNoKHZhbGlkYXRvcik7XG4gICAgICAgICAgICBjdHJsLiRwYXJzZXJzLnVuc2hpZnQodmFsaWRhdG9yKTtcblxuICAgICAgICAgICAgYXR0cnMuJG9ic2VydmUoJ2ZsdWlnUmVxdWlyZWQnLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9ICQoXCJsYWJlbFtmb3I9J1wiICsgZWxlbWVudC5hdHRyKCduYW1lJykgKyBcIiddXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5hZGRDbGFzcyhcInJlcXVpcmVkXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnJlbW92ZUNsYXNzKFwicmVxdWlyZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcihjdHJsLiR2aWV3VmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblJlcXVpcmVkRGlyZWN0aXZlLiRpbmplY3QgPSBbJyRjb21waWxlJ107XG5cbm1vZHVsZS5leHBvcnRzID0gUmVxdWlyZWREaXJlY3RpdmU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBTd2l0Y2hEaXJlY3RpdmUoJGNvbXBpbGUsICR0aW1lb3V0KSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICByZXF1aXJlOiAnP25nTW9kZWwnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG5cbiAgICAgICAgICAgIGlmICghY3RybCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ25nTW9kZWwgbsOjbyBpbmZvcm1hZG8gcGFyYSBvIGVsZW1lbnRvOicsIGVsZW1lbnRbMF0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gJGNvbXBpbGUoJzxkaXYgc3R5bGU9XCJ3aWR0aDogMTEwcHhcIj48L2Rpdj4nKShzY29wZSk7XG5cbiAgICAgICAgICAgIGVsZW1lbnQuYWZ0ZXIodGVtcGxhdGUpO1xuICAgICAgICAgICAgdGVtcGxhdGUuYXBwZW5kKGVsZW1lbnQpO1xuXG4gICAgICAgICAgICB0ZW1wbGF0ZS5oaWRlKCk7XG5cbiAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzd2l0Y2gnLCBjdHJsLiRtb2RlbFZhbHVlKVxuXG4gICAgICAgICAgICAgICAgRkxVSUdDLnN3aXRjaGVyLmluaXQoZWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IGN0cmwuJG1vZGVsVmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChjdHJsLiRtb2RlbFZhbHVlID09IHRydWUgfHwgY3RybC4kbW9kZWxWYWx1ZSA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc1JlYWRPbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmF0dHIoJ3JlYWRvbmx5JykgPT0gJ3JlYWRvbmx5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWFkT25seSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBGTFVJR0Muc3dpdGNoZXIuaXNSZWFkT25seShlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuYXR0cignZGlzYWJsZWQnKSA9PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZMVUlHQy5zd2l0Y2hlci5lbmFibGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgRkxVSUdDLnN3aXRjaGVyLnNldFRydWUoZWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEZMVUlHQy5zd2l0Y2hlci5pc1JlYWRPbmx5KGVsZW1lbnQsIGlzUmVhZE9ubHkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZMVUlHQy5zd2l0Y2hlci5kaXNhYmxlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgRkxVSUdDLnN3aXRjaGVyLm9uQ2hhbmdlKGVsZW1lbnQsIGZ1bmN0aW9uIChldmVudCwgc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N3aXRjaCBvbkNoYW5nZScsIHN0YXRlKVxuICAgICAgICAgICAgICAgICAgICBjdHJsLiRzZXRWaWV3VmFsdWUoc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBjdHJsLiRyZW5kZXIoKTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblN3aXRjaERpcmVjdGl2ZS4kaW5qZWN0ID0gWyckY29tcGlsZScsICckdGltZW91dCddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN3aXRjaERpcmVjdGl2ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBTdHJpbmdNYXNrID0gcmVxdWlyZSgnc3RyaW5nLW1hc2snKTtcbnZhciBtYXNrRmFjdG9yeSA9IHJlcXVpcmUoJ21hc2stZmFjdG9yeScpO1xuXG52YXIgY2NTaXplID0gMTY7XG5cbnZhciBjY01hc2sgPSBuZXcgU3RyaW5nTWFzaygnMDAwMCAwMDAwIDAwMDAgMDAwMCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hc2tGYWN0b3J5KHtcblx0Y2xlYXJWYWx1ZTogZnVuY3Rpb24ocmF3VmFsdWUpIHtcblx0XHRyZXR1cm4gcmF3VmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpLnNsaWNlKDAsIGNjU2l6ZSk7XG5cdH0sXG5cdGZvcm1hdDogZnVuY3Rpb24oY2xlYW5WYWx1ZSkge1xuXHRcdHZhciBmb3JtYXRlZFZhbHVlO1xuXG5cdFx0Zm9ybWF0ZWRWYWx1ZSA9IGNjTWFzay5hcHBseShjbGVhblZhbHVlKSB8fCAnJztcblxuXHRcdHJldHVybiBmb3JtYXRlZFZhbHVlLnRyaW0oKS5yZXBsYWNlKC9bXjAtOV0kLywgJycpO1xuXHR9LFxuXHR2YWxpZGF0aW9uczoge1xuXHRcdGNyZWRpdENhcmQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHR2YXIgdmFsdWVMZW5ndGggPSB2YWx1ZSAmJiB2YWx1ZS50b1N0cmluZygpLmxlbmd0aDtcblx0XHRcdHJldHVybiB2YWx1ZUxlbmd0aCA9PT0gY2NTaXplO1xuXHRcdH1cblx0fVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBtZXNzYWdlcyA9IHJlcXVpcmUoJy4vbWVzc2FnZXMnKTtcblxuZnVuY3Rpb24gRXJyb3JEaXJlY3RpdmUoJGNvbXBpbGUpIHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIHJlcXVpcmU6ICc/bmdNb2RlbCcsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgICAgICAgIGlmICghY3RybCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ25nTW9kZWwgbsOjbyBpbmZvcm1hZG8gcGFyYSBvIGVsZW1lbnRvOicsIGVsZW1lbnRbMF0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB3YXRjaEF0dHIgPSBhdHRycy5mbHVpZ0Vycm9yO1xuXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2hDb2xsZWN0aW9uKHdhdGNoQXR0ciwgZnVuY3Rpb24gKHZhbHVlcykge1xuXG4gICAgICAgICAgICAgICAgdmFyIGVycm9yID0gXCJcIjtcblxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2YWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZXNba2V5XSkgZXJyb3IgKz0gbWVzc2FnZXNba2V5XSArIFwiPGJyPlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50LnBvcG92ZXIoJ2Rlc3Ryb3knKTtcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSAkKFwibGFiZWxbZm9yPSdcIiArIGVsZW1lbnQuYXR0cignbmFtZScpICsgXCInXVwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnJvciAhPSAnJykge1xuXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJoYXMtZXJyb3JcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgRkxVSUdDLnBvcG92ZXIoZWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogJ3RydWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2ZvY3VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBlcnJvclxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy9lbGVtZW50LnBvcG92ZXIoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiaGFzLWVycm9yXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkVycm9yRGlyZWN0aXZlLiRpbmplY3QgPSBbJyRjb21waWxlJ107XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JEaXJlY3RpdmU7IiwidmFyIG1lc3NhZ2VzID0ge1xuICAgIFwicmVxdWlyZWRcIjogXCJPIGNhbXBvIMOpIG9icmlnYXTDs3Jpb1wiLFxuICAgIFwibWluXCI6IFwiTyB2YWxvciBpbmZvcm1hZG8gw6kgaW5mZXJpb3IgYW8gbcOtbmltb1wiLFxuICAgIFwibWF4XCI6IFwiTyB2YWxvciBpbmZvcm1hZG8gw6kgc3VwZXJpb3IgYW8gbcOheGltb1wiLFxuICAgIFwiY3BmXCI6IFwiTyBDUEYgaW5mb3JtYWRvIMOpIGludsOhbGlkb1wiLFxuICAgIFwidGltZVwiOiBcIk8gaG9yw6FyaW8gaW5mb3JtYWRvIMOpIGludsOhbGlkb1wiLFxuICAgIFwiY25walwiOiBcIk8gQ05QSiBpbmZvcm1hZG8gw6kgaW52w6FsaWRvXCIsXG4gICAgXCJwaG9uZU51bWJlclwiOiBcIk8gdGVsZWZvbmUgaW5mb3JtYWRvIMOpIGludsOhbGlkb1wiLFxuICAgIFwiY2VwXCI6IFwiTyBDRVAgaW5mb3JtYWRvIMOpIGludsOhbGlkb1wiLFxuICAgIFwiaWVcIjogXCJJbnNjcmnDp8OjbyBlc3RhZHVhbCBpbnbDoWxpZGFcIixcbiAgICBcImNhclBsYXRlXCI6IFwiQSBwbGFjYSBpbmZvcm1hZGEgw6kgaW52w6FsaWRhXCIsXG4gICAgXCJjcmVkaXRDYXJkXCI6IFwiTyBuw7ptZXJvIGRlIGNhcnTDo28gZGUgY3LDqWRpdG8gaW5mb3JtYWRvIMOpIGludsOhbGlkb1wiLFxuICAgIFwiYm9sZXRvQmFuY2FyaW9cIjogXCJPIG7Dum1lcm8gZG8gYm9sZXRvIGJhbmPDoXJpbyBpbmZvcm1hZG8gw6kgaW52w6FsaWRvXCIsXG4gICAgXCJuZmVBY2Nlc3NLZXlcIjogXCJDaGF2ZSBkZSBhY2Vzc28gaW52w6FsaWRhXCJcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lc3NhZ2VzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG0gPSBhbmd1bGFyLm1vZHVsZSgnZmx1aWcuZ2xvYmFsLm1hc2tzJywgW1xuICAgICAgICByZXF1aXJlKCcuLi9oZWxwZXJzJyksXG4gICAgXSlcbiAgICAuZGlyZWN0aXZlKCdmbHVpZ01vbmV5TWFzaycsIHJlcXVpcmUoJy4vbW9uZXkvbW9uZXknKSlcbiAgICAuZGlyZWN0aXZlKCdmbHVpZ051bWJlck1hc2snLCByZXF1aXJlKCcuL251bWJlci9udW1iZXInKSlcbiAgICAuZGlyZWN0aXZlKCdmbHVpZ1BlcmNlbnRhZ2VNYXNrJywgcmVxdWlyZSgnLi9wZXJjZW50YWdlL3BlcmNlbnRhZ2UnKSlcbiAgICAuZGlyZWN0aXZlKCdmbHVpZ1NjaWVudGlmaWNOb3RhdGlvbk1hc2snLCByZXF1aXJlKCcuL3NjaWVudGlmaWMtbm90YXRpb24vc2NpZW50aWZpYy1ub3RhdGlvbicpKVxuICAgIC5kaXJlY3RpdmUoJ2ZsdWlnVGltZU1hc2snLCByZXF1aXJlKCcuL3RpbWUvdGltZScpKVxuICAgIC5kaXJlY3RpdmUoJ2ZsdWlnQ3JlZGl0Q2FyZCcsIHJlcXVpcmUoJy4vY3JlZGl0LWNhcmQvY3JlZGl0LWNhcmQnKSlcbiAgICAuZGlyZWN0aXZlKCdmbHVpZ0Vycm9yJywgcmVxdWlyZSgnLi9lcnJvci9lcnJvcicpKVxuICAgIC5kaXJlY3RpdmUoJ25nTmFtZScsIHJlcXVpcmUoJy4vbmFtZS9uYW1lJykpXG5cbiAgICAuZmlsdGVyKCdwZXJjZW50YWdlJywgcmVxdWlyZSgnLi9wZXJjZW50YWdlL3BlcmNlbnRhZ2UtZmlsdGVyJykpXG4gICAgLmZpbHRlcigndGltZScsIHJlcXVpcmUoJy4vdGltZS90aW1lLWZpbHRlcicpKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gbS5uYW1lOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFN0cmluZ01hc2sgPSByZXF1aXJlKCdzdHJpbmctbWFzaycpO1xudmFyIHZhbGlkYXRvcnMgPSByZXF1aXJlKCd2YWxpZGF0b3JzJyk7XG5cbmZ1bmN0aW9uIE1vbmV5TWFza0RpcmVjdGl2ZSgkbG9jYWxlLCAkcGFyc2UsICRjb21waWxlLCBQcmVGb3JtYXR0ZXJzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcblxuICAgICAgICAgICAgaWYgKGF0dHJzLmZsdWlnTW9uZXlNYXNrID09PSBcImZhbHNlXCIpIHJldHVybjtcblxuICAgICAgICAgICAgdmFyIGRlY2ltYWxEZWxpbWl0ZXIgPSAkbG9jYWxlLk5VTUJFUl9GT1JNQVRTLkRFQ0lNQUxfU0VQLFxuICAgICAgICAgICAgICAgIHRob3VzYW5kc0RlbGltaXRlciA9ICRsb2NhbGUuTlVNQkVSX0ZPUk1BVFMuR1JPVVBfU0VQLFxuICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltID0gJGxvY2FsZS5OVU1CRVJfRk9STUFUUy5DVVJSRU5DWV9TWU0sXG4gICAgICAgICAgICAgICAgc3ltYm9sU2VwYXJhdGlvbiA9ICcgJyxcbiAgICAgICAgICAgICAgICBkZWNpbWFscyA9ICRwYXJzZShhdHRycy5mbHVpZ01vbmV5TWFzaykoc2NvcGUpO1xuXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG1hc2tGYWN0b3J5KGRlY2ltYWxzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlY2ltYWxzUGF0dGVybiA9IGRlY2ltYWxzID4gMCA/IGRlY2ltYWxEZWxpbWl0ZXIgKyBuZXcgQXJyYXkoZGVjaW1hbHMgKyAxKS5qb2luKCcwJykgOiAnJztcbiAgICAgICAgICAgICAgICB2YXIgbWFza1BhdHRlcm4gPSBzeW1ib2xTZXBhcmF0aW9uICsgJyMnICsgdGhvdXNhbmRzRGVsaW1pdGVyICsgJyMjMCcgKyBkZWNpbWFsc1BhdHRlcm47XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdNYXNrKG1hc2tQYXR0ZXJuLCB7IHJldmVyc2U6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChhdHRycy5mbHVpZ0hpZGVTcGFjZSkgJiYgYXR0cnMuZmx1aWdIaWRlU3BhY2UgIT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgIHN5bWJvbFNlcGFyYXRpb24gPSAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLmN1cnJlbmN5U3ltYm9sKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltID0gYXR0cnMuY3VycmVuY3lTeW1ib2w7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJzLmN1cnJlbmN5U3ltYm9sLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzeW1ib2xTZXBhcmF0aW9uID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNOYU4oZGVjaW1hbHMpKSB7XG4gICAgICAgICAgICAgICAgZGVjaW1hbHMgPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVjaW1hbHMgPSBwYXJzZUludChkZWNpbWFscyk7XG4gICAgICAgICAgICB2YXIgbW9uZXlNYXNrID0gbWFza0ZhY3RvcnkoZGVjaW1hbHMpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBmb3JtYXR0ZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3RybC4kaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcHJlZml4ID0gKGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLmZsdWlnTmVnYXRpdmVOdW1iZXIpICYmIHZhbHVlIDwgMCkgPyAnLScgOiAnJztcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVUb0Zvcm1hdCA9IFByZUZvcm1hdHRlcnMucHJlcGFyZU51bWJlclRvRm9ybWF0dGVyKHZhbHVlLCBkZWNpbWFscyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArIG1vbmV5TWFzay5hcHBseSh2YWx1ZVRvRm9ybWF0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcGFyc2VyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN0cmwuJGlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgYWN0dWFsTnVtYmVyID0gdmFsdWUucmVwbGFjZSgvW15cXGRdKy9nLCAnJyk7XG4gICAgICAgICAgICAgICAgYWN0dWFsTnVtYmVyID0gYWN0dWFsTnVtYmVyLnJlcGxhY2UoL15bMF0rKFsxLTldKS8sICckMScpO1xuICAgICAgICAgICAgICAgIGFjdHVhbE51bWJlciA9IGFjdHVhbE51bWJlciB8fCAnMCc7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1hdGVkVmFsdWUgPSBtb25leU1hc2suYXBwbHkoYWN0dWFsTnVtYmVyKTtcblxuICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChhdHRycy5mbHVpZ05lZ2F0aXZlTnVtYmVyKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNOZWdhdGl2ZSA9ICh2YWx1ZVswXSA9PT0gJy0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRzVG9JbnZlcnRTaWduID0gKHZhbHVlLnNsaWNlKC0xKSA9PT0gJy0nKTtcblxuICAgICAgICAgICAgICAgICAgICAvL29ubHkgYXBwbHkgdGhlIG1pbnVzIHNpZ24gaWYgaXQgaXMgbmVnYXRpdmUgb3IoZXhjbHVzaXZlKVxuICAgICAgICAgICAgICAgICAgICAvL25lZWRzIHRvIGJlIG5lZ2F0aXZlIGFuZCB0aGUgbnVtYmVyIGlzIGRpZmZlcmVudCBmcm9tIHplcm9cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5lZWRzVG9JbnZlcnRTaWduIF4gaXNOZWdhdGl2ZSAmJiAhIWFjdHVhbE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsTnVtYmVyICo9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0ZWRWYWx1ZSA9ICctJyArIGZvcm1hdGVkVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IGZvcm1hdGVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3RybC4kc2V0Vmlld1ZhbHVlKGZvcm1hdGVkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjdHJsLiRyZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0ZWRWYWx1ZSA/IHBhcnNlSW50KGZvcm1hdGVkVmFsdWUucmVwbGFjZSgvW15cXGRcXC1dKy9nLCAnJykpIC8gTWF0aC5wb3coMTAsIGRlY2ltYWxzKSA6IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN0cmwuJGZvcm1hdHRlcnMucHVzaChmb3JtYXR0ZXIpO1xuICAgICAgICAgICAgY3RybC4kcGFyc2Vycy5wdXNoKHBhcnNlcik7XG5cbiAgICAgICAgICAgIGlmIChhdHRycy5mbHVpZ01vbmV5TWFzaykge1xuICAgICAgICAgICAgICAgIHNjb3BlLiR3YXRjaChhdHRycy5mbHVpZ01vbmV5TWFzaywgZnVuY3Rpb24oX2RlY2ltYWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzID0gaXNOYU4oX2RlY2ltYWxzKSA/IDIgOiBfZGVjaW1hbHM7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzID0gcGFyc2VJbnQoZGVjaW1hbHMpO1xuICAgICAgICAgICAgICAgICAgICBtb25leU1hc2sgPSBtYXNrRmFjdG9yeShkZWNpbWFscyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VyKGN0cmwuJHZpZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICBpZiAoYXR0cnMuZmx1aWdIaWRlR3JvdXBTZXApIHtcbiAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMuZmx1aWdIaWRlR3JvdXBTZXAsIGZ1bmN0aW9uKF9oaWRlR3JvdXBTZXApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChfaGlkZUdyb3VwU2VwID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kc0RlbGltaXRlciA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzRGVsaW1pdGVyID0gJGxvY2FsZS5OVU1CRVJfRk9STUFUUy5HUk9VUF9TRVA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbW9uZXlNYXNrID0gbWFza0ZhY3RvcnkoZGVjaW1hbHMpO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZXIoY3RybC4kdmlld1ZhbHVlKTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXR0cnMubWluKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1pblZhbDtcblxuICAgICAgICAgICAgICAgIGN0cmwuJHZhbGlkYXRvcnMubWluID0gZnVuY3Rpb24obW9kZWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9ycy5taW5OdW1iZXIoY3RybCwgbW9kZWxWYWx1ZSwgbWluVmFsKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzLm1pbiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluVmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGN0cmwuJHZhbGlkYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhdHRycy5tYXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF4VmFsO1xuXG4gICAgICAgICAgICAgICAgY3RybC4kdmFsaWRhdG9ycy5tYXggPSBmdW5jdGlvbihtb2RlbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3JzLm1heE51bWJlcihjdHJsLCBtb2RlbFZhbHVlLCBtYXhWYWwpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMubWF4LCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtYXhWYWwgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY3RybC4kdmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gJGNvbXBpbGUoJzxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiID48c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+PGI+JyArIGN1cnJlbmN5U3ltICsgJzwvYj48L3NwYW4+PC9kaXY+Jykoc2NvcGUpO1xuXG4gICAgICAgICAgICBlbGVtZW50LmFmdGVyKHRlbXBsYXRlKTtcbiAgICAgICAgICAgIHRlbXBsYXRlLmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5Nb25leU1hc2tEaXJlY3RpdmUuJGluamVjdCA9IFsnJGxvY2FsZScsICckcGFyc2UnLCAnJGNvbXBpbGUnLCAnUHJlRm9ybWF0dGVycyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vbmV5TWFza0RpcmVjdGl2ZTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIE5nTmFtZURpcmVjdGl2ZSgkdGltZW91dCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5hdHRyKCduYW1lJykpO1xuICAgICAgICAgICAgZWxlbWVudC5hdHRyKCduYW1lJywgYXR0cnMubmdOYW1lKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbk5nTmFtZURpcmVjdGl2ZS4kaW5qZWN0ID0gWyckdGltZW91dCddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5nTmFtZURpcmVjdGl2ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB2YWxpZGF0b3JzID0gcmVxdWlyZSgndmFsaWRhdG9ycycpO1xuXG5mdW5jdGlvbiBOdW1iZXJNYXNrRGlyZWN0aXZlKCRsb2NhbGUsICRwYXJzZSwgUHJlRm9ybWF0dGVycywgTnVtYmVyTWFza3MpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0EnLFxuXHRcdHJlcXVpcmU6ICduZ01vZGVsJyxcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG5cdFx0XHR2YXIgZGVjaW1hbERlbGltaXRlciA9ICRsb2NhbGUuTlVNQkVSX0ZPUk1BVFMuREVDSU1BTF9TRVAsXG5cdFx0XHRcdHRob3VzYW5kc0RlbGltaXRlciA9ICRsb2NhbGUuTlVNQkVSX0ZPUk1BVFMuR1JPVVBfU0VQLFxuXHRcdFx0XHRkZWNpbWFscyA9ICRwYXJzZShhdHRycy5mbHVpZ051bWJlck1hc2spKHNjb3BlKTtcblxuXHRcdFx0aWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLmZsdWlnSGlkZUdyb3VwU2VwKSkge1xuXHRcdFx0XHR0aG91c2FuZHNEZWxpbWl0ZXIgPSAnJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzTmFOKGRlY2ltYWxzKSkge1xuXHRcdFx0XHRkZWNpbWFscyA9IDI7XG5cdFx0XHR9XG5cblx0XHRcdHZhciB2aWV3TWFzayA9IE51bWJlck1hc2tzLnZpZXdNYXNrKGRlY2ltYWxzLCBkZWNpbWFsRGVsaW1pdGVyLCB0aG91c2FuZHNEZWxpbWl0ZXIpLFxuXHRcdFx0XHRtb2RlbE1hc2sgPSBOdW1iZXJNYXNrcy5tb2RlbE1hc2soZGVjaW1hbHMpO1xuXG5cdFx0XHRmdW5jdGlvbiBwYXJzZXIodmFsdWUpIHtcblx0XHRcdFx0aWYgKGN0cmwuJGlzRW1wdHkodmFsdWUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgdmFsdWVUb0Zvcm1hdCA9IFByZUZvcm1hdHRlcnMuY2xlYXJEZWxpbWl0ZXJzQW5kTGVhZGluZ1plcm9zKHZhbHVlKSB8fCAnMCc7XG5cdFx0XHRcdHZhciBmb3JtYXRlZFZhbHVlID0gdmlld01hc2suYXBwbHkodmFsdWVUb0Zvcm1hdCk7XG5cdFx0XHRcdHZhciBhY3R1YWxOdW1iZXIgPSBwYXJzZUZsb2F0KG1vZGVsTWFzay5hcHBseSh2YWx1ZVRvRm9ybWF0KSk7XG5cblx0XHRcdFx0aWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLmZsdWlnTmVnYXRpdmVOdW1iZXIpKSB7XG5cdFx0XHRcdFx0dmFyIGlzTmVnYXRpdmUgPSAodmFsdWVbMF0gPT09ICctJyksXG5cdFx0XHRcdFx0XHRuZWVkc1RvSW52ZXJ0U2lnbiA9ICh2YWx1ZS5zbGljZSgtMSkgPT09ICctJyk7XG5cblx0XHRcdFx0XHQvL29ubHkgYXBwbHkgdGhlIG1pbnVzIHNpZ24gaWYgaXQgaXMgbmVnYXRpdmUgb3IoZXhjbHVzaXZlKSBvciB0aGUgZmlyc3QgY2hhcmFjdGVyXG5cdFx0XHRcdFx0Ly9uZWVkcyB0byBiZSBuZWdhdGl2ZSBhbmQgdGhlIG51bWJlciBpcyBkaWZmZXJlbnQgZnJvbSB6ZXJvXG5cdFx0XHRcdFx0aWYgKChuZWVkc1RvSW52ZXJ0U2lnbiBeIGlzTmVnYXRpdmUpIHx8IHZhbHVlID09PSAnLScpIHtcblx0XHRcdFx0XHRcdGFjdHVhbE51bWJlciAqPSAtMTtcblx0XHRcdFx0XHRcdGZvcm1hdGVkVmFsdWUgPSAnLScgKyAoKGFjdHVhbE51bWJlciAhPT0gMCkgPyBmb3JtYXRlZFZhbHVlIDogJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjdHJsLiR2aWV3VmFsdWUgIT09IGZvcm1hdGVkVmFsdWUpIHtcblx0XHRcdFx0XHRjdHJsLiRzZXRWaWV3VmFsdWUoZm9ybWF0ZWRWYWx1ZSk7XG5cdFx0XHRcdFx0Y3RybC4kcmVuZGVyKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gYWN0dWFsTnVtYmVyO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBmb3JtYXR0ZXIodmFsdWUpIHtcblx0XHRcdFx0aWYgKGN0cmwuJGlzRW1wdHkodmFsdWUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHByZWZpeCA9IChhbmd1bGFyLmlzRGVmaW5lZChhdHRycy5mbHVpZ05lZ2F0aXZlTnVtYmVyKSAmJiB2YWx1ZSA8IDApID8gJy0nIDogJyc7XG5cdFx0XHRcdHZhciB2YWx1ZVRvRm9ybWF0ID0gUHJlRm9ybWF0dGVycy5wcmVwYXJlTnVtYmVyVG9Gb3JtYXR0ZXIodmFsdWUsIGRlY2ltYWxzKTtcblx0XHRcdFx0cmV0dXJuIHByZWZpeCArIHZpZXdNYXNrLmFwcGx5KHZhbHVlVG9Gb3JtYXQpO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBjbGVhclZpZXdWYWx1ZUlmTWludXNTaWduKCkge1xuXHRcdFx0XHRpZiAoY3RybC4kdmlld1ZhbHVlID09PSAnLScpIHtcblx0XHRcdFx0XHRjdHJsLiRzZXRWaWV3VmFsdWUoJycpO1xuXHRcdFx0XHRcdGN0cmwuJHJlbmRlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQub24oJ2JsdXInLCBjbGVhclZpZXdWYWx1ZUlmTWludXNTaWduKTtcblxuXHRcdFx0Y3RybC4kZm9ybWF0dGVycy5wdXNoKGZvcm1hdHRlcik7XG5cdFx0XHRjdHJsLiRwYXJzZXJzLnB1c2gocGFyc2VyKTtcblxuXHRcdFx0aWYgKGF0dHJzLmZsdWlnTnVtYmVyTWFzaykge1xuXHRcdFx0XHRzY29wZS4kd2F0Y2goYXR0cnMuZmx1aWdOdW1iZXJNYXNrLCBmdW5jdGlvbiAoX2RlY2ltYWxzKSB7XG5cdFx0XHRcdFx0ZGVjaW1hbHMgPSBpc05hTihfZGVjaW1hbHMpID8gMiA6IF9kZWNpbWFscztcblx0XHRcdFx0XHR2aWV3TWFzayA9IE51bWJlck1hc2tzLnZpZXdNYXNrKGRlY2ltYWxzLCBkZWNpbWFsRGVsaW1pdGVyLCB0aG91c2FuZHNEZWxpbWl0ZXIpO1xuXHRcdFx0XHRcdG1vZGVsTWFzayA9IE51bWJlck1hc2tzLm1vZGVsTWFzayhkZWNpbWFscyk7XG5cblx0XHRcdFx0XHRwYXJzZXIoY3RybC4kdmlld1ZhbHVlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChhdHRycy5taW4pIHtcblx0XHRcdFx0dmFyIG1pblZhbDtcblxuXHRcdFx0XHRjdHJsLiR2YWxpZGF0b3JzLm1pbiA9IGZ1bmN0aW9uIChtb2RlbFZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZhbGlkYXRvcnMubWluTnVtYmVyKGN0cmwsIG1vZGVsVmFsdWUsIG1pblZhbCk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0c2NvcGUuJHdhdGNoKGF0dHJzLm1pbiwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0bWluVmFsID0gdmFsdWU7XG5cdFx0XHRcdFx0Y3RybC4kdmFsaWRhdGUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChhdHRycy5tYXgpIHtcblx0XHRcdFx0dmFyIG1heFZhbDtcblxuXHRcdFx0XHRjdHJsLiR2YWxpZGF0b3JzLm1heCA9IGZ1bmN0aW9uIChtb2RlbFZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZhbGlkYXRvcnMubWF4TnVtYmVyKGN0cmwsIG1vZGVsVmFsdWUsIG1heFZhbCk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0c2NvcGUuJHdhdGNoKGF0dHJzLm1heCwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0bWF4VmFsID0gdmFsdWU7XG5cdFx0XHRcdFx0Y3RybC4kdmFsaWRhdGUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuTnVtYmVyTWFza0RpcmVjdGl2ZS4kaW5qZWN0ID0gWyckbG9jYWxlJywgJyRwYXJzZScsICdQcmVGb3JtYXR0ZXJzJywgJ051bWJlck1hc2tzJ107XG5cbm1vZHVsZS5leHBvcnRzID0gTnVtYmVyTWFza0RpcmVjdGl2ZTsiLCIndXNlIHN0cmljdCc7XG5cblxuZnVuY3Rpb24gUGVyY2VudGFnZUZpbHRlcigkZmlsdGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCwgZGVjaW1hbHMpIHtcbiAgICAgICAgcmV0dXJuICRmaWx0ZXIoJ251bWJlcicpKGlucHV0ICogMTAwLCBkZWNpbWFscykgKyAnJSc7XG4gICAgfTtcbn1cblBlcmNlbnRhZ2VGaWx0ZXIuJGluamVjdCA9IFsnJGZpbHRlciddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBlcmNlbnRhZ2VGaWx0ZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdmFsaWRhdG9ycyA9IHJlcXVpcmUoJ3ZhbGlkYXRvcnMnKTtcblxuZnVuY3Rpb24gUGVyY2VudGFnZU1hc2tEaXJlY3RpdmUoJGxvY2FsZSwgJHBhcnNlLCBQcmVGb3JtYXR0ZXJzLCBOdW1iZXJNYXNrcykge1xuICAgIGZ1bmN0aW9uIHByZXBhcmVQZXJjZW50YWdlVG9Gb3JtYXR0ZXIodmFsdWUsIGRlY2ltYWxzLCBtb2RlbE11bHRpcGxpZXIpIHtcbiAgICAgICAgcmV0dXJuIFByZUZvcm1hdHRlcnMuY2xlYXJEZWxpbWl0ZXJzQW5kTGVhZGluZ1plcm9zKChwYXJzZUZsb2F0KHZhbHVlKSAqIG1vZGVsTXVsdGlwbGllcikudG9GaXhlZChkZWNpbWFscykpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG5cbiAgICAgICAgICAgIGlmIChhdHRycy5mbHVpZ1BlcmNlbnRhZ2VNYXNrID09PSBcImZhbHNlXCIpIHJldHVybjtcblxuICAgICAgICAgICAgdmFyIGRlY2ltYWxEZWxpbWl0ZXIgPSAkbG9jYWxlLk5VTUJFUl9GT1JNQVRTLkRFQ0lNQUxfU0VQLFxuICAgICAgICAgICAgICAgIHRob3VzYW5kc0RlbGltaXRlciA9ICRsb2NhbGUuTlVNQkVSX0ZPUk1BVFMuR1JPVVBfU0VQLFxuICAgICAgICAgICAgICAgIGRlY2ltYWxzID0gcGFyc2VJbnQoYXR0cnMuZmx1aWdQZXJjZW50YWdlTWFzayksXG4gICAgICAgICAgICAgICAgaGlkZVNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgYmFja3NwYWNlUHJlc3NlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBlbGVtZW50LmJpbmQoJ2tleWRvd24ga2V5cHJlc3MnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGJhY2tzcGFjZVByZXNzZWQgPSBldmVudC53aGljaCA9PT0gODtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IHtcbiAgICAgICAgICAgICAgICBtdWx0aXBsaWVyOiAxMDAsXG4gICAgICAgICAgICAgICAgZGVjaW1hbE1hc2s6IDJcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChhdHRycy5oaWRlR3JvdXBTZXApKSB7XG4gICAgICAgICAgICAgICAgdGhvdXNhbmRzRGVsaW1pdGVyID0gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChhdHRycy5oaWRlU3BhY2UpKSB7XG4gICAgICAgICAgICAgICAgaGlkZVNwYWNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLnBlcmNlbnRhZ2VWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlLm11bHRpcGxpZXIgPSAxO1xuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWUuZGVjaW1hbE1hc2sgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNOYU4oZGVjaW1hbHMpKSB7XG4gICAgICAgICAgICAgICAgZGVjaW1hbHMgPSAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbnVtYmVyRGVjaW1hbHMgPSBkZWNpbWFscyArIG1vZGVsVmFsdWUuZGVjaW1hbE1hc2s7XG4gICAgICAgICAgICB2YXIgdmlld01hc2sgPSBOdW1iZXJNYXNrcy52aWV3TWFzayhkZWNpbWFscywgZGVjaW1hbERlbGltaXRlciwgdGhvdXNhbmRzRGVsaW1pdGVyKSxcbiAgICAgICAgICAgICAgICBtb2RlbE1hc2sgPSBOdW1iZXJNYXNrcy5tb2RlbE1hc2sobnVtYmVyRGVjaW1hbHMpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBmb3JtYXR0ZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3RybC4kaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZVRvRm9ybWF0ID0gcHJlcGFyZVBlcmNlbnRhZ2VUb0Zvcm1hdHRlcih2YWx1ZSwgZGVjaW1hbHMsIG1vZGVsVmFsdWUubXVsdGlwbGllcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXdNYXNrLmFwcGx5KHZhbHVlVG9Gb3JtYXQpICsgJyAlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcGFyc2UodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3RybC4kaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlVG9Gb3JtYXQgPSBQcmVGb3JtYXR0ZXJzLmNsZWFyRGVsaW1pdGVyc0FuZExlYWRpbmdaZXJvcyh2YWx1ZSkgfHwgJzAnO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxICYmIHZhbHVlLmluZGV4T2YoJyUnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUb0Zvcm1hdCA9IHZhbHVlVG9Gb3JtYXQuc2xpY2UoMCwgdmFsdWVUb0Zvcm1hdC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGJhY2tzcGFjZVByZXNzZWQgJiYgdmFsdWUubGVuZ3RoID09PSAxICYmIHZhbHVlICE9PSAnJScpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUb0Zvcm1hdCA9ICcwJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHBlcmNlbnRTaWduID0gaGlkZVNwYWNlID8gJyUnIDogJyAlJztcbiAgICAgICAgICAgICAgICB2YXIgZm9ybWF0ZWRWYWx1ZSA9IHZpZXdNYXNrLmFwcGx5KHZhbHVlVG9Gb3JtYXQpICsgcGVyY2VudFNpZ247XG4gICAgICAgICAgICAgICAgdmFyIGFjdHVhbE51bWJlciA9IHBhcnNlRmxvYXQobW9kZWxNYXNrLmFwcGx5KHZhbHVlVG9Gb3JtYXQpKTtcblxuICAgICAgICAgICAgICAgIGlmIChjdHJsLiR2aWV3VmFsdWUgIT09IGZvcm1hdGVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3RybC4kc2V0Vmlld1ZhbHVlKGZvcm1hdGVkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjdHJsLiRyZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0dWFsTnVtYmVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdHJsLiRmb3JtYXR0ZXJzLnB1c2goZm9ybWF0dGVyKTtcbiAgICAgICAgICAgIGN0cmwuJHBhcnNlcnMucHVzaChwYXJzZSk7XG5cbiAgICAgICAgICAgIGlmIChhdHRycy5mbHVpZ1BlcmNlbnRhZ2VNYXNrKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzLmZsdWlnUGVyY2VudGFnZU1hc2ssIGZ1bmN0aW9uKF9kZWNpbWFscykge1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFscyA9IGlzTmFOKF9kZWNpbWFscykgPyAyIDogX2RlY2ltYWxzO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChhdHRycy5wZXJjZW50YWdlVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbFZhbHVlLm11bHRpcGxpZXIgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxWYWx1ZS5kZWNpbWFsTWFzayA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBudW1iZXJEZWNpbWFscyA9IGRlY2ltYWxzICsgbW9kZWxWYWx1ZS5kZWNpbWFsTWFzaztcbiAgICAgICAgICAgICAgICAgICAgdmlld01hc2sgPSBOdW1iZXJNYXNrcy52aWV3TWFzayhkZWNpbWFscywgZGVjaW1hbERlbGltaXRlciwgdGhvdXNhbmRzRGVsaW1pdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxNYXNrID0gTnVtYmVyTWFza3MubW9kZWxNYXNrKG51bWJlckRlY2ltYWxzKTtcblxuICAgICAgICAgICAgICAgICAgICBwYXJzZShjdHJsLiR2aWV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXR0cnMubWluKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1pblZhbDtcblxuICAgICAgICAgICAgICAgIGN0cmwuJHZhbGlkYXRvcnMubWluID0gZnVuY3Rpb24obW9kZWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9ycy5taW5OdW1iZXIoY3RybCwgbW9kZWxWYWx1ZSwgbWluVmFsKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzLm1pbiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluVmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGN0cmwuJHZhbGlkYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhdHRycy5tYXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF4VmFsO1xuXG4gICAgICAgICAgICAgICAgY3RybC4kdmFsaWRhdG9ycy5tYXggPSBmdW5jdGlvbihtb2RlbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3JzLm1heE51bWJlcihjdHJsLCBtb2RlbFZhbHVlLCBtYXhWYWwpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMubWF4LCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtYXhWYWwgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY3RybC4kdmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5QZXJjZW50YWdlTWFza0RpcmVjdGl2ZS4kaW5qZWN0ID0gWyckbG9jYWxlJywgJyRwYXJzZScsICdQcmVGb3JtYXR0ZXJzJywgJ051bWJlck1hc2tzJ107XG5cbm1vZHVsZS5leHBvcnRzID0gUGVyY2VudGFnZU1hc2tEaXJlY3RpdmU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3RyaW5nTWFzayA9IHJlcXVpcmUoJ3N0cmluZy1tYXNrJyk7XG5cbmZ1bmN0aW9uIFNjaWVudGlmaWNOb3RhdGlvbk1hc2tEaXJlY3RpdmUoJGxvY2FsZSwgJHBhcnNlKSB7XG5cdHZhciBkZWNpbWFsRGVsaW1pdGVyID0gJGxvY2FsZS5OVU1CRVJfRk9STUFUUy5ERUNJTUFMX1NFUCxcblx0XHRkZWZhdWx0UHJlY2lzaW9uID0gMjtcblxuXHRmdW5jdGlvbiBzaWduaWZpY2FuZE1hc2tCdWlsZGVyKGRlY2ltYWxzKSB7XG5cdFx0dmFyIG1hc2sgPSAnMCc7XG5cblx0XHRpZiAoZGVjaW1hbHMgPiAwKSB7XG5cdFx0XHRtYXNrICs9IGRlY2ltYWxEZWxpbWl0ZXI7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlY2ltYWxzOyBpKyspIHtcblx0XHRcdFx0bWFzayArPSAnMCc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBTdHJpbmdNYXNrKG1hc2ssIHtcblx0XHRcdHJldmVyc2U6IHRydWVcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdBJyxcblx0XHRyZXF1aXJlOiAnbmdNb2RlbCcsXG5cdFx0bGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG5cdFx0XHR2YXIgZGVjaW1hbHMgPSAkcGFyc2UoYXR0cnMuZmx1aWdTY2llbnRpZmljTm90YXRpb25NYXNrKShzY29wZSk7XG5cblx0XHRcdGlmIChpc05hTihkZWNpbWFscykpIHtcblx0XHRcdFx0ZGVjaW1hbHMgPSBkZWZhdWx0UHJlY2lzaW9uO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc2lnbmlmaWNhbmRNYXNrID0gc2lnbmlmaWNhbmRNYXNrQnVpbGRlcihkZWNpbWFscyk7XG5cblx0XHRcdGZ1bmN0aW9uIHNwbGl0TnVtYmVyKHZhbHVlKSB7XG5cdFx0XHRcdHZhciBzdHJpbmdWYWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCksXG5cdFx0XHRcdFx0c3BsaXR0ZWROdW1iZXIgPSBzdHJpbmdWYWx1ZS5tYXRjaCgvKC0/WzAtOV0qKVtcXC5dPyhbMC05XSopP1tFZV0/KFtcXCstXT9bMC05XSopPy8pO1xuXG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aW50ZWdlclBhcnRPZlNpZ25pZmljYW5kOiBzcGxpdHRlZE51bWJlclsxXSxcblx0XHRcdFx0XHRkZWNpbWFsUGFydE9mU2lnbmlmaWNhbmQ6IHNwbGl0dGVkTnVtYmVyWzJdLFxuXHRcdFx0XHRcdGV4cG9uZW50OiBzcGxpdHRlZE51bWJlclszXSB8IDBcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZm9ybWF0dGVyKHZhbHVlKSB7XG5cdFx0XHRcdGlmIChjdHJsLiRpc0VtcHR5KHZhbHVlKSkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5yZXBsYWNlKGRlY2ltYWxEZWxpbWl0ZXIsICcuJyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWUudG9FeHBvbmVudGlhbChkZWNpbWFscyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgZm9ybWF0dGVkVmFsdWUsIGV4cG9uZW50O1xuXHRcdFx0XHR2YXIgc3BsaXR0ZWROdW1iZXIgPSBzcGxpdE51bWJlcih2YWx1ZSk7XG5cblx0XHRcdFx0dmFyIGludGVnZXJQYXJ0T2ZTaWduaWZpY2FuZCA9IHNwbGl0dGVkTnVtYmVyLmludGVnZXJQYXJ0T2ZTaWduaWZpY2FuZCB8fCAwO1xuXHRcdFx0XHR2YXIgbnVtYmVyVG9Gb3JtYXQgPSBpbnRlZ2VyUGFydE9mU2lnbmlmaWNhbmQudG9TdHJpbmcoKTtcblx0XHRcdFx0aWYgKGFuZ3VsYXIuaXNEZWZpbmVkKHNwbGl0dGVkTnVtYmVyLmRlY2ltYWxQYXJ0T2ZTaWduaWZpY2FuZCkpIHtcblx0XHRcdFx0XHRudW1iZXJUb0Zvcm1hdCArPSBzcGxpdHRlZE51bWJlci5kZWNpbWFsUGFydE9mU2lnbmlmaWNhbmQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgbmVlZHNOb3JtYWxpemF0aW9uID1cblx0XHRcdFx0XHQoaW50ZWdlclBhcnRPZlNpZ25pZmljYW5kID49IDEgfHwgaW50ZWdlclBhcnRPZlNpZ25pZmljYW5kIDw9IC0xKSAmJlxuXHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdChhbmd1bGFyLmlzRGVmaW5lZChzcGxpdHRlZE51bWJlci5kZWNpbWFsUGFydE9mU2lnbmlmaWNhbmQpICYmXG5cdFx0XHRcdFx0XHRzcGxpdHRlZE51bWJlci5kZWNpbWFsUGFydE9mU2lnbmlmaWNhbmQubGVuZ3RoID4gZGVjaW1hbHMpIHx8XG5cdFx0XHRcdFx0XHQoZGVjaW1hbHMgPT09IDAgJiYgbnVtYmVyVG9Gb3JtYXQubGVuZ3RoID49IDIpXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRpZiAobmVlZHNOb3JtYWxpemF0aW9uKSB7XG5cdFx0XHRcdFx0ZXhwb25lbnQgPSBudW1iZXJUb0Zvcm1hdC5zbGljZShkZWNpbWFscyArIDEsIG51bWJlclRvRm9ybWF0Lmxlbmd0aCk7XG5cdFx0XHRcdFx0bnVtYmVyVG9Gb3JtYXQgPSBudW1iZXJUb0Zvcm1hdC5zbGljZSgwLCBkZWNpbWFscyArIDEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9ybWF0dGVkVmFsdWUgPSBzaWduaWZpY2FuZE1hc2suYXBwbHkobnVtYmVyVG9Gb3JtYXQpO1xuXG5cdFx0XHRcdGlmIChzcGxpdHRlZE51bWJlci5leHBvbmVudCAhPT0gMCkge1xuXHRcdFx0XHRcdGV4cG9uZW50ID0gc3BsaXR0ZWROdW1iZXIuZXhwb25lbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYW5ndWxhci5pc0RlZmluZWQoZXhwb25lbnQpKSB7XG5cdFx0XHRcdFx0Zm9ybWF0dGVkVmFsdWUgKz0gJ2UnICsgZXhwb25lbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZm9ybWF0dGVkVmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIHBhcnNlcih2YWx1ZSkge1xuXHRcdFx0XHRpZiAoY3RybC4kaXNFbXB0eSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgdmlld1ZhbHVlID0gZm9ybWF0dGVyKHZhbHVlKSxcblx0XHRcdFx0XHRtb2RlbFZhbHVlID0gcGFyc2VGbG9hdCh2aWV3VmFsdWUucmVwbGFjZShkZWNpbWFsRGVsaW1pdGVyLCAnLicpKTtcblxuXHRcdFx0XHRpZiAoY3RybC4kdmlld1ZhbHVlICE9PSB2aWV3VmFsdWUpIHtcblx0XHRcdFx0XHRjdHJsLiRzZXRWaWV3VmFsdWUodmlld1ZhbHVlKTtcblx0XHRcdFx0XHRjdHJsLiRyZW5kZXIoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBtb2RlbFZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjdHJsLiRmb3JtYXR0ZXJzLnB1c2goZm9ybWF0dGVyKTtcblx0XHRcdGN0cmwuJHBhcnNlcnMucHVzaChwYXJzZXIpO1xuXG5cdFx0XHRjdHJsLiR2YWxpZGF0b3JzLm1heCA9IGZ1bmN0aW9uIHZhbGlkYXRvcih2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gY3RybC4kaXNFbXB0eSh2YWx1ZSkgfHwgdmFsdWUgPCBOdW1iZXIuTUFYX1ZBTFVFO1xuXHRcdFx0fTtcblx0XHR9XG5cdH07XG59XG5TY2llbnRpZmljTm90YXRpb25NYXNrRGlyZWN0aXZlLiRpbmplY3QgPSBbJyRsb2NhbGUnLCAnJHBhcnNlJ107XG5cbm1vZHVsZS5leHBvcnRzID0gU2NpZW50aWZpY05vdGF0aW9uTWFza0RpcmVjdGl2ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFN0cmluZ01hc2sgPSByZXF1aXJlKCdzdHJpbmctbWFzaycpO1xudmFyIHRpbWVGb3JtYXQgPSAnMDA6MDAnO1xuXG52YXIgZm9ybWF0dGVkVmFsdWVMZW5ndGggPSB0aW1lRm9ybWF0Lmxlbmd0aDtcbnZhciB1bmZvcm1hdHRlZFZhbHVlTGVuZ3RoID0gdGltZUZvcm1hdC5yZXBsYWNlKCc6JywgJycpLmxlbmd0aDtcbnZhciB0aW1lTWFzayA9IG5ldyBTdHJpbmdNYXNrKHRpbWVGb3JtYXQpO1xuXG5mdW5jdGlvbiBUaW1lRmlsdGVyKCRmaWx0ZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0LCBkZWNpbWFscykge1xuXG4gICAgICAgIHJldHVybiAodGltZU1hc2suYXBwbHkoaW5wdXQpIHx8ICcnKS5yZXBsYWNlKC9bXjAtOV0kLywgJycpO1xuICAgIH07XG59XG5UaW1lRmlsdGVyLiRpbmplY3QgPSBbJyRmaWx0ZXInXTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaW1lRmlsdGVyOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFN0cmluZ01hc2sgPSByZXF1aXJlKCdzdHJpbmctbWFzaycpO1xuXG5mdW5jdGlvbiBUaW1lTWFza0RpcmVjdGl2ZSgkdGltZW91dCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuXG4gICAgICAgICAgICBpZiAoYXR0cnMuZmx1aWdUaW1lTWFzayA9PT0gXCJmYWxzZVwiKSByZXR1cm47XG5cbiAgICAgICAgICAgIHZhciB0aW1lRm9ybWF0ID0gJzAwOjAwOjAwJztcblxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLmZsdWlnVGltZU1hc2spICYmIGF0dHJzLmZsdWlnVGltZU1hc2sgPT09ICdzaG9ydCcpIHtcbiAgICAgICAgICAgICAgICB0aW1lRm9ybWF0ID0gJzAwOjAwJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlTGVuZ3RoID0gdGltZUZvcm1hdC5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgdW5mb3JtYXR0ZWRWYWx1ZUxlbmd0aCA9IHRpbWVGb3JtYXQucmVwbGFjZSgnOicsICcnKS5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgdGltZU1hc2sgPSBuZXcgU3RyaW5nTWFzayh0aW1lRm9ybWF0KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZm9ybWF0dGVyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN0cmwuJGlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY2xlYW5WYWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1teMC05XS9nLCAnJykuc2xpY2UoMCwgdW5mb3JtYXR0ZWRWYWx1ZUxlbmd0aCkgfHwgJyc7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aW1lTWFzay5hcHBseShjbGVhblZhbHVlKSB8fCAnJykucmVwbGFjZSgvW14wLTldJC8sICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3RybC4kZm9ybWF0dGVycy5wdXNoKGZvcm1hdHRlcik7XG5cbiAgICAgICAgICAgIGN0cmwuJHBhcnNlcnMucHVzaChmdW5jdGlvbiBwYXJzZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3RybC4kaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciB2aWV3VmFsdWUgPSBmb3JtYXR0ZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBtb2RlbFZhbHVlID0gdmlld1ZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN0cmwuJHZpZXdWYWx1ZSAhPT0gdmlld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0cmwuJHNldFZpZXdWYWx1ZSh2aWV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjdHJsLiRyZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBlbGVtZW50WzBdLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgICAgIHZhciBlbmQgPSBlbGVtZW50WzBdLnNlbGVjdGlvbkVuZCArIHZpZXdWYWx1ZS5sZW5ndGggLSB2YWx1ZS5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbMF0uc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIHN0YXJ0KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbFZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGN0cmwuJHZhbGlkYXRvcnMudGltZSA9IGZ1bmN0aW9uIChtb2RlbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN0cmwuJGlzRW1wdHkobW9kZWxWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHNwbGl0dGVkVmFsdWUgPSBtb2RlbFZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoLzovKS5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhdjtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZhciBob3VycyA9IHBhcnNlSW50KHNwbGl0dGVkVmFsdWVbMF0pLFxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gcGFyc2VJbnQoc3BsaXR0ZWRWYWx1ZVsxXSksXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSBwYXJzZUludChzcGxpdHRlZFZhbHVlWzJdIHx8IDApO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsVmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPT09IGZvcm1hdHRlZFZhbHVlTGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgIGhvdXJzIDwgMjQgJiYgbWludXRlcyA8IDYwICYmIHNlY29uZHMgPCA2MDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5UaW1lTWFza0RpcmVjdGl2ZS4kaW5qZWN0ID0gWyckdGltZW91dCddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVNYXNrRGlyZWN0aXZlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFN0cmluZ01hc2sgPSByZXF1aXJlKCdzdHJpbmctbWFzaycpO1xuXG52YXIgbSA9IGFuZ3VsYXIubW9kdWxlKCd1aS51dGlscy5tYXNrcy5oZWxwZXJzJywgW10pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG0ubmFtZTtcblxubS5mYWN0b3J5KCdQcmVGb3JtYXR0ZXJzJywgW2Z1bmN0aW9uKCkge1xuXHRmdW5jdGlvbiBjbGVhckRlbGltaXRlcnNBbmRMZWFkaW5nWmVyb3ModmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09ICcwJykge1xuXHRcdFx0cmV0dXJuICcwJztcblx0XHR9XG5cblx0XHR2YXIgY2xlYW5WYWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14tLywnJykucmVwbGFjZSgvXjAqLywgJycpO1xuXHRcdHJldHVybiBjbGVhblZhbHVlLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBwcmVwYXJlTnVtYmVyVG9Gb3JtYXR0ZXIodmFsdWUsIGRlY2ltYWxzKSB7XG5cdFx0cmV0dXJuIGNsZWFyRGVsaW1pdGVyc0FuZExlYWRpbmdaZXJvcygocGFyc2VGbG9hdCh2YWx1ZSkpLnRvRml4ZWQoZGVjaW1hbHMpKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Y2xlYXJEZWxpbWl0ZXJzQW5kTGVhZGluZ1plcm9zOiBjbGVhckRlbGltaXRlcnNBbmRMZWFkaW5nWmVyb3MsXG5cdFx0cHJlcGFyZU51bWJlclRvRm9ybWF0dGVyOiBwcmVwYXJlTnVtYmVyVG9Gb3JtYXR0ZXJcblx0fTtcbn1dKVxuLmZhY3RvcnkoJ051bWJlck1hc2tzJywgW2Z1bmN0aW9uKCkge1xuXHRyZXR1cm4ge1xuXHRcdHZpZXdNYXNrOiBmdW5jdGlvbihkZWNpbWFscywgZGVjaW1hbERlbGltaXRlciwgdGhvdXNhbmRzRGVsaW1pdGVyKSB7XG5cdFx0XHR2YXIgbWFzayA9ICcjJyArIHRob3VzYW5kc0RlbGltaXRlciArICcjIzAnO1xuXG5cdFx0XHRpZiAoZGVjaW1hbHMgPiAwKSB7XG5cdFx0XHRcdG1hc2sgKz0gZGVjaW1hbERlbGltaXRlcjtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWNpbWFsczsgaSsrKSB7XG5cdFx0XHRcdFx0bWFzayArPSAnMCc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5ldyBTdHJpbmdNYXNrKG1hc2ssIHtcblx0XHRcdFx0cmV2ZXJzZTogdHJ1ZVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRtb2RlbE1hc2s6IGZ1bmN0aW9uKGRlY2ltYWxzKSB7XG5cdFx0XHR2YXIgbWFzayA9ICcjIyMwJztcblxuXHRcdFx0aWYgKGRlY2ltYWxzID4gMCkge1xuXHRcdFx0XHRtYXNrICs9ICcuJztcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWNpbWFsczsgaSsrKSB7XG5cdFx0XHRcdFx0bWFzayArPSAnMCc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5ldyBTdHJpbmdNYXNrKG1hc2ssIHtcblx0XHRcdFx0cmV2ZXJzZTogdHJ1ZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xufV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hc2tGYWN0b3J5KG1hc2tEZWZpbml0aW9uKSB7XG5cdHJldHVybiBmdW5jdGlvbiBNYXNrRGlyZWN0aXZlKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyZXN0cmljdDogJ0EnLFxuXHRcdFx0cmVxdWlyZTogJ25nTW9kZWwnLFxuXHRcdFx0bGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG5cdFx0XHRcdGN0cmwuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbiBmb3JtYXR0ZXIodmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoY3RybC4kaXNFbXB0eSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgY2xlYW5WYWx1ZSA9IG1hc2tEZWZpbml0aW9uLmNsZWFyVmFsdWUodmFsdWUpO1xuXHRcdFx0XHRcdHJldHVybiBtYXNrRGVmaW5pdGlvbi5mb3JtYXQoY2xlYW5WYWx1ZSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGN0cmwuJHBhcnNlcnMucHVzaChmdW5jdGlvbiBwYXJzZXIodmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoY3RybC4kaXNFbXB0eSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgY2xlYW5WYWx1ZSA9IG1hc2tEZWZpbml0aW9uLmNsZWFyVmFsdWUodmFsdWUpO1xuXHRcdFx0XHRcdHZhciBmb3JtYXR0ZWRWYWx1ZSA9IG1hc2tEZWZpbml0aW9uLmZvcm1hdChjbGVhblZhbHVlKTtcblxuXHRcdFx0XHRcdGlmIChjdHJsLiR2aWV3VmFsdWUgIT09IGZvcm1hdHRlZFZhbHVlKSB7XG5cdFx0XHRcdFx0XHRjdHJsLiRzZXRWaWV3VmFsdWUoZm9ybWF0dGVkVmFsdWUpO1xuXHRcdFx0XHRcdFx0Y3RybC4kcmVuZGVyKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGFuZ3VsYXIuaXNVbmRlZmluZWQobWFza0RlZmluaXRpb24uZ2V0TW9kZWxWYWx1ZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBjbGVhblZhbHVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciBhY3R1YWxNb2RlbFR5cGUgPSB0eXBlb2YgY3RybC4kbW9kZWxWYWx1ZTtcblx0XHRcdFx0XHRyZXR1cm4gbWFza0RlZmluaXRpb24uZ2V0TW9kZWxWYWx1ZShmb3JtYXR0ZWRWYWx1ZSwgYWN0dWFsTW9kZWxUeXBlKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0YW5ndWxhci5mb3JFYWNoKG1hc2tEZWZpbml0aW9uLnZhbGlkYXRpb25zLCBmdW5jdGlvbih2YWxpZGF0b3JGbiwgdmFsaWRhdGlvbkVycm9yS2V5KSB7XG5cdFx0XHRcdFx0Y3RybC4kdmFsaWRhdG9yc1t2YWxpZGF0aW9uRXJyb3JLZXldID0gZnVuY3Rpb24gdmFsaWRhdG9yKG1vZGVsVmFsdWUsIHZpZXdWYWx1ZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGN0cmwuJGlzRW1wdHkobW9kZWxWYWx1ZSkgfHwgdmFsaWRhdG9yRm4obW9kZWxWYWx1ZSwgdmlld1ZhbHVlKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdG1heE51bWJlcjogZnVuY3Rpb24oY3RybCwgdmFsdWUsIGxpbWl0KSB7XG5cdFx0dmFyIG1heCA9IHBhcnNlRmxvYXQobGltaXQsIDEwKTtcblx0XHRyZXR1cm4gY3RybC4kaXNFbXB0eSh2YWx1ZSkgfHwgaXNOYU4obWF4KSB8fCB2YWx1ZSA8PSBtYXg7XG5cdH0sXG5cdG1pbk51bWJlcjogZnVuY3Rpb24oY3RybCwgdmFsdWUsIGxpbWl0KSB7XG5cdFx0dmFyIG1pbiA9IHBhcnNlRmxvYXQobGltaXQsIDEwKTtcblx0XHRyZXR1cm4gY3RybC4kaXNFbXB0eSh2YWx1ZSkgfHwgaXNOYU4obWluKSB8fCB2YWx1ZSA+PSBtaW47XG5cdH1cbn07XG4iXX0=
