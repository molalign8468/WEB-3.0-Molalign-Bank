import Float "mo:base/Float";
import Time "mo:base/Time";
import Debug "mo:base/Debug";
actor molalignBank{
  stable var initialBalnce : Float = 300;
  stable var initialTime = Time.now();

  public func deposite(amount : Float){
      initialBalnce += amount;
  };
  public func withDraw(amount : Float){

    if(initialBalnce-amount >= 0){
       initialBalnce -= amount;
    }else{
        Debug.print("Not enoug money")
    }
      
  };
  
  public func compondInterst(){
  var currentTime = Time.now();
  var timeDiff = currentTime - initialTime;
  var timeDiffInSecond = timeDiff /1000000000 ;

  var interestRate = 0.01;
  var interest = initialBalnce * ((1+interestRate) ** Float.fromInt(timeDiffInSecond));
  initialBalnce :=interest

  };
  public query func currentBalnce() : async Float{
      return initialBalnce;
  };
}