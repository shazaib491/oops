// console.log(document)
// using getElementById
let element=document.getElementById("demo");
let elementByClass=document.getElementsByClassName("demobyClass");
console.log()

element.innerHTML="<h1>RahulPAtel</h1>"

// dynamicALLY css change
element.style.background="red";
element.style.color="white";
element.style.border="1px solid black";

console.log(elementByClass[2].innerText)

elementByClass[0].style.background="black";
elementByClass[0].style.color="white";
elementByClass[0].style.textAlign="center";

elementByClass[0].innerHTML=`
    <p>
    asbkjsbdsbd
    adminasd
    shazaibda
    d
    shazaibdasa
    dsa
    da
    a
    sa
    </p>
`
