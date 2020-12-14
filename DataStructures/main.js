class UniqueArray{
    constructor(){
        this.unique = {}
        this.length = 0
    }
    add(item){
        for(let i in this.unique)
        if(this.unique[i] == item)
        return "item already exists"
        this.unique[this.length++] = item
    }
    showAll(){
        return this.unique
    }
    exists(item){
        for(let i in this.unique)
        if(this.unique[i] == item)
        return true
        return false
    }
    get(index){
        if(this.unique[index])
        return this.unique[index]
        return -1
    }
}
const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"