// function changePosition() {
//     const mygtukas = document.getElementById('mygtukas');
//     mygtukas.classList.toggle('move');
// }


// Pakoreguotas variantas
let sukimoLaipsniai = 0
function changePosition() {
    const mygtukas = document.getElementById('mygtukas')
    
    sukimoLaipsniai += 90

    mygtukas.style.transform = `rotate(${sukimoLaipsniai}deg)`
}
