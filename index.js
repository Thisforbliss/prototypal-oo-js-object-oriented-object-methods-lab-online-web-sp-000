class BoardMember {
  constructor(name, homeState, training){
    this.name = name
    this.homeState = homeState
    this.training = training
    this.veto = function(){
     return "No, I must disagree"
    }
    this.approve = function(){
      return "You can do that!"
    }
    this.doCharity = function(){
      return " You will see great things from Scruber."
    }
    this.releasePressStatement = function(){
      
    }
  }

}