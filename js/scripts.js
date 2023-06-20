

function determineTriangle(e) {
    e.preventDefault();
   
    let side1 = parseInt(document.getElementById('side1').value);
    let side2 = parseInt(document.getElementById('side2').value);
    let side3 = parseInt(document.getElementById('side3').value);
    let triangleText = document.getElementById('type');
    let img = document.getElementById('picture');
   
    if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
        triangleText.innerText = "Not a triangle";
    } else if (side1 === side2 && side3 === side2) {
        img.src = "img/equilateral.jpg";
        img.alt = "Equilateral Triangle";
        triangleText.innerText = "Equilateral";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        img.src = "img/iso.jpg";
        img.alt = "Isosceles Triangle";
        triangleText.innerText = "Isosceles";
    } else {
        img.src = "img/scalene.jpeg";
        img.alt = "Scalene Triangle";
        triangleText.innerText = "Scalene";       
    }
    document.getElementById('output').classList.remove('hidden');
}

function clearForm() {
    document.getElementById('output').classList.add('hidden');
    document.getElementById('side1').value = "";
    document.getElementById('side2').value = "";
    document.getElementById('side3').value = "";
}



function handleSubmit() {
    clearForm();
    const form = document.querySelector('form');
    const button = document.querySelector('button');
    form.addEventListener('submit', determineTriangle); 
    button.addEventListener('click', clearForm);
  
}

window.addEventListener('load', handleSubmit);

// function determineTriangle() {
//     let side1 = parseInt(document.getElementById("side1").value);
//     let side2 = parseInt(document.getElementById("side2").value);
//     let side3 = parseInt(document.getElementById("side3").value);
//     let img = document.getElementById("img");
//     let triangleType = document.getElementById("triangleType");

//     if (side1 === side2 && side2 === side3) {
//         triangleType.innerHTML = "Equilateral Triangle";
//         img.src = "img/equilateral.jpg";
//     } else if (side1 === side2 || side2 === side3 || side1 === side3) {
//         triangleType.innerHTML = "Isosceles Triangle";
//         img.src = "img/iso.jpg";
//     } else if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
//         triangleType.innerHTML = "Scalene Triangle";
//         img.src = "img/scalene.jpg";
//     } else if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
//         triangleType.innerHTML = "Not a Triangle";
//     }
//     displayOutput();
    
// }

// function displayOutput() {
//     let output = document.getElementById("output");
//     output.classList.remove("hidden");
// }

// function clearForm() {
//     document.getElementById("side1").value = "";
//     document.getElementById("side2").value = "";
//     document.getElementById("side3").value = "";
//     document.getElementById("output").classList.add("hidden");
// }

// function handleSubmit(e) {
//     e.preventDefault();
//     let form = document.querySelector("form");
//     let button = document.getElementById("clear");
//     form.addEventListener("submit", determineTriangle);
//     button.addEventListener("click", clearForm);
// }

// window.addEventListener("load", handleSubmit);
//