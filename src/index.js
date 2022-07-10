module.exports = function check(str, bracketsConfig) {
    const brackets = bracketsConfig.join('').replace(/,/g, '')
    const stack = [];
    if (str.length % 2 === 1) return false;
    for (let i = 0; i < str.length; i++) {
        const bracketIndex = brackets.indexOf(str[i]);
        if (bracketIndex % 2 === 0 && brackets[bracketIndex] === brackets[bracketIndex + 1] && stack[stack.length - 1] === brackets[bracketIndex]) {
            stack.pop();
        } else if (bracketIndex % 2 === 0) {
            stack.push(str[i]);
        }
        if ( bracketIndex % 2 === 1 && stack[stack.length - 1] === brackets[bracketIndex - 1]) stack.pop();
    }
    return stack.length === 0;
};
