function stories_show() {
    var show = document.getElementById("read_sec");
    var hide = document.getElementById("watch_sec");
    var bg_color = document.getElementById("read_icon");
    var bg_color2 = document.getElementById("watch_icon");

    show.style.display = "block";
    hide.style.display = "none";
    bg_color.classList.add("read_icon");
    bg_color2.classList.remove("watch_icon");
}

function videos_show() {
    var show = document.getElementById("watch_sec");
    var hide = document.getElementById("read_sec");
    var bg_color = document.getElementById("read_icon");
    var bg_color2 = document.getElementById("watch_icon");

    show.style.display = "block";
    hide.style.display = "none";
    bg_color.classList.remove("read_icon");
    bg_color2.classList.add("watch_icon");
}