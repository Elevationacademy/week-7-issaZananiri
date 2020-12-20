const decrypt = function ( word ) {
  let alphabet = ['a','b','c','d','e','f','g','h','i'
  ,'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let wordLettersArray = word.split('')
  let newWord = ''
  wordLettersArray.map( l => {
    let newLetter = alphabet[alphabet.indexOf(l)-1];
    newWord += newLetter;
  });
  console.log(newWord)
}

decrypt('epps')