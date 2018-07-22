
var capitalize = function (string) {
    return string[0].toUpperCase() + string.slice(1);
};

console.assert(capitalize('word') === 'Word');
console.assert(capitalize('Word') === 'Word');
console.assert(capitalize('WoRd') === 'WoRd');

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var removeNumber = function (string) {
    while (numbers.includes(string[0])) {
        string = string.slice(1);
    }
    return string;
};

var caseConvert = function (string, type) {
    string = string.toLowerCase();
    var words = string.split(' ');
    var first = removeNumber(words[0]);
    var rest = words.slice(1);
    var capitalized = rest.map(function(word) {
        return capitalize(word);
    });
    if (type === 'camelcase') {
        return [first].concat(capitalized).join('');
    }
    else if (type === 'snakecase') {
        return [first].concat(rest).join('_');
    }
};

console.assert(caseConvert('', 'camelcase') === '', 'empty string should return empty string');
console.assert(caseConvert('word', 'camelcase') === 'word', 'a single word should be untouched');
console.assert(caseConvert('Word', 'camelcase') === 'word', 'a single word should be lowercase');
console.assert(caseConvert('hello world', 'camelcase') === 'helloWorld', 'spaces should not exist');
console.assert(caseConvert('my Little pony', 'camelcase') === 'myLittlePony', 'three words become one');
console.assert(caseConvert('my Little Pony', 'camelcase') === 'myLittlePony', 'capitalization is irrelevant');
console.assert(caseConvert('helloWorld', 'camelcase') === 'helloworld', 'camelcased input is not preserved');
console.assert(caseConvert('hello world', 'snakecase') === 'hello_world', 'there should be a "_" between words.');
console.assert(caseConvert('1hello world', 'camelcase') === 'helloWorld', 'should not begin with a number');                                
