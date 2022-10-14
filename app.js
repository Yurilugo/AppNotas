const form = document.querySelector('#tareas');
const input = document.querySelector('#input-tareas');
const btnAñadir = document.querySelector('#add');
const list = document.querySelector('#lista');
const delateBtn = document.querySelectorAll ('.eliminar-icon');
const completedBtn = document.querySelectorAll ('completada-icon');



// Agregar tareas

form.addEventListener('submit', e =>{
    const text = input.value;

    e.preventDefault();
    const listItem = document.createElement('li');
    list.append(listItem)
    listItem.innerHTML = `
        <div class="elemento-lista">
            <svg xmlns="http://www.w3.org/2000/svg" class="boton eliminar-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            <li>${text}</li>
            <svg xmlns="http://www.w3.org/2000/svg" class="boton completada-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
        </div>
    `;


    lista.append(listItem)
    input.value = "";
    btnAñadir.setAttribute('disabled', true);

})


list.addEventListener('click' , e => {
    if (e.target.classList.contains('eliminar-icon')) {
        e.target.parentElement.remove();
    }
})

// list.addEventListener('click' , e => {
//     if (e.target.classList.contains('completada-icon')) {
//         e.target.parentElement.();
//     }
// })


// function agregartarea(tarea) {
//     const elemento =
//         `
//         <svg xmlns="http://www.w3.org/2000/svg" id="eliminar-icon" class="boton" viewBox="0 0 20 20" fill="currentColor">
//         <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
//         </svg>
//         <li> ${tarea} </li>
//         <svg xmlns="http://www.w3.org/2000/svg" id="completada-icon" class="boton" viewBox="0 0 20 20" fill="currentColor">
//         <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//         </svg>
//         `
//     form.insertAdjacentHTML('beforeend', elemento);

// };

// btnAñadir.addEventListener('click',()=> {
//     const tarea = input.value
//     if (tarea) {
//         agregartarea(tarea)
//     }
//     input.value='';
// })


// eliminarbtns.forEach(eliminarbtns => {
//     eliminarbtns.addEventListener('click', e => {
//         if (e.target.parentElement.classList.contains('delete-list')) {
//             e.target.parentElement.parentElement.remove();
//             localStorage.setItem('lista', lista.innerHTML);

//         }
//         e.target.parentElement.remove();
//         localStorage.setItem('lista', lista.innerHTML);
//     });
// });