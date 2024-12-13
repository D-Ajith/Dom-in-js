let div=document.getElementById("container")
console.log(div)

div.style.display="flex"
div.style.flexwrap="wrap"

let p1=document.getElementById("p1")
console.log(p1);

p1.style.color="white"
p1.style.backgroundColor="purple"
p1.style.width="250px"
p1.style.height="250px"
p1.style.fontSize="30px"
p1.style.textAlign="center"
p1.style.padding="30px"
p1.style.margin="50px"
p1.style.cursor="pointer"

function p1text(){
    p1.innerText=("This is a onclick event")
    p1.style.borderRadius="20px"
    p1.style.backgroundColor="lightblue"
    p1.style.boxShadow="20px 20px yellow"
}

let p2=document.getElementById("p2")
console.log(p2);

p2.style.color="Black"
p2.style.backgroundColor="Yellow"
p2.style.width="250px"
p2.style.height="250px"
p2.style.fontSize="30px"
p2.style.textAlign="center"
p2.style.padding="30px"
p2.style.margin="50px"
p2.style.cursor="pointer"

function p2text(){
    p2.innerText=("This is a ondblclick event")
    p2.style.borderRadius="20px"
    p2.style.backgroundColor="lightcoral"
    p2.style.boxShadow="20px 20px lightblue"
}


let p3=document.getElementById("p3")
console.log(p3)
p3.style.color="White"
p3.style.backgroundColor="Black"
p3.style.width="250px"
p3.style.height="250px"
p3.style.fontSize="30px"
p3.style.textAlign="center"
p3.style.padding="30px"
p3.style.margin="50px"
p3.style.cursor="pointer"

function p3text(){
    p3.innerText="This a hover event"
    p3.style.backgroundColor="gray"
    p3.style.borderRadius="20px"
    p3.style.boxShadow="20px 20px orange"
    p3.style.color="black"
    p3.style.borderBlockColor="black"
}