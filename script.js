function btnclick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+=val
}
function clrDisplay(){
    document.getElementById("screen").value=""
}
function sum_result(){
    var text=document.getElementById("screen").value
    var sum=eval(text)
    document.getElementById("screen").value=sum
}