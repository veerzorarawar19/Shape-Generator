const button=document.getElementById("button");


var numberInShape=1;


var oldValue=0;

button.onclick=()=>{
    const circle = document.getElementById("circle");

    const square = document.getElementById("square");

    const rectangle = document.getElementById("rectangle");

    let n = document.getElementById("number").value;

    const $box = document.getElementById("box");
    let j ;
    n=Number(oldValue)+Number(n);
for(let j=numberInShape;j<=n; j++){
 var shape=document.createElement("div");
shape.innerHTML+=numberInShape;
    
if(square.checked){
    shape.classList.add("square");
}else if (circle.checked){
    shape.classList.add("circle");
} else if (rectangle.checked){
    shape.classList.add("rectangle");
}else {
    document.write("invalid input");
}
$box.appendChild(shape);
numberInShape++;
oldValue=document.getElementById("box").lastElementChild.innerHTML
;
}
}

