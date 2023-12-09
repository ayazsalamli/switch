let login = prompt('login please');
let password = prompt('Your pasword');

let netice;


switch (login, password) {
    case (login = 'admin') && (password = '123456'):
        netice = 'HI admin '
        break;
    case (login = 'ayaz') && (password = '12345'):
        netice = 'Hi ayazik'
        break;
    case (login = 'murad') && (password = 'murik1234'):
        netice = 'Hi murik'
        break;
    case  (login = 'mika') && (password = 'mika123'):
        netice = 'hi mikail'
        break;
    default:
        netice = 'password or login are wrong'
    break;
}

document.getElementById('kurs').innerHTML = netice;