const str = 'India is my country';
const reverseWords = (str = '') => {
    const strArr = str.split(' ');
    strArr.reverse();
    const reversedStr = strArr.join(' ');
    return reversedStr;
};
console.log(reverseWords(str));
//using function
function reverseString(str) {
    const strarr = str.split(' ');
    let reverseStr = strarr.reverse();
    reverseStr = reverseStr.join(' ');
    return reverseStr;
}