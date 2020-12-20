const rawDist = {
  A: 60,
  B: 10,
  C: 10,
  D: 20
}
const getLetter = function( lettersObject ) {
  let randomNumber = Math.random() 
  if ( randomNumber <= 0.6 ) {
    console.log('A')
    return lettersObject.A
  }
  else if ( randomNumber > 0.6 && randomNumber <= 0.7 ) {
    console.log('B')
    return lettersObject.B
  }
  else if ( randomNumber > 0.7 && randomNumber <= 0.8 ) {
    console.log('C')
    return lettersObject.C
  }
  else {
    console.log('D')
    return lettersObject.D
  }
}
getLetter(rawDist)