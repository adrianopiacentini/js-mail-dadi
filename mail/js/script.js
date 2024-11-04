const userLogin = prompt('Inserisci la tua e-mail')
const credentials = ['email@protonmail.com','email@gmail.com','email@smth.me'];

let isFound = false;

for(let i = 0; i <= credentials.length - 1; i++) {
    currEmail = credentials[i]
    if (currEmail === userLogin) {
        isFound = true;
    }
}
if (isFound === true) {
    console.log(`L'email ${userLogin} è stata trovata, Login effettuato!`)
} else {
    console.error(`Non puoi accedere!`);
}
