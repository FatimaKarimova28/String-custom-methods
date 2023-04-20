const myWord = "tiredness";
const capitalizedMyWord = myWord.charAt(0).toUpperCase() + myWord.slice(1);
console.log(capitalizedMyWord);



/////////

function reverseMyString (str){
    let newWord = "";
    for(let i = str.length - 1; i>= 0; i--){
        newWord += str[i]
    }
    return newWord;
}


/////////

function capitalizeVowel (str) {
    return str.toLowerCase ().replace (/[aeiou]/g, function(l){
        return l.toUpperCase();
    });
 }
console.log(capitalizeVowel("Fatima"));