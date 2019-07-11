class StackDataStructure {
  constructor(){
    this.stackControl= []
    this.MAX_SIZE = 8
  }

  pop(){
    if(!this.isEmpty()){
      return this.stackControl.pop()
    }
    else return 'Stack Underflow'
  }

  push(num){
    
    if(this.canPush()){
      //console.log(num)
      this.stackControl.push(num)
      return this.stackControl
    }
    else return 'Stack Overflow'}

  

  isEmpty(){
    if(this.stackControl.length === 0) {return true}
    else {return false}
  }

  canPush(){
    
    if (this.stackControl.length < this.MAX_SIZE) {return true}
    else {return false}
  }

}
