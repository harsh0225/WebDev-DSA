function addClassOnMouseOver(elementId,className)
{
    let element = document.querySelector(elementId);

    element.addEventListener("mouseover",()=>{
        element.classList.add(className);
    })
}

addClassOnMouseOver("p","active");