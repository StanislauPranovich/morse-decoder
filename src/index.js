const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(str) {
    let arr = str.split(/(.{10})/).filter(O=>O);
    let arr2 = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "0010101010") {
            arr2.push('h');
        } else if(arr[i] === "0000000010") {
            arr2.push('e');
        } else if(arr[i] === "0010111010") {
            arr2.push('l');
        } else if(arr[i] === "0000111111") {
            arr2.push('o');
        } else if(arr[i] === "**********") {
            arr2.push(' ');
        } else if(arr[i] === "0000101111") {
            arr2.push('w');
        } else if(arr[i] === "0000101110") {
            arr2.push('r');
        } else if(arr[i] === "0000111010") {
            arr2.push('d');
        } else if(arr[i] === "0000001011") {
            arr2.push('a');
        } else if(arr[i] === "0011101010") {
            arr2.push('b');
        } else if(arr[i] === "0011101110") {
            arr2.push('c');
        } else if(arr[i] === "0010101110") {
            arr2.push('f');
        } else if(arr[i] === "0000111110") {
            arr2.push('g');
        } else if(arr[i] === "0000001010") {
            arr2.push('i');
        } else if(arr[i] === "0010111111") {
            arr2.push('j');
        } else if(arr[i] === "0000111011") {
            arr2.push('k');
        } else if(arr[i] === "0000001111") {
            arr2.push('m');
        } else if(arr[i] === "0000001110") {
            arr2.push('n');
        } else if(arr[i] === "0010111110") {
            arr2.push('p');
        } else if(arr[i] === "0011111011") {
            arr2.push('q');
        } else if(arr[i] === "0000101010") {
            arr2.push('s');
        } else if(arr[i] === "0000000011") {
            arr2.push('t');
        } else if(arr[i] === "0000101011") {
            arr2.push('u');
        } else if(arr[i] === "0010101011") {
            arr2.push('v');
        } else if(arr[i] === "0011101011") {
            arr2.push('x');
        } else if(arr[i] === "0011101111") {
            arr2.push('y');
        } else if(arr[i] === "0011111010") {
            arr2.push('z');
        } else if(arr[i] === "1011111111") {
            arr2.push('1');
        } else if(arr[i] === "1010111111") {
            arr2.push('2');
        } else if(arr[i] === "1010101111") {
            arr2.push('3');
        } else if(arr[i] === "1010101011") {
            arr2.push('4');
        } else if(arr[i] === "1010101010") {
            arr2.push('5');
        } else if(arr[i] === "1110101010") {
            arr2.push('6');
        } else if(arr[i] === "1111101010") {
            arr2.push('7');
        } else if(arr[i] === "1111111010") {
            arr2.push('8');
        } else if(arr[i] === "1111111110") {
            arr2.push('9');
        } else if(arr[i] === "1111111111") {
            arr2.push('0');
        }
    }
    return arr2.join("");
}

module.exports = {
    decode
}