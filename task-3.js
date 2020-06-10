//isPalindrome
function isPalindrome(string) {
    if (string.length <= 1) {
        return true;
    }
    if (string[0]==string[string.length-1]) {
        string = string.substring(1, string.length-1);
        return isPalindrome(string);
    } else {
        return false;
    }
}

export default isPalindrome;

//substr
function substr(string, start, length) {
    if (!start) start = 0;
    if (!length) length = string.length;
    
    let word = '';

    if (start >= string.length) {
        return ''; 
    } else if (start < 0 && Math.abs(start) > string.length) {
            start = 0;
    } else if (start < 0) {
        start = string.length + start;  
    }

    if (length <= 0) {
        return '';
    } else if (length > string.length-1) {
        length = string.length;
    }

    for (let i = 1; i <= length; i++) {
        if (string[start]) {
            word += string[start];
            start++;
        }
    }
    return word;
}

export default substr;

//apply
function apply(step, func, argument) {
    for (step; step>=1; step--) {
        argument = func(argument);
    }
    return argument;
}

export default apply;
