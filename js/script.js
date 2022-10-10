const nomeUtente = "Beppe"
const cognomeUtente ="Junior"

document.getElementById('password').innerHTML += nomeUtente + cognomeUtente;


document.getElementById('password').innerHTML +=`
  <strong> ${nomeUtente} </strong> ${cognomeUtente}
`;