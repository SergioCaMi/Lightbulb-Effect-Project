// Buena suerte ! Espero que se te encianda la "bombilla"!

// Estado inicial
const bulb = document.getElementById("bulb");

//Actualización del DOM
// Opción 1
// bulb.addEventListener("click", () =>{
//     if (bulb.classList.contains("bulb-off")){
//         bulb.classList.remove("bulb-off");
//         bulb.classList.add("bulb-on");
//     } else {
//         bulb.classList.remove("bulb-on");
//         bulb.classList.add("bulb-off");
//     }
// });

//Actualización del DOM
// Opción 2
bulb.addEventListener("mouseover", () => {
  bulb.classList.remove("bulb-off");
  bulb.classList.add("bulb-on");
});

bulb.addEventListener("mouseout", () => {
    bulb.classList.remove("bulb-on");
    bulb.classList.add("bulb-off");
  });
