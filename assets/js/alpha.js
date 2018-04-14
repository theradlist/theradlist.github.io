function getHeight(el) { var el_style = window.getComputedStyle(el), el_display = el_style.display, el_max_height = el_style.maxHeight.replace("px", "").replace("%", ""), wanted_height = 0; if (el_display !== "none" && el_max_height !== "0") return el.offsetHeight; el.style.display = "block"; wanted_height = el.offsetHeight; el.style.display = el_display; return wanted_height }
function toggleSlide(el) {
    var el_max_height = 0; if (el.getAttribute("data-max-height")) if (el.style.maxHeight.replace("px", "").replace("%", "") === "0") el.style.maxHeight = el.getAttribute("data-max-height"); else el.style.maxHeight = "0"; else {
        el_max_height = getHeight(el) + "px"; el.style["transition"] = "max-height 0.5s ease-in-out"; el.style.overflowY = "hidden"; el.style.maxHeight = "0"; el.setAttribute("data-max-height", el_max_height); el.style.display = "block"; setTimeout(function () { el.style.maxHeight = el_max_height }, 10);
        setTimeout(function () { document.querySelector(".hide").style["transition"] = "all 0s 0s ease"; document.querySelector(".hide").style["max-height"] = "none" }, 700)
    }
} if (window.addEventListener) document.querySelector(".read-more").addEventListener("click", function (e) { this.style.display = "none"; document.querySelector(".hide-inline").style.display = "inline"; toggleSlide(document.querySelector(".hide")); e.preventDefault(); return false }, false);
if (window.addEventListener)
    document.querySelector(".read-more").addEventListener("click", function (e) {
        this.style.display = "none";
        // document.querySelector(".hide-inline").style.display="inline";
        toggleSlide(document.querySelector(".hide"));
        e.preventDefault();
        return false
    }, false);
