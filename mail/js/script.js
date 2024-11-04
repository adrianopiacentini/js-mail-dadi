const userLogin = prompt('Inserisci la tua e-mail')
const credentials = ['email@protonmail.com','email@gmail.com','email@smth.me']

let login;

for(let i = 0; i < credentials.length - 1; i++) {
    currEmail = credentials[i]
    if (currEmail === userLogin) {
        console.log('Il login è stato effettuato correttamente!')
    } else {
        console.log('La mail inserita è errata, controlla e riprova!')
    }
}

// console.log('Il login è stato effettuato correttamente!')
// console.log('La mail inserita è errata, controlla e riprova!')