const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];

const jumble = function (arr1, arr2) {
    let jumbledArr = arr1.concat(arr2)
    for ( let i = jumbledArr.length-1 ; i > 0 ; i-- ) {
      let newIndex = Math.floor(Math.random() * (i+1) )
      let temp = jumbledArr[i]
      jumbledArr[i] = jumbledArr[newIndex]
      jumbledArr[newIndex] = temp
    }
    console.log(jumbledArr)
    return jumbledArr
}

jumble(colors, foods) 
