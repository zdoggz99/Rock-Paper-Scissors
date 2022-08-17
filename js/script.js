function start(){

}


function handleHover(hovered,selection){
    const userSelection=document.querySelector('div.choiceBox.'+selection)
    if(hovered) userSelection.classList.add('hovered')
    else userSelection.classList.remove('hovered')

}