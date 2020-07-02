var phrase = " Skyler is good";

document.write(phrase);

document.write(phrase.length);
document.write(phrase.toUpperCase());
document.write(phrase.toLowerCase());
document.write(phrase.charAt(2));

// skyler is good
// 0123456789
// index start from 0

document.write(phrase.indexOf("r"));

document.write(phrase.substring(4, 9));

document.write(phrase.include("skyler"));
document.write(phrase.endsWith("good"));
