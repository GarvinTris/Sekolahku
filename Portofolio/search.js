const search = document.getElementById("inps");
const gridBoxes = document.querySelectorAll(".grid-box_2");
const errors = document.querySelector(".error")

search.addEventListener("input", () => {
    const searchValue = search.value.trim().toLowerCase();
    let found = false;

    gridBoxes.forEach(gridBox => {
        const h1Text = gridBox.querySelector("h1").textContent.toLowerCase();
        const shouldShow = h1Text.includes(searchValue);

        if (shouldShow) {
            gridBox.style.display = "block"; 
        } else {
            gridBox.style.display = "none"; 
        }

    });
    if(!found && searchValue !== ''){
        const h2 = document.createElement("h2");
        h2.style.color = "white";
        h2.textContent = "sorry we couldn't found it";
        errors.innerHTML= "";
        errors.appendChild(h2);
    } else {
        errors.innerHTML= "";
    }
});
