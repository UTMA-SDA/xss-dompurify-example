import Dompurify from 'https://cdn.jsdelivr.net/npm/dompurify@3.0.1/+esm';

const inputComentario = document.querySelector('#inputComentario');

const buttonComentar = document.querySelector('#comentar');

const cajita = document.querySelector('#comentarios');
function agregarComentario() {
  if (inputComentario.value === '') return;
  // const comentario = inputComentario.value;
  const comentario = Dompurify.sanitize(inputComentario.value);
  cajita.innerHTML += `
  <article class=" p-2 flex gap-4">
  <div>
  <img class="max-w-[16rem] rounded-full" src="https://picsum.photos/50" alt="imagen de perfil" class="rounded-full">
  </div>
  <div>
  <h3 class="text-xl font-bold">Anonimo</h3>
  <p>${comentario}</p>
  </div>
  </article>
  <hr class="mx-2"/>
  `;
  inputComentario.value = '';
}

buttonComentar.addEventListener('click', agregarComentario);
