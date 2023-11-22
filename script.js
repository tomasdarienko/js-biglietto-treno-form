







// if (eta < 19) {
//   prezzo = prezzo - prezzo * 20 / 100

//   console.log(n = prezzo.toFixed(2))
// }
// else if (eta > 64) {

//      prezzo = prezzo - prezzo * 40 / 100

//      console.log(n = prezzo.toFixed(2))

// }
// else{
//      prezzo
//      console.log(n = prezzo.toFixed(2))
// }

const button = document.querySelector('.btn')

button.addEventListener('click', function () {
 

     let km = document.getElementById('km').value
     console.log(km)
     let eta = document.getElementById('eta').value
     console.log(eta)
     let nome = document.getElementById('nome').value
     console.log(nome)
     let cognome = document.getElementById('cognome').value
     console.log(cognome)

     
    let prezzo = km * 0.21

     if (eta == 'minore') {
          prezzo = prezzo - prezzo * 20 / 100
          console.log(prezzo)
     }
     else if (eta == 'over') {
          prezzo = prezzo - prezzo * 40 / 100
          console.log(prezzo)
     }
     else {
          prezzo
          console.log(prezzo)
     }

     document.getElementById('passeggero').innerHTML = `${nome} ${cognome}`
     document.getElementById('distanza').innerHTML = `${km}`
     document.getElementById('costo').innerHTML = `${prezzo} `
     
})