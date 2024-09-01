const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');
const reloadBtn = document.getElementById('btn');
const imgRows = document.querySelectorAll('.images-row');
const uploadImg = document.getElementById('addImgBtn');

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

imgRows.forEach((imgRow)=>{
    imgRow.addEventListener('dragover',(e)=>{
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        imgRow.appendChild(draggable);
    })

})

reloadBtn.addEventListener('click',()=>{
    location.reload();
})


uploadImg.addEventListener('click',()=>{
    
    imgRows.appendChild(data);
})