const watch = document.getElementById("watch");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

function toggle() {
  modal.classList.toggle("active");
}

watch.onclick = toggle;
close.onclick = toggle;
