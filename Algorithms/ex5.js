const reverse = function(str){
    
    let reversed = [...str].reduce((prev,next)=>next+prev)
    return reversed
  }
const isPalindrom = function ( word ) {
  let newWord = word.toLowerCase().split(' ').join('')
  if ( newWord == reverse(newWord) ) {
    return true
  }
  else {
    return false
  }
}
console.log(isPalindrom('tot'))
console.log(isPalindrom('kook'))
console.log(isPalindrom('kakamaika'))

  
