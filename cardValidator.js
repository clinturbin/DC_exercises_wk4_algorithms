//======================================================
//      Digital Crafts Week 4 - Algorithm Exercises
// ====================================================

//----------------------------------------------------
//         Credit Card Validator
//----------------------------------------------------

var isVisa = function (number) {
    return (number.length === 16 && number.startsWith('4'));
};

var isDiscover = function (number) {
    return (number.length === 16 && number.startsWith('6011'));
};

var isAmex = function (number) {
    return (number.length === 16 && (number.startsWith('34') || number.startsWith('37')));
};

var isMasterCard = function (number) {
    var start = number[0] + number[1];
    var validStartNumbers = ['50', '51', '52', '53', '54', '55'];
    return (number.length === 15 && validStartNumbers.includes(start));
};

var getOnlyNumbers = function (number) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var newNumber = '';
    for (var i = 0; i < number.length; i++) {
        if (numbers.includes(number[i])) {
            newNumber += number[i];
        }
    }
    return newNumber;
};

var cardValidator = function (number) {
    number = number.toString();
    var newNumber = getOnlyNumbers(number);
    if (isVisa(newNumber)) {
        return 'Valid - Visa';
    }
    else if (isAmex(newNumber)) {
        return 'Valid - American Express';
    }
    else if (isDiscover(newNumber)) {
        return 'Valid - Discover';
    }
    else if (isMasterCard(newNumber)) {
        return 'Valid - MasterCard';
    }
    else {
        return 'Invalid Card Number';
    }
};


console.assert(isVisa('1111') === false, 'Visa must begin with number "4".');
console.assert(isVisa('4111') === false, 'Visa card must be 16 numbers long');
console.assert(isDiscover('1111') === false, 'Discover must begin with "6011".');
console.assert(isDiscover('6011') === false, 'Discover must be 16 numbers long');
console.assert(isAmex('1111') === false, 'Amex should start with 37 or 34');
console.assert(isAmex('3411') === false, 'Amex should be 16 numbers long');
console.assert(isMasterCard('1111') === false, 'MasterCard should start with 50-55');
console.assert(isMasterCard('5011') === false, 'MasterCard be 15 numbers long');
console.assert(cardValidator('') === 'Invalid Card Number', 'valid card number should be at least 15 numbers long');
console.assert(cardValidator('4111111111111111') === 'Valid - Visa', '16 digit card starting in 4 should be valid visa');
console.assert(cardValidator('3411111111111111') === 'Valid - American Express', 
                                                    '16 digit card starting in 34 or 37 should be valid AMEX');
console.assert(cardValidator('3711111111111111') === 'Valid - American Express', 
                                                    '16 digit card starting in 34 or 37 should be valid AMEX');
console.assert(cardValidator('6011111111111111') === 'Valid - Discover', 
                                                    '16 digit card starting in 6011 should be valid Discover');
console.assert(cardValidator('501111111111111') === 'Valid - MasterCard', 
                                                    '15 digit card starting in 50-55 should be valid MasterCard');
console.assert(cardValidator('551111111111111') === 'Valid - MasterCard', 
                                                    '15 digit card starting in 50-55 should be valid MasterCard');
console.assert(cardValidator('5011111111111111') === 'Invalid Card Number', '16 digit MasterCard should retrun "Invalid".');
console.assert(cardValidator('4111-1111-1111-1111') === 'Valid - Visa', 'Valid card should take "-" into account.');
console.assert(cardValidator(4111111111111111) === 'Valid - Visa', 'input with numbers should be valid');
console.assert(cardValidator('5311-1111-1111-111') === 'Valid - MasterCard', 
                                                    '15 digit card starting in 50-55 should be valid MasterCard');