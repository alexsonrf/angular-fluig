/**
 * angular-fluig
 * A list of AngularJS services, directives, filters, utilities an resources for Fluig
 * @version v1.0.7
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

var carPlateMask = new StringMask('UUU-0A00');

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
				
				return String(value).length > 11 || BrV.cpf.validate(String(value));
			},
			cnpj: function (value) {
				
				return  String(value).length <= 11 || BrV.cnpj.validate(String(value));
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

                                ((scope.displayKey && filter.test((String(obj2[scope.displayKey]).normalize ? String(obj2[scope.displayKey]).normalize("NFD") : String(obj2[scope.displayKey])).replace(/[\u0300-\u036f]/g, ""))) ||
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
                change()
            });

            function change() {

                if (dt.getDate()) {
                    var date = new Date(dt.getDate());
                    if (!attrs.pickTime) {
                        date.setHours(23, 59, 59);
                    }

                    ctrl.$setViewValue(date.getTime());
                    element.val(FLUIGC.calendar.formatDate(date, scope.datePattern, scope.dateLocale));
                }
            }
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

function ErrorDirective($compile, $timeout) {

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

ErrorDirective.$inject = ['$compile', '$timeout'];

module.exports = ErrorDirective;
},{"./messages":26}],26:[function(require,module,exports){
var messages = {
    "required": "O campo é obrigatório",
    "minlength": "O tamanho do campo é inferior ao mínimo permitido",
    "maxlength": "O tamanho do campo é superior ao máximo permitido",
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

function NgNameDirective($compile) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, ctrl) {
            // element.attr('name', attrs.ngName);
            attrs.$set("name", attrs.ngName);
        }
    };
}

NgNameDirective.$inject = ['$compile'];

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

function PercentageMaskDirective($locale, $parse, PreFormatters, NumberMasks, $filter) {
    function preparePercentageToFormatter(value, decimals, modelMultiplier) {
        // return $filter('number')(value * modelMultiplier, decimals)
        return PreFormatters.clearDelimitersAndLeadingZeros((parseFloat(value) * modelMultiplier).toFixed(decimals));
    }

    return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl) {
			var decimalDelimiter = $locale.NUMBER_FORMATS.DECIMAL_SEP;

			var backspacePressed = false;
			element.bind('keydown keypress', function(event) {
				backspacePressed = event.which === 8;
			});

			var thousandsDelimiter = $locale.NUMBER_FORMATS.GROUP_SEP;
			if (angular.isDefined(attrs.fluigHideGroupSep)) {
				thousandsDelimiter = '';
			}

			var percentageSymbol = ' %';
			if (angular.isDefined(attrs.fluigHidePercentageSign)) {
				percentageSymbol = '';
			} else if (angular.isDefined(attrs.fluigHideSpace)) {
				percentageSymbol = '%';
			}

			var decimals = parseInt(attrs.fluigPercentageMask);
			if (isNaN(decimals)) {
				decimals = 2;
			}

			var modelValue = {
				multiplier : 100,
				decimalMask: 2
			};
			if (angular.isDefined(attrs.fluigPercentageValue)) {
				modelValue.multiplier  = 1;
				modelValue.decimalMask = 0;
			}

			var numberDecimals = decimals + modelValue.decimalMask;
			var viewMask = NumberMasks.viewMask(decimals, decimalDelimiter, thousandsDelimiter),
				modelMask = NumberMasks.modelMask(numberDecimals);

			function formatter(value) {
				if (ctrl.$isEmpty(value)) {
					return value;
				}
				var prefix = (angular.isDefined(attrs.fluigNegativeNumber) && value < 0) ? '-' : '';
				var valueToFormat = preparePercentageToFormatter(value, decimals, modelValue.multiplier);
				var formatedValue = prefix + viewMask.apply(valueToFormat) + percentageSymbol;

				return formatedValue;
			}

			function parser(value) {
				if (ctrl.$isEmpty(value)) {
					return null;
				}

				var valueToFormat = PreFormatters.clearDelimitersAndLeadingZeros(value) || '0';
				if (percentageSymbol !== '' && value.length > 1 && value.indexOf('%') === -1) {
					valueToFormat = valueToFormat.slice(0, valueToFormat.length - 1);
				}

				if (backspacePressed && value.length === 1 && value !== '%') {
					valueToFormat = '0';
				}

				var formatedValue = viewMask.apply(valueToFormat) + percentageSymbol;
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

			ctrl.$formatters.push(formatter);
			ctrl.$parsers.push(parser);

			if (attrs.fluigPercentageMask) {
				scope.$watch(attrs.fluigPercentageMask, function(_decimals) {
					decimals = isNaN(_decimals) ? 2 : _decimals;

					numberDecimals = decimals + modelValue.decimalMask;
					viewMask = NumberMasks.viewMask(decimals, decimalDelimiter, thousandsDelimiter);
					modelMask = NumberMasks.modelMask(numberDecimals);

					parser(formatter(ctrl.$modelValue));
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
PercentageMaskDirective.$inject = ['$locale', '$parse', 'PreFormatters', 'NumberMasks', '$filter'];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9ub2RlX21vZHVsZXMvYnItdmFsaWRhdGlvbnMvcmVsZWFzZXMvYnItdmFsaWRhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvc3RyaW5nLW1hc2svc3JjL3N0cmluZy1tYXNrLmpzIiwiYW5ndWxhci1mbHVpZy5qcyIsImJyL2JvbGV0by1iYW5jYXJpby9ib2xldG8tYmFuY2FyaW8uanMiLCJici9ici1tYXNrcy5qcyIsImJyL2Nhci1wbGF0ZS9jYXItcGxhdGUuanMiLCJici9jZXAvY2VwLmpzIiwiYnIvY25wai9jbnBqLmpzIiwiYnIvY3BmLWNucGovY3BmLWNucGouanMiLCJici9jcGYvY3BmLmpzIiwiYnIvaW5zY3JpY2FvLWVzdGFkdWFsL2llLmpzIiwiYnIvbmZlL25mZS5qcyIsImJyL3Bob25lL2JyLXBob25lLmpzIiwiZmlsdGVycy9maWx0ZXIuanMiLCJmaWx0ZXJzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5qcyIsImZsdWlnL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuanMiLCJmbHVpZy9jaGFydC9jaGFydC5qcyIsImZsdWlnL2RhdGUvZGF0ZS5qcyIsImZsdWlnL2ZsdWlnLXVpLmpzIiwiZmx1aWcvaGVhZGVyL2hlYWRlci5qcyIsImZsdWlnL3BvcG92ZXIvcG9wb3Zlci5qcyIsImZsdWlnL3JlcXVpcmVkL3JlcXVpcmVkLmpzIiwiZmx1aWcvc3dpdGNoL3N3aXRjaC5qcyIsImdsb2JhbC9jcmVkaXQtY2FyZC9jcmVkaXQtY2FyZC5qcyIsImdsb2JhbC9lcnJvci9lcnJvci5qcyIsImdsb2JhbC9lcnJvci9tZXNzYWdlcy5qcyIsImdsb2JhbC9nbG9iYWwtbWFza3MuanMiLCJnbG9iYWwvbW9uZXkvbW9uZXkuanMiLCJnbG9iYWwvbmFtZS9uYW1lLmpzIiwiZ2xvYmFsL251bWJlci9udW1iZXIuanMiLCJnbG9iYWwvcGVyY2VudGFnZS9wZXJjZW50YWdlLWZpbHRlci5qcyIsImdsb2JhbC9wZXJjZW50YWdlL3BlcmNlbnRhZ2UuanMiLCJnbG9iYWwvc2NpZW50aWZpYy1ub3RhdGlvbi9zY2llbnRpZmljLW5vdGF0aW9uLmpzIiwiZ2xvYmFsL3RpbWUvdGltZS1maWx0ZXIuanMiLCJnbG9iYWwvdGltZS90aW1lLmpzIiwiaGVscGVycy5qcyIsIi4uL21hc2stZmFjdG9yeSIsIi4uL3ZhbGlkYXRvcnMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcbiAqIGJyLXZhbGlkYXRpb25zXG4gKiBBIGxpYnJhcnkgb2YgdmFsaWRhdGlvbnMgYXBwbGljYWJsZSB0byBzZXZlcmFsIEJyYXppbGlhbiBkYXRhIGxpa2UgSS5FLiwgQ05QSiwgQ1BGIGFuZCBvdGhlcnNcbiAqIEB2ZXJzaW9uIHYwLjIuNFxuICogQGxpbmsgaHR0cDovL2dpdGh1Yi5jb20vdGhlLWRhcmMvYnItdmFsaWRhdGlvbnNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuXHRcdC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuXHRcdC8vIGxpa2UgTm9kZS5cblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fSBlbHNlIHtcblx0XHQvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuXHRcdHJvb3QuQnJWID0gZmFjdG9yeSgpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbnZhciBDTlBKID0ge307XG5cbkNOUEoudmFsaWRhdGUgPSBmdW5jdGlvbihjKSB7XG5cdHZhciBiID0gWzYsNSw0LDMsMiw5LDgsNyw2LDUsNCwzLDJdO1xuXHRjID0gYy5yZXBsYWNlKC9bXlxcZF0vZywnJyk7XG5cblx0dmFyIHIgPSAvXigwezE0fXwxezE0fXwyezE0fXwzezE0fXw0ezE0fXw1ezE0fXw2ezE0fXw3ezE0fXw4ezE0fXw5ezE0fSkkLztcblx0aWYgKCFjIHx8IGMubGVuZ3RoICE9PSAxNCB8fCByLnRlc3QoYykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0YyA9IGMuc3BsaXQoJycpO1xuXG5cdGZvciAodmFyIGkgPSAwLCBuID0gMDsgaSA8IDEyOyBpKyspIHtcblx0XHRuICs9IGNbaV0gKiBiW2krMV07XG5cdH1cblx0biA9IDExIC0gbiUxMTtcblx0biA9IG4gPj0gMTAgPyAwIDogbjtcblx0aWYgKHBhcnNlSW50KGNbMTJdKSAhPT0gbikgIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRmb3IgKGkgPSAwLCBuID0gMDsgaSA8PSAxMjsgaSsrKSB7XG5cdFx0biArPSBjW2ldICogYltpXTtcblx0fVxuXHRuID0gMTEgLSBuJTExO1xuXHRuID0gbiA+PSAxMCA/IDAgOiBuO1xuXHRpZiAocGFyc2VJbnQoY1sxM10pICE9PSBuKSAge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cblxudmFyIENQRiA9IHt9O1xuXG5DUEYudmFsaWRhdGUgPSBmdW5jdGlvbihjcGYpIHtcblx0Y3BmID0gY3BmLnJlcGxhY2UoL1teXFxkXSsvZywnJyk7XG5cdHZhciByID0gL14oMHsxMX18MXsxMX18MnsxMX18M3sxMX18NHsxMX18NXsxMX18NnsxMX18N3sxMX18OHsxMX18OXsxMX0pJC87XG5cdGlmICghY3BmIHx8IGNwZi5sZW5ndGggIT09IDExIHx8IHIudGVzdChjcGYpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGZ1bmN0aW9uIHZhbGlkYXRlRGlnaXQoZGlnaXQpIHtcblx0XHR2YXIgYWRkID0gMDtcblx0XHR2YXIgaW5pdCA9IGRpZ2l0IC0gOTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDk7IGkgKyspIHtcblx0XHRcdGFkZCArPSBwYXJzZUludChjcGYuY2hhckF0KGkgKyBpbml0KSkgKiAoaSsxKTtcblx0XHR9XG5cdFx0cmV0dXJuIChhZGQlMTEpJTEwID09PSBwYXJzZUludChjcGYuY2hhckF0KGRpZ2l0KSk7XG5cdH1cblx0cmV0dXJuIHZhbGlkYXRlRGlnaXQoOSkgJiYgdmFsaWRhdGVEaWdpdCgxMCk7XG59O1xuXG52YXIgSUUgPSBmdW5jdGlvbih1Zikge1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgSUUpKSB7XG5cdFx0cmV0dXJuIG5ldyBJRSh1Zik7XG5cdH1cblxuXHR0aGlzLnJ1bGVzID0gSUVydWxlc1t1Zl0gfHwgW107XG5cdHRoaXMucnVsZTtcblx0SUUucHJvdG90eXBlLl9kZWZpbmVSdWxlID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHR0aGlzLnJ1bGUgPSB1bmRlZmluZWQ7XG5cdFx0Zm9yICh2YXIgciA9IDA7IHIgPCB0aGlzLnJ1bGVzLmxlbmd0aCAmJiB0aGlzLnJ1bGUgPT09IHVuZGVmaW5lZDsgcisrKSB7XG5cdFx0XHR2YXIgc3RyID0gdmFsdWUucmVwbGFjZSgvW15cXGRdL2csJycpO1xuXHRcdFx0dmFyIHJ1bGVDYW5kaWRhdGUgPSB0aGlzLnJ1bGVzW3JdO1xuXHRcdFx0aWYgKHN0ci5sZW5ndGggPT09IHJ1bGVDYW5kaWRhdGUuY2hhcnMgJiYgKCFydWxlQ2FuZGlkYXRlLm1hdGNoIHx8IHJ1bGVDYW5kaWRhdGUubWF0Y2gudGVzdCh2YWx1ZSkpKSB7XG5cdFx0XHRcdHRoaXMucnVsZSA9IHJ1bGVDYW5kaWRhdGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAhIXRoaXMucnVsZTtcblx0fTtcblxuXHRJRS5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdGlmICghdmFsdWUgfHwgIXRoaXMuX2RlZmluZVJ1bGUodmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnJ1bGUudmFsaWRhdGUodmFsdWUpO1xuXHR9O1xufTtcblxudmFyIElFcnVsZXMgPSB7fTtcblxudmFyIGFsZ29yaXRobVN0ZXBzID0ge1xuXHRoYW5kbGVTdHI6IHtcblx0XHRvbmx5TnVtYmVyczogZnVuY3Rpb24oc3RyKSB7XG5cdFx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoL1teXFxkXS9nLCcnKS5zcGxpdCgnJyk7XG5cdFx0fSxcblx0XHRtZ1NwZWM6IGZ1bmN0aW9uKHN0cikge1xuXHRcdFx0dmFyIHMgPSBzdHIucmVwbGFjZSgvW15cXGRdL2csJycpO1xuXHRcdFx0cyA9IHMuc3Vic3RyKDAsMykrJzAnK3Muc3Vic3RyKDMsIHMubGVuZ3RoKTtcblx0XHRcdHJldHVybiBzLnNwbGl0KCcnKTtcblx0XHR9XG5cdH0sXG5cdHN1bToge1xuXHRcdG5vcm1hbFN1bTogZnVuY3Rpb24oaGFuZGxlZFN0ciwgcGVzb3MpIHtcblx0XHRcdHZhciBudW1zID0gaGFuZGxlZFN0cjtcblx0XHRcdHZhciBzdW0gPSAwO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwZXNvcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRzdW0gKz0gcGFyc2VJbnQobnVtc1tpXSkgKiBwZXNvc1tpXTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdW07XG5cdFx0fSxcblx0XHRpbmRpdmlkdWFsU3VtOiBmdW5jdGlvbihoYW5kbGVkU3RyLCBwZXNvcykge1xuXHRcdFx0dmFyIG51bXMgPSBoYW5kbGVkU3RyO1xuXHRcdFx0dmFyIHN1bSA9IDA7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHBlc29zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBtdWx0ID0gcGFyc2VJbnQobnVtc1tpXSkgKiBwZXNvc1tpXTtcblx0XHRcdFx0c3VtICs9IG11bHQlMTAgKyBwYXJzZUludChtdWx0LzEwKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdW07XG5cdFx0fSxcblx0XHRhcFNwZWM6IGZ1bmN0aW9uKGhhbmRsZWRTdHIsIHBlc29zKSB7XG5cdFx0XHR2YXIgc3VtID0gdGhpcy5ub3JtYWxTdW0oaGFuZGxlZFN0ciwgcGVzb3MpO1xuXHRcdFx0dmFyIHJlZiA9IGhhbmRsZWRTdHIuam9pbignJyk7XG5cdFx0XHRpZiAocmVmID49ICcwMzAwMDAwMTAnICYmIHJlZiA8PSAnMDMwMTcwMDA5Jykge1xuXHRcdFx0XHRyZXR1cm4gc3VtICsgNTtcblx0XHRcdH1cblx0XHRcdGlmIChyZWYgPj0gJzAzMDE3MDAxMCcgJiYgcmVmIDw9ICcwMzAxOTAyMjknKSB7XG5cdFx0XHRcdHJldHVybiBzdW0gKyA5O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN1bTtcblx0XHR9XG5cdH0sXG5cdHJlc3Q6IHtcblx0XHRtb2QxMTogZnVuY3Rpb24oc3VtKSB7XG5cdFx0XHRyZXR1cm4gc3VtJTExO1xuXHRcdH0sXG5cdFx0bW9kMTA6IGZ1bmN0aW9uKHN1bSkge1xuXHRcdFx0cmV0dXJuIHN1bSUxMDtcblx0XHR9LFxuXHRcdG1vZDk6IGZ1bmN0aW9uKHN1bSkge1xuXHRcdFx0cmV0dXJuIHN1bSU5O1xuXHRcdH1cblx0fSxcblx0ZXhwZWN0ZWREVjoge1xuXHRcdG1pbnVzUmVzdE9mMTE6IGZ1bmN0aW9uKHJlc3QpIHtcblx0XHRcdHJldHVybiByZXN0IDwgMiA/IDAgOiAxMSAtIHJlc3Q7XG5cdFx0fSxcblx0XHRtaW51c1Jlc3RPZjExdjI6IGZ1bmN0aW9uKHJlc3QpIHtcblx0XHRcdHJldHVybiByZXN0IDwgMiA/IDExIC0gcmVzdCAtIDEwIDogMTEgLSByZXN0O1xuXHRcdH0sXG5cdFx0bWludXNSZXN0T2YxMDogZnVuY3Rpb24ocmVzdCkge1xuXHRcdFx0cmV0dXJuIHJlc3QgPCAxID8gMCA6IDEwIC0gcmVzdDtcblx0XHR9LFxuXHRcdG1vZDEwOiBmdW5jdGlvbihyZXN0KSB7XG5cdFx0XHRyZXR1cm4gcmVzdCUxMDtcblx0XHR9LFxuXHRcdGdvU3BlYzogZnVuY3Rpb24ocmVzdCwgaGFuZGxlZFN0cikge1xuXHRcdFx0dmFyIHJlZiA9IGhhbmRsZWRTdHIuam9pbignJyk7XG5cdFx0XHRpZiAocmVzdCA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gcmVmID49ICcxMDEwMzEwNTAnICYmIHJlZiA8PSAnMTAxMTk5OTc5JyA/IDEgOiAwO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3QgPT09IDAgPyAwIDogMTEgLSByZXN0O1xuXHRcdH0sXG5cdFx0YXBTcGVjOiBmdW5jdGlvbihyZXN0LCBoYW5kbGVkU3RyKSB7XG5cdFx0XHR2YXIgcmVmID0gaGFuZGxlZFN0ci5qb2luKCcnKTtcblx0XHRcdGlmIChyZXN0ID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiByZWYgPj0gJzAzMDE3MDAxMCcgJiYgcmVmIDw9ICcwMzAxOTAyMjknID8gMSA6IDA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdCA9PT0gMSA/IDAgOiAxMSAtIHJlc3Q7XG5cdFx0fSxcblx0XHR2b2lkRm46IGZ1bmN0aW9uKHJlc3QpIHtcblx0XHRcdHJldHVybiByZXN0O1xuXHRcdH1cblx0fVxufTtcblxuXG4vKipcbiAqIG9wdGlvbnMge1xuICogICAgIHBlc29zOiBBcnJheSBvZiB2YWx1ZXMgdXNlZCB0byBvcGVyYXRlIGluIHN1bSBzdGVwXG4gKiAgICAgZHZQb3M6IFBvc2l0aW9uIG9mIHRoZSBEViB0byB2YWxpZGF0ZSBjb25zaWRlcmluZyB0aGUgaGFuZGxlZFN0clxuICogICAgIGFsZ29yaXRobVN0ZXBzOiBUaGUgZm91ciBEVidzIHZhbGlkYXRpb24gYWxnb3JpdGhtIHN0ZXBzIG5hbWVzXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlRFYodmFsdWUsIG9wdGlvbnMpIHtcblx0dmFyIHN0ZXBzID0gb3B0aW9ucy5hbGdvcml0aG1TdGVwcztcblxuXHQvLyBTdGVwIDAxOiBIYW5kbGUgU3RyaW5nXG5cdHZhciBoYW5kbGVkU3RyID0gYWxnb3JpdGhtU3RlcHMuaGFuZGxlU3RyW3N0ZXBzWzBdXSh2YWx1ZSk7XG5cblx0Ly8gU3RlcCAwMjogU3VtIGNoYXJzXG5cdHZhciBzdW0gPSBhbGdvcml0aG1TdGVwcy5zdW1bc3RlcHNbMV1dKGhhbmRsZWRTdHIsIG9wdGlvbnMucGVzb3MpO1xuXG5cdC8vIFN0ZXAgMDM6IFJlc3QgY2FsY3VsYXRpb25cblx0dmFyIHJlc3QgPSBhbGdvcml0aG1TdGVwcy5yZXN0W3N0ZXBzWzJdXShzdW0pO1xuXG5cdC8vIEZpeGVkIFN0ZXA6IEdldCBjdXJyZW50IERWXG5cdHZhciBjdXJyZW50RFYgPSBwYXJzZUludChoYW5kbGVkU3RyW29wdGlvbnMuZHZwb3NdKTtcblxuXHQvLyBTdGVwIDA0OiBFeHBlY3RlZCBEViBjYWxjdWxhdGlvblxuXHR2YXIgZXhwZWN0ZWREViA9IGFsZ29yaXRobVN0ZXBzLmV4cGVjdGVkRFZbc3RlcHNbM11dKHJlc3QsIGhhbmRsZWRTdHIpO1xuXG5cdC8vIEZpeGVkIHN0ZXA6IERWIHZlcmlmaWNhdGlvblxuXHRyZXR1cm4gY3VycmVudERWID09PSBleHBlY3RlZERWO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUlFKHZhbHVlLCBydWxlKSB7XG5cdGlmIChydWxlLm1hdGNoICYmICFydWxlLm1hdGNoLnRlc3QodmFsdWUpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZS5kdnMubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBjb25zb2xlLmxvZygnPj4gPj4gZHYnK2kpO1xuXHRcdGlmICghdmFsaWRhdGVEVih2YWx1ZSwgcnVsZS5kdnNbaV0pKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG5JRXJ1bGVzLlBFID0gW3tcblx0Ly9tYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMC0wMCcpLFxuXHRjaGFyczogOSxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA3LFxuXHRcdHBlc29zOiBbOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9LHtcblx0XHRkdnBvczogOCxcblx0XHRwZXNvczogWzksOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufSx7XG5cdC8vIG1hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMC4wLjAwMC4wMDAwMDAwLTAnKSxcblx0Y2hhcnM6IDE0LFxuXHRwZXNvczogW1sxLDIsMyw0LDUsOSw4LDcsNiw1LDQsMywyXV0sXG5cdGR2czogW3tcblx0XHRkdnBvczogMTMsXG5cdFx0cGVzb3M6IFs1LDQsMywyLDEsOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMXYyJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLlJTID0gW3tcblx0Ly8gbWFzazogbmV3IFN0cmluZ01hc2soJzAwMC8wMDAwMDAwJyksXG5cdGNoYXJzOiAxMCxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA5LFxuXHRcdHBlc29zOiBbMiw5LDgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLkFDID0gW3tcblx0Ly8gbWFzazogbmV3IFN0cmluZ01hc2soJzAwLjAwMC4wMDAvMDAwLTAwJyksXG5cdGNoYXJzOiAxMyxcblx0bWF0Y2g6IC9eMDEvLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDExLFxuXHRcdHBlc29zOiBbNCwzLDIsOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH0se1xuXHRcdGR2cG9zOiAxMixcblx0XHRwZXNvczogWzUsNCwzLDIsOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuSUVydWxlcy5NRyA9IFt7XG5cdC8vIG1hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAuMDAwLjAwMC8wMDAwJyksXG5cdGNoYXJzOiAxMyxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiAxMixcblx0XHRwZXNvczogWzEsMiwxLDIsMSwyLDEsMiwxLDIsMSwyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydtZ1NwZWMnLCAnaW5kaXZpZHVhbFN1bScsICdtb2QxMCcsICdtaW51c1Jlc3RPZjEwJ11cblx0fSx7XG5cdFx0ZHZwb3M6IDEyLFxuXHRcdHBlc29zOiBbMywyLDExLDEwLDksOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cbklFcnVsZXMuU1AgPSBbe1xuXHQvLyBtYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwLjAwMC4wMDAuMDAwJyksXG5cdGNoYXJzOiAxMixcblx0bWF0Y2g6IC9eWzAtOV0vLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDgsXG5cdFx0cGVzb3M6IFsxLDMsNCw1LDYsNyw4LDEwXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbW9kMTAnXVxuXHR9LHtcblx0XHRkdnBvczogMTEsXG5cdFx0cGVzb3M6IFszLDIsMTAsOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbW9kMTAnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufSx7XG5cdC8vIG1hc2s6IG5ldyBTdHJpbmdNYXNrKCdQLTAwMDAwMDAwLjAvMDAwJylcblx0Y2hhcnM6IDEyLFxuXHRtYXRjaDogL15QL2ksXG5cdGR2czogW3tcblx0XHRkdnBvczogOCxcblx0XHRwZXNvczogWzEsMyw0LDUsNiw3LDgsMTBdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtb2QxMCddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuSUVydWxlcy5ERiA9IFt7XG5cdC8vIG1hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwMDAwMC0wMCcpLFxuXHRjaGFyczogMTMsXG5cdGR2czogW3tcblx0XHRkdnBvczogMTEsXG5cdFx0cGVzb3M6IFs0LDMsMiw5LDgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fSx7XG5cdFx0ZHZwb3M6IDEyLFxuXHRcdHBlc29zOiBbNSw0LDMsMiw5LDgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLkVTID0gW3tcblx0Ly8gbWFzazogbmV3IFN0cmluZ01hc2soJzAwMC4wMDAuMDAtMCcpXG5cdGNoYXJzOiA5LFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDgsXG5cdFx0cGVzb3M6IFs5LDgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLkJBID0gW3tcblx0Ly8gbWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMC0wMCcpXG5cdGNoYXJzOiA4LFxuXHRtYXRjaDogL15bMDEyMzQ1OF0vLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDcsXG5cdFx0cGVzb3M6IFs3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDEwJywgJ21pbnVzUmVzdE9mMTAnXVxuXHR9LHtcblx0XHRkdnBvczogNixcblx0XHRwZXNvczogWzgsNyw2LDUsNCwzLDAsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDEwJywgJ21pbnVzUmVzdE9mMTAnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufSx7XG5cdGNoYXJzOiA4LFxuXHRtYXRjaDogL15bNjc5XS8sXG5cdGR2czogW3tcblx0XHRkdnBvczogNyxcblx0XHRwZXNvczogWzcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH0se1xuXHRcdGR2cG9zOiA2LFxuXHRcdHBlc29zOiBbOCw3LDYsNSw0LDMsMCwyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59LHtcblx0Ly8gbWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAtMDAnKVxuXHRjaGFyczogOSxcblx0bWF0Y2g6IC9eWzAtOV1bMDEyMzQ1OF0vLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDgsXG5cdFx0cGVzb3M6IFs4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTAnLCAnbWludXNSZXN0T2YxMCddXG5cdH0se1xuXHRcdGR2cG9zOiA3LFxuXHRcdHBlc29zOiBbOSw4LDcsNiw1LDQsMywwLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMCcsICdtaW51c1Jlc3RPZjEwJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn0se1xuXHRjaGFyczogOSxcblx0bWF0Y2g6IC9eWzAtOV1bNjc5XS8sXG5cdGR2czogW3tcblx0XHRkdnBvczogOCxcblx0XHRwZXNvczogWzgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fSx7XG5cdFx0ZHZwb3M6IDcsXG5cdFx0cGVzb3M6IFs5LDgsNyw2LDUsNCwzLDAsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cbklFcnVsZXMuQU0gPSBbe1xuXHQvL21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMC4wMDAuMDAwLTAnKVxuXHRjaGFyczogOSxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA4LFxuXHRcdHBlc29zOiBbOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuSUVydWxlcy5STiA9IFt7XG5cdC8vIHttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAuMDAwLjAwMC0wJylcblx0Y2hhcnM6IDksXG5cdG1hdGNoOiAvXjIwLyxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA4LFxuXHRcdHBlc29zOiBbOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59LHtcblx0Ly8ge21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMC4wLjAwMC4wMDAtMCcpLCBjaGFyczogMTB9XG5cdGNoYXJzOiAxMCxcblx0bWF0Y2g6IC9eMjAvLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDgsXG5cdFx0cGVzb3M6IFsxMCw5LDgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLlJPID0gW3tcblx0Ly8gbWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwMDAwMDAtMCcpXG5cdGNoYXJzOiAxNCxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiAxMyxcblx0XHRwZXNvczogWzYsNSw0LDMsMiw5LDgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLlBSID0gW3tcblx0Ly8gbWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwLTAwJylcblx0Y2hhcnM6IDEwLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDgsXG5cdFx0cGVzb3M6IFszLDIsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fSx7XG5cdFx0ZHZwb3M6IDksXG5cdFx0cGVzb3M6IFs0LDMsMiw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cbklFcnVsZXMuU0MgPSBbe1xuXHQvLyB7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMC4wMDAuMDAwJyksIHVmOiAnU0FOVEEgQ0FUQVJJTkEnfVxuXHRjaGFyczogOSxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA4LFxuXHRcdHBlc29zOiBbOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuSUVydWxlcy5SSiA9IFt7XG5cdC8vIHttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAuMDAwLjAwLTAnKSwgdWY6ICdSSU8gREUgSkFORUlSTyd9XG5cdGNoYXJzOiA4LFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDcsXG5cdFx0cGVzb3M6IFsyLDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuSUVydWxlcy5QQSA9IFt7XG5cdC8vIHttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAtMDAwMDAwLTAnKVxuXHRjaGFyczogOSxcblx0bWF0Y2g6IC9eMTUvLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDgsXG5cdFx0cGVzb3M6IFs5LDgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLlNFID0gW3tcblx0Ly8ge21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwMC0wJylcblx0Y2hhcnM6IDksXG5cdGR2czogW3tcblx0XHRkdnBvczogOCxcblx0XHRwZXNvczogWzksOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cbklFcnVsZXMuUEIgPSBbe1xuXHQvLyB7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwLTAnKVxuXHRjaGFyczogOSxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA4LFxuXHRcdHBlc29zOiBbOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuSUVydWxlcy5DRSA9IFt7XG5cdC8vIHttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAtMCcpXG5cdGNoYXJzOiA5LFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDgsXG5cdFx0cGVzb3M6IFs5LDgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLlBJID0gW3tcblx0Ly8ge21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwMDAnKVxuXHRjaGFyczogOSxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA4LFxuXHRcdHBlc29zOiBbOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuSUVydWxlcy5NQSA9IFt7XG5cdC8vIHttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAwJylcblx0Y2hhcnM6IDksXG5cdG1hdGNoOiAvXjEyLyxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA4LFxuXHRcdHBlc29zOiBbOSw4LDcsNiw1LDQsMywyXSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kMTEnLCAnbWludXNSZXN0T2YxMSddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuSUVydWxlcy5NVCA9IFt7XG5cdC8vIHttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAwMC0wJylcblx0Y2hhcnM6IDExLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDEwLFxuXHRcdHBlc29zOiBbMywyLDksOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cbklFcnVsZXMuTVMgPSBbe1xuXHQvLyB7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwMCcpXG5cdGNoYXJzOiA5LFxuXHRtYXRjaDogL14yOC8sXG5cdGR2czogW3tcblx0XHRkdnBvczogOCxcblx0XHRwZXNvczogWzksOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cbklFcnVsZXMuVE8gPSBbe1xuXHQvLyB7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwMDAwJyksXG5cdGNoYXJzOiAxMSxcblx0bWF0Y2g6IC9eWzAtOV17Mn0oKDBbMTIzXSl8KDk5KSkvLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDEwLFxuXHRcdHBlc29zOiBbOSw4LDAsMCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnbm9ybWFsU3VtJywgJ21vZDExJywgJ21pbnVzUmVzdE9mMTEnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cbklFcnVsZXMuQUwgPSBbe1xuXHQvLyB7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwMCcpXG5cdGNoYXJzOiA5LFxuXHRtYXRjaDogL14yNFswMzU3OF0vLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDgsXG5cdFx0cGVzb3M6IFs5LDgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdtaW51c1Jlc3RPZjExJ11cblx0fV0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsaWRhdGVJRSh2YWx1ZSwgdGhpcyk7IH1cbn1dO1xuXG5JRXJ1bGVzLlJSID0gW3tcblx0Ly8ge21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwMC0wJylcblx0Y2hhcnM6IDksXG5cdG1hdGNoOiAvXjI0Lyxcblx0ZHZzOiBbe1xuXHRcdGR2cG9zOiA4LFxuXHRcdHBlc29zOiBbMSwyLDMsNCw1LDYsNyw4XSxcblx0XHRhbGdvcml0aG1TdGVwczogWydvbmx5TnVtYmVycycsICdub3JtYWxTdW0nLCAnbW9kOScsICd2b2lkRm4nXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cbklFcnVsZXMuR08gPSBbe1xuXHQvLyB7bWFzazogbmV3IFN0cmluZ01hc2soJzAwLjAwMC4wMDAtMCcpXG5cdGNoYXJzOiA5LFxuXHRtYXRjaDogL14xWzAxNV0vLFxuXHRkdnM6IFt7XG5cdFx0ZHZwb3M6IDgsXG5cdFx0cGVzb3M6IFs5LDgsNyw2LDUsNCwzLDJdLFxuXHRcdGFsZ29yaXRobVN0ZXBzOiBbJ29ubHlOdW1iZXJzJywgJ25vcm1hbFN1bScsICdtb2QxMScsICdnb1NwZWMnXVxuXHR9XSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWxpZGF0ZUlFKHZhbHVlLCB0aGlzKTsgfVxufV07XG5cbklFcnVsZXMuQVAgPSBbe1xuXHQvLyB7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwMCcpXG5cdGNoYXJzOiA5LFxuXHRtYXRjaDogL14wMy8sXG5cdGR2czogW3tcblx0XHRkdnBvczogOCxcblx0XHRwZXNvczogWzksOCw3LDYsNSw0LDMsMl0sXG5cdFx0YWxnb3JpdGhtU3RlcHM6IFsnb25seU51bWJlcnMnLCAnYXBTcGVjJywgJ21vZDExJywgJ2FwU3BlYyddXG5cdH1dLFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbGlkYXRlSUUodmFsdWUsIHRoaXMpOyB9XG59XTtcblxuXHRyZXR1cm4ge1xuXHRcdGllOiBJRSxcblx0XHRjcGY6IENQRixcblx0XHRjbnBqOiBDTlBKXG5cdH07XG59KSk7IiwiKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgICAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAgICAgLy8gbGlrZSBOb2RlLlxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgICAgICByb290LlN0cmluZ01hc2sgPSBmYWN0b3J5KCk7XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgdG9rZW5zID0ge1xuICAgICAgICAnMCc6IHtwYXR0ZXJuOiAvXFxkLywgX2RlZmF1bHQ6ICcwJ30sXG4gICAgICAgICc5Jzoge3BhdHRlcm46IC9cXGQvLCBvcHRpb25hbDogdHJ1ZX0sXG4gICAgICAgICcjJzoge3BhdHRlcm46IC9cXGQvLCBvcHRpb25hbDogdHJ1ZSwgcmVjdXJzaXZlOiB0cnVlfSxcbiAgICAgICAgJ0EnOiB7cGF0dGVybjogL1thLXpBLVowLTldL30sXG4gICAgICAgICdTJzoge3BhdHRlcm46IC9bYS16QS1aXS99LFxuICAgICAgICAnVSc6IHtwYXR0ZXJuOiAvW2EtekEtWl0vLCB0cmFuc2Zvcm06IGZ1bmN0aW9uKGMpIHsgcmV0dXJuIGMudG9Mb2NhbGVVcHBlckNhc2UoKTsgfX0sXG4gICAgICAgICdMJzoge3BhdHRlcm46IC9bYS16QS1aXS8sIHRyYW5zZm9ybTogZnVuY3Rpb24oYykgeyByZXR1cm4gYy50b0xvY2FsZUxvd2VyQ2FzZSgpOyB9fSxcbiAgICAgICAgJyQnOiB7ZXNjYXBlOiB0cnVlfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpc0VzY2FwZWQocGF0dGVybiwgcG9zKSB7XG4gICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgIHZhciBpID0gcG9zIC0gMTtcbiAgICAgICAgdmFyIHRva2VuID0ge2VzY2FwZTogdHJ1ZX07XG4gICAgICAgIHdoaWxlIChpID49IDAgJiYgdG9rZW4gJiYgdG9rZW4uZXNjYXBlKSB7XG4gICAgICAgICAgICB0b2tlbiA9IHRva2Vuc1twYXR0ZXJuLmNoYXJBdChpKV07XG4gICAgICAgICAgICBjb3VudCArPSB0b2tlbiAmJiB0b2tlbi5lc2NhcGUgPyAxIDogMDtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQgPiAwICYmIGNvdW50ICUgMiA9PT0gMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjT3B0aW9uYWxOdW1iZXJzVG9Vc2UocGF0dGVybiwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG51bWJlcnNJblAgPSBwYXR0ZXJuLnJlcGxhY2UoL1teMF0vZywnJykubGVuZ3RoO1xuICAgICAgICB2YXIgbnVtYmVyc0luViA9IHZhbHVlLnJlcGxhY2UoL1teXFxkXS9nLCcnKS5sZW5ndGg7XG4gICAgICAgIHJldHVybiBudW1iZXJzSW5WIC0gbnVtYmVyc0luUDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25jYXRDaGFyKHRleHQsIGNoYXJhY3Rlciwgb3B0aW9ucywgdG9rZW4pIHtcbiAgICAgICAgaWYgKHRva2VuICYmIHR5cGVvZiB0b2tlbi50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoYXJhY3RlciA9IHRva2VuLnRyYW5zZm9ybShjaGFyYWN0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnJldmVyc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGFyYWN0ZXIgKyB0ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0ICsgY2hhcmFjdGVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc01vcmVUb2tlbnMocGF0dGVybiwgcG9zLCBpbmMpIHtcbiAgICAgICAgdmFyIHBjID0gcGF0dGVybi5jaGFyQXQocG9zKTtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW3BjXTtcbiAgICAgICAgaWYgKHBjID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbiAmJiAhdG9rZW4uZXNjYXBlID8gdHJ1ZSA6IGhhc01vcmVUb2tlbnMocGF0dGVybiwgcG9zICsgaW5jLCBpbmMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc01vcmVSZWN1cnNpdmVUb2tlbnMocGF0dGVybiwgcG9zLCBpbmMpIHtcbiAgICAgICAgdmFyIHBjID0gcGF0dGVybi5jaGFyQXQocG9zKTtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW3BjXTtcbiAgICAgICAgaWYgKHBjID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbiAmJiB0b2tlbi5yZWN1cnNpdmUgPyB0cnVlIDogaGFzTW9yZVJlY3Vyc2l2ZVRva2VucyhwYXR0ZXJuLCBwb3MgKyBpbmMsIGluYyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zZXJ0Q2hhcih0ZXh0LCBjaGFyLCBwb3NpdGlvbikge1xuICAgICAgICB2YXIgdCA9IHRleHQuc3BsaXQoJycpO1xuICAgICAgICB0LnNwbGljZShwb3NpdGlvbiwgMCwgY2hhcik7XG4gICAgICAgIHJldHVybiB0LmpvaW4oJycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFN0cmluZ01hc2socGF0dGVybiwgb3B0KSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdCB8fCB7fTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgcmV2ZXJzZTogdGhpcy5vcHRpb25zLnJldmVyc2UgfHwgZmFsc2UsXG4gICAgICAgICAgICB1c2VkZWZhdWx0czogdGhpcy5vcHRpb25zLnVzZWRlZmF1bHRzIHx8IHRoaXMub3B0aW9ucy5yZXZlcnNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm47XG4gICAgfVxuXG4gICAgU3RyaW5nTWFzay5wcm90b3R5cGUucHJvY2VzcyA9IGZ1bmN0aW9uIHByb2NjZXNzKHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7cmVzdWx0OiAnJywgdmFsaWQ6IGZhbHNlfTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IHZhbHVlICsgJyc7XG4gICAgICAgIHZhciBwYXR0ZXJuMiA9IHRoaXMucGF0dGVybjtcbiAgICAgICAgdmFyIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdmFyIGZvcm1hdHRlZCA9ICcnO1xuICAgICAgICB2YXIgdmFsdWVQb3MgPSB0aGlzLm9wdGlvbnMucmV2ZXJzZSA/IHZhbHVlLmxlbmd0aCAtIDEgOiAwO1xuICAgICAgICB2YXIgcGF0dGVyblBvcyA9IDA7XG4gICAgICAgIHZhciBvcHRpb25hbE51bWJlcnNUb1VzZSA9IGNhbGNPcHRpb25hbE51bWJlcnNUb1VzZShwYXR0ZXJuMiwgdmFsdWUpO1xuICAgICAgICB2YXIgZXNjYXBlTmV4dCA9IGZhbHNlO1xuICAgICAgICB2YXIgcmVjdXJzaXZlID0gW107XG4gICAgICAgIHZhciBpblJlY3Vyc2l2ZU1vZGUgPSBmYWxzZTtcblxuICAgICAgICB2YXIgc3RlcHMgPSB7XG4gICAgICAgICAgICBzdGFydDogdGhpcy5vcHRpb25zLnJldmVyc2UgPyBwYXR0ZXJuMi5sZW5ndGggLSAxIDogMCxcbiAgICAgICAgICAgIGVuZDogdGhpcy5vcHRpb25zLnJldmVyc2UgPyAtMSA6IHBhdHRlcm4yLmxlbmd0aCxcbiAgICAgICAgICAgIGluYzogdGhpcy5vcHRpb25zLnJldmVyc2UgPyAtMSA6IDFcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBjb250aW51ZUNvbmRpdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoIWluUmVjdXJzaXZlTW9kZSAmJiAhcmVjdXJzaXZlLmxlbmd0aCAmJiBoYXNNb3JlVG9rZW5zKHBhdHRlcm4yLCBwYXR0ZXJuUG9zLCBzdGVwcy5pbmMpKSB7XG4gICAgICAgICAgICAgICAgLy8gY29udGludWUgaW4gdGhlIG5vcm1hbCBpdGVyYXRpb25cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWluUmVjdXJzaXZlTW9kZSAmJiByZWN1cnNpdmUubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgaGFzTW9yZVJlY3Vyc2l2ZVRva2VucyhwYXR0ZXJuMiwgcGF0dGVyblBvcywgc3RlcHMuaW5jKSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnRpbnVlIGxvb2tpbmcgZm9yIHRoZSByZWN1cnNpdmUgdG9rZW5zXG4gICAgICAgICAgICAgICAgLy8gTm90ZTogYWxsIGNoYXJzIGluIHRoZSBwYXR0ZXJucyBhZnRlciB0aGUgcmVjdXJzaXZlIHBvcnRpb24gd2lsbCBiZSBoYW5kbGVkIGFzIHN0YXRpYyBzdHJpbmdcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWluUmVjdXJzaXZlTW9kZSkge1xuICAgICAgICAgICAgICAgIC8vIHN0YXJ0IHRvIGhhbmRsZSB0aGUgcmVjdXJzaXZlIHBvcnRpb24gb2YgdGhlIHBhdHRlcm5cbiAgICAgICAgICAgICAgICBpblJlY3Vyc2l2ZU1vZGUgPSByZWN1cnNpdmUubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluUmVjdXJzaXZlTW9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBwYyA9IHJlY3Vyc2l2ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZS5wdXNoKHBjKTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZXZlcnNlICYmIHZhbHVlUG9zID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVyblBvcysrO1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuMiA9IGluc2VydENoYXIocGF0dGVybjIsIHBjLCBwYXR0ZXJuUG9zKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghb3B0aW9ucy5yZXZlcnNlICYmIHZhbHVlUG9zIDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4yID0gaW5zZXJ0Q2hhcihwYXR0ZXJuMiwgcGMsIHBhdHRlcm5Qb3MpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVyblBvcyA8IHBhdHRlcm4yLmxlbmd0aCAmJiBwYXR0ZXJuUG9zID49IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSXRlcmF0ZSBvdmVyIHRoZSBwYXR0ZXJuJ3MgY2hhcnMgcGFyc2luZy9tYXRjaGluZyB0aGUgaW5wdXQgdmFsdWUgY2hhcnNcbiAgICAgICAgICogdW50aWwgdGhlIGVuZCBvZiB0aGUgcGF0dGVybi4gSWYgdGhlIHBhdHRlcm4gZW5kcyB3aXRoIHJlY3Vyc2l2ZSBjaGFyc1xuICAgICAgICAgKiB0aGUgaXRlcmF0aW9uIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIE5vdGU6IFRoZSBpdGVyYXRpb24gbXVzdCBzdG9wIGlmIGFuIGludmFsaWQgY2hhciBpcyBmb3VuZC5cbiAgICAgICAgICovXG4gICAgICAgIGZvciAocGF0dGVyblBvcyA9IHN0ZXBzLnN0YXJ0OyBjb250aW51ZUNvbmRpdGlvbih0aGlzLm9wdGlvbnMpOyBwYXR0ZXJuUG9zID0gcGF0dGVyblBvcyArIHN0ZXBzLmluYykge1xuICAgICAgICAgICAgLy8gVmFsdWUgY2hhclxuICAgICAgICAgICAgdmFyIHZjID0gdmFsdWUuY2hhckF0KHZhbHVlUG9zKTtcbiAgICAgICAgICAgIC8vIFBhdHRlcm4gY2hhciB0byBtYXRjaCB3aXRoIHRoZSB2YWx1ZSBjaGFyXG4gICAgICAgICAgICB2YXIgcGMgPSBwYXR0ZXJuMi5jaGFyQXQocGF0dGVyblBvcyk7XG5cbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1twY107XG4gICAgICAgICAgICBpZiAocmVjdXJzaXZlLmxlbmd0aCAmJiB0b2tlbiAmJiAhdG9rZW4ucmVjdXJzaXZlKSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIHJlY3Vyc2l2ZSBwb3J0aW9uIG9mIHRoZSBwYXR0ZXJuOiB0b2tlbnMgbm90IHJlY3Vyc2l2ZSBtdXN0IGJlIHNlZW4gYXMgc3RhdGljIGNoYXJzXG4gICAgICAgICAgICAgICAgdG9rZW4gPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAxLiBIYW5kbGUgZXNjYXBlIHRva2VucyBpbiBwYXR0ZXJuXG4gICAgICAgICAgICAvLyBnbyB0byBuZXh0IGl0ZXJhdGlvbjogaWYgdGhlIHBhdHRlcm4gY2hhciBpcyBhIGVzY2FwZSBjaGFyIG9yIHdhcyBlc2NhcGVkXG4gICAgICAgICAgICBpZiAoIWluUmVjdXJzaXZlTW9kZSB8fCB2Yykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmV2ZXJzZSAmJiBpc0VzY2FwZWQocGF0dGVybjIsIHBhdHRlcm5Qb3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdHRlcm4gY2hhciBpcyBlc2NhcGVkLCBqdXN0IGFkZCBpdCBhbmQgbW92ZSBvblxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQgPSBjb25jYXRDaGFyKGZvcm1hdHRlZCwgcGMsIHRoaXMub3B0aW9ucywgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAvLyBza2lwIGVzY2FwZSB0b2tlblxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuUG9zID0gcGF0dGVyblBvcyArIHN0ZXBzLmluYztcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vcHRpb25zLnJldmVyc2UgJiYgZXNjYXBlTmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBwYXR0ZXJuIGNoYXIgaXMgZXNjYXBlZCwganVzdCBhZGQgaXQgYW5kIG1vdmUgb25cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gY29uY2F0Q2hhcihmb3JtYXR0ZWQsIHBjLCB0aGlzLm9wdGlvbnMsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgZXNjYXBlTmV4dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMucmV2ZXJzZSAmJiB0b2tlbiAmJiB0b2tlbi5lc2NhcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyayB0byBlc2NhcGUgdGhlIG5leHQgcGF0dGVybiBjaGFyXG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZU5leHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIDIuIEhhbmRsZSByZWN1cnNpdmUgdG9rZW5zIGluIHBhdHRlcm5cbiAgICAgICAgICAgIC8vIGdvIHRvIG5leHQgaXRlcmF0aW9uOiBpZiB0aGUgdmFsdWUgc3RyIGlzIGZpbmlzaGVkIG9yXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgaWYgdGhlcmUgaXMgYSBub3JtYWwgdG9rZW4gaW4gdGhlIHJlY3Vyc2l2ZSBwb3J0aW9uIG9mIHRoZSBwYXR0ZXJuXG4gICAgICAgICAgICBpZiAoIWluUmVjdXJzaXZlTW9kZSAmJiB0b2tlbiAmJiB0b2tlbi5yZWN1cnNpdmUpIHtcbiAgICAgICAgICAgICAgICAvLyBzYXZlIGl0IHRvIHJlcGVhdCBpbiB0aGUgZW5kIG9mIHRoZSBwYXR0ZXJuIGFuZCBoYW5kbGUgdGhlIHZhbHVlIGNoYXIgbm93XG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlLnB1c2gocGMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpblJlY3Vyc2l2ZU1vZGUgJiYgIXZjKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gcmVjdXJzaXZlIG1vZGUgYnV0IHZhbHVlIGlzIGZpbmlzaGVkLiBBZGQgdGhlIHBhdHRlcm4gY2hhciBpZiBpdCBpcyBub3QgYSByZWN1cnNpdmUgdG9rZW5cbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWQgPSBjb25jYXRDaGFyKGZvcm1hdHRlZCwgcGMsIHRoaXMub3B0aW9ucywgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghaW5SZWN1cnNpdmVNb2RlICYmIHJlY3Vyc2l2ZS5sZW5ndGggPiAwICYmICF2Yykge1xuICAgICAgICAgICAgICAgIC8vIHJlY3Vyc2l2ZU1vZGUgbm90IHN0YXJ0ZWQgYnV0IGFscmVhZHkgaW4gdGhlIHJlY3Vyc2l2ZSBwb3J0aW9uIG9mIHRoZSBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIDMuIEhhbmRsZSB0aGUgdmFsdWVcbiAgICAgICAgICAgIC8vIGJyZWFrIGl0ZXJhdGlvbnM6IGlmIHZhbHVlIGlzIGludmFsaWQgZm9yIHRoZSBnaXZlbiBwYXR0ZXJuXG4gICAgICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICAgICAgLy8gYWRkIGNoYXIgb2YgdGhlIHBhdHRlcm5cbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWQgPSBjb25jYXRDaGFyKGZvcm1hdHRlZCwgcGMsIHRoaXMub3B0aW9ucywgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICghaW5SZWN1cnNpdmVNb2RlICYmIHJlY3Vyc2l2ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSBpdCB0byByZXBlYXQgaW4gdGhlIGVuZCBvZiB0aGUgcGF0dGVyblxuICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmUucHVzaChwYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRva2VuIGlzIG9wdGlvbmFsLCBvbmx5IGFkZCB0aGUgdmFsdWUgY2hhciBpZiBpdCBtYXRjaHMgdGhlIHRva2VuIHBhdHRlcm5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgaWYgbm90LCBtb3ZlIG9uIHRvIHRoZSBuZXh0IHBhdHRlcm4gY2hhclxuICAgICAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuLnRlc3QodmMpICYmIG9wdGlvbmFsTnVtYmVyc1RvVXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZCA9IGNvbmNhdENoYXIoZm9ybWF0dGVkLCB2YywgdGhpcy5vcHRpb25zLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlUG9zID0gdmFsdWVQb3MgKyBzdGVwcy5pbmM7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsTnVtYmVyc1RvVXNlLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWN1cnNpdmUubGVuZ3RoID4gMCAmJiB2Yykge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuLnBhdHRlcm4udGVzdCh2YykpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0b2tlbiBpc24ndCBvcHRpb25hbCB0aGUgdmFsdWUgY2hhciBtdXN0IG1hdGNoIHRoZSB0b2tlbiBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gY29uY2F0Q2hhcihmb3JtYXR0ZWQsIHZjLCB0aGlzLm9wdGlvbnMsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB2YWx1ZVBvcyA9IHZhbHVlUG9zICsgc3RlcHMuaW5jO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdmMgJiYgdG9rZW4uX2RlZmF1bHQgJiYgdGhpcy5vcHRpb25zLnVzZWRlZmF1bHRzKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHRva2VuIGlzbid0IG9wdGlvbmFsIGFuZCBoYXMgYSBkZWZhdWx0IHZhbHVlLCB1c2UgaXQgaWYgdGhlIHZhbHVlIGlzIGZpbmlzaGVkXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gY29uY2F0Q2hhcihmb3JtYXR0ZWQsIHRva2VuLl9kZWZhdWx0LCB0aGlzLm9wdGlvbnMsIHRva2VuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIHN0cmluZyB2YWx1ZSBkb24ndCBtYXRjaCB0aGUgZ2l2ZW4gcGF0dGVyblxuICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge3Jlc3VsdDogZm9ybWF0dGVkLCB2YWxpZDogdmFsaWR9O1xuICAgIH07XG5cbiAgICBTdHJpbmdNYXNrLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3ModmFsdWUpLnJlc3VsdDtcbiAgICB9O1xuXG4gICAgU3RyaW5nTWFzay5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzKHZhbHVlKS52YWxpZDtcbiAgICB9O1xuXG4gICAgU3RyaW5nTWFzay5wcm9jZXNzID0gZnVuY3Rpb24odmFsdWUsIHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdNYXNrKHBhdHRlcm4sIG9wdGlvbnMpLnByb2Nlc3ModmFsdWUpO1xuICAgIH07XG5cbiAgICBTdHJpbmdNYXNrLmFwcGx5ID0gZnVuY3Rpb24odmFsdWUsIHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdNYXNrKHBhdHRlcm4sIG9wdGlvbnMpLmFwcGx5KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgU3RyaW5nTWFzay52YWxpZGF0ZSA9IGZ1bmN0aW9uKHZhbHVlLCBwYXR0ZXJuLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgU3RyaW5nTWFzayhwYXR0ZXJuLCBvcHRpb25zKS52YWxpZGF0ZSh2YWx1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBTdHJpbmdNYXNrO1xufSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhbmd1bGFyLmZsdWlnJywgW1xuICAgIHJlcXVpcmUoJy4vZ2xvYmFsL2dsb2JhbC1tYXNrcycpLFxuICAgIHJlcXVpcmUoJy4vYnIvYnItbWFza3MnKSxcbiAgICByZXF1aXJlKCcuL2ZsdWlnL2ZsdWlnLXVpJyksXG4gICAgcmVxdWlyZSgnLi9maWx0ZXJzL2ZpbHRlcicpXG5dKS5uYW1lOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFN0cmluZ01hc2sgPSByZXF1aXJlKCdzdHJpbmctbWFzaycpO1xudmFyIG1hc2tGYWN0b3J5ID0gcmVxdWlyZSgnbWFzay1mYWN0b3J5Jyk7XG5cbnZhciBib2xldG9CYW5jYXJpb01hc2sgPSBuZXcgU3RyaW5nTWFzaygnMDAwMDAuMDAwMDAgMDAwMDAuMDAwMDAwIDAwMDAwLjAwMDAwMCAwIDAwMDAwMDAwMDAwMDAwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkaXJlY3RpdmU6IG1hc2tGYWN0b3J5KHtcblx0XHRjbGVhclZhbHVlOiBmdW5jdGlvbiAocmF3VmFsdWUpIHtcblx0XHRcdHJldHVybiByYXdWYWx1ZS5yZXBsYWNlKC9bXjAtOV0vZywgJycpLnNsaWNlKDAsIDQ3KTtcblx0XHR9LFxuXHRcdGZvcm1hdDogZnVuY3Rpb24gKGNsZWFuVmFsdWUpIHtcblx0XHRcdHJldHVybiBmb3JtYXQoY2xlYW5WYWx1ZSk7XG5cdFx0fSxcblx0XHR2YWxpZGF0aW9uczoge1xuXHRcdFx0Ym9sZXRvQmFuY2FyaW86IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUubGVuZ3RoID09PSA0Nztcblx0XHRcdH1cblx0XHR9XG5cdH0pLFxuXHRmaWx0ZXI6IEJvbGV0b0JhbmNhcmlvRmlsdGVyXG59XG5cbmZ1bmN0aW9uIGZvcm1hdCAodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gYm9sZXRvQmFuY2FyaW9NYXNrLmFwcGx5KHZhbHVlKS5yZXBsYWNlKC9bXjAtOV0kLywgJycpO1xufVxuXG5mdW5jdGlvbiBCb2xldG9CYW5jYXJpb0ZpbHRlcigkZmlsdGVyKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHRyZXR1cm4gZm9ybWF0KGlucHV0KTtcblx0fTtcbn1cbkJvbGV0b0JhbmNhcmlvRmlsdGVyLiRpbmplY3QgPSBbJyRmaWx0ZXInXTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBtID0gYW5ndWxhci5tb2R1bGUoJ2ZsdWlnLm1hc2tzLmJyJywgW1xuICAgICAgICByZXF1aXJlKCcuLi9oZWxwZXJzJyksXG4gICAgXSlcbiAgICAuZGlyZWN0aXZlKCdmbHVpZ0JvbGV0b0JhbmNhcmlvTWFzaycsIHJlcXVpcmUoJy4vYm9sZXRvLWJhbmNhcmlvL2JvbGV0by1iYW5jYXJpbycpLmRpcmVjdGl2ZSlcbiAgICAuZmlsdGVyKCdib2xldG9CYW5jYXJpbycsIHJlcXVpcmUoJy4vYm9sZXRvLWJhbmNhcmlvL2JvbGV0by1iYW5jYXJpbycpLmZpbHRlcilcblxuICAgIC5kaXJlY3RpdmUoJ2ZsdWlnQ2VwTWFzaycsIHJlcXVpcmUoJy4vY2VwL2NlcCcpLmRpcmVjdGl2ZSlcbiAgICAuZmlsdGVyKCdjZXAnLCByZXF1aXJlKCcuL2NlcC9jZXAnKS5maWx0ZXIpXG5cbiAgICAuZGlyZWN0aXZlKCdmbHVpZ0NucGpNYXNrJywgcmVxdWlyZSgnLi9jbnBqL2NucGonKS5kaXJlY3RpdmUpXG4gICAgLmZpbHRlcignY25waicsIHJlcXVpcmUoJy4vY25wai9jbnBqJykuZmlsdGVyKVxuXG4gICAgLmRpcmVjdGl2ZSgnZmx1aWdDcGZNYXNrJywgcmVxdWlyZSgnLi9jcGYvY3BmJykuZGlyZWN0aXZlKVxuICAgIC5maWx0ZXIoJ2NwZicsIHJlcXVpcmUoJy4vY3BmL2NwZicpLmZpbHRlcilcblxuICAgIC5kaXJlY3RpdmUoJ2ZsdWlnQ3BmQ25wak1hc2snLCByZXF1aXJlKCcuL2NwZi1jbnBqL2NwZi1jbnBqJykuZGlyZWN0aXZlKVxuICAgIC5maWx0ZXIoJ2NwZkNucGonLCByZXF1aXJlKCcuL2NwZi1jbnBqL2NwZi1jbnBqJykuZmlsdGVyKVxuXG4gICAgLmRpcmVjdGl2ZSgnZmx1aWdJZU1hc2snLCByZXF1aXJlKCcuL2luc2NyaWNhby1lc3RhZHVhbC9pZScpKVxuXG4gICAgLmRpcmVjdGl2ZSgnZmx1aWdOZmVNYXNrJywgcmVxdWlyZSgnLi9uZmUvbmZlJykuZGlyZWN0aXZlKVxuICAgIC5maWx0ZXIoJ25mZScsIHJlcXVpcmUoJy4vbmZlL25mZScpLmZpbHRlcilcblxuICAgIC5kaXJlY3RpdmUoJ2ZsdWlnQ2FyUGxhdGVNYXNrJywgcmVxdWlyZSgnLi9jYXItcGxhdGUvY2FyLXBsYXRlJykuZGlyZWN0aXZlKVxuICAgIC5maWx0ZXIoJ2NhclBsYXRlJywgcmVxdWlyZSgnLi9jYXItcGxhdGUvY2FyLXBsYXRlJykuZmlsdGVyKVxuXG4gICAgLmRpcmVjdGl2ZSgnZmx1aWdCclBob25lTWFzaycsIHJlcXVpcmUoJy4vcGhvbmUvYnItcGhvbmUnKS5kaXJlY3RpdmUpXG4gICAgLmZpbHRlcignYnJQaG9uZScsIHJlcXVpcmUoJy4vcGhvbmUvYnItcGhvbmUnKS5maWx0ZXIpXG5cbiAgICBcbiAgICBcbiAgICBcblxubW9kdWxlLmV4cG9ydHMgPSBtLm5hbWU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3RyaW5nTWFzayA9IHJlcXVpcmUoJ3N0cmluZy1tYXNrJyk7XG52YXIgbWFza0ZhY3RvcnkgPSByZXF1aXJlKCdtYXNrLWZhY3RvcnknKTtcblxudmFyIGNhclBsYXRlTWFzayA9IG5ldyBTdHJpbmdNYXNrKCdVVVUtMEEwMCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGlyZWN0aXZlOiBtYXNrRmFjdG9yeSh7XG5cdFx0Y2xlYXJWYWx1ZTogZnVuY3Rpb24gKHJhd1ZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gcmF3VmFsdWUucmVwbGFjZSgvW15hLXpBLVowLTldL2csICcnKS5zbGljZSgwLCA3KTtcblx0XHR9LFxuXHRcdGZvcm1hdDogZnVuY3Rpb24gKGNsZWFuVmFsdWUpIHtcblx0XHRcdHJldHVybiBmb3JtYXQoY2xlYW5WYWx1ZSk7XG5cdFx0fSxcblx0XHR2YWxpZGF0aW9uczoge1xuXHRcdFx0Y2FyUGxhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUubGVuZ3RoID09PSA3O1xuXHRcdFx0fVxuXHRcdH1cblx0fSksXG5cdGZpbHRlcjogQ2FyUGxhdGVGaWx0ZXJcbn1cblxuZnVuY3Rpb24gZm9ybWF0KHZhbHVlKSB7XG5cdHJldHVybiAoY2FyUGxhdGVNYXNrLmFwcGx5KHZhbHVlKSB8fCAnJykucmVwbGFjZSgvW15hLXpBLVowLTldJC8sICcnKTtcbn1cblxuZnVuY3Rpb24gQ2FyUGxhdGVGaWx0ZXIoJGZpbHRlcikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0cmV0dXJuIGZvcm1hdChpbnB1dCk7XG5cdH07XG59XG5cbkNhclBsYXRlRmlsdGVyLiRpbmplY3QgPSBbJyRmaWx0ZXInXTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBTdHJpbmdNYXNrID0gcmVxdWlyZSgnc3RyaW5nLW1hc2snKTtcbnZhciBtYXNrRmFjdG9yeSA9IHJlcXVpcmUoJ21hc2stZmFjdG9yeScpO1xuXG52YXIgY2VwTWFzayA9IG5ldyBTdHJpbmdNYXNrKCcwMDAwMC0wMDAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGRpcmVjdGl2ZTogbWFza0ZhY3Rvcnkoe1xuXHRcdGNsZWFyVmFsdWU6IGZ1bmN0aW9uIChyYXdWYWx1ZSkge1xuXHRcdFx0cmV0dXJuIHJhd1ZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvW14wLTldL2csICcnKS5zbGljZSgwLCA4KTtcblx0XHR9LFxuXHRcdGZvcm1hdDogZnVuY3Rpb24gKGNsZWFuVmFsdWUpIHtcblx0XHRcdHJldHVybiBmb3JtYXQoY2xlYW5WYWx1ZSk7XG5cdFx0fSxcblx0XHR2YWxpZGF0aW9uczoge1xuXHRcdFx0Y2VwOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gODtcblx0XHRcdH1cblx0XHR9XG5cdH0pLFxuXHRmaWx0ZXI6IENlcEZpbHRlclx0XG59O1xuXG5mdW5jdGlvbiBmb3JtYXQgKHZhbHVlKSB7XG5cdHJldHVybiAoY2VwTWFzay5hcHBseSh2YWx1ZSkgfHwgJycpLnJlcGxhY2UoL1teMC05XSQvLCAnJyk7XG59XG5cbmZ1bmN0aW9uIENlcEZpbHRlcigkZmlsdGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0KGlucHV0KTtcbiAgICB9O1xufVxuQ2VwRmlsdGVyLiRpbmplY3QgPSBbJyRmaWx0ZXInXTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBTdHJpbmdNYXNrID0gcmVxdWlyZSgnc3RyaW5nLW1hc2snKTtcbnZhciBCclYgPSByZXF1aXJlKCdici12YWxpZGF0aW9ucycpO1xudmFyIG1hc2tGYWN0b3J5ID0gcmVxdWlyZSgnbWFzay1mYWN0b3J5Jyk7XG5cbnZhciBjbnBqUGF0dGVybiA9IG5ldyBTdHJpbmdNYXNrKCcwMC4wMDAuMDAwXFwvMDAwMC0wMCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGlyZWN0aXZlOiBtYXNrRmFjdG9yeSh7XG5cdFx0Y2xlYXJWYWx1ZTogZnVuY3Rpb24gKHJhd1ZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gU3RyaW5nKHJhd1ZhbHVlKS5yZXBsYWNlKC9bXlxcZF0vZywgJycpLnNsaWNlKDAsIDE0KTtcblx0XHR9LFxuXHRcdGZvcm1hdDogZnVuY3Rpb24gKGNsZWFuVmFsdWUpIHtcblx0XHRcdHJldHVybiBmb3JtYXQoY2xlYW5WYWx1ZSk7XG5cdFx0fSxcblx0XHR2YWxpZGF0aW9uczoge1xuXHRcdFx0Y25wajogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBCclYuY25wai52YWxpZGF0ZShTdHJpbmcodmFsdWUpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pLFxuXHRmaWx0ZXI6IENucGpGaWx0ZXJcbn1cblxuZnVuY3Rpb24gZm9ybWF0KHZhbHVlKSB7XG5cdHJldHVybiAoY25walBhdHRlcm4uYXBwbHkodmFsdWUpIHx8ICcnKS50cmltKCkucmVwbGFjZSgvW14wLTldJC8sICcnKTtcbn1cblxuZnVuY3Rpb24gQ25wakZpbHRlcigkZmlsdGVyKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHRyZXR1cm4gZm9ybWF0KGlucHV0KTtcblx0fTtcbn1cbkNucGpGaWx0ZXIuJGluamVjdCA9IFsnJGZpbHRlciddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFN0cmluZ01hc2sgPSByZXF1aXJlKCdzdHJpbmctbWFzaycpO1xudmFyIEJyViA9IHJlcXVpcmUoJ2JyLXZhbGlkYXRpb25zJyk7XG52YXIgbWFza0ZhY3RvcnkgPSByZXF1aXJlKCdtYXNrLWZhY3RvcnknKTtcblxudmFyIGNucGpQYXR0ZXJuID0gbmV3IFN0cmluZ01hc2soJzAwLjAwMC4wMDBcXC8wMDAwLTAwJyk7XG52YXIgY3BmUGF0dGVybiA9IG5ldyBTdHJpbmdNYXNrKCcwMDAuMDAwLjAwMC0wMCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGlyZWN0aXZlOiBtYXNrRmFjdG9yeSh7XG5cdFx0Y2xlYXJWYWx1ZTogZnVuY3Rpb24gKHJhd1ZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gU3RyaW5nKHJhd1ZhbHVlKS5yZXBsYWNlKC9bXlxcZF0vZywgJycpLnNsaWNlKDAsIDE0KTtcblx0XHR9LFxuXHRcdGZvcm1hdDogZnVuY3Rpb24gKGNsZWFuVmFsdWUpIHtcblx0XHRcdHJldHVybiBmb3JtYXQoY2xlYW5WYWx1ZSk7XG5cdFx0fSxcblx0XHR2YWxpZGF0aW9uczoge1xuXHRcdFx0Y3BmOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiBTdHJpbmcodmFsdWUpLmxlbmd0aCA+IDExIHx8IEJyVi5jcGYudmFsaWRhdGUoU3RyaW5nKHZhbHVlKSk7XG5cdFx0XHR9LFxuXHRcdFx0Y25wajogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gIFN0cmluZyh2YWx1ZSkubGVuZ3RoIDw9IDExIHx8IEJyVi5jbnBqLnZhbGlkYXRlKFN0cmluZyh2YWx1ZSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSksXG5cdGZpbHRlcjogQ3BmQ25wakZpbHRlclxufVxuXG5mdW5jdGlvbiBmb3JtYXQodmFsdWUpIHtcblxuXHRpZiAoIXZhbHVlKSByZXR1cm4gdmFsdWU7XG5cdHZhciBmb3JtYXRlZFZhbHVlO1xuXG5cdGlmICh2YWx1ZS5sZW5ndGggPiAxMSkge1xuXHRcdGZvcm1hdGVkVmFsdWUgPSBjbnBqUGF0dGVybi5hcHBseSh2YWx1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0Zm9ybWF0ZWRWYWx1ZSA9IGNwZlBhdHRlcm4uYXBwbHkodmFsdWUpIHx8ICcnO1xuXHR9XG5cblx0cmV0dXJuIGZvcm1hdGVkVmFsdWUudHJpbSgpLnJlcGxhY2UoL1teMC05XSQvLCAnJyk7XG59XG5cbmZ1bmN0aW9uIENwZkNucGpGaWx0ZXIoJGZpbHRlcikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0cmV0dXJuIGZvcm1hdChpbnB1dCk7XG5cdH07XG59XG5DcGZDbnBqRmlsdGVyLiRpbmplY3QgPSBbJyRmaWx0ZXInXTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBTdHJpbmdNYXNrID0gcmVxdWlyZSgnc3RyaW5nLW1hc2snKTtcbnZhciBCclYgPSByZXF1aXJlKCdici12YWxpZGF0aW9ucycpO1xudmFyIG1hc2tGYWN0b3J5ID0gcmVxdWlyZSgnbWFzay1mYWN0b3J5Jyk7XG5cbnZhciBjcGZQYXR0ZXJuID0gbmV3IFN0cmluZ01hc2soJzAwMC4wMDAuMDAwLTAwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkaXJlY3RpdmU6IG1hc2tGYWN0b3J5KHtcblx0XHRjbGVhclZhbHVlOiBmdW5jdGlvbiAocmF3VmFsdWUpIHtcblx0XHRcdHJldHVybiBTdHJpbmcocmF3VmFsdWUpLnJlcGxhY2UoL1teXFxkXS9nLCAnJykuc2xpY2UoMCwgMTEpO1xuXHRcdH0sXG5cdFx0Zm9ybWF0OiBmdW5jdGlvbiAoY2xlYW5WYWx1ZSkge1xuXHRcdFx0cmV0dXJuIGZvcm1hdChTdHJpbmcoY2xlYW5WYWx1ZSkpO1xuXHRcdH0sXG5cdFx0dmFsaWRhdGlvbnM6IHtcblx0XHRcdGNwZjogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBCclYuY3BmLnZhbGlkYXRlKFN0cmluZyh2YWx1ZSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSksXG5cdGZpbHRlcjogQ3BmRmlsdGVyXG59XG5cbmZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSkge1xuXHRyZXR1cm4gKGNwZlBhdHRlcm4uYXBwbHkoU3RyaW5nKHZhbHVlKSkgfHwgJycpLnRyaW0oKS5yZXBsYWNlKC9bXjAtOV0kLywgJycpO1xufVxuXG5mdW5jdGlvbiBDcGZGaWx0ZXIoJGZpbHRlcikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0cmV0dXJuIGZvcm1hdChpbnB1dCk7XG5cdH07XG59XG5DcGZGaWx0ZXIuJGluamVjdCA9IFsnJGZpbHRlciddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFN0cmluZ01hc2sgPSByZXF1aXJlKCdzdHJpbmctbWFzaycpO1xudmFyIEJyViA9IHJlcXVpcmUoJ2JyLXZhbGlkYXRpb25zJyk7XG5cbmZ1bmN0aW9uIEZsdWlnSWVNYXNrRGlyZWN0aXZlKCRwYXJzZSkge1xuXHR2YXIgaWVNYXNrcyA9IHtcblx0XHQnQUMnOiBbe21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMC4wMDAuMDAwLzAwMC0wMCcpfV0sXG5cdFx0J0FMJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAwJyl9XSxcblx0XHQnQU0nOiBbe21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMC4wMDAuMDAwLTAnKX1dLFxuXHRcdCdBUCc6IFt7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwMCcpfV0sXG5cdFx0J0JBJzogW3tjaGFyczogOCwgbWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMC0wMCcpfSxcblx0XHRcdHttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMC0wMCcpfV0sXG5cdFx0J0NFJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAtMCcpfV0sXG5cdFx0J0RGJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAwMDAtMDAnKX1dLFxuXHRcdCdFUyc6IFt7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwLTAnKX1dLFxuXHRcdCdHTyc6IFt7bWFzazogbmV3IFN0cmluZ01hc2soJzAwLjAwMC4wMDAtMCcpfV0sXG5cdFx0J01BJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAwJyl9XSxcblx0XHQnTUcnOiBbe21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAuMDAwLjAwMC8wMDAwJyl9XSxcblx0XHQnTVMnOiBbe21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwMDAnKX1dLFxuXHRcdCdNVCc6IFt7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwMDAtMCcpfV0sXG5cdFx0J1BBJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAtMDAwMDAwLTAnKX1dLFxuXHRcdCdQQic6IFt7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwLTAnKX1dLFxuXHRcdCdQRSc6IFt7Y2hhcnM6IDksIG1hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwLTAwJyl9LFxuXHRcdFx0e21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMC4wLjAwMC4wMDAwMDAwLTAnKX1dLFxuXHRcdCdQSSc6IFt7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwMCcpfV0sXG5cdFx0J1BSJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwLjAwMDAwLTAwJyl9XSxcblx0XHQnUkonOiBbe21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMC4wMDAuMDAtMCcpfV0sXG5cdFx0J1JOJzogW3tjaGFyczogOSwgbWFzazogbmV3IFN0cmluZ01hc2soJzAwLjAwMC4wMDAtMCcpfSxcblx0XHRcdHttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAuMC4wMDAuMDAwLTAnKX1dLFxuXHRcdCdSTyc6IFt7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMDAwMDAwMDAwMDAtMCcpfV0sXG5cdFx0J1JSJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAtMCcpfV0sXG5cdFx0J1JTJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwLzAwMDAwMDAnKX1dLFxuXHRcdCdTQyc6IFt7bWFzazogbmV3IFN0cmluZ01hc2soJzAwMC4wMDAuMDAwJyl9XSxcblx0XHQnU0UnOiBbe21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAwMDAwMC0wJyl9XSxcblx0XHQnU1AnOiBbe21hc2s6IG5ldyBTdHJpbmdNYXNrKCcwMDAuMDAwLjAwMC4wMDAnKX0sXG5cdFx0XHR7bWFzazogbmV3IFN0cmluZ01hc2soJy0wMDAwMDAwMC4wLzAwMCcpfV0sXG5cdFx0J1RPJzogW3ttYXNrOiBuZXcgU3RyaW5nTWFzaygnMDAwMDAwMDAwMDAnKX1dXG5cdH07XG5cblx0ZnVuY3Rpb24gY2xlYXJWYWx1ZSh2YWx1ZSkge1xuXHRcdGlmICghdmFsdWUpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZSgvW14wLTldL2csICcnKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldE1hc2sodWYsIHZhbHVlKSB7XG5cdFx0aWYgKCF1ZiB8fCAhaWVNYXNrc1t1Zl0pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodWYgPT09ICdTUCcgJiYgL15QL2kudGVzdCh2YWx1ZSkpIHtcblx0XHRcdHJldHVybiBpZU1hc2tzLlNQWzFdLm1hc2s7XG5cdFx0fVxuXG5cdFx0dmFyIG1hc2tzID0gaWVNYXNrc1t1Zl07XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHdoaWxlIChtYXNrc1tpXS5jaGFycyAmJiBtYXNrc1tpXS5jaGFycyA8IGNsZWFyVmFsdWUodmFsdWUpLmxlbmd0aCAmJiBpIDwgbWFza3MubGVuZ3RoIC0gMSkge1xuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXNrc1tpXS5tYXNrO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXBwbHlJRU1hc2sodmFsdWUsIHVmKSB7XG5cdFx0dmFyIG1hc2sgPSBnZXRNYXNrKHVmLCB2YWx1ZSk7XG5cblx0XHRpZiAoIW1hc2spIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHR2YXIgcHJvY2Vzc2VkID0gbWFzay5wcm9jZXNzKGNsZWFyVmFsdWUodmFsdWUpKTtcblx0XHR2YXIgZm9ybWF0ZWRWYWx1ZSA9IHByb2Nlc3NlZC5yZXN1bHQgfHwgJyc7XG5cdFx0Zm9ybWF0ZWRWYWx1ZSA9IGZvcm1hdGVkVmFsdWUudHJpbSgpLnJlcGxhY2UoL1teMC05XSQvLCAnJyk7XG5cblx0XHRpZiAodWYgPT09ICdTUCcgJiYgL15wL2kudGVzdCh2YWx1ZSkpIHtcblx0XHRcdHJldHVybiAnUCcgKyBmb3JtYXRlZFZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmb3JtYXRlZFZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0EnLFxuXHRcdHJlcXVpcmU6ICduZ01vZGVsJyxcblx0XHRsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcblx0XHRcdHZhciBzdGF0ZSA9ICgkcGFyc2UoYXR0cnMuZmx1aWdJZU1hc2spKHNjb3BlKSB8fCAnJykudG9VcHBlckNhc2UoKTtcblxuXHRcdFx0ZnVuY3Rpb24gZm9ybWF0dGVyKHZhbHVlKSB7XG5cdFx0XHRcdGlmIChjdHJsLiRpc0VtcHR5KHZhbHVlKSkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBhcHBseUlFTWFzayh2YWx1ZSwgc3RhdGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBwYXJzZXIodmFsdWUpIHtcblx0XHRcdFx0aWYgKGN0cmwuJGlzRW1wdHkodmFsdWUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIGZvcm1hdGVkVmFsdWUgPSBhcHBseUlFTWFzayh2YWx1ZSwgc3RhdGUpO1xuXHRcdFx0XHR2YXIgYWN0dWFsVmFsdWUgPSBjbGVhclZhbHVlKGZvcm1hdGVkVmFsdWUpO1xuXG5cdFx0XHRcdGlmIChjdHJsLiR2aWV3VmFsdWUgIT09IGZvcm1hdGVkVmFsdWUpIHtcblx0XHRcdFx0XHRjdHJsLiRzZXRWaWV3VmFsdWUoZm9ybWF0ZWRWYWx1ZSk7XG5cdFx0XHRcdFx0Y3RybC4kcmVuZGVyKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoc3RhdGUgJiYgc3RhdGUudG9VcHBlckNhc2UoKSA9PT0gJ1NQJyAmJiAvXnAvaS50ZXN0KHZhbHVlKSkge1xuXHRcdFx0XHRcdHJldHVybiAnUCcgKyBhY3R1YWxWYWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBhY3R1YWxWYWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y3RybC4kZm9ybWF0dGVycy5wdXNoKGZvcm1hdHRlcik7XG5cdFx0XHRjdHJsLiRwYXJzZXJzLnB1c2gocGFyc2VyKTtcblxuXHRcdFx0Y3RybC4kdmFsaWRhdG9ycy5pZSA9IGZ1bmN0aW9uIHZhbGlkYXRvcihtb2RlbFZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBjdHJsLiRpc0VtcHR5KG1vZGVsVmFsdWUpIHx8IEJyVi5pZShzdGF0ZSkudmFsaWRhdGUobW9kZWxWYWx1ZSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS4kd2F0Y2goYXR0cnMuZmx1aWdJZU1hc2ssIGZ1bmN0aW9uKG5ld1N0YXRlKSB7XG5cdFx0XHRcdHN0YXRlID0gKG5ld1N0YXRlIHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xuXG5cdFx0XHRcdHBhcnNlcihjdHJsLiR2aWV3VmFsdWUpO1xuXHRcdFx0XHRjdHJsLiR2YWxpZGF0ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xufVxuRmx1aWdJZU1hc2tEaXJlY3RpdmUuJGluamVjdCA9IFsnJHBhcnNlJ107XG5cbm1vZHVsZS5leHBvcnRzID0gRmx1aWdJZU1hc2tEaXJlY3RpdmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBTdHJpbmdNYXNrID0gcmVxdWlyZSgnc3RyaW5nLW1hc2snKTtcbnZhciBtYXNrRmFjdG9yeSA9IHJlcXVpcmUoJ21hc2stZmFjdG9yeScpO1xuXG52YXIgbmZlQWNjZXNzS2V5TWFzayA9IG5ldyBTdHJpbmdNYXNrKCcwMDAwIDAwMDAgMDAwMCAwMDAwIDAwMDAnICtcblx0JyAwMDAwIDAwMDAgMDAwMCAwMDAwIDAwMDAgMDAwMCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGlyZWN0aXZlOiBtYXNrRmFjdG9yeSh7XG5cdFx0Y2xlYXJWYWx1ZTogZnVuY3Rpb24gKHJhd1ZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gcmF3VmFsdWUucmVwbGFjZSgvW14wLTldL2csICcnKS5zbGljZSgwLCA0NCk7XG5cdFx0fSxcblx0XHRmb3JtYXQ6IGZ1bmN0aW9uIChjbGVhblZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gZm9ybWF0KGNsZWFuVmFsdWUpO1xuXHRcdH0sXG5cdFx0dmFsaWRhdGlvbnM6IHtcblx0XHRcdG5mZUFjY2Vzc0tleTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDQ0O1xuXHRcdFx0fVxuXHRcdH1cblx0fSksXG5cdGZpbHRlcjogTmZlRmlsdGVyXG59XG5cbmZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSkge1xuXHRyZXR1cm4gKG5mZUFjY2Vzc0tleU1hc2suYXBwbHkodmFsdWUpIHx8ICcnKS5yZXBsYWNlKC9bXjAtOV0kLywgJycpO1xufVxuXG5mdW5jdGlvbiBOZmVGaWx0ZXIoJGZpbHRlcikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0cmV0dXJuIGZvcm1hdChpbnB1dCk7XG5cdH07XG59XG5OZmVGaWx0ZXIuJGluamVjdCA9IFsnJGZpbHRlciddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFN0cmluZ01hc2sgPSByZXF1aXJlKCdzdHJpbmctbWFzaycpO1xudmFyIG1hc2tGYWN0b3J5ID0gcmVxdWlyZSgnbWFzay1mYWN0b3J5Jyk7XG5cbi8qKlxuICogRklYTUU6IGFsbCBudW1iZXJzIHdpbGwgaGF2ZSA5IGRpZ2l0cyBhZnRlciAyMDE2LlxuICogc2VlIGh0dHA6Ly9wb3J0YWwuZW1icmF0ZWwuY29tLmJyL2VtYnJhdGVsLzktZGlnaXRvL1xuICovXG52YXIgcGhvbmVNYXNrOEQgPSBuZXcgU3RyaW5nTWFzaygnKDAwKSAwMDAwLTAwMDAnKSxcblx0cGhvbmVNYXNrOUQgPSBuZXcgU3RyaW5nTWFzaygnKDAwKSAwMDAwMC0wMDAwJyksXG5cdHBob25lTWFzazhEU2VtREREID0gbmV3IFN0cmluZ01hc2soJzAwMDAtMDAwMCcpLFxuXHRwaG9uZU1hc2s5RFNlbURERCA9IG5ldyBTdHJpbmdNYXNrKCcwMDAwMC0wMDAwJyksXG5cdHBob25lTWFzazA4MDAgPSBuZXcgU3RyaW5nTWFzaygnMDAwMC0wMDAtMDAwMCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGlyZWN0aXZlOiBtYXNrRmFjdG9yeSh7XG5cdFx0Y2xlYXJWYWx1ZTogZnVuY3Rpb24gKHJhd1ZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gcmF3VmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpLnNsaWNlKDAsIDExKTtcblx0XHR9LFxuXHRcdGZvcm1hdDogZnVuY3Rpb24gKGNsZWFuVmFsdWUpIHtcblx0XHRcdHJldHVybiBmb3JtYXQoY2xlYW5WYWx1ZSlcblx0XHR9LFxuXHRcdGdldE1vZGVsVmFsdWU6IGZ1bmN0aW9uIChmb3JtYXR0ZWRWYWx1ZSwgb3JpZ2luYWxNb2RlbFR5cGUpIHtcblx0XHRcdHZhciBjbGVhblZhbHVlID0gdGhpcy5jbGVhclZhbHVlKGZvcm1hdHRlZFZhbHVlKTtcblxuXHRcdFx0cmV0dXJuIG9yaWdpbmFsTW9kZWxUeXBlID09PSAnbnVtYmVyJyA/IHBhcnNlSW50KGNsZWFuVmFsdWUpIDogY2xlYW5WYWx1ZTtcblx0XHR9LFxuXHRcdHZhbGlkYXRpb25zOiB7XG5cdFx0XHRwaG9uZU51bWJlcjogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHZhciB2YWx1ZUxlbmd0aCA9IHZhbHVlICYmIHZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoO1xuXHRcdFx0XHRyZXR1cm4gdmFsdWVMZW5ndGggPT09IDggfHwgdmFsdWVMZW5ndGggPT09IDkgfHwgdmFsdWVMZW5ndGggPT09IDEwIHx8IHZhbHVlTGVuZ3RoID09PSAxMTtcblx0XHRcdH1cblx0XHR9XG5cdH0pLFxuXHRmaWx0ZXI6IEJyUGhvbmVGaWx0ZXJcbn1cblxuZnVuY3Rpb24gZm9ybWF0KHZhbHVlKSB7XG5cblx0aWYgKCF2YWx1ZSkgcmV0dXJuIFwiXCI7XG5cblx0dmFyIGZvcm1hdGVkVmFsdWU7XG5cdGlmICh2YWx1ZS5pbmRleE9mKCcwODAwJykgPT09IDApIHtcblx0XHRmb3JtYXRlZFZhbHVlID0gcGhvbmVNYXNrMDgwMC5hcHBseSh2YWx1ZSk7XG5cdH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoIDwgOSkge1xuXHRcdGZvcm1hdGVkVmFsdWUgPSBwaG9uZU1hc2s4RFNlbURERC5hcHBseSh2YWx1ZSkgfHwgJyc7XG5cdH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoIDwgMTApIHtcblx0XHRmb3JtYXRlZFZhbHVlID0gcGhvbmVNYXNrOURTZW1EREQuYXBwbHkodmFsdWUpIHx8ICcnO1xuXHR9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA8IDExKSB7XG5cdFx0Zm9ybWF0ZWRWYWx1ZSA9IHBob25lTWFzazhELmFwcGx5KHZhbHVlKSB8fCAnJztcblx0fSBlbHNlIHtcblx0XHRmb3JtYXRlZFZhbHVlID0gcGhvbmVNYXNrOUQuYXBwbHkodmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIGZvcm1hdGVkVmFsdWUudHJpbSgpLnJlcGxhY2UoL1teMC05XSQvLCAnJyk7XG59XG5cbmZ1bmN0aW9uIEJyUGhvbmVGaWx0ZXIoJGZpbHRlcikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0cmV0dXJuIGZvcm1hdChpbnB1dCk7XG5cdH07XG59XG5CclBob25lRmlsdGVyLiRpbmplY3QgPSBbJyRmaWx0ZXInXTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBtID0gYW5ndWxhci5tb2R1bGUoJ2FuZ3VsYXIuZmlsdGVycycsIFtcbiAgICAgICAgcmVxdWlyZSgnLi4vaGVscGVycycpLFxuICAgIF0pXG4gICAgLmZpbHRlcigncGFnaW5hdGlvbicsIHJlcXVpcmUoJy4vcGFnaW5hdGlvbi9wYWdpbmF0aW9uJykpXG5cbm1vZHVsZS5leHBvcnRzID0gbS5uYW1lOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gUGFnaW5hdGlvbkZpbHRlcigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oaW5wdXQsIHN0YXJ0KSB7XG4gICAgICAgIHN0YXJ0ID0gK3N0YXJ0O1xuXG4gICAgICAgIGlmICghaW5wdXQpIHJldHVybiAwO1xuICAgICAgICByZXR1cm4gaW5wdXQuc2xpY2Uoc3RhcnQpO1xuICAgIH07XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gUGFnaW5hdGlvbkZpbHRlcjsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIEF1dG9jb21wbGV0ZURpcmVjdGl2ZSgkbG9jYWxlLCAkd2luZG93LCAkdGltZW91dCwgJGNvbXBpbGUpIHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIHJlcXVpcmU6ICc/bmdNb2RlbCcsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBkYXRhc2V0OiBcIkBcIixcbiAgICAgICAgICAgIGZsdWlnQXV0b2NvbXBsZXRlTGltaXQ6IFwiQFwiLFxuICAgICAgICAgICAgZmx1aWdBdXRvY29tcGxldGVUeXBlOiBcIkBcIixcbiAgICAgICAgICAgIG1pbkxlbmd0aDogXCJAXCIsXG4gICAgICAgICAgICBmaWx0ZXJGaWVsZHM6IFwiPVwiLFxuICAgICAgICAgICAgcmVzdWx0RmllbGRzOiBcIj1cIixcbiAgICAgICAgICAgIGRpc3BsYXlLZXk6IFwiQFwiLFxuICAgICAgICAgICAgc2VhcmNoVGltZW91dDogXCJAXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFwiPVwiLFxuICAgICAgICAgICAgYWNTZWxlY3RlZDogXCImXCJcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuXG4gICAgICAgICAgICB2YXIgZmx1aWdBdXRvY29tcGxldGUgPSBhdHRycy5mbHVpZ0F1dG9jb21wbGV0ZTtcblxuICAgICAgICAgICAgaWYgKGZsdWlnQXV0b2NvbXBsZXRlID09ICdmYWxzZScpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKCFjdHJsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignbmdNb2RlbCBuw6NvIGluZm9ybWFkbyBwYXJhIG8gZWxlbWVudG86JywgZWxlbWVudFswXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY29wZS5kaXNwbGF5S2V5ID0gc2NvcGUuZGlzcGxheUtleSB8fCAnbmFtZSc7XG4gICAgICAgICAgICBzY29wZS5mbHVpZ0F1dG9jb21wbGV0ZUxpbWl0ID0gc2NvcGUuZmx1aWdBdXRvY29tcGxldGVMaW1pdCB8fCAxMDA7XG4gICAgICAgICAgICBzY29wZS5mbHVpZ0F1dG9jb21wbGV0ZVR5cGUgPSBzY29wZS5mbHVpZ0F1dG9jb21wbGV0ZVR5cGUgfHwgJ2F1dG9jb21wbGV0ZSc7XG4gICAgICAgICAgICBzY29wZS5taW5MZW5ndGggPSBOdW1iZXIoYXR0cnMubWluTGVuZ3RoKSB8fCAwO1xuICAgICAgICAgICAgc2NvcGUuc2VhcmNoVGltZW91dCA9IGF0dHJzLnNlYXJjaFRpbWVvdXQgfHwgNTAwO1xuXG4gICAgICAgICAgICBlbGVtZW50Lm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGlmICghJHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgdGhpcy52YWx1ZS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgnZmlsdGVyRmllbGRzJywgZnVuY3Rpb24gKHZhbCwgb2xkdmFsKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoKG9sZHZhbCB8fCB2YWwpICYmIHZhbCAhPSBvbGR2YWwpIHtcblxuICAgICAgICAgICAgICAgICAgICAvL2NyZWF0ZUF1dG9jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goJ3Jlc3VsdEZpZWxkcycsIGZ1bmN0aW9uICh2YWwsIG9sZHZhbCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKChvbGR2YWwgfHwgdmFsKSAmJiB2YWwgIT0gb2xkdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY3JlYXRlQXV0b2NvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKCd2YWx1ZXMnLCBmdW5jdGlvbiAodmFsLCBvbGR2YWwpIHtcblxuICAgICAgICAgICAgICAgIGlmICgob2xkdmFsIHx8IHZhbCkgJiYgdmFsICE9IG9sZHZhbCkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVBdXRvY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgnZGF0YXNldCcsIGZ1bmN0aW9uICh2YWwsIG9sZHZhbCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKChvbGR2YWwgfHwgdmFsKSAmJiB2YWwgIT0gb2xkdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUF1dG9jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY3JlYXRlQXV0b2NvbXBsZXRlKClcblxuXG4gICAgICAgICAgICBmdW5jdGlvbiBsb2FkRGF0YShhcnIpIHtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodHh0LCBmbmMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCwgZiwgZmlsdGVyO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlciA9IG5ldyBSZWdFeHAoKHR4dC5ub3JtYWxpemUgPyB0eHQubm9ybWFsaXplKFwiTkZEXCIpIDogdHh0KS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKSwgXCJpXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGFycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoYXJyLCBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iajI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLnJlc3VsdEZpZWxkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqMiA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucmVzdWx0RmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmoyW2ZdID0gb2JqW2ZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajIgPSBvYmo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHNjb3BlLmRpc3BsYXlLZXkgJiYgZmlsdGVyLnRlc3QoKFN0cmluZyhvYmoyW3Njb3BlLmRpc3BsYXlLZXldKS5ub3JtYWxpemUgPyBTdHJpbmcob2JqMltzY29wZS5kaXNwbGF5S2V5XSkubm9ybWFsaXplKFwiTkZEXCIpIDogU3RyaW5nKG9iajJbc2NvcGUuZGlzcGxheUtleV0pKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKSkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIXNjb3BlLmRpc3BsYXlLZXkgJiYgZmlsdGVyLnRlc3QoSlNPTi5zdHJpbmdpZnkob2JqMikpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICYmIHJlc3VsdC5sZW5ndGggPCBzY29wZS5mbHVpZ0F1dG9jb21wbGV0ZUxpbWl0ICYmIHJlc3VsdC5wdXNoKG9iajIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGZuYyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlQXV0b2NvbXBsZXRlKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzY29wZS5kYXRhc2V0ICYmICFzY29wZS52YWx1ZXMpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGlmIChzY29wZS5hdXRvY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuYXV0b2NvbXBsZXRlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuYXV0b2NvbXBsZXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZmlsdGVyRmllbGRzID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmZpbHRlckZpZWxkcykge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJGaWVsZHMgPSBzY29wZS5maWx0ZXJGaWVsZHMuam9pbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciByZXN1bHRGaWVsZHMgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGUucmVzdWx0RmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEZpZWxkcyA9IHNjb3BlLnJlc3VsdEZpZWxkcy5qb2luKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3RVcmwgPSBcIi9hcGkvcHVibGljL2VjbS9kYXRhc2V0L3NlYXJjaD9kYXRhc2V0SWQ9XCIgKyBzY29wZS5kYXRhc2V0ICsgXCImc2VhcmNoRmllbGQ9XCIgKyBzY29wZS5kaXNwbGF5S2V5ICsgXCImZmlsdGVyRmllbGRzPVwiICsgZmlsdGVyRmllbGRzICsgXCImcmVzdWx0RmllbGRzPVwiICsgcmVzdWx0RmllbGRzICsgXCImbGltaXQ9XCIgKyBzY29wZS5mbHVpZ0F1dG9jb21wbGV0ZUxpbWl0ICsgXCImXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVzdFVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5LZXk6IFwic2VhcmNoVmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IFwiY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGxvYWREYXRhKHNjb3BlLnZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFzY29wZS5hdXRvY29tcGxldGUpIHtcblxuICAgICAgICAgICAgICAgICAgICBzY29wZS5hdXRvY29tcGxldGUgPSBGTFVJR0MuYXV0b2NvbXBsZXRlKGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUtleTogc2NvcGUuZGlzcGxheUtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHNjb3BlLmZsdWlnQXV0b2NvbXBsZXRlVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogTnVtYmVyKHNjb3BlLm1pbkxlbmd0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogc2NvcGUuZmx1aWdBdXRvY29tcGxldGVMaW1pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFRpbWVvdXQ6IHNjb3BlLnNlYXJjaFRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAub24oJ2ZsdWlnLmF1dG9jb21wbGV0ZS5vcGVuZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lbGVtZW50LnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vbignZmx1aWcuYXV0b2NvbXBsZXRlLmNsb3NlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsZW1lbnQucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLm9uKCdmbHVpZy5hdXRvY29tcGxldGUuc2VsZWN0ZWQnLCBmdW5jdGlvbiAocmVzdWx0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmJsdXIoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLmZsdWlnQXV0b2NvbXBsZXRlVHlwZSA9PSAnYXV0b2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3RybC4kc2V0Vmlld1ZhbHVlKHJlc3VsdC5pdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuJHNldFZpZXdWYWx1ZShzY29wZS5hdXRvY29tcGxldGUuaXRlbXMoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLmZsdWlnT25TZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuJGV2YWwoYXR0cnMuZmx1aWdPblNlbGVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmFjU2VsZWN0ZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vbignZmx1aWcuYXV0b2NvbXBsZXRlLml0ZW1SZW1vdmVkJywgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5mbHVpZ0F1dG9jb21wbGV0ZVR5cGUgPT0gJ2F1dG9jb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3RybC4kc2V0Vmlld1ZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3RybC4kc2V0Vmlld1ZhbHVlKHNjb3BlLmF1dG9jb21wbGV0ZS5pdGVtcygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZm9ybWF0dGVyKHZhbHVlKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgYWMgPSBbXTtcblxuICAgICAgICAgICAgICAgIGlmIChzY29wZS5mbHVpZ0F1dG9jb21wbGV0ZVR5cGUgPT0gJ2F1dG9jb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN0cmwuJGlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLmF1dG9jb21wbGV0ZSkgc2NvcGUuYXV0b2NvbXBsZXRlLnZhbCh2YWx1ZVtzY29wZS5kaXNwbGF5S2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIGFjLnB1c2godmFsdWVbc2NvcGUuZGlzcGxheUtleV0pO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLmF1dG9jb21wbGV0ZSkgc2NvcGUuYXV0b2NvbXBsZXRlLnJlbW92ZUFsbCgpO1xuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2godmFsdWUsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcGUuYXV0b2NvbXBsZXRlKSBzY29wZS5hdXRvY29tcGxldGUuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWMucHVzaChpdGVtW3Njb3BlLmRpc3BsYXlLZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgY3RybC4kc2V0Vmlld1ZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYWMuam9pbigpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN0cmwuJGZvcm1hdHRlcnMucHVzaChmb3JtYXR0ZXIpO1xuICAgICAgICAgICAgZWxlbWVudC5hdHRyKCdwbGFjZWhvbGRlcicsICdEaWdpdGUgcGFyYSBidXNjYXIuLi4nKVxuXG4gICAgICAgICAgICAvLyB2YXIgdGVtcGxhdGUgPSAkY29tcGlsZSgnPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPjxpIGNsYXNzPVwiZmx1aWdpY29uIGZsdWlnaWNvbi1zZWFyY2hcIj48L2k+PC9zcGFuPjwvZGl2PicpKHNjb3BlKTtcblxuICAgICAgICAgICAgLy8gZWxlbWVudC5hZnRlcih0ZW1wbGF0ZSk7XG4gICAgICAgICAgICAvLyB0ZW1wbGF0ZS5hcHBlbmQoZWxlbWVudCk7XG5cbiAgICAgICAgfVxuICAgIH07XG59XG5cbkF1dG9jb21wbGV0ZURpcmVjdGl2ZS4kaW5qZWN0ID0gWyckbG9jYWxlJywgJyR3aW5kb3cnLCAnJHRpbWVvdXQnLCAnJGNvbXBpbGUnXTtcblxubW9kdWxlLmV4cG9ydHMgPSBBdXRvY29tcGxldGVEaXJlY3RpdmU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBDaGFydERpcmVjdGl2ZSgkbG9jYWxlLCAkd2luZG93KSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgY2hhcnRUeXBlOiBcIkBcIixcbiAgICAgICAgICAgIGNoYXJ0TGFiZWxzOiBcIj1cIixcbiAgICAgICAgICAgIGNoYXJ0RGF0YXNldHM6IFwiPVwiXG4gICAgICAgIH0sXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuICAgICAgICAgICAgdmFyIGZsdWlnQ2hhcnQgPSBhdHRycy5mbHVpZ0NoYXJ0O1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRGaWxsQ29sb3IgPSBbXG4gICAgICAgICAgICAgICAgXCJyZ2JhKDI2LCAxODgsIDE1NiwwLjIpXCIsXG4gICAgICAgICAgICAgICAgXCJyZ2JhKDUyLCAxNTIsIDIxOSwwLjIpXCIsXG4gICAgICAgICAgICAgICAgXCJyZ2JhKDE1NSwgODksIDE4MiwwLjIpXCIsXG4gICAgICAgICAgICAgICAgXCJyZ2JhKDUyLCA3MywgOTQsMC4yKVwiLFxuICAgICAgICAgICAgICAgIFwicmdiYSgyMzAsIDEyNiwgMzQsMC4yKVwiLFxuICAgICAgICAgICAgICAgIFwicmdiYSgyMzEsIDc2LCA2MCwwLjIpXCIsXG4gICAgICAgICAgICAgICAgXCJyZ2JhKDE0OSwgMTY1LCAxNjYsMC4yKVwiLFxuICAgICAgICAgICAgICAgIFwicmdiYSgyNDEsIDE5NiwgMTUsMC4yKVwiLFxuICAgICAgICAgICAgICAgIFwicmdiYSgyMzYsIDI0MCwgMjQxLDAuMilcIlxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgdmFyIGRlZmF1bHRTdHJva2VDb2xvciA9IFtcbiAgICAgICAgICAgICAgICBcInJnYmEoMjYsIDE4OCwgMTU2LDEuMClcIixcbiAgICAgICAgICAgICAgICBcInJnYmEoNTIsIDE1MiwgMjE5LDEuMClcIixcbiAgICAgICAgICAgICAgICBcInJnYmEoMTU1LCA4OSwgMTgyLDEuMClcIixcbiAgICAgICAgICAgICAgICBcInJnYmEoNTIsIDczLCA5NCwxLjApXCIsXG4gICAgICAgICAgICAgICAgXCJyZ2JhKDIzMCwgMTI2LCAzNCwxLjApXCIsXG4gICAgICAgICAgICAgICAgXCJyZ2JhKDIzMSwgNzYsIDYwLDEuMClcIixcbiAgICAgICAgICAgICAgICBcInJnYmEoMTQ5LCAxNjUsIDE2NiwxLjApXCIsXG4gICAgICAgICAgICAgICAgXCJyZ2JhKDI0MSwgMTk2LCAxNSwxLjApXCIsXG4gICAgICAgICAgICAgICAgXCJyZ2JhKDIzNiwgMjQwLCAyNDEsMS4wKVwiXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIHZhciBkZWZhdWx0UG9pbnRDb2xvciA9IGRlZmF1bHRTdHJva2VDb2xvcjtcblxuICAgICAgICAgICAgdmFyIGRlZmF1bHRQb2ludFN0cm9rZUNvbG9yID0gW1xuICAgICAgICAgICAgICAgIFwiI2ZmZlwiLCBcIiNmZmZcIiwgXCIjZmZmXCIsIFwiI2ZmZlwiLCBcIiNmZmZcIiwgXCIjZmZmXCIsIFwiI2ZmZlwiLCBcIiNmZmZcIiwgXCIjZmZmXCJcbiAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgdmFyIGRlZmF1bHRQb2ludEhpZ2hsaWdodEZpbGwgPSBkZWZhdWx0UG9pbnRTdHJva2VDb2xvcjtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0UG9pbnRIaWdobGlnaHRTdHJva2UgPSBkZWZhdWx0U3Ryb2tlQ29sb3I7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChmbHVpZ0NoYXJ0ID09ICdmYWxzZScpIHJldHVybjtcblxuICAgICAgICAgICAgdmFyIGNoYXJ0O1xuXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goJ2NoYXJ0VHlwZScsIGZ1bmN0aW9uICh2YWwsIG9sZHZhbCkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUNoYXJ0KCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goJ2NoYXJ0TGFiZWxzJywgZnVuY3Rpb24gKHZhbCwgb2xkdmFsKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlQ2hhcnQoKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaCgnY2hhcnREYXRhJywgZnVuY3Rpb24gKHZhbCwgb2xkdmFsKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlQ2hhcnQoKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNyZWF0ZUNoYXJ0KClcblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlQ2hhcnQoKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNjb3BlLmNoYXJ0TGFiZWxzIHx8ICFzY29wZS5jaGFydERhdGFzZXRzIHx8ICFzY29wZS5jaGFydFR5cGUpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGlmIChjaGFydCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghY2hhcnQpIHtcblxuICAgICAgICAgICAgICAgICAgICBjaGFydCA9IEZMVUlHQy5jaGFydChlbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICBzY29wZS5jaGFydERhdGFzZXRzLmZvckVhY2goZnVuY3Rpb24gKGRhdGFzZXQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0LmZpbGxDb2xvciA9IGRhdGFzZXQuZmlsbENvbG9yIHx8IGRlZmF1bHRGaWxsQ29sb3JbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldC5zdHJva2VDb2xvciA9IGRhdGFzZXQuc3Ryb2tlQ29sb3IgfHwgZGVmYXVsdFN0cm9rZUNvbG9yW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXQucG9pbnRDb2xvciA9IGRhdGFzZXQucG9pbnRDb2xvciB8fCBkZWZhdWx0UG9pbnRDb2xvcltpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0LnBvaW50U3Ryb2tlQ29sb3IgPSBkYXRhc2V0LnBvaW50U3Ryb2tlQ29sb3IgfHwgZGVmYXVsdFBvaW50U3Ryb2tlQ29sb3JbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldC5wb2ludEhpZ2hsaWdodEZpbGwgPSBkYXRhc2V0LnBvaW50SGlnaGxpZ2h0RmlsbCB8fCBkZWZhdWx0UG9pbnRIaWdobGlnaHRGaWxsW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXQucG9pbnRIaWdobGlnaHRTdHJva2UgPSBkYXRhc2V0LnBvaW50SGlnaGxpZ2h0U3Ryb2tlIHx8IGRlZmF1bHRQb2ludEhpZ2hsaWdodFN0cm9rZVtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IHNjb3BlLmNoYXJ0TGFiZWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM6IHNjb3BlLmNoYXJ0RGF0YXNldHNcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc2NvcGUuY2hhcnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibGluZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0LmxpbmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5DaGFydERpcmVjdGl2ZS4kaW5qZWN0ID0gWyckbG9jYWxlJywgJyR3aW5kb3cnXTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGFydERpcmVjdGl2ZTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIERhdGVNYXNrRGlyZWN0aXZlKCRsb2NhbGUsICRjb21waWxlLCAkdGltZW91dCwgJHBhcnNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgcmVxdWlyZTogJz9uZ01vZGVsJyxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIHNob3dEaXNhYmxlZDogXCJAXCIsXG4gICAgICAgICAgICBkZWZhdWx0RGF0ZTogXCI9XCIsXG4gICAgICAgICAgICBtaW5EYXRlOiBcIj1cIixcbiAgICAgICAgICAgIG1heERhdGU6IFwiPVwiLFxuICAgICAgICAgICAgdXNlQ3VycmVudDogJ0AnLFxuICAgICAgICAgICAgc2hvd09uU3RhcnQ6ICdAJyxcbiAgICAgICAgICAgIGRpc2FibGVkRGF0ZXM6ICc9JyxcbiAgICAgICAgICAgIHNpZGVCeVNpZGU6ICdAJyxcbiAgICAgICAgICAgIGRhdGVQYXR0ZXJuOiBcIkBcIixcbiAgICAgICAgICAgIGRhdGVMb2NhbGU6IFwiQFwiXG5cbiAgICAgICAgfSxcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuXG4gICAgICAgICAgICBpZiAoYXR0cnMuZmx1aWdEYXRlTWFzayA9PT0gXCJmYWxzZVwiKSByZXR1cm47XG5cbiAgICAgICAgICAgIHZhciBkdCA9IEZMVUlHQy5jYWxlbmRhcihlbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgcGlja0RhdGU6IGF0dHJzLnBpY2tEYXRlLFxuICAgICAgICAgICAgICAgIHBpY2tUaW1lOiBhdHRycy5waWNrVGltZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGVzOiBzY29wZS5kaXNhYmxlZERhdGVzLFxuICAgICAgICAgICAgICAgIG1pbkRhdGU6IHNjb3BlLm1pbkRhdGUsXG4gICAgICAgICAgICAgICAgbWF4RGF0ZTogc2NvcGUubWF4RGF0ZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0RGF0ZTogc2NvcGUuZGVmYXVsdERhdGUsXG4gICAgICAgICAgICAgICAgbWludXRlU3RlcHBpbmc6IGF0dHJzLm1pbnV0ZVN0ZXBwaW5nLFxuICAgICAgICAgICAgICAgIHNpZGVCeVNpZGU6IHNjb3BlLnNpZGVCeVNpZGUsXG4gICAgICAgICAgICAgICAgdXNlQ3VycmVudDogc2NvcGUudXNlQ3VycmVudCA9PSAnZmFsc2UnID8gZmFsc2UgOiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHNjb3BlLnNob3dPblN0YXJ0ID09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgIGR0LnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNjb3BlLnNob3dEaXNhYmxlZCkge1xuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wcm9wKCdyZWFkb25seScsIHRydWUpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBkdC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNoYW5nZSgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY2hhbmdlKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGR0LmdldERhdGUoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGR0LmdldERhdGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYXR0cnMucGlja1RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjdHJsLiRzZXRWaWV3VmFsdWUoZGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnZhbChGTFVJR0MuY2FsZW5kYXIuZm9ybWF0RGF0ZShkYXRlLCBzY29wZS5kYXRlUGF0dGVybiwgc2NvcGUuZGF0ZUxvY2FsZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGZvcm1hdHRlcih2YWx1ZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGN0cmwuJGlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkdC5zZXREYXRlKG5ldyBEYXRlKE51bWJlcih2YWx1ZSkpKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBGTFVJR0MuY2FsZW5kYXIuZm9ybWF0RGF0ZShuZXcgRGF0ZShOdW1iZXIodmFsdWUpKSwgc2NvcGUuZGF0ZVBhdHRlcm4sIHNjb3BlLmRhdGVMb2NhbGUpO1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBlbGVtZW50LnZhbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdHJsLiRmb3JtYXR0ZXJzLnB1c2goZm9ybWF0dGVyKTtcblxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gJGNvbXBpbGUoJzxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiID48c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+PGkgY2xhc3M9XCJmbHVpZ2ljb24gZmx1aWdpY29uLWNhbGVuZGFyXCI+PC9pPjwvc3Bhbj48L2Rpdj4nKShzY29wZSk7XG5cbiAgICAgICAgICAgIGVsZW1lbnQuYWZ0ZXIodGVtcGxhdGUpO1xuICAgICAgICAgICAgdGVtcGxhdGUuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuRGF0ZU1hc2tEaXJlY3RpdmUuJGluamVjdCA9IFsnJGxvY2FsZScsICckY29tcGlsZScsICckdGltZW91dCcsICckcGFyc2UnXTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRlTWFza0RpcmVjdGl2ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBtID0gYW5ndWxhci5tb2R1bGUoJ2FuZ3VsYXIuZmx1aWcudXRpbHMnLCBbXG4gICAgICAgIHJlcXVpcmUoJy4uL2hlbHBlcnMnKSxcbiAgICBdKVxuXG4gICAgLmRpcmVjdGl2ZSgnZmx1aWdBdXRvY29tcGxldGUnLCByZXF1aXJlKCcuL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUnKSlcbiAgICAuZGlyZWN0aXZlKCdmbHVpZ0NoYXJ0JywgcmVxdWlyZSgnLi9jaGFydC9jaGFydCcpKVxuICAgIC5kaXJlY3RpdmUoJ2ZsdWlnRGF0ZU1hc2snLCByZXF1aXJlKCcuL2RhdGUvZGF0ZScpKVxuICAgIC5kaXJlY3RpdmUoJ2ZsdWlnSGVhZGVyJywgcmVxdWlyZSgnLi9oZWFkZXIvaGVhZGVyJykpXG4gICAgLmRpcmVjdGl2ZSgnZmx1aWdSZXF1aXJlZCcsIHJlcXVpcmUoJy4vcmVxdWlyZWQvcmVxdWlyZWQnKSlcbiAgICBcbiAgICAuZGlyZWN0aXZlKCdmbHVpZ1N3aXRjaCcsIHJlcXVpcmUoJy4vc3dpdGNoL3N3aXRjaCcpKVxuICAgIC5kaXJlY3RpdmUoJ2ZsdWlnUG9wb3ZlcicsIHJlcXVpcmUoJy4vcG9wb3Zlci9wb3BvdmVyJykpXG5cbm1vZHVsZS5leHBvcnRzID0gbS5uYW1lOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gSGVhZGVyRGlyZWN0aXZlKCRsb2NhbGUpIHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIHJlcXVpcmU6ICc/bmdNb2RlbCcsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcblxuICAgICAgICAgICAgdmFyIHRpdGxlID0gYXR0cnMuZmx1aWdIZWFkZXIgfHwgJChkb2N1bWVudCkuZmluZChcInRpdGxlXCIpLnRleHQoKTtcbiAgICAgICAgICAgIHZhciBsb2dvID0gYXR0cnMubG9nbyB8fCAnL3BvcnRhbC9yZXNvdXJjZXMvaW1hZ2VzL2xvZ28ucG5nJztcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBhdHRycy5oZWlnaHQgfHwgJzgwJztcblxuICAgICAgICAgICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cInJvd1wiPic7XG4gICAgICAgICAgICB2YXIgaCA9IFwiaDFcIjtcblxuICAgICAgICAgICAgaWYgKHRpdGxlLmxlbmd0aCA+IDU0KSB7XG4gICAgICAgICAgICAgICAgaCA9IFwiaDRcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGl0bGUubGVuZ3RoID4gNDMpIHtcbiAgICAgICAgICAgICAgICBoID0gXCJoM1wiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aXRsZS5sZW5ndGggPiAzNCkge1xuICAgICAgICAgICAgICAgIGggPSBcImgyXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPic7XG4gICAgICAgICAgICBodG1sICs9IFwiPGltZyBzcmM9J1wiICsgbG9nbyArIFwiJyBpZD0nbG9nbycgY2xhc3M9J2xvZ28nIGhlaWdodD0nXCIgKyBoZWlnaHQgKyBcIicgYWx0PSdMb2dvJyB0aXRsZT0nTG9nbycgYm9yZGVyPScwJyAvPlwiO1xuICAgICAgICAgICAgaHRtbCArPSAnPC9kaXY+JztcbiAgICAgICAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPic7XG4gICAgICAgICAgICBodG1sICs9ICc8JyArIGggKyAnIGNsYXNzPVwidGV4dC1yaWdodFwiPicgKyB0aXRsZSArICc8LycgKyBoICsgJz4nO1xuICAgICAgICAgICAgaHRtbCArPSAnPC9kaXY+JztcbiAgICAgICAgICAgIGh0bWwgKz0gJzwvZGl2Pic7XG5cbiAgICAgICAgICAgIGVsZW1lbnQucHJlcGVuZChodG1sKTtcblxuICAgICAgICB9XG4gICAgfTtcbn1cblxuSGVhZGVyRGlyZWN0aXZlLiRpbmplY3QgPSBbJyRsb2NhbGUnXTtcblxubW9kdWxlLmV4cG9ydHMgPSBIZWFkZXJEaXJlY3RpdmU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBQb3BvdmVyRGlyZWN0aXZlKCRjb21waWxlKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHRyaWdnZXIgPSBhdHRycy50cmlnZ2VyIHx8ICdob3Zlcic7XG4gICAgICAgICAgICB2YXIgcGxhY2VtZW50ID0gYXR0cnMucGxhY2VtZW50IHx8ICdhdXRvJztcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gYXR0cnMuZmx1aWdDb250ZW50IHx8IGF0dHJzLmRhdGFDb250ZW50IHx8ICcnO1xuXG4gICAgICAgICAgICBGTFVJR0MucG9wb3ZlcihlbGVtZW50LCB7IHRyaWdnZXI6IHRyaWdnZXIsIHBsYWNlbWVudDogcGxhY2VtZW50LCBjb250ZW50OiBjb250ZW50IH0pO1xuXG4gICAgICAgIH1cbiAgICB9XG59XG5cblBvcG92ZXJEaXJlY3RpdmUuJGluamVjdCA9IFsnJGNvbXBpbGUnXTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb3BvdmVyRGlyZWN0aXZlOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gUmVxdWlyZWREaXJlY3RpdmUoJGNvbXBpbGUpIHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIHJlcXVpcmU6ICc/bmdNb2RlbCcsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuICAgICAgICAgICAgaWYgKCFjdHJsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignbmdNb2RlbCBuw6NvIGluZm9ybWFkbyBwYXJhIG8gZWxlbWVudG86JywgZWxlbWVudFswXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWN0cmwgfHwgIWF0dHJzLmZsdWlnUmVxdWlyZWQpIHJldHVybjtcbiAgICAgICAgICAgIGF0dHJzLnJlcXVpcmVkID0gdHJ1ZTsgLy8gZm9yY2UgdHJ1dGh5IGluIGNhc2Ugd2UgYXJlIG9uIG5vbiBpbnB1dCBlbGVtZW50XG5cbiAgICAgICAgICAgIHZhciB2YWxpZGF0b3IgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChhdHRycy5yZXF1aXJlZCAmJiAodmFsdWUgPT0gJycgfHwgdmFsdWUgPT09IGZhbHNlKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eSgncmVxdWlyZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eSgncmVxdWlyZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGN0cmwuJGZvcm1hdHRlcnMucHVzaCh2YWxpZGF0b3IpO1xuICAgICAgICAgICAgY3RybC4kcGFyc2Vycy51bnNoaWZ0KHZhbGlkYXRvcik7XG5cbiAgICAgICAgICAgIGF0dHJzLiRvYnNlcnZlKCdmbHVpZ1JlcXVpcmVkJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSAkKFwibGFiZWxbZm9yPSdcIiArIGVsZW1lbnQuYXR0cignbmFtZScpICsgXCInXVwiKTtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuYWRkQ2xhc3MoXCJyZXF1aXJlZFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5yZW1vdmVDbGFzcyhcInJlcXVpcmVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IoY3RybC4kdmlld1ZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5SZXF1aXJlZERpcmVjdGl2ZS4kaW5qZWN0ID0gWyckY29tcGlsZSddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVpcmVkRGlyZWN0aXZlOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gU3dpdGNoRGlyZWN0aXZlKCRjb21waWxlLCAkdGltZW91dCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgcmVxdWlyZTogJz9uZ01vZGVsJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuXG4gICAgICAgICAgICBpZiAoIWN0cmwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCduZ01vZGVsIG7Do28gaW5mb3JtYWRvIHBhcmEgbyBlbGVtZW50bzonLCBlbGVtZW50WzBdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9ICRjb21waWxlKCc8ZGl2IHN0eWxlPVwid2lkdGg6IDExMHB4XCI+PC9kaXY+Jykoc2NvcGUpO1xuXG4gICAgICAgICAgICBlbGVtZW50LmFmdGVyKHRlbXBsYXRlKTtcbiAgICAgICAgICAgIHRlbXBsYXRlLmFwcGVuZChlbGVtZW50KTtcblxuICAgICAgICAgICAgdGVtcGxhdGUuaGlkZSgpO1xuXG4gICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBGTFVJR0Muc3dpdGNoZXIuaW5pdChlbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogY3RybC4kbW9kZWxWYWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN0cmwuJG1vZGVsVmFsdWUgPT0gdHJ1ZSB8fCBjdHJsLiRtb2RlbFZhbHVlID09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzUmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuYXR0cigncmVhZG9ubHknKSA9PSAncmVhZG9ubHknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1JlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZMVUlHQy5zd2l0Y2hlci5pc1JlYWRPbmx5KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5hdHRyKCdkaXNhYmxlZCcpID09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgRkxVSUdDLnN3aXRjaGVyLmVuYWJsZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkdGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBGTFVJR0Muc3dpdGNoZXIuc2V0VHJ1ZShlbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgRkxVSUdDLnN3aXRjaGVyLmlzUmVhZE9ubHkoZWxlbWVudCwgaXNSZWFkT25seSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRkxVSUdDLnN3aXRjaGVyLmRpc2FibGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBGTFVJR0Muc3dpdGNoZXIub25DaGFuZ2UoZWxlbWVudCwgZnVuY3Rpb24gKGV2ZW50LCBzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHJsLiRzZXRWaWV3VmFsdWUoc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBjdHJsLiRyZW5kZXIoKTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblN3aXRjaERpcmVjdGl2ZS4kaW5qZWN0ID0gWyckY29tcGlsZScsICckdGltZW91dCddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN3aXRjaERpcmVjdGl2ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBTdHJpbmdNYXNrID0gcmVxdWlyZSgnc3RyaW5nLW1hc2snKTtcbnZhciBtYXNrRmFjdG9yeSA9IHJlcXVpcmUoJ21hc2stZmFjdG9yeScpO1xuXG52YXIgY2NTaXplID0gMTY7XG5cbnZhciBjY01hc2sgPSBuZXcgU3RyaW5nTWFzaygnMDAwMCAwMDAwIDAwMDAgMDAwMCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hc2tGYWN0b3J5KHtcblx0Y2xlYXJWYWx1ZTogZnVuY3Rpb24ocmF3VmFsdWUpIHtcblx0XHRyZXR1cm4gcmF3VmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpLnNsaWNlKDAsIGNjU2l6ZSk7XG5cdH0sXG5cdGZvcm1hdDogZnVuY3Rpb24oY2xlYW5WYWx1ZSkge1xuXHRcdHZhciBmb3JtYXRlZFZhbHVlO1xuXG5cdFx0Zm9ybWF0ZWRWYWx1ZSA9IGNjTWFzay5hcHBseShjbGVhblZhbHVlKSB8fCAnJztcblxuXHRcdHJldHVybiBmb3JtYXRlZFZhbHVlLnRyaW0oKS5yZXBsYWNlKC9bXjAtOV0kLywgJycpO1xuXHR9LFxuXHR2YWxpZGF0aW9uczoge1xuXHRcdGNyZWRpdENhcmQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHR2YXIgdmFsdWVMZW5ndGggPSB2YWx1ZSAmJiB2YWx1ZS50b1N0cmluZygpLmxlbmd0aDtcblx0XHRcdHJldHVybiB2YWx1ZUxlbmd0aCA9PT0gY2NTaXplO1xuXHRcdH1cblx0fVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBtZXNzYWdlcyA9IHJlcXVpcmUoJy4vbWVzc2FnZXMnKTtcblxuZnVuY3Rpb24gRXJyb3JEaXJlY3RpdmUoJGNvbXBpbGUsICR0aW1lb3V0KSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICByZXF1aXJlOiAnP25nTW9kZWwnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG4gICAgICAgICAgICBpZiAoIWN0cmwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCduZ01vZGVsIG7Do28gaW5mb3JtYWRvIHBhcmEgbyBlbGVtZW50bzonLCBlbGVtZW50WzBdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB3YXRjaEF0dHIgPSBhdHRycy5mbHVpZ0Vycm9yO1xuXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2hDb2xsZWN0aW9uKHdhdGNoQXR0ciwgZnVuY3Rpb24gKHZhbHVlcykge1xuXG4gICAgICAgICAgICAgICAgdmFyIGVycm9yID0gXCJcIjtcblxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2YWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZXNba2V5XSkgZXJyb3IgKz0gbWVzc2FnZXNba2V5XSArIFwiPGJyPlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50LnBvcG92ZXIoJ2Rlc3Ryb3knKTtcblxuICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9ICQoXCJsYWJlbFtmb3I9J1wiICsgZWxlbWVudC5hdHRyKCduYW1lJykgKyBcIiddXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICE9ICcnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGFiZWwucGFyZW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImhhcy1lcnJvclwiKTtcblxuICAgICAgICAgICAgICAgICAgICBGTFVJR0MucG9wb3ZlcihlbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnZm9jdXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGVycm9yXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvL2VsZW1lbnQucG9wb3Zlcignc2hvdycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJoYXMtZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuRXJyb3JEaXJlY3RpdmUuJGluamVjdCA9IFsnJGNvbXBpbGUnLCAnJHRpbWVvdXQnXTtcblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvckRpcmVjdGl2ZTsiLCJ2YXIgbWVzc2FnZXMgPSB7XG4gICAgXCJyZXF1aXJlZFwiOiBcIk8gY2FtcG8gw6kgb2JyaWdhdMOzcmlvXCIsXG4gICAgXCJtaW5sZW5ndGhcIjogXCJPIHRhbWFuaG8gZG8gY2FtcG8gw6kgaW5mZXJpb3IgYW8gbcOtbmltbyBwZXJtaXRpZG9cIixcbiAgICBcIm1heGxlbmd0aFwiOiBcIk8gdGFtYW5obyBkbyBjYW1wbyDDqSBzdXBlcmlvciBhbyBtw6F4aW1vIHBlcm1pdGlkb1wiLFxuICAgIFwibWluXCI6IFwiTyB2YWxvciBpbmZvcm1hZG8gw6kgaW5mZXJpb3IgYW8gbcOtbmltb1wiLFxuICAgIFwibWF4XCI6IFwiTyB2YWxvciBpbmZvcm1hZG8gw6kgc3VwZXJpb3IgYW8gbcOheGltb1wiLFxuICAgIFwiY3BmXCI6IFwiTyBDUEYgaW5mb3JtYWRvIMOpIGludsOhbGlkb1wiLFxuICAgIFwidGltZVwiOiBcIk8gaG9yw6FyaW8gaW5mb3JtYWRvIMOpIGludsOhbGlkb1wiLFxuICAgIFwiY25walwiOiBcIk8gQ05QSiBpbmZvcm1hZG8gw6kgaW52w6FsaWRvXCIsXG4gICAgXCJwaG9uZU51bWJlclwiOiBcIk8gdGVsZWZvbmUgaW5mb3JtYWRvIMOpIGludsOhbGlkb1wiLFxuICAgIFwiY2VwXCI6IFwiTyBDRVAgaW5mb3JtYWRvIMOpIGludsOhbGlkb1wiLFxuICAgIFwiaWVcIjogXCJJbnNjcmnDp8OjbyBlc3RhZHVhbCBpbnbDoWxpZGFcIixcbiAgICBcImNhclBsYXRlXCI6IFwiQSBwbGFjYSBpbmZvcm1hZGEgw6kgaW52w6FsaWRhXCIsXG4gICAgXCJjcmVkaXRDYXJkXCI6IFwiTyBuw7ptZXJvIGRlIGNhcnTDo28gZGUgY3LDqWRpdG8gaW5mb3JtYWRvIMOpIGludsOhbGlkb1wiLFxuICAgIFwiYm9sZXRvQmFuY2FyaW9cIjogXCJPIG7Dum1lcm8gZG8gYm9sZXRvIGJhbmPDoXJpbyBpbmZvcm1hZG8gw6kgaW52w6FsaWRvXCIsXG4gICAgXCJuZmVBY2Nlc3NLZXlcIjogXCJDaGF2ZSBkZSBhY2Vzc28gaW52w6FsaWRhXCJcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lc3NhZ2VzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG0gPSBhbmd1bGFyLm1vZHVsZSgnZmx1aWcuZ2xvYmFsLm1hc2tzJywgW1xuICAgICAgICByZXF1aXJlKCcuLi9oZWxwZXJzJyksXG4gICAgXSlcbiAgICAuZGlyZWN0aXZlKCdmbHVpZ01vbmV5TWFzaycsIHJlcXVpcmUoJy4vbW9uZXkvbW9uZXknKSlcbiAgICAuZGlyZWN0aXZlKCdmbHVpZ051bWJlck1hc2snLCByZXF1aXJlKCcuL251bWJlci9udW1iZXInKSlcbiAgICAuZGlyZWN0aXZlKCdmbHVpZ1BlcmNlbnRhZ2VNYXNrJywgcmVxdWlyZSgnLi9wZXJjZW50YWdlL3BlcmNlbnRhZ2UnKSlcbiAgICAuZGlyZWN0aXZlKCdmbHVpZ1NjaWVudGlmaWNOb3RhdGlvbk1hc2snLCByZXF1aXJlKCcuL3NjaWVudGlmaWMtbm90YXRpb24vc2NpZW50aWZpYy1ub3RhdGlvbicpKVxuICAgIC5kaXJlY3RpdmUoJ2ZsdWlnVGltZU1hc2snLCByZXF1aXJlKCcuL3RpbWUvdGltZScpKVxuICAgIC5kaXJlY3RpdmUoJ2ZsdWlnQ3JlZGl0Q2FyZCcsIHJlcXVpcmUoJy4vY3JlZGl0LWNhcmQvY3JlZGl0LWNhcmQnKSlcbiAgICAuZGlyZWN0aXZlKCdmbHVpZ0Vycm9yJywgcmVxdWlyZSgnLi9lcnJvci9lcnJvcicpKVxuICAgIC5kaXJlY3RpdmUoJ25nTmFtZScsIHJlcXVpcmUoJy4vbmFtZS9uYW1lJykpXG5cbiAgICAuZmlsdGVyKCdwZXJjZW50YWdlJywgcmVxdWlyZSgnLi9wZXJjZW50YWdlL3BlcmNlbnRhZ2UtZmlsdGVyJykpXG4gICAgLmZpbHRlcigndGltZScsIHJlcXVpcmUoJy4vdGltZS90aW1lLWZpbHRlcicpKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gbS5uYW1lOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFN0cmluZ01hc2sgPSByZXF1aXJlKCdzdHJpbmctbWFzaycpO1xudmFyIHZhbGlkYXRvcnMgPSByZXF1aXJlKCd2YWxpZGF0b3JzJyk7XG5cbmZ1bmN0aW9uIE1vbmV5TWFza0RpcmVjdGl2ZSgkbG9jYWxlLCAkcGFyc2UsICRjb21waWxlLCBQcmVGb3JtYXR0ZXJzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcblxuICAgICAgICAgICAgaWYgKGF0dHJzLmZsdWlnTW9uZXlNYXNrID09PSBcImZhbHNlXCIpIHJldHVybjtcblxuICAgICAgICAgICAgdmFyIGRlY2ltYWxEZWxpbWl0ZXIgPSAkbG9jYWxlLk5VTUJFUl9GT1JNQVRTLkRFQ0lNQUxfU0VQLFxuICAgICAgICAgICAgICAgIHRob3VzYW5kc0RlbGltaXRlciA9ICRsb2NhbGUuTlVNQkVSX0ZPUk1BVFMuR1JPVVBfU0VQLFxuICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltID0gJGxvY2FsZS5OVU1CRVJfRk9STUFUUy5DVVJSRU5DWV9TWU0sXG4gICAgICAgICAgICAgICAgc3ltYm9sU2VwYXJhdGlvbiA9ICcgJyxcbiAgICAgICAgICAgICAgICBkZWNpbWFscyA9ICRwYXJzZShhdHRycy5mbHVpZ01vbmV5TWFzaykoc2NvcGUpO1xuXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG1hc2tGYWN0b3J5KGRlY2ltYWxzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlY2ltYWxzUGF0dGVybiA9IGRlY2ltYWxzID4gMCA/IGRlY2ltYWxEZWxpbWl0ZXIgKyBuZXcgQXJyYXkoZGVjaW1hbHMgKyAxKS5qb2luKCcwJykgOiAnJztcbiAgICAgICAgICAgICAgICB2YXIgbWFza1BhdHRlcm4gPSBzeW1ib2xTZXBhcmF0aW9uICsgJyMnICsgdGhvdXNhbmRzRGVsaW1pdGVyICsgJyMjMCcgKyBkZWNpbWFsc1BhdHRlcm47XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdNYXNrKG1hc2tQYXR0ZXJuLCB7IHJldmVyc2U6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChhdHRycy5mbHVpZ0hpZGVTcGFjZSkgJiYgYXR0cnMuZmx1aWdIaWRlU3BhY2UgIT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgIHN5bWJvbFNlcGFyYXRpb24gPSAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLmN1cnJlbmN5U3ltYm9sKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltID0gYXR0cnMuY3VycmVuY3lTeW1ib2w7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJzLmN1cnJlbmN5U3ltYm9sLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzeW1ib2xTZXBhcmF0aW9uID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNOYU4oZGVjaW1hbHMpKSB7XG4gICAgICAgICAgICAgICAgZGVjaW1hbHMgPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVjaW1hbHMgPSBwYXJzZUludChkZWNpbWFscyk7XG4gICAgICAgICAgICB2YXIgbW9uZXlNYXNrID0gbWFza0ZhY3RvcnkoZGVjaW1hbHMpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBmb3JtYXR0ZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3RybC4kaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcHJlZml4ID0gKGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLmZsdWlnTmVnYXRpdmVOdW1iZXIpICYmIHZhbHVlIDwgMCkgPyAnLScgOiAnJztcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVUb0Zvcm1hdCA9IFByZUZvcm1hdHRlcnMucHJlcGFyZU51bWJlclRvRm9ybWF0dGVyKHZhbHVlLCBkZWNpbWFscyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArIG1vbmV5TWFzay5hcHBseSh2YWx1ZVRvRm9ybWF0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcGFyc2VyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGN0cmwuJGlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgYWN0dWFsTnVtYmVyID0gdmFsdWUucmVwbGFjZSgvW15cXGRdKy9nLCAnJyk7XG4gICAgICAgICAgICAgICAgYWN0dWFsTnVtYmVyID0gYWN0dWFsTnVtYmVyLnJlcGxhY2UoL15bMF0rKFsxLTldKS8sICckMScpO1xuICAgICAgICAgICAgICAgIGFjdHVhbE51bWJlciA9IGFjdHVhbE51bWJlciB8fCAnMCc7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1hdGVkVmFsdWUgPSBtb25leU1hc2suYXBwbHkoYWN0dWFsTnVtYmVyKTtcblxuICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChhdHRycy5mbHVpZ05lZ2F0aXZlTnVtYmVyKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNOZWdhdGl2ZSA9ICh2YWx1ZVswXSA9PT0gJy0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRzVG9JbnZlcnRTaWduID0gKHZhbHVlLnNsaWNlKC0xKSA9PT0gJy0nKTtcblxuICAgICAgICAgICAgICAgICAgICAvL29ubHkgYXBwbHkgdGhlIG1pbnVzIHNpZ24gaWYgaXQgaXMgbmVnYXRpdmUgb3IoZXhjbHVzaXZlKVxuICAgICAgICAgICAgICAgICAgICAvL25lZWRzIHRvIGJlIG5lZ2F0aXZlIGFuZCB0aGUgbnVtYmVyIGlzIGRpZmZlcmVudCBmcm9tIHplcm9cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5lZWRzVG9JbnZlcnRTaWduIF4gaXNOZWdhdGl2ZSAmJiAhIWFjdHVhbE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsTnVtYmVyICo9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0ZWRWYWx1ZSA9ICctJyArIGZvcm1hdGVkVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IGZvcm1hdGVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3RybC4kc2V0Vmlld1ZhbHVlKGZvcm1hdGVkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjdHJsLiRyZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0ZWRWYWx1ZSA/IHBhcnNlSW50KGZvcm1hdGVkVmFsdWUucmVwbGFjZSgvW15cXGRcXC1dKy9nLCAnJykpIC8gTWF0aC5wb3coMTAsIGRlY2ltYWxzKSA6IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN0cmwuJGZvcm1hdHRlcnMucHVzaChmb3JtYXR0ZXIpO1xuICAgICAgICAgICAgY3RybC4kcGFyc2Vycy5wdXNoKHBhcnNlcik7XG5cbiAgICAgICAgICAgIGlmIChhdHRycy5mbHVpZ01vbmV5TWFzaykge1xuICAgICAgICAgICAgICAgIHNjb3BlLiR3YXRjaChhdHRycy5mbHVpZ01vbmV5TWFzaywgZnVuY3Rpb24oX2RlY2ltYWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzID0gaXNOYU4oX2RlY2ltYWxzKSA/IDIgOiBfZGVjaW1hbHM7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzID0gcGFyc2VJbnQoZGVjaW1hbHMpO1xuICAgICAgICAgICAgICAgICAgICBtb25leU1hc2sgPSBtYXNrRmFjdG9yeShkZWNpbWFscyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VyKGN0cmwuJHZpZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICBpZiAoYXR0cnMuZmx1aWdIaWRlR3JvdXBTZXApIHtcbiAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMuZmx1aWdIaWRlR3JvdXBTZXAsIGZ1bmN0aW9uKF9oaWRlR3JvdXBTZXApIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChfaGlkZUdyb3VwU2VwID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kc0RlbGltaXRlciA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzRGVsaW1pdGVyID0gJGxvY2FsZS5OVU1CRVJfRk9STUFUUy5HUk9VUF9TRVA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbW9uZXlNYXNrID0gbWFza0ZhY3RvcnkoZGVjaW1hbHMpO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZXIoY3RybC4kdmlld1ZhbHVlKTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXR0cnMubWluKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1pblZhbDtcblxuICAgICAgICAgICAgICAgIGN0cmwuJHZhbGlkYXRvcnMubWluID0gZnVuY3Rpb24obW9kZWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9ycy5taW5OdW1iZXIoY3RybCwgbW9kZWxWYWx1ZSwgbWluVmFsKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzLm1pbiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluVmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGN0cmwuJHZhbGlkYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhdHRycy5tYXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF4VmFsO1xuXG4gICAgICAgICAgICAgICAgY3RybC4kdmFsaWRhdG9ycy5tYXggPSBmdW5jdGlvbihtb2RlbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3JzLm1heE51bWJlcihjdHJsLCBtb2RlbFZhbHVlLCBtYXhWYWwpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMubWF4LCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtYXhWYWwgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY3RybC4kdmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gJGNvbXBpbGUoJzxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiID48c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+PGI+JyArIGN1cnJlbmN5U3ltICsgJzwvYj48L3NwYW4+PC9kaXY+Jykoc2NvcGUpO1xuXG4gICAgICAgICAgICBlbGVtZW50LmFmdGVyKHRlbXBsYXRlKTtcbiAgICAgICAgICAgIHRlbXBsYXRlLmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5Nb25leU1hc2tEaXJlY3RpdmUuJGluamVjdCA9IFsnJGxvY2FsZScsICckcGFyc2UnLCAnJGNvbXBpbGUnLCAnUHJlRm9ybWF0dGVycyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vbmV5TWFza0RpcmVjdGl2ZTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIE5nTmFtZURpcmVjdGl2ZSgkY29tcGlsZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgICAgICAgIC8vIGVsZW1lbnQuYXR0cignbmFtZScsIGF0dHJzLm5nTmFtZSk7XG4gICAgICAgICAgICBhdHRycy4kc2V0KFwibmFtZVwiLCBhdHRycy5uZ05hbWUpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuTmdOYW1lRGlyZWN0aXZlLiRpbmplY3QgPSBbJyRjb21waWxlJ107XG5cbm1vZHVsZS5leHBvcnRzID0gTmdOYW1lRGlyZWN0aXZlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHZhbGlkYXRvcnMgPSByZXF1aXJlKCd2YWxpZGF0b3JzJyk7XG5cbmZ1bmN0aW9uIE51bWJlck1hc2tEaXJlY3RpdmUoJGxvY2FsZSwgJHBhcnNlLCBQcmVGb3JtYXR0ZXJzLCBOdW1iZXJNYXNrcykge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnQScsXG5cdFx0cmVxdWlyZTogJ25nTW9kZWwnLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcblx0XHRcdHZhciBkZWNpbWFsRGVsaW1pdGVyID0gJGxvY2FsZS5OVU1CRVJfRk9STUFUUy5ERUNJTUFMX1NFUCxcblx0XHRcdFx0dGhvdXNhbmRzRGVsaW1pdGVyID0gJGxvY2FsZS5OVU1CRVJfRk9STUFUUy5HUk9VUF9TRVAsXG5cdFx0XHRcdGRlY2ltYWxzID0gJHBhcnNlKGF0dHJzLmZsdWlnTnVtYmVyTWFzaykoc2NvcGUpO1xuXG5cdFx0XHRpZiAoYW5ndWxhci5pc0RlZmluZWQoYXR0cnMuZmx1aWdIaWRlR3JvdXBTZXApKSB7XG5cdFx0XHRcdHRob3VzYW5kc0RlbGltaXRlciA9ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNOYU4oZGVjaW1hbHMpKSB7XG5cdFx0XHRcdGRlY2ltYWxzID0gMjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHZpZXdNYXNrID0gTnVtYmVyTWFza3Mudmlld01hc2soZGVjaW1hbHMsIGRlY2ltYWxEZWxpbWl0ZXIsIHRob3VzYW5kc0RlbGltaXRlciksXG5cdFx0XHRcdG1vZGVsTWFzayA9IE51bWJlck1hc2tzLm1vZGVsTWFzayhkZWNpbWFscyk7XG5cblx0XHRcdGZ1bmN0aW9uIHBhcnNlcih2YWx1ZSkge1xuXHRcdFx0XHRpZiAoY3RybC4kaXNFbXB0eSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciB2YWx1ZVRvRm9ybWF0ID0gUHJlRm9ybWF0dGVycy5jbGVhckRlbGltaXRlcnNBbmRMZWFkaW5nWmVyb3ModmFsdWUpIHx8ICcwJztcblx0XHRcdFx0dmFyIGZvcm1hdGVkVmFsdWUgPSB2aWV3TWFzay5hcHBseSh2YWx1ZVRvRm9ybWF0KTtcblx0XHRcdFx0dmFyIGFjdHVhbE51bWJlciA9IHBhcnNlRmxvYXQobW9kZWxNYXNrLmFwcGx5KHZhbHVlVG9Gb3JtYXQpKTtcblxuXHRcdFx0XHRpZiAoYW5ndWxhci5pc0RlZmluZWQoYXR0cnMuZmx1aWdOZWdhdGl2ZU51bWJlcikpIHtcblx0XHRcdFx0XHR2YXIgaXNOZWdhdGl2ZSA9ICh2YWx1ZVswXSA9PT0gJy0nKSxcblx0XHRcdFx0XHRcdG5lZWRzVG9JbnZlcnRTaWduID0gKHZhbHVlLnNsaWNlKC0xKSA9PT0gJy0nKTtcblxuXHRcdFx0XHRcdC8vb25seSBhcHBseSB0aGUgbWludXMgc2lnbiBpZiBpdCBpcyBuZWdhdGl2ZSBvcihleGNsdXNpdmUpIG9yIHRoZSBmaXJzdCBjaGFyYWN0ZXJcblx0XHRcdFx0XHQvL25lZWRzIHRvIGJlIG5lZ2F0aXZlIGFuZCB0aGUgbnVtYmVyIGlzIGRpZmZlcmVudCBmcm9tIHplcm9cblx0XHRcdFx0XHRpZiAoKG5lZWRzVG9JbnZlcnRTaWduIF4gaXNOZWdhdGl2ZSkgfHwgdmFsdWUgPT09ICctJykge1xuXHRcdFx0XHRcdFx0YWN0dWFsTnVtYmVyICo9IC0xO1xuXHRcdFx0XHRcdFx0Zm9ybWF0ZWRWYWx1ZSA9ICctJyArICgoYWN0dWFsTnVtYmVyICE9PSAwKSA/IGZvcm1hdGVkVmFsdWUgOiAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGN0cmwuJHZpZXdWYWx1ZSAhPT0gZm9ybWF0ZWRWYWx1ZSkge1xuXHRcdFx0XHRcdGN0cmwuJHNldFZpZXdWYWx1ZShmb3JtYXRlZFZhbHVlKTtcblx0XHRcdFx0XHRjdHJsLiRyZW5kZXIoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBhY3R1YWxOdW1iZXI7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGZvcm1hdHRlcih2YWx1ZSkge1xuXHRcdFx0XHRpZiAoY3RybC4kaXNFbXB0eSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgcHJlZml4ID0gKGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLmZsdWlnTmVnYXRpdmVOdW1iZXIpICYmIHZhbHVlIDwgMCkgPyAnLScgOiAnJztcblx0XHRcdFx0dmFyIHZhbHVlVG9Gb3JtYXQgPSBQcmVGb3JtYXR0ZXJzLnByZXBhcmVOdW1iZXJUb0Zvcm1hdHRlcih2YWx1ZSwgZGVjaW1hbHMpO1xuXHRcdFx0XHRyZXR1cm4gcHJlZml4ICsgdmlld01hc2suYXBwbHkodmFsdWVUb0Zvcm1hdCk7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGNsZWFyVmlld1ZhbHVlSWZNaW51c1NpZ24oKSB7XG5cdFx0XHRcdGlmIChjdHJsLiR2aWV3VmFsdWUgPT09ICctJykge1xuXHRcdFx0XHRcdGN0cmwuJHNldFZpZXdWYWx1ZSgnJyk7XG5cdFx0XHRcdFx0Y3RybC4kcmVuZGVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZWxlbWVudC5vbignYmx1cicsIGNsZWFyVmlld1ZhbHVlSWZNaW51c1NpZ24pO1xuXG5cdFx0XHRjdHJsLiRmb3JtYXR0ZXJzLnB1c2goZm9ybWF0dGVyKTtcblx0XHRcdGN0cmwuJHBhcnNlcnMucHVzaChwYXJzZXIpO1xuXG5cdFx0XHRpZiAoYXR0cnMuZmx1aWdOdW1iZXJNYXNrKSB7XG5cdFx0XHRcdHNjb3BlLiR3YXRjaChhdHRycy5mbHVpZ051bWJlck1hc2ssIGZ1bmN0aW9uIChfZGVjaW1hbHMpIHtcblx0XHRcdFx0XHRkZWNpbWFscyA9IGlzTmFOKF9kZWNpbWFscykgPyAyIDogX2RlY2ltYWxzO1xuXHRcdFx0XHRcdHZpZXdNYXNrID0gTnVtYmVyTWFza3Mudmlld01hc2soZGVjaW1hbHMsIGRlY2ltYWxEZWxpbWl0ZXIsIHRob3VzYW5kc0RlbGltaXRlcik7XG5cdFx0XHRcdFx0bW9kZWxNYXNrID0gTnVtYmVyTWFza3MubW9kZWxNYXNrKGRlY2ltYWxzKTtcblxuXHRcdFx0XHRcdHBhcnNlcihjdHJsLiR2aWV3VmFsdWUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGF0dHJzLm1pbikge1xuXHRcdFx0XHR2YXIgbWluVmFsO1xuXG5cdFx0XHRcdGN0cmwuJHZhbGlkYXRvcnMubWluID0gZnVuY3Rpb24gKG1vZGVsVmFsdWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdmFsaWRhdG9ycy5taW5OdW1iZXIoY3RybCwgbW9kZWxWYWx1ZSwgbWluVmFsKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRzY29wZS4kd2F0Y2goYXR0cnMubWluLCBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHRtaW5WYWwgPSB2YWx1ZTtcblx0XHRcdFx0XHRjdHJsLiR2YWxpZGF0ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGF0dHJzLm1heCkge1xuXHRcdFx0XHR2YXIgbWF4VmFsO1xuXG5cdFx0XHRcdGN0cmwuJHZhbGlkYXRvcnMubWF4ID0gZnVuY3Rpb24gKG1vZGVsVmFsdWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdmFsaWRhdG9ycy5tYXhOdW1iZXIoY3RybCwgbW9kZWxWYWx1ZSwgbWF4VmFsKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRzY29wZS4kd2F0Y2goYXR0cnMubWF4LCBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHRtYXhWYWwgPSB2YWx1ZTtcblx0XHRcdFx0XHRjdHJsLiR2YWxpZGF0ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5OdW1iZXJNYXNrRGlyZWN0aXZlLiRpbmplY3QgPSBbJyRsb2NhbGUnLCAnJHBhcnNlJywgJ1ByZUZvcm1hdHRlcnMnLCAnTnVtYmVyTWFza3MnXTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXJNYXNrRGlyZWN0aXZlOyIsIid1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBQZXJjZW50YWdlRmlsdGVyKCRmaWx0ZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0LCBkZWNpbWFscykge1xuICAgICAgICByZXR1cm4gJGZpbHRlcignbnVtYmVyJykoaW5wdXQgKiAxMDAsIGRlY2ltYWxzKSArICclJztcbiAgICB9O1xufVxuUGVyY2VudGFnZUZpbHRlci4kaW5qZWN0ID0gWyckZmlsdGVyJ107XG5cbm1vZHVsZS5leHBvcnRzID0gUGVyY2VudGFnZUZpbHRlcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB2YWxpZGF0b3JzID0gcmVxdWlyZSgndmFsaWRhdG9ycycpO1xuXG5mdW5jdGlvbiBQZXJjZW50YWdlTWFza0RpcmVjdGl2ZSgkbG9jYWxlLCAkcGFyc2UsIFByZUZvcm1hdHRlcnMsIE51bWJlck1hc2tzLCAkZmlsdGVyKSB7XG4gICAgZnVuY3Rpb24gcHJlcGFyZVBlcmNlbnRhZ2VUb0Zvcm1hdHRlcih2YWx1ZSwgZGVjaW1hbHMsIG1vZGVsTXVsdGlwbGllcikge1xuICAgICAgICAvLyByZXR1cm4gJGZpbHRlcignbnVtYmVyJykodmFsdWUgKiBtb2RlbE11bHRpcGxpZXIsIGRlY2ltYWxzKVxuICAgICAgICByZXR1cm4gUHJlRm9ybWF0dGVycy5jbGVhckRlbGltaXRlcnNBbmRMZWFkaW5nWmVyb3MoKHBhcnNlRmxvYXQodmFsdWUpICogbW9kZWxNdWx0aXBsaWVyKS50b0ZpeGVkKGRlY2ltYWxzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0EnLFxuXHRcdHJlcXVpcmU6ICduZ01vZGVsJyxcblx0XHRsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcblx0XHRcdHZhciBkZWNpbWFsRGVsaW1pdGVyID0gJGxvY2FsZS5OVU1CRVJfRk9STUFUUy5ERUNJTUFMX1NFUDtcblxuXHRcdFx0dmFyIGJhY2tzcGFjZVByZXNzZWQgPSBmYWxzZTtcblx0XHRcdGVsZW1lbnQuYmluZCgna2V5ZG93biBrZXlwcmVzcycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdGJhY2tzcGFjZVByZXNzZWQgPSBldmVudC53aGljaCA9PT0gODtcblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgdGhvdXNhbmRzRGVsaW1pdGVyID0gJGxvY2FsZS5OVU1CRVJfRk9STUFUUy5HUk9VUF9TRVA7XG5cdFx0XHRpZiAoYW5ndWxhci5pc0RlZmluZWQoYXR0cnMuZmx1aWdIaWRlR3JvdXBTZXApKSB7XG5cdFx0XHRcdHRob3VzYW5kc0RlbGltaXRlciA9ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcGVyY2VudGFnZVN5bWJvbCA9ICcgJSc7XG5cdFx0XHRpZiAoYW5ndWxhci5pc0RlZmluZWQoYXR0cnMuZmx1aWdIaWRlUGVyY2VudGFnZVNpZ24pKSB7XG5cdFx0XHRcdHBlcmNlbnRhZ2VTeW1ib2wgPSAnJztcblx0XHRcdH0gZWxzZSBpZiAoYW5ndWxhci5pc0RlZmluZWQoYXR0cnMuZmx1aWdIaWRlU3BhY2UpKSB7XG5cdFx0XHRcdHBlcmNlbnRhZ2VTeW1ib2wgPSAnJSc7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBkZWNpbWFscyA9IHBhcnNlSW50KGF0dHJzLmZsdWlnUGVyY2VudGFnZU1hc2spO1xuXHRcdFx0aWYgKGlzTmFOKGRlY2ltYWxzKSkge1xuXHRcdFx0XHRkZWNpbWFscyA9IDI7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBtb2RlbFZhbHVlID0ge1xuXHRcdFx0XHRtdWx0aXBsaWVyIDogMTAwLFxuXHRcdFx0XHRkZWNpbWFsTWFzazogMlxuXHRcdFx0fTtcblx0XHRcdGlmIChhbmd1bGFyLmlzRGVmaW5lZChhdHRycy5mbHVpZ1BlcmNlbnRhZ2VWYWx1ZSkpIHtcblx0XHRcdFx0bW9kZWxWYWx1ZS5tdWx0aXBsaWVyICA9IDE7XG5cdFx0XHRcdG1vZGVsVmFsdWUuZGVjaW1hbE1hc2sgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbnVtYmVyRGVjaW1hbHMgPSBkZWNpbWFscyArIG1vZGVsVmFsdWUuZGVjaW1hbE1hc2s7XG5cdFx0XHR2YXIgdmlld01hc2sgPSBOdW1iZXJNYXNrcy52aWV3TWFzayhkZWNpbWFscywgZGVjaW1hbERlbGltaXRlciwgdGhvdXNhbmRzRGVsaW1pdGVyKSxcblx0XHRcdFx0bW9kZWxNYXNrID0gTnVtYmVyTWFza3MubW9kZWxNYXNrKG51bWJlckRlY2ltYWxzKTtcblxuXHRcdFx0ZnVuY3Rpb24gZm9ybWF0dGVyKHZhbHVlKSB7XG5cdFx0XHRcdGlmIChjdHJsLiRpc0VtcHR5KHZhbHVlKSkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgcHJlZml4ID0gKGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLmZsdWlnTmVnYXRpdmVOdW1iZXIpICYmIHZhbHVlIDwgMCkgPyAnLScgOiAnJztcblx0XHRcdFx0dmFyIHZhbHVlVG9Gb3JtYXQgPSBwcmVwYXJlUGVyY2VudGFnZVRvRm9ybWF0dGVyKHZhbHVlLCBkZWNpbWFscywgbW9kZWxWYWx1ZS5tdWx0aXBsaWVyKTtcblx0XHRcdFx0dmFyIGZvcm1hdGVkVmFsdWUgPSBwcmVmaXggKyB2aWV3TWFzay5hcHBseSh2YWx1ZVRvRm9ybWF0KSArIHBlcmNlbnRhZ2VTeW1ib2w7XG5cblx0XHRcdFx0cmV0dXJuIGZvcm1hdGVkVmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIHBhcnNlcih2YWx1ZSkge1xuXHRcdFx0XHRpZiAoY3RybC4kaXNFbXB0eSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciB2YWx1ZVRvRm9ybWF0ID0gUHJlRm9ybWF0dGVycy5jbGVhckRlbGltaXRlcnNBbmRMZWFkaW5nWmVyb3ModmFsdWUpIHx8ICcwJztcblx0XHRcdFx0aWYgKHBlcmNlbnRhZ2VTeW1ib2wgIT09ICcnICYmIHZhbHVlLmxlbmd0aCA+IDEgJiYgdmFsdWUuaW5kZXhPZignJScpID09PSAtMSkge1xuXHRcdFx0XHRcdHZhbHVlVG9Gb3JtYXQgPSB2YWx1ZVRvRm9ybWF0LnNsaWNlKDAsIHZhbHVlVG9Gb3JtYXQubGVuZ3RoIC0gMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYmFja3NwYWNlUHJlc3NlZCAmJiB2YWx1ZS5sZW5ndGggPT09IDEgJiYgdmFsdWUgIT09ICclJykge1xuXHRcdFx0XHRcdHZhbHVlVG9Gb3JtYXQgPSAnMCc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgZm9ybWF0ZWRWYWx1ZSA9IHZpZXdNYXNrLmFwcGx5KHZhbHVlVG9Gb3JtYXQpICsgcGVyY2VudGFnZVN5bWJvbDtcblx0XHRcdFx0dmFyIGFjdHVhbE51bWJlciA9IHBhcnNlRmxvYXQobW9kZWxNYXNrLmFwcGx5KHZhbHVlVG9Gb3JtYXQpKTtcblxuXHRcdFx0XHRpZiAoYW5ndWxhci5pc0RlZmluZWQoYXR0cnMuZmx1aWdOZWdhdGl2ZU51bWJlcikpIHtcblx0XHRcdFx0XHR2YXIgaXNOZWdhdGl2ZSA9ICh2YWx1ZVswXSA9PT0gJy0nKSxcblx0XHRcdFx0XHRcdG5lZWRzVG9JbnZlcnRTaWduID0gKHZhbHVlLnNsaWNlKC0xKSA9PT0gJy0nKTtcblxuXHRcdFx0XHRcdC8vb25seSBhcHBseSB0aGUgbWludXMgc2lnbiBpZiBpdCBpcyBuZWdhdGl2ZSBvcihleGNsdXNpdmUpIG9yIHRoZSBmaXJzdCBjaGFyYWN0ZXJcblx0XHRcdFx0XHQvL25lZWRzIHRvIGJlIG5lZ2F0aXZlIGFuZCB0aGUgbnVtYmVyIGlzIGRpZmZlcmVudCBmcm9tIHplcm9cblx0XHRcdFx0XHRpZiAoKG5lZWRzVG9JbnZlcnRTaWduIF4gaXNOZWdhdGl2ZSkgfHwgdmFsdWUgPT09ICctJykge1xuXHRcdFx0XHRcdFx0YWN0dWFsTnVtYmVyICo9IC0xO1xuXHRcdFx0XHRcdFx0Zm9ybWF0ZWRWYWx1ZSA9ICctJyArICgoYWN0dWFsTnVtYmVyICE9PSAwKSA/IGZvcm1hdGVkVmFsdWUgOiAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGN0cmwuJHZpZXdWYWx1ZSAhPT0gZm9ybWF0ZWRWYWx1ZSkge1xuXHRcdFx0XHRcdGN0cmwuJHNldFZpZXdWYWx1ZShmb3JtYXRlZFZhbHVlKTtcblx0XHRcdFx0XHRjdHJsLiRyZW5kZXIoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBhY3R1YWxOdW1iZXI7XG5cdFx0XHR9XG5cblx0XHRcdGN0cmwuJGZvcm1hdHRlcnMucHVzaChmb3JtYXR0ZXIpO1xuXHRcdFx0Y3RybC4kcGFyc2Vycy5wdXNoKHBhcnNlcik7XG5cblx0XHRcdGlmIChhdHRycy5mbHVpZ1BlcmNlbnRhZ2VNYXNrKSB7XG5cdFx0XHRcdHNjb3BlLiR3YXRjaChhdHRycy5mbHVpZ1BlcmNlbnRhZ2VNYXNrLCBmdW5jdGlvbihfZGVjaW1hbHMpIHtcblx0XHRcdFx0XHRkZWNpbWFscyA9IGlzTmFOKF9kZWNpbWFscykgPyAyIDogX2RlY2ltYWxzO1xuXG5cdFx0XHRcdFx0bnVtYmVyRGVjaW1hbHMgPSBkZWNpbWFscyArIG1vZGVsVmFsdWUuZGVjaW1hbE1hc2s7XG5cdFx0XHRcdFx0dmlld01hc2sgPSBOdW1iZXJNYXNrcy52aWV3TWFzayhkZWNpbWFscywgZGVjaW1hbERlbGltaXRlciwgdGhvdXNhbmRzRGVsaW1pdGVyKTtcblx0XHRcdFx0XHRtb2RlbE1hc2sgPSBOdW1iZXJNYXNrcy5tb2RlbE1hc2sobnVtYmVyRGVjaW1hbHMpO1xuXG5cdFx0XHRcdFx0cGFyc2VyKGZvcm1hdHRlcihjdHJsLiRtb2RlbFZhbHVlKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYXR0cnMubWluKSB7XG5cdFx0XHRcdHZhciBtaW5WYWw7XG5cblx0XHRcdFx0Y3RybC4kdmFsaWRhdG9ycy5taW4gPSBmdW5jdGlvbihtb2RlbFZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZhbGlkYXRvcnMubWluTnVtYmVyKGN0cmwsIG1vZGVsVmFsdWUsIG1pblZhbCk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0c2NvcGUuJHdhdGNoKGF0dHJzLm1pbiwgZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0XHRtaW5WYWwgPSB2YWx1ZTtcblx0XHRcdFx0XHRjdHJsLiR2YWxpZGF0ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGF0dHJzLm1heCkge1xuXHRcdFx0XHR2YXIgbWF4VmFsO1xuXG5cdFx0XHRcdGN0cmwuJHZhbGlkYXRvcnMubWF4ID0gZnVuY3Rpb24obW9kZWxWYWx1ZSkge1xuXHRcdFx0XHRcdHJldHVybiB2YWxpZGF0b3JzLm1heE51bWJlcihjdHJsLCBtb2RlbFZhbHVlLCBtYXhWYWwpO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHNjb3BlLiR3YXRjaChhdHRycy5tYXgsIGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdFx0bWF4VmFsID0gdmFsdWU7XG5cdFx0XHRcdFx0Y3RybC4kdmFsaWRhdGUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuUGVyY2VudGFnZU1hc2tEaXJlY3RpdmUuJGluamVjdCA9IFsnJGxvY2FsZScsICckcGFyc2UnLCAnUHJlRm9ybWF0dGVycycsICdOdW1iZXJNYXNrcycsICckZmlsdGVyJ107XG5cbm1vZHVsZS5leHBvcnRzID0gUGVyY2VudGFnZU1hc2tEaXJlY3RpdmU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3RyaW5nTWFzayA9IHJlcXVpcmUoJ3N0cmluZy1tYXNrJyk7XG5cbmZ1bmN0aW9uIFNjaWVudGlmaWNOb3RhdGlvbk1hc2tEaXJlY3RpdmUoJGxvY2FsZSwgJHBhcnNlKSB7XG5cdHZhciBkZWNpbWFsRGVsaW1pdGVyID0gJGxvY2FsZS5OVU1CRVJfRk9STUFUUy5ERUNJTUFMX1NFUCxcblx0XHRkZWZhdWx0UHJlY2lzaW9uID0gMjtcblxuXHRmdW5jdGlvbiBzaWduaWZpY2FuZE1hc2tCdWlsZGVyKGRlY2ltYWxzKSB7XG5cdFx0dmFyIG1hc2sgPSAnMCc7XG5cblx0XHRpZiAoZGVjaW1hbHMgPiAwKSB7XG5cdFx0XHRtYXNrICs9IGRlY2ltYWxEZWxpbWl0ZXI7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlY2ltYWxzOyBpKyspIHtcblx0XHRcdFx0bWFzayArPSAnMCc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBTdHJpbmdNYXNrKG1hc2ssIHtcblx0XHRcdHJldmVyc2U6IHRydWVcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdBJyxcblx0XHRyZXF1aXJlOiAnbmdNb2RlbCcsXG5cdFx0bGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG5cdFx0XHR2YXIgZGVjaW1hbHMgPSAkcGFyc2UoYXR0cnMuZmx1aWdTY2llbnRpZmljTm90YXRpb25NYXNrKShzY29wZSk7XG5cblx0XHRcdGlmIChpc05hTihkZWNpbWFscykpIHtcblx0XHRcdFx0ZGVjaW1hbHMgPSBkZWZhdWx0UHJlY2lzaW9uO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc2lnbmlmaWNhbmRNYXNrID0gc2lnbmlmaWNhbmRNYXNrQnVpbGRlcihkZWNpbWFscyk7XG5cblx0XHRcdGZ1bmN0aW9uIHNwbGl0TnVtYmVyKHZhbHVlKSB7XG5cdFx0XHRcdHZhciBzdHJpbmdWYWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCksXG5cdFx0XHRcdFx0c3BsaXR0ZWROdW1iZXIgPSBzdHJpbmdWYWx1ZS5tYXRjaCgvKC0/WzAtOV0qKVtcXC5dPyhbMC05XSopP1tFZV0/KFtcXCstXT9bMC05XSopPy8pO1xuXG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aW50ZWdlclBhcnRPZlNpZ25pZmljYW5kOiBzcGxpdHRlZE51bWJlclsxXSxcblx0XHRcdFx0XHRkZWNpbWFsUGFydE9mU2lnbmlmaWNhbmQ6IHNwbGl0dGVkTnVtYmVyWzJdLFxuXHRcdFx0XHRcdGV4cG9uZW50OiBzcGxpdHRlZE51bWJlclszXSB8IDBcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZm9ybWF0dGVyKHZhbHVlKSB7XG5cdFx0XHRcdGlmIChjdHJsLiRpc0VtcHR5KHZhbHVlKSkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5yZXBsYWNlKGRlY2ltYWxEZWxpbWl0ZXIsICcuJyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWUudG9FeHBvbmVudGlhbChkZWNpbWFscyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgZm9ybWF0dGVkVmFsdWUsIGV4cG9uZW50O1xuXHRcdFx0XHR2YXIgc3BsaXR0ZWROdW1iZXIgPSBzcGxpdE51bWJlcih2YWx1ZSk7XG5cblx0XHRcdFx0dmFyIGludGVnZXJQYXJ0T2ZTaWduaWZpY2FuZCA9IHNwbGl0dGVkTnVtYmVyLmludGVnZXJQYXJ0T2ZTaWduaWZpY2FuZCB8fCAwO1xuXHRcdFx0XHR2YXIgbnVtYmVyVG9Gb3JtYXQgPSBpbnRlZ2VyUGFydE9mU2lnbmlmaWNhbmQudG9TdHJpbmcoKTtcblx0XHRcdFx0aWYgKGFuZ3VsYXIuaXNEZWZpbmVkKHNwbGl0dGVkTnVtYmVyLmRlY2ltYWxQYXJ0T2ZTaWduaWZpY2FuZCkpIHtcblx0XHRcdFx0XHRudW1iZXJUb0Zvcm1hdCArPSBzcGxpdHRlZE51bWJlci5kZWNpbWFsUGFydE9mU2lnbmlmaWNhbmQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgbmVlZHNOb3JtYWxpemF0aW9uID1cblx0XHRcdFx0XHQoaW50ZWdlclBhcnRPZlNpZ25pZmljYW5kID49IDEgfHwgaW50ZWdlclBhcnRPZlNpZ25pZmljYW5kIDw9IC0xKSAmJlxuXHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdChhbmd1bGFyLmlzRGVmaW5lZChzcGxpdHRlZE51bWJlci5kZWNpbWFsUGFydE9mU2lnbmlmaWNhbmQpICYmXG5cdFx0XHRcdFx0XHRzcGxpdHRlZE51bWJlci5kZWNpbWFsUGFydE9mU2lnbmlmaWNhbmQubGVuZ3RoID4gZGVjaW1hbHMpIHx8XG5cdFx0XHRcdFx0XHQoZGVjaW1hbHMgPT09IDAgJiYgbnVtYmVyVG9Gb3JtYXQubGVuZ3RoID49IDIpXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRpZiAobmVlZHNOb3JtYWxpemF0aW9uKSB7XG5cdFx0XHRcdFx0ZXhwb25lbnQgPSBudW1iZXJUb0Zvcm1hdC5zbGljZShkZWNpbWFscyArIDEsIG51bWJlclRvRm9ybWF0Lmxlbmd0aCk7XG5cdFx0XHRcdFx0bnVtYmVyVG9Gb3JtYXQgPSBudW1iZXJUb0Zvcm1hdC5zbGljZSgwLCBkZWNpbWFscyArIDEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9ybWF0dGVkVmFsdWUgPSBzaWduaWZpY2FuZE1hc2suYXBwbHkobnVtYmVyVG9Gb3JtYXQpO1xuXG5cdFx0XHRcdGlmIChzcGxpdHRlZE51bWJlci5leHBvbmVudCAhPT0gMCkge1xuXHRcdFx0XHRcdGV4cG9uZW50ID0gc3BsaXR0ZWROdW1iZXIuZXhwb25lbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYW5ndWxhci5pc0RlZmluZWQoZXhwb25lbnQpKSB7XG5cdFx0XHRcdFx0Zm9ybWF0dGVkVmFsdWUgKz0gJ2UnICsgZXhwb25lbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZm9ybWF0dGVkVmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIHBhcnNlcih2YWx1ZSkge1xuXHRcdFx0XHRpZiAoY3RybC4kaXNFbXB0eSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgdmlld1ZhbHVlID0gZm9ybWF0dGVyKHZhbHVlKSxcblx0XHRcdFx0XHRtb2RlbFZhbHVlID0gcGFyc2VGbG9hdCh2aWV3VmFsdWUucmVwbGFjZShkZWNpbWFsRGVsaW1pdGVyLCAnLicpKTtcblxuXHRcdFx0XHRpZiAoY3RybC4kdmlld1ZhbHVlICE9PSB2aWV3VmFsdWUpIHtcblx0XHRcdFx0XHRjdHJsLiRzZXRWaWV3VmFsdWUodmlld1ZhbHVlKTtcblx0XHRcdFx0XHRjdHJsLiRyZW5kZXIoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBtb2RlbFZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjdHJsLiRmb3JtYXR0ZXJzLnB1c2goZm9ybWF0dGVyKTtcblx0XHRcdGN0cmwuJHBhcnNlcnMucHVzaChwYXJzZXIpO1xuXG5cdFx0XHRjdHJsLiR2YWxpZGF0b3JzLm1heCA9IGZ1bmN0aW9uIHZhbGlkYXRvcih2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gY3RybC4kaXNFbXB0eSh2YWx1ZSkgfHwgdmFsdWUgPCBOdW1iZXIuTUFYX1ZBTFVFO1xuXHRcdFx0fTtcblx0XHR9XG5cdH07XG59XG5TY2llbnRpZmljTm90YXRpb25NYXNrRGlyZWN0aXZlLiRpbmplY3QgPSBbJyRsb2NhbGUnLCAnJHBhcnNlJ107XG5cbm1vZHVsZS5leHBvcnRzID0gU2NpZW50aWZpY05vdGF0aW9uTWFza0RpcmVjdGl2ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFN0cmluZ01hc2sgPSByZXF1aXJlKCdzdHJpbmctbWFzaycpO1xudmFyIHRpbWVGb3JtYXQgPSAnMDA6MDAnO1xuXG52YXIgZm9ybWF0dGVkVmFsdWVMZW5ndGggPSB0aW1lRm9ybWF0Lmxlbmd0aDtcbnZhciB1bmZvcm1hdHRlZFZhbHVlTGVuZ3RoID0gdGltZUZvcm1hdC5yZXBsYWNlKCc6JywgJycpLmxlbmd0aDtcbnZhciB0aW1lTWFzayA9IG5ldyBTdHJpbmdNYXNrKHRpbWVGb3JtYXQpO1xuXG5mdW5jdGlvbiBUaW1lRmlsdGVyKCRmaWx0ZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0LCBkZWNpbWFscykge1xuXG4gICAgICAgIHJldHVybiAodGltZU1hc2suYXBwbHkoaW5wdXQpIHx8ICcnKS5yZXBsYWNlKC9bXjAtOV0kLywgJycpO1xuICAgIH07XG59XG5UaW1lRmlsdGVyLiRpbmplY3QgPSBbJyRmaWx0ZXInXTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaW1lRmlsdGVyOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFN0cmluZ01hc2sgPSByZXF1aXJlKCdzdHJpbmctbWFzaycpO1xuXG5mdW5jdGlvbiBUaW1lTWFza0RpcmVjdGl2ZSgkdGltZW91dCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuXG4gICAgICAgICAgICBpZiAoYXR0cnMuZmx1aWdUaW1lTWFzayA9PT0gXCJmYWxzZVwiKSByZXR1cm47XG5cbiAgICAgICAgICAgIHZhciB0aW1lRm9ybWF0ID0gJzAwOjAwOjAwJztcblxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLmZsdWlnVGltZU1hc2spICYmIGF0dHJzLmZsdWlnVGltZU1hc2sgPT09ICdzaG9ydCcpIHtcbiAgICAgICAgICAgICAgICB0aW1lRm9ybWF0ID0gJzAwOjAwJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlTGVuZ3RoID0gdGltZUZvcm1hdC5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgdW5mb3JtYXR0ZWRWYWx1ZUxlbmd0aCA9IHRpbWVGb3JtYXQucmVwbGFjZSgnOicsICcnKS5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgdGltZU1hc2sgPSBuZXcgU3RyaW5nTWFzayh0aW1lRm9ybWF0KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZm9ybWF0dGVyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN0cmwuJGlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY2xlYW5WYWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1teMC05XS9nLCAnJykuc2xpY2UoMCwgdW5mb3JtYXR0ZWRWYWx1ZUxlbmd0aCkgfHwgJyc7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aW1lTWFzay5hcHBseShjbGVhblZhbHVlKSB8fCAnJykucmVwbGFjZSgvW14wLTldJC8sICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3RybC4kZm9ybWF0dGVycy5wdXNoKGZvcm1hdHRlcik7XG5cbiAgICAgICAgICAgIGN0cmwuJHBhcnNlcnMucHVzaChmdW5jdGlvbiBwYXJzZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3RybC4kaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciB2aWV3VmFsdWUgPSBmb3JtYXR0ZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBtb2RlbFZhbHVlID0gdmlld1ZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN0cmwuJHZpZXdWYWx1ZSAhPT0gdmlld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0cmwuJHNldFZpZXdWYWx1ZSh2aWV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjdHJsLiRyZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBlbGVtZW50WzBdLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgICAgIHZhciBlbmQgPSBlbGVtZW50WzBdLnNlbGVjdGlvbkVuZCArIHZpZXdWYWx1ZS5sZW5ndGggLSB2YWx1ZS5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbMF0uc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIHN0YXJ0KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbFZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGN0cmwuJHZhbGlkYXRvcnMudGltZSA9IGZ1bmN0aW9uIChtb2RlbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN0cmwuJGlzRW1wdHkobW9kZWxWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHNwbGl0dGVkVmFsdWUgPSBtb2RlbFZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoLzovKS5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhdjtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZhciBob3VycyA9IHBhcnNlSW50KHNwbGl0dGVkVmFsdWVbMF0pLFxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gcGFyc2VJbnQoc3BsaXR0ZWRWYWx1ZVsxXSksXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSBwYXJzZUludChzcGxpdHRlZFZhbHVlWzJdIHx8IDApO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsVmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPT09IGZvcm1hdHRlZFZhbHVlTGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgIGhvdXJzIDwgMjQgJiYgbWludXRlcyA8IDYwICYmIHNlY29uZHMgPCA2MDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5UaW1lTWFza0RpcmVjdGl2ZS4kaW5qZWN0ID0gWyckdGltZW91dCddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVNYXNrRGlyZWN0aXZlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFN0cmluZ01hc2sgPSByZXF1aXJlKCdzdHJpbmctbWFzaycpO1xuXG52YXIgbSA9IGFuZ3VsYXIubW9kdWxlKCd1aS51dGlscy5tYXNrcy5oZWxwZXJzJywgW10pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG0ubmFtZTtcblxubS5mYWN0b3J5KCdQcmVGb3JtYXR0ZXJzJywgW2Z1bmN0aW9uKCkge1xuXHRmdW5jdGlvbiBjbGVhckRlbGltaXRlcnNBbmRMZWFkaW5nWmVyb3ModmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09ICcwJykge1xuXHRcdFx0cmV0dXJuICcwJztcblx0XHR9XG5cblx0XHR2YXIgY2xlYW5WYWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14tLywnJykucmVwbGFjZSgvXjAqLywgJycpO1xuXHRcdHJldHVybiBjbGVhblZhbHVlLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBwcmVwYXJlTnVtYmVyVG9Gb3JtYXR0ZXIodmFsdWUsIGRlY2ltYWxzKSB7XG5cdFx0cmV0dXJuIGNsZWFyRGVsaW1pdGVyc0FuZExlYWRpbmdaZXJvcygocGFyc2VGbG9hdCh2YWx1ZSkpLnRvRml4ZWQoZGVjaW1hbHMpKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Y2xlYXJEZWxpbWl0ZXJzQW5kTGVhZGluZ1plcm9zOiBjbGVhckRlbGltaXRlcnNBbmRMZWFkaW5nWmVyb3MsXG5cdFx0cHJlcGFyZU51bWJlclRvRm9ybWF0dGVyOiBwcmVwYXJlTnVtYmVyVG9Gb3JtYXR0ZXJcblx0fTtcbn1dKVxuLmZhY3RvcnkoJ051bWJlck1hc2tzJywgW2Z1bmN0aW9uKCkge1xuXHRyZXR1cm4ge1xuXHRcdHZpZXdNYXNrOiBmdW5jdGlvbihkZWNpbWFscywgZGVjaW1hbERlbGltaXRlciwgdGhvdXNhbmRzRGVsaW1pdGVyKSB7XG5cdFx0XHR2YXIgbWFzayA9ICcjJyArIHRob3VzYW5kc0RlbGltaXRlciArICcjIzAnO1xuXG5cdFx0XHRpZiAoZGVjaW1hbHMgPiAwKSB7XG5cdFx0XHRcdG1hc2sgKz0gZGVjaW1hbERlbGltaXRlcjtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWNpbWFsczsgaSsrKSB7XG5cdFx0XHRcdFx0bWFzayArPSAnMCc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5ldyBTdHJpbmdNYXNrKG1hc2ssIHtcblx0XHRcdFx0cmV2ZXJzZTogdHJ1ZVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRtb2RlbE1hc2s6IGZ1bmN0aW9uKGRlY2ltYWxzKSB7XG5cdFx0XHR2YXIgbWFzayA9ICcjIyMwJztcblxuXHRcdFx0aWYgKGRlY2ltYWxzID4gMCkge1xuXHRcdFx0XHRtYXNrICs9ICcuJztcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWNpbWFsczsgaSsrKSB7XG5cdFx0XHRcdFx0bWFzayArPSAnMCc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5ldyBTdHJpbmdNYXNrKG1hc2ssIHtcblx0XHRcdFx0cmV2ZXJzZTogdHJ1ZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xufV0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hc2tGYWN0b3J5KG1hc2tEZWZpbml0aW9uKSB7XG5cdHJldHVybiBmdW5jdGlvbiBNYXNrRGlyZWN0aXZlKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyZXN0cmljdDogJ0EnLFxuXHRcdFx0cmVxdWlyZTogJ25nTW9kZWwnLFxuXHRcdFx0bGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG5cdFx0XHRcdGN0cmwuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbiBmb3JtYXR0ZXIodmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoY3RybC4kaXNFbXB0eSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgY2xlYW5WYWx1ZSA9IG1hc2tEZWZpbml0aW9uLmNsZWFyVmFsdWUodmFsdWUpO1xuXHRcdFx0XHRcdHJldHVybiBtYXNrRGVmaW5pdGlvbi5mb3JtYXQoY2xlYW5WYWx1ZSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGN0cmwuJHBhcnNlcnMucHVzaChmdW5jdGlvbiBwYXJzZXIodmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoY3RybC4kaXNFbXB0eSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgY2xlYW5WYWx1ZSA9IG1hc2tEZWZpbml0aW9uLmNsZWFyVmFsdWUodmFsdWUpO1xuXHRcdFx0XHRcdHZhciBmb3JtYXR0ZWRWYWx1ZSA9IG1hc2tEZWZpbml0aW9uLmZvcm1hdChjbGVhblZhbHVlKTtcblxuXHRcdFx0XHRcdGlmIChjdHJsLiR2aWV3VmFsdWUgIT09IGZvcm1hdHRlZFZhbHVlKSB7XG5cdFx0XHRcdFx0XHRjdHJsLiRzZXRWaWV3VmFsdWUoZm9ybWF0dGVkVmFsdWUpO1xuXHRcdFx0XHRcdFx0Y3RybC4kcmVuZGVyKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGFuZ3VsYXIuaXNVbmRlZmluZWQobWFza0RlZmluaXRpb24uZ2V0TW9kZWxWYWx1ZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBjbGVhblZhbHVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciBhY3R1YWxNb2RlbFR5cGUgPSB0eXBlb2YgY3RybC4kbW9kZWxWYWx1ZTtcblx0XHRcdFx0XHRyZXR1cm4gbWFza0RlZmluaXRpb24uZ2V0TW9kZWxWYWx1ZShmb3JtYXR0ZWRWYWx1ZSwgYWN0dWFsTW9kZWxUeXBlKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0YW5ndWxhci5mb3JFYWNoKG1hc2tEZWZpbml0aW9uLnZhbGlkYXRpb25zLCBmdW5jdGlvbih2YWxpZGF0b3JGbiwgdmFsaWRhdGlvbkVycm9yS2V5KSB7XG5cdFx0XHRcdFx0Y3RybC4kdmFsaWRhdG9yc1t2YWxpZGF0aW9uRXJyb3JLZXldID0gZnVuY3Rpb24gdmFsaWRhdG9yKG1vZGVsVmFsdWUsIHZpZXdWYWx1ZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGN0cmwuJGlzRW1wdHkobW9kZWxWYWx1ZSkgfHwgdmFsaWRhdG9yRm4obW9kZWxWYWx1ZSwgdmlld1ZhbHVlKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdG1heE51bWJlcjogZnVuY3Rpb24oY3RybCwgdmFsdWUsIGxpbWl0KSB7XG5cdFx0dmFyIG1heCA9IHBhcnNlRmxvYXQobGltaXQsIDEwKTtcblx0XHRyZXR1cm4gY3RybC4kaXNFbXB0eSh2YWx1ZSkgfHwgaXNOYU4obWF4KSB8fCB2YWx1ZSA8PSBtYXg7XG5cdH0sXG5cdG1pbk51bWJlcjogZnVuY3Rpb24oY3RybCwgdmFsdWUsIGxpbWl0KSB7XG5cdFx0dmFyIG1pbiA9IHBhcnNlRmxvYXQobGltaXQsIDEwKTtcblx0XHRyZXR1cm4gY3RybC4kaXNFbXB0eSh2YWx1ZSkgfHwgaXNOYU4obWluKSB8fCB2YWx1ZSA+PSBtaW47XG5cdH1cbn07XG4iXX0=
