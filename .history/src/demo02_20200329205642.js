const COLOR_RED = "red";
const COLOR_YELLOW = "yellow";
const COLOR_BLUE = "blue";
const MY_BLUE = "blue";
 
function ColorException(message) {
   this.message = message;
   this.name = "ColorException";
}
 
function getConstantName(color) {
    switch (color) {
        case COLOR_RED :
            return "COLOR_RED";
        case COLOR_YELLOW :
            return "COLOR_YELLOW ";
        case COLOR_BLUE:
            return "COLOR_BLUE";
        case MY_BLUE:
            return "MY_BLUE";         
        default:
            throw new ColorException("Can't find this color");
    }
}
 
try {
   
   var color = "blue"; // green 引发异常
   var colorName = getConstantName(color);
} catch (e) {
   var colorName = "unknown";
   console.log(e.message, e.name); // 传递异常对象到错误处理
}