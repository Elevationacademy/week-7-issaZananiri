const findDuplicates = function (arr) {
    let names = {}
  for(let person of people){
    if(names[person.name]){
        console.log('there is duplicate')
        break;
    }else{
        names[person.name] = 1 
    }
  }
};

let people= [
  { id: 1, name: "rew" },
  { id: 2, name: "rty" },
  { id: 3, name: "rew" },
  { id: 4, name: "fs" },
  { id: 5, name: "hgf" },
  { id: 6, name: "rty" },
  { id: 7, name: "kjh" },
];


findDuplicates(people)