console.log(/[0-9]+/.test('texto123'));

let string = 'A string with 123 numbers, ABC letters and other 456 numbers. 1 23 345';
let regex = /(?<xpto>\b\w{3,5}\b)(.{3})/

console.log(regex.exec(string))
console.log(regex.exec(string))
console.log(string.match(regex))
console.log(string.replace(regex, ''));
console.log(string.replace(regex, '-$1=$2-'));

regex = /(?<xpto>\b\w{3,5}\b)(.{3})/g
while ((match = regex.exec(string)) !== null) {
	console.log(match)
}
console.log(string.match(regex))
console.log(string.replace(regex, ''));
console.log(string.replace(regex, '-$1=$2-'));
