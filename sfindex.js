function openNav() {
  document.getElementById("mySidebar").style.width = "225px";
  document.getElementById("main").style.marginLeft = "225px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

let dropDowns = document.getElementsByClassName("list-header");
let i;

for (i = 0; i < dropDowns.length; i++) {
  dropDowns[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
