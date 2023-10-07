// complete the given function

function palindrome(str){
	/ Remove non-alphanumeric characters and convert to lowercase
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare the string with its reverse
    return s === s.split('').reverse().join('');

}
module.exports = palindrome
