const reverse = function(str){
    let reversed = [...str].reduce((prev,next)=>next+prev)
    console.log(reversed)
    return reversed
  }
reverse("dog") //should return "god"
reverse("race car") //should return "rac ecar"
  
