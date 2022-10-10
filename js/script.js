// const nomeUtente = "Beppe"
// const cognomeUtente ="Junior"

// document.getElementById('password').innerHTML += nomeUtente + cognomeUtente;

// document.getElementById('password').innerHTML +=`
//   <strong> ${nomeUtente} </strong> ${cognomeUtente}
// `;

const nomeUtente = prompt('Come ti chiami?');

const cognomeUtente = prompt('Il cognome oooohhhh!!');

const colorePrefe = prompt('Scegli un colore');

document.getElementById('password').innerHTML +=`
  ${nomeUtente} ${cognomeUtente} ${colorePrefe} 22
`;