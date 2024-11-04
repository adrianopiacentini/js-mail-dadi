const player = Math.floor(Math.random() * 6) + 1;
console.log(`Hai tirato il dado! Il tuo numero è ${player}`)

const computer = Math.floor(Math.random() * 6) + 1;
console.log(`Il tuo avversario ha tirato il dado! Il suo numero è ${computer}`)

if(player > computer) {
    console.log('Hai vinto!')
} else if (player < computer) {
    console.log('Hai perso!')
} else if (player === computer) {
    console.log('Pareggio!')
}