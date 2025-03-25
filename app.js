// Buena suerte ! Espero que se te encianda la "bombilla"!
const bulb = document.getElementById("bulb");


// Opción 1
// bulb.addEventListener("click", event =>{
//     if (bulb.classList.contains("bulb-off")){
//         bulb.classList.remove("bulb-off");
//         bulb.classList.add("bulb-on");
//     } else {
//         bulb.classList.remove("bulb-on");
//         bulb.classList.add("bulb-off");
//     }
// });


// Opción 2
bulb.addEventListener("mouseover", (event) => {
  bulb.classList.remove("bulb-off");
  bulb.classList.add("bulb-on");
});

bulb.addEventListener("mouseout", (event) => {
    bulb.classList.remove("bulb-on");
    bulb.classList.add("bulb-off");
  });
