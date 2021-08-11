let ulTasks=$('#ulTasks')
let btnAdd=$('#btnAdd')
let btnReset=$('#btnReset')
let inpNewTask=$('#inpNewTask')
let btnCleanup=$('#btnCleanup')
let btnSort=$('#btnSort')

function addItem(){
    if(inpNewTask.val()==="")
    {
        alert('Please enter a task')
        return
    }
    let listItem = $('<li>',{
        'class':'list-group-item',
        text:inpNewTask.val()
    })

    listItem.click(() =>{
        listItem.toggleClass('done')
    })

    ulTasks.append(listItem)
    inpNewTask.val('')
    toggleInputButtons()
}

inpNewTask.keypress((e)=>{
    if(e.which ==13)
    addItem()
    // e.which gives values of button which is 
    // pressed example enter is 13 so when we
    //  click 13 we call add item
})

// adding task through add btn
btnAdd.click(addItem) 

// sorting task 
btnSort.click(()=>{
    $('.done').appendTo('#ulTasks')
})
// Clearing done task
btnCleanup.click(()=>
{
    let a=$('.done')
    a.remove()
    toggleInputButtons()

})


// reset btn
btnReset.click(() =>{
    inpNewTask.val('')
    toggleInputButtons()
})

inpNewTask.on('input',toggleInputButtons)


function toggleInputButtons()
{
    btnAdd.prop('disabled',inpNewTask.val() == '')
    btnReset.prop('disabled',inpNewTask.val() == '')
    btnSort.prop('disabled',ulTasks.children().length<1)
    btnCleanup.prop('disabled',ulTasks.children().length<1)
}



