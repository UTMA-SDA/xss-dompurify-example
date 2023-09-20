import Dompurify from 'https://cdn.jsdelivr.net/npm/dompurify@3.0.1/+esm';

const inputComentario = document.querySelector('#inputComentario');

const buttonComentar = document.querySelector('#comentar');

const cajita = document.querySelector('#comentarios');
function agregarComentario() {
  // const comentario = inputComentario.value;
  const comentario = Dompurify.sanitize(inputComentario.value);
  cajita.innerHTML += comentario;
}

buttonComentar.addEventListener('click', agregarComentario);
