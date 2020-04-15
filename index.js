class BoardMember {
  constructor(name, homeState, training){
    this.name = name
    this.homeState = homeState
    this.training = training
    this.veto = function(){
     console.log("return No, I must disagree") 
    }
  }

}