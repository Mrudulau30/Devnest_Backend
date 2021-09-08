class Test{
  print(){
      console.log("I am inside class");
  }
}
class Test1{
    print(){
        console.log("I am inside class no 2");
    }
}
module.exports=Test;

// > var Test=require('./practice_test.js');
// undefined
// > var obj=new Test();
// undefined
// > console.log(obj.print());
// I am inside class
// undefined
// undefined
//This is output
