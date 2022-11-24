function createGame(player1, hour, player2) {
  return `   
    <li>
      <img src="./assets/logo-${player1}.svg" alt="Logo do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/logo-${player2}.svg" alt="Logo do ${player2}" />
    </li>
`
}

let delay = -0.10;
function createCard(date, day, games) {
  delay = delay + 0.5;

  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}

document.querySelector('#cards').innerHTML =
    createCard('20/11', 'domingo', createGame('qtar', '13:00', 'ecuador'))
    +
    createCard('24/11', 'quinta', createGame('brazil', '16:00', 'serbia')) 
    +

    createCard('28/11', 'segunda', createGame('cameroon', '07:00', 'serbia') + createGame('brazil', '13:00', 'switzerland'))
      +

    createCard('02/12', 'sexta', createGame('brazil', '16:00', 'cameroon'))
