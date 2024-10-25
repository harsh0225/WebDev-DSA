function toggle(elementName)
{
    let element = document.querySelector(elementName);
    let button = document.querySelector("button");
    if(element.style.display === "none")
    {
        element.style.display="block";
        button.innerText = "click to hide";
    }
    else
    {
        element.style.display = "none";
        button.innerText = "click to show";
    }
}


// <button onclick="toggle('.mydiv')">click to show</button>
// <div class="mydiv" style="display: none;">harshvardhan Bharitkar</div>
// <script src="toggleDiv.js"></script>