// DOM Selection
// document.getElementById()
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Sandhika Galih';

const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++){
  p[i].style.backgroundColor = 'lightblue'
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini diubah di javascript';

