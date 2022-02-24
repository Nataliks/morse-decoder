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

function decode(expr) {
    // write your solution here

const arr =[];
for (let i = 0; i< expr.length; i= i+10) {
    
    let j = expr.slice(i, i+10);
    if (j === "**********") {
        arr.push('  ');
    } else {
        arr.push(Number(j).toString().split(''));
    }

}

function convertNumToSymbol(item) {
    let symbols =[]; 
    for (let i=0; i<item.length; i=i+2){
       if(item[i]+item[i+1] === '10') {
        symbols.push('.')
       };
       if(item[i]+item[i+1] === '11') {
        symbols.push('-')
    };
       if(item[i]+item[i+1] === '**') {
        symbols.push(' ')
    };
    }
    return symbols;
}  

const strSymbols = arr.map((item) => convertNumToSymbol(item).join(''));
return result = strSymbols.map((item) => MORSE_TABLE[item] || ' ').join('');

/*console.log(result);*/
}

module.exports = {
    decode
}
