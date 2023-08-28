const btnac = document.getElementById("ac");
const para1 = document.getElementById("(");
const para2 = document.getElementById(")");
const btndel = document.getElementById("del");
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn0 = document.getElementById("0");
const add = document.getElementById("+");
const sub = document.getElementById("-");
const div = document.getElementById("/");
const mul = document.getElementById("*");
const equal = document.getElementById("=");
let input = document.getElementById("input");
let lable = document.getElementById("lable");
function butn1(){
    var input = document.getElementById("input");
    input.value+="1";
}
function butn2(){
    var input = document.getElementById("input");
    input.value+="2";
}
function butn3(){
    var input = document.getElementById("input");
    input.value+="3";
}
function butn4(){
    var input = document.getElementById("input");
    input.value+="4";
}
function butn5(){
    var input = document.getElementById("input");
    input.value+="5";
}
function butn6(){
    var input = document.getElementById("input");
    input.value+="6";
}
function butn7(){
    var input = document.getElementById("input");
    input.value+="7";
}
function butn7(){
    var input = document.getElementById("input");
    input.value+="7";
}
function butn8(){
    var input = document.getElementById("input");
    input.value+="8";
}
function butn9(){
    var input = document.getElementById("input");
    input.value+="9";
}
function butn0(){
    var input = document.getElementById("input");
    input.value+="0";
}
function ac(){
    var input = document.getElementById("input");
    input.value="";
}
function del(){
    var input = document.getElementById("input");
    input.value=input.value.substr(0,input.value.length-1);
}
function para1(){
    var input = document.getElementById("input");
    input.value+="(";
}
function para2(){
    var input = document.getElementById("input");
    input.value+=")";
}
function add(){
    var input = document.getElementById("input");
    input.value+="+";
}
function sub(){
    var input = document.getElementById("input");
    input.value+="-";
}
function div(){
    var input = document.getElementById("input");
    input.value+="/";
}
function mul(){
    var input = document.getElementById("input");
    input.value+="*";
}
function dot(){
    var input = document.getElementById("input");
    input.value+=".";
}