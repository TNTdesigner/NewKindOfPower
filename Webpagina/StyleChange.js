document.getElementById("style1").onclick = StyleChange1();
document.getElementById("style2").onclick = StyleChange2();

function StyleChange1() {
    document.getElementById("stylesheet")[0].setAttribute("href", "style2.css");

}
function StyleChange2() {
    document.getElementById("stylesheet")[0].setAttribute("href", "style.css");
}
