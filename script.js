//your JS code here. If required.
let url = location.href;
let regex = /[a-zA-Z]/g;
let lenOfUrl = url.match(regex).length;
alert(`The length of the URL is: ${lenOfUrl}`);