function textChange()
{
    let button = document.querySelector("button");
    if(button.textContent == "Clicked Me")
    {
        button.textContent = "Clicked";
    }
    else
    {
        button.textContent = "Clicked Me";
    }
}
