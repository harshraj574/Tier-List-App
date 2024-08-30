const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.row');

draggables.forEach((draggable)=>{
    draggable.addEventListener('dragstart',(e)=>{
        draggable.classList.add('dragging');
    })

    draggable.addEventListener('dragend',()=>{
        draggable.classList.remove('dragging');
    })
})

containers.forEach((container)=>{
    container.addEventListener('dragover',(e)=>{
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        container.appendChild(draggable);
    })
})