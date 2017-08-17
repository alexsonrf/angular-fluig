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
    .filter('cpfcnpj', require('./cpf-cnpj/cpf-cnpj').filter)

    .directive('fluigIeMask', require('./inscricao-estadual/ie'))

    .directive('fluigNfeMask', require('./nfe/nfe').directive)
    .filter('nfe', require('./nfe/nfe').filter)

    .directive('fluigCarPlateMask', require('./car-plate/car-plate').directive)
    .filter('carPlate', require('./car-plate/car-plate').filter)

    .directive('fluigPhoneMask', require('./phone/br-phone').directive)
    .filter('brPhone', require('./phone/br-phone').filter)

    
    
    

module.exports = m.name;