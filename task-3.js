//isPalindrome
function isPalindrome(str) {
    if (typeof str === 'number') str = String(str);
    if (typeof str === 'undefined') return false;
    str = str.toLowerCase().split(' ').join('');
    if (str.length <= 1) {
        return true;
    }
    if (str[0]==str[str.length-1]) {
        str = str.substring(1, str.length-1);
        return isPalindrome(str);
    } else {
        return false;
    }
}

//substr
function substr(str, start, length) {
    if (typeof str === 'number') str = String(str);
    if (typeof str === 'undefined') throw new Error('type error');
    if (!start) start = 0;
    if (!length) length = str.length;
    let word = '';

    if (start >= str.length) {
        return ''; 
    } else if (start < 0 && Math.abs(start) > str.length) {
            start = 0;
    } else if (start < 0) {
        start = str.length + start;  
    }

    if (length <= 0) {
        return '';
    } else if (length > str.length-1) {
        length = str.length;
    }

    for (let i = 1; i <= length; i++) {
        if (str[start]) {
            word += str[start];
            start++;
        }
    }
    return word;
}

//apply
function apply(step, func, argument) {
    if (!step) step = 0;
    if (!func) throw new Error('func error');
    if (!argument) throw new Error('argument error');
    for (step; step>=1; step--) {
        argument = func(argument);
    }
    return argument;
}

export {isPalindrome, substr, apply};

