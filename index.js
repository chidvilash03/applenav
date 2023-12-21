const dropdownButtons = document.querySelectorAll(".dropdown .dropbtn");
const dropdownContents = document.querySelectorAll(".dropdown-content");

let activeDropdown = null;

dropdownButtons.forEach((button, index) => {
    let isHovered = false;
    const dropdownContent = dropdownContents[index];

    button.addEventListener("mouseenter", () => {
        if (activeDropdown !== null) {
            activeDropdown.style.maxHeight = "0";
            activeDropdown.style.opacity = 0;
        }

        dropdownContent.style.display = "flex";
        dropdownContent.style.opacity = 1;
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
        isHovered = true;
        activeDropdown = dropdownContent;
    });

    dropdownContent.addEventListener("mouseenter", () => {
        isHovered = true;
    });

    button.addEventListener("mouseleave", () => {
        if (!isHovered) {
            dropdownContent.style.maxHeight = "0";
            dropdownContent.style.opacity = 0;
        }
    });

    dropdownContent.addEventListener("mouseleave", () => {
        isHovered = false;
        dropdownContent.style.maxHeight = "0";
        dropdownContent.style.opacity = 0;
    });
});